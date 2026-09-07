---
title: "日本語タイポグラフィ"
category: "typography"
checked_at: "2026-09-06"
evidence: "出典の記述とAwesomeDSの設計判断を分離"
---

# 日本語タイポグラフィ

## 確認した知識

awesome-design-md-jpは日本語フォント、行間、禁則、混植などを明示する第三者資料。W3C JLReqは日本語組版の要件を扱う。英語の大文字見出しや狭い行間を日本語へそのまま移すと、読みにくさや改行の不自然さが生じうる。

## AwesomeDSへの適用（設計判断）

本文は16px前後、行高1.7前後を検証の出発点にする。これらはAwesomeDSの初期案であり規格値ではない。system-uiに日本語フォールバックを含め、長文・数字・括弧・英字URLを一緒に確認する。本文は通常の禁則を尊重し、URLなど連続文字列のみ overflow-wrap を検討。見出しの文字詰めを本文全体へ適用しない。

## トレードオフと検証

余裕ある行間は長文向きだが、表や短いラベルでは冗長になる。表の数値は桁揃え、単位の一貫性を優先する。ウェブフォントは表現と読み込み負荷の交換条件がある。OSごとの代替フォントと拡大時の折返しを確認する。

## 出典

- [github.com/kzhrknt/awesome-design-md-jp ](https://github.com/kzhrknt/awesome-design-md-jp)
- [www.w3.org/TR/jlreq/ ](https://www.w3.org/TR/jlreq/)

確認日: 2026-09-06。参照先の内容は更新されうる。未確認資料を設計根拠として補完しない。

