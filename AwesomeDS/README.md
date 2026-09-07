# AwesomeDS — 設計・実装の正本

AwesomeDSは、AI開発で共有するデザインの初期設定と判断手順です。標準は一つ。用途別テーマは標準を参照し、変更した値と理由を持ちます。特定ブランドの外観を混ぜ合わせることはしません。

## 構成と読む順番

| 領域 | 正本 | 決めること |
| --- | --- | --- |
| 基礎 | [foundations](foundations.md) | 色・文字・余白・操作性の標準 |
| テーマ | [Themes](Themes/README.md) | 固定する条件とブランドごとの変更 |
| 文章 | [Content](Content/japanese.md) | 見出し、ラベル、エラー、用語 |
| パターン | [Patterns](Patterns/README.md) | 部品を組み合わせた利用の流れ |
| コンポーネント | [Components](Components/contracts.md) | 状態と操作の契約 |
| 技術 | [Technology](Technology/selection.md) | ライブラリの採用・非採用条件 |
| 品質 | [Quality](Quality/evidence.md) | 観測方法、合否、未検証の扱い |
| 更新 | [Governance](Governance/change-policy.md) | 調査から採用までの手順 |

数値の正本は[tokens.json](tokens.json)。サイトのCSSとPluginに含める参照資料はここから生成します。Knowledgeは調査・推論、Referenceは出典台帳。調査ノートの意見が自動的に規則になるわけではありません。

この構成は[Goodpatch Sparkle](https://sparkle-design.goodpatch.com/)、[SmartHR](https://smarthr.design/)、[Carbon Content](https://carbondesignsystem.com/guidelines/content/overview/)の領域分離を参考に、AIによる適用と検証に合わせて独自に整理したものです。
