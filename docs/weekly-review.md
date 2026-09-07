# Weekly source review

取得実行: 2026-09-06T21:08:12.944Z

13 ソースを取得試行、既存ベースラインからの変更 0 件、失敗 1 件。初回取得は変更と区別します。

この処理は実際の HTTP 応答と SHA-256 を記録します。HTML の動的要素でも差分が出るため、内容の改善・仕様変更を断定しません。取得不能をリンク切れとは断定しません。

| Source | 結果 | Bytes | Previous SHA | Current SHA | 補足 |
| --- | --- | --- | --- | --- | --- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | 初回取得 | 512457 | — | 6e3c5fe39725 | Web Content Accessibility Guidelines (WCAG) 2.2 |
| [ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/) | 初回取得 | 49239 | — | e4cdf11b060c |  Patterns \| APG \| WAI \| W3C |
| [Design Tokens published format](https://www.designtokens.org/TR/2025.10/format/) | 取得失敗 | — | — | — | The operation was aborted due to timeout |
| [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) | 初回取得 | 17681 | — | 0efc75b23187 | Human Interface Guidelines \| Apple Developer Documentation |
| [Material Design](https://m3.material.io/) | 初回取得 | 62132 | — | f3a76c3b2a82 | Material Design |
| [shadcn/ui](https://ui.shadcn.com/docs) | 初回取得 | 525613 | — | 5482e690df2f | Introduction - shadcn/ui |
| [assistant-ui](https://www.assistant-ui.com/docs) | 初回取得 | 366282 | — | 50d2d33e7a4c | Documentation · assistant-ui |
| [Three.js](https://threejs.org/docs/) | 初回取得 | 136135 | — | b2afe53adbaa | three.js docs |
| [Lottie web](https://github.com/airbnb/lottie-web) | 初回取得 | 453667 | — | 44568562da8c | GitHub - airbnb/lottie-web: Render After Effects animations natively on Web, Android and iOS, and React Native. http://airbnb.io/lottie/ · GitHub |
| [awesome-design-md](https://github.com/voltagent/awesome-design-md) | 初回取得 | 348355 | — | ac5455837f80 | GitHub - VoltAgent/awesome-design-md: A collection of DESIGN.md files analysis by popular brand design systems. Drop one into your project and let coding agents generate a matching |
| [awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) | 初回取得 | 1442647 | — | 8b931c97b2c8 | GitHub - kzhrknt/awesome-design-md-jp: 日本語UIをAIエージェントに正しくつくらせるためのDESIGN.md集。Japanese DESIGN.md collection for AI agents — extending Google Stitch format with CJK typography. · GitH |
| [taste-skill](https://github.com/Leonxlnx/taste-skill) | 初回取得 | 350672 | — | 0a81090ce716 | GitHub - Leonxlnx/taste-skill: Taste-Skill - gives your AI good taste. stops the AI from generating boring, generic slop · GitHub |
| [Duolingo design conversations](https://blog.duolingo.com/duologues-design-conversations/) | 初回取得 | 120088 | — | 755e078b84a2 | Duolingo Blog |

## レビュー手順

1. 内容差分ありのソースを開き、仕様・推奨・単なる HTML 更新のどれかを判定する。
2. Knowledge の関連ノートと比べ、採用 / 保留 / 不採用および理由を書く。初回取得は読んでから知識化する。
3. 採用する場合は Reference と Knowledge の出典・確認日を更新し、AwesomeDS の判断記録とトークンへの影響を検討する。
4. UI を変更した場合は build、token contrast、キーボード、モバイル、動きを減らす設定を検証する。
5. 取得失敗はブラウザで確認する。前回成功時のベースラインは保持している。

自動生成でデザインの採用・マージは行いません。この PR の確認者が判断を記録してからマージしてください。
