---
title: "意味のあるモーション"
category: "motion"
checked_at: "2026-09-06"
evidence: "出典の記述とAwesomeDSの設計判断を分離"
---

# 意味のあるモーション

## 確認した知識

Motionの公式ガイドはReduced Motion設定を尊重し、大きな移動やパララックスを減らす実装を示す。MotionConfigのuser設定とuseReducedMotionで調整できる。ライブラリ導入そのものが目的ではない。

## AwesomeDSへの適用（設計判断）

小さなhoverはCSS、複数要素の状態遷移やレイアウト連動はMotionなどを検討する。動きの目的を「追加された位置を伝える」「完了を返す」のように書く。AwesomeDSの初期案は短い状態変化を150〜220ms程度で試し、実操作で調整する。これは標準規格の必須値ではない。

## トレードオフと検証

気持ちよさと待たされる感覚は両立しないことがある。操作のたびに長い演出を待たせない。Reduced Motionでは移動を止めても状態変化は即時の色・文言で伝える。画面外の繰返し動作、常時shimmer、装飾動画の自動再生を再検討する。

## 出典

- [motion.dev/docs/react-accessibility ](https://motion.dev/docs/react-accessibility)

確認日: 2026-09-06。参照先の内容は更新されうる。未確認資料を設計根拠として補完しない。

