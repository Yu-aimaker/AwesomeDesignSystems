---
title: "AIが扱えるDESIGN.md"
category: "ai-design"
checked_at: "2026-09-06"
evidence: "出典の記述とAwesomeDSの設計判断を分離"
---

# AIが扱えるDESIGN.md

## 確認した知識

VoltAgentの公開リポジトリは、視覚テーマ・色の役割・タイポグラフィ・状態・レイアウトなどをMarkdownで記述する方式を採る。ブランド別の分析は第三者の観察資料であり、各ブランド公式の仕様書と同一視しない。

## AwesomeDSへの適用（設計判断）

DESIGN.mdには印象語だけでなく、背景と前景の組、本文とラベルの階層、余白のスケール、禁止条件、狭い画面での変化を含める。LLMへの入力は案件の要件と採用テーマを先に置き、必要なKnowledgeだけ追加する。生成後のコンポーネントとトークンが一致するかレビューする。

## トレードオフと検証

全資料を毎回渡すと相反するルールが増える。用途ごとの短い入口と詳細資料のリンクを使う。上流の数値を出典なく公式値として複製しない。作成したトークンは「AwesomeDS独自」と明示し、参考元のロゴ・専用フォントは別の権利確認対象にする。

## 出典

- [github.com/voltagent/awesome-design-md ](https://github.com/voltagent/awesome-design-md)

確認日: 2026-09-06。参照先の内容は更新されうる。未確認資料を設計根拠として補完しない。


## 2026-09-06 再調査と確認範囲

[VoltAgentの一覧](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md)と[日本語版のテンプレート](https://github.com/kzhrknt/awesome-design-md-jp/blob/main/template/DESIGN.md)を確認。前者はブランド単位の資料とプレビュー、後者は日本語の文字組を明文化する構成を持ちます。個別Apple・Sanity・SmartHRのraw本文は取得できず、これらの内容を読んだ根拠として採用していません。

独自の適用: ブランドを識別する見た目の説明だけでなく、用途、状態、再配置、避けること、エージェントへの適用手順まで文書化します。日本語ではfallback・行間・禁則・混植を評価対象にします。第三者の抽出値は公式トークンに昇格させず、ライセンスと観測範囲を確認します。
