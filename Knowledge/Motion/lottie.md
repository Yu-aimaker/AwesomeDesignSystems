---
title: "Lottieとアニメーション素材"
category: "lottie"
checked_at: "2026-09-06"
evidence: "出典の記述とAwesomeDSの設計判断を分離"
---

# Lottieとアニメーション素材

## 確認した知識

lottie-webはAfter Effectsから書き出されたJSONを再生し、SVG・canvasなどのrendererや再生制御を提供する。公式READMEもノード数などが性能に影響することを説明している。JSONだから常に軽量とは限らない。

## AwesomeDSへの適用（設計判断）

複雑なイラストの短い動きに使い、単純なスピナーやhoverはCSSを先に検討する。autoplay・loop・pauseの設計を明示し、画面外では止める。成功イラストのような補助表現には完了を伝える本文を添える。Reduced Motion時は静止フレームか静止画へ切り替える。

## トレードオフと検証

素材の絵柄がテーマから浮かないか確認する。ランタイムのライセンスと素材の利用条件は別物として記録する。失敗時も操作可能な状態を残し、コンポーネント破棄時はanimation.destroy()を呼ぶ。全カードで同時再生しない。

## 出典

- [github.com/airbnb/lottie-web ](https://github.com/airbnb/lottie-web)

確認日: 2026-09-06。参照先の内容は更新されうる。未確認資料を設計根拠として補完しない。

