import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';

// This is source monitoring, not autonomous design judgment. No external model or secret is needed.
const root = new URL('../', import.meta.url);
const sources = [
  ['Sparkle Design', 'https://sparkle-design.goodpatch.com/'],
  ['Nothing', 'https://us.nothing.tech/'],
  ['UI Skills', 'https://www.ui-skills.com/'],
  ['SmartHR writing', 'https://smarthr.design/basics/text/'],
  ['Carbon content', 'https://carbondesignsystem.com/guidelines/content/overview/'],
  ['WCAG 2.2', 'https://www.w3.org/TR/WCAG22/'],
  ['ARIA APG', 'https://www.w3.org/WAI/ARIA/apg/patterns/'],
  ['Design Tokens published format', 'https://www.designtokens.org/TR/2025.10/format/'],
  ['Apple Human Interface Guidelines', 'https://developer.apple.com/design/human-interface-guidelines/'],
  ['Material Design', 'https://m3.material.io/'],
  ['shadcn/ui', 'https://ui.shadcn.com/docs'],
  ['assistant-ui', 'https://www.assistant-ui.com/docs'],
  ['Three.js', 'https://threejs.org/docs/'],
  ['Lottie web', 'https://github.com/airbnb/lottie-web'],
  ['awesome-design-md', 'https://github.com/voltagent/awesome-design-md'],
  ['awesome-design-md-jp', 'https://github.com/kzhrknt/awesome-design-md-jp'],
  ['taste-skill', 'https://github.com/Leonxlnx/taste-skill'],
  ['Duolingo design conversations', 'https://blog.duolingo.com/duologues-design-conversations/'],
];
const statePath = new URL('docs/research-state.json', root);
let previous = {};
try { previous = JSON.parse(await readFile(statePath, 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const state = { ...previous };
const results = [];
const checkedAt = new Date().toISOString();
for (const [name, url] of sources) {
  try {
    // GET is necessary to measure body changes; avoid HEAD-only false positives.
    const response = await fetch(url, { signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'AwesomeDS-source-review/1.0', Accept: 'text/html,text/plain;q=0.9' } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const reader = response.body.getReader();
    const chunks = [];
    let bytes = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.length;
        if (bytes > 2_000_000) throw new Error('Response exceeds 2 MB; manual review required');
        chunks.push(value);
      }
    } finally { await reader.cancel(); }
    const body = Buffer.concat(chunks).toString('utf8');
    const title = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').slice(0, 180) ?? name;
    const sha256 = createHash('sha256').update(body).digest('hex');
    const prior = previous[url];
    const status = !prior ? '初回取得' : prior.sha256 === sha256 ? '差分なし' : '内容差分あり';
    state[url] = { name, title, sha256, bytes, checkedAt, finalUrl: response.url };
    results.push({ name, url, status, bytes, sha256, previous: prior?.sha256, title });
  } catch (error) {
    results.push({ name, url, status: '取得失敗', error: String(error.message).slice(0, 240) });
    // Keep the last successful baseline; failure must not erase evidence.
  }
  console.log(`${name}: ${results.at(-1).status}`);
}
const escaped = value => String(value ?? '—').replace(/\|/g, '\\|').replace(/[\r\n]/g, ' ');
const changed = results.filter(result => result.status === '内容差分あり');
const failures = results.filter(result => result.status === '取得失敗');
const report = `# Weekly source review\n\n取得実行: ${checkedAt}\n\n${results.length} ソースを取得試行、既存ベースラインからの変更 ${changed.length} 件、失敗 ${failures.length} 件。初回取得は変更と区別します。\n\nこの処理は実際の HTTP 応答と SHA-256 を記録します。HTML の動的要素でも差分が出るため、内容の改善・仕様変更を断定しません。取得不能をリンク切れとは断定しません。\n\n| Source | 結果 | Bytes | Previous SHA | Current SHA | 補足 |\n| --- | --- | --- | --- | --- | --- |\n${results.map(r => `| [${r.name}](${r.url}) | ${r.status} | ${r.bytes ?? '—'} | ${r.previous?.slice(0,12) ?? '—'} | ${r.sha256?.slice(0,12) ?? '—'} | ${escaped(r.error ?? r.title)} |`).join('\n')}\n\n## レビュー手順\n\n1. 内容差分ありのソースを開き、仕様・推奨・単なる HTML 更新のどれかを判定する。\n2. Knowledge の関連ノートと比べ、採用 / 保留 / 不採用および理由を書く。初回取得は読んでから知識化する。\n3. 採用する場合は Reference と Knowledge の出典・確認日を更新し、AwesomeDS の判断記録とトークンへの影響を検討する。\n4. UI を変更した場合は build、token contrast、キーボード、モバイル、動きを減らす設定を検証する。\n5. 取得失敗は利用可能な公式資料で確認し、未確認範囲を残す。前回成功時のベースラインは保持している。\n\n自動生成でデザインの採用・マージは行いません。この PR の確認者が判断を記録してからマージしてください。\n`;
await mkdir(new URL('docs/', root), { recursive: true });
await writeFile(statePath, JSON.stringify(state, null, 2) + '\n');
await writeFile(new URL('docs/weekly-review.md', root), report);
console.log(`Source review: ${results.length} attempted; ${changed.length} changed; ${failures.length} failed. Report: docs/weekly-review.md`);
if (failures.length === results.length) process.exitCode = 1;
