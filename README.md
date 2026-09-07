# AwesomeDS

人の使いやすさから考える、デザインシステム・Knowledge・AI開発Skill。


## 使う

```sh
npm ci
npm run dev
```

`http://localhost:5173` で閲覧。`npm run build` でVercel等へ配信できる `dist/` を生成します。ビルド前に正本トークンからCSSを生成し、Skillへ正本を同期、導入用Skillへ正本を同期します。Python 3とNode 22.12以上が必要です。

## 構成

| パス | 内容 |
|---|---|
| `AwesomeDS/` | 標準トークン、原則、状態・ブランド・アクセシビリティ |
| `Knowledge/` | テーマ別の要約、適用判断、トレードオフ、出典 |
| `Reference/README.md` | 単一の出典レジストリと確認状態 |
| `Plugin/` | 4つのSkill、Claude/Cursor/Codex導入、検証 |
| `src/` | 正本を使用するReact/Vite体験サイト |
| `docs/` | 要件対応表、ADR、週次運用、検証記録 |

## Skillの導入

```sh
python3 Plugin/install.py --agent claude --project /path/to/project --dry-run
# 表示された変更内容を確認して --dry-run を外す
```

`--agent cursor` / `--agent codex`にも対応。既存の異なるSkillファイルは上書きしません。詳細は [Plugin/README.md](Plugin/README.md)。

## 検証

```sh
npm run check
npm run build
```

ブラウザではフォント・余白・配色の変更、コントラスト比、スイッチ・フォーム・ダイアログ、Three.js・Lottieの実再生、Knowledge全文の閲覧を確認します。サイトの状態変更はデモ内だけです。

## 更新

[週次運用](docs/maintenance.md)では一次資料を取得してSHA差分とレビュー候補をdraft PRへ記録。DSの採用判断は自動マージしません。GitHub ActionsがPRを作成できるリポジトリ設定が必要です。

## 根拠と範囲

「万人に唯一最適」という実証済みの主張ではなく、用途の広い標準と検証手順です。指定資料のうち取得できなかったものをReferenceで明示。外部OSSの文章・コード・ブランド資産を無断で再配布せず、要約とリンクを収録しています。フォントはシステムにあるものを利用し、外部フォント配信を必須にしません。

新規ソースは非公開プロジェクト用。外部OSSの権利・ライセンスは各プロジェクトに帰属します。

## v1.1 — 構成と体験の更新

[AwesomeDSの領域別ガイド](AwesomeDS/README.md)を追加。Themes、Content、Components、Patterns、Technology、Quality、Governanceから必要な規則を選びます。サイトは用途別の操作デモ、テーマ差分の保存、角丸の比較を提供します。調査ノートと採用ルールは区別し、4 Skillsへ同期します。
