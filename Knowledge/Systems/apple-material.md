---
title: "Apple HIGとMaterialを使い分ける"
category: "design-systems"
checked_at: "2026-09-06"
evidence: "出典の記述とAwesomeDSの設計判断を分離"
---

# Apple HIGとMaterialを使い分ける

## 確認した知識

Apple HIGはAppleプラットフォーム向けの体験ガイドで、Typographyは可読性と情報階層、Accessibilityは読みやすさの調整を扱う。MaterialのType scaleはdisplay・headline・title・body・labelなどの用途で整理される。今回これらは公式ページの検索索引で確認できた範囲を根拠とし、JS依存の全文は未精読。

## AwesomeDSへの適用（設計判断）

AwesomeDSでは思想を比較材料にし、Apple風とMaterial風のトークンを無計画に混ぜない。見出し、本文、操作ラベルに役割を与えることは応用し、プラットフォーム固有の動作は対象環境に照らして再評価する。ウェブでの検証はW3Cの基準と実ブラウザを併用する。

## トレードオフと検証

どちらも全案件の最適解ではない。Apple固有の素材・フォント・アイコンの利用条件は個別に確認する。透明感や丸みだけを真似せず、操作の予測可能性と一貫した階層を優先する。

## 出典

- [developer.apple.com/design/human-interface-guidelines ](https://developer.apple.com/design/human-interface-guidelines)
- [developer.apple.com/design/human-interface-guidelines/typography ](https://developer.apple.com/design/human-interface-guidelines/typography)
- [developer.apple.com/design/human-interface-guidelines/accessibility ](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [m3.material.io/styles/typography/applying-type ](https://m3.material.io/styles/typography/applying-type)

確認日: 2026-09-06。参照先の内容は更新されうる。未確認資料を設計根拠として補完しない。

