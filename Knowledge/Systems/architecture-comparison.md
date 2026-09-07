# デザインシステムの構成を比較する

確認日: 2026-09-06。以下は公式サイトの情報構造と本文の確認。画面の視覚的な測定結果ではありません。

| 資料 | 確認した構成 | AwesomeDSでの独自判断 |
| --- | --- | --- |
| [Sparkle](https://sparkle-design.goodpatch.com/) | Foundations、Themes、Components、Patternsとアセットを分離 | ルールと導入資産を別領域にする |
| [SmartHR](https://smarthr.design/) | 基本要素、アクセシビリティ、プロダクト、コミュニケーション | 文章と品質を独立した正本にする |
| [Pepabo](https://design.pepabo.com/) | Foundation、Inhouse、Brandを分離 | ブランド差分を共通基盤と区別する |
| [Carbon](https://carbondesignsystem.com/guidelines/content/overview/) | Contentでvoiceとtone、操作ラベルを扱う | 製品の文章を設計と検証の対象にする |

## なぜ構成まで変更するか

以前は広い内容をfoundations.mdに集約しており、Skillが文章や画面パターンを読む入口が弱かった。今回、Themes / Content / Components / Patterns / Technology / Quality / Governanceを追加。フォントと角丸だけを変えて適用完了と誤認しないよう、目的から必要な契約を辿れる構造にした。

## 取り入れない点

外部システムのカテゴリ名や数値を全コピーしない。ブランド専用の写真・ロゴ・書体を配布しない。利用者が違う組織の完成形をそのまま「最適」としない。AwesomeDSの利用者はAI開発者と非エンジニアの両方なので、参照可能な文章、導入用Skill、操作例を同じ変更単位で更新する。

## 検証

正本内の相対リンクが有効か、Skill配布に新しい領域が含まれるか、サイトのKnowledgeから読めるかを確認する。フォルダ数を品質指標にしない。
