---
title: "意味で管理するデザイントークン"
category: "tokens"
checked_at: "2026-09-06"
evidence: "出典の記述とAwesomeDSの設計判断を分離"
---

# 意味で管理するデザイントークン

## 確認した知識

Materialの公式資料は、色や寸法などの値をトークンで扱い、その用途・場所に応じた名前を使う方針を示す。色の役割と具体的な色値を分離すると、テーマ変更時に同じ役割を保ちやすい。

## AwesomeDSへの適用（設計判断）

基礎値→意味→コンポーネントの順に考える。例は palette.blue.600 → action.primary → button.background。小さな実装では中間層を増やしすぎず、surface・text・muted・border・accent・dangerを入口にする。前景と背景のペアで定義し、テーマ追加時は値だけでなく状態も比較する。

## トレードオフと検証

抽象化が深すぎると変更箇所を探しにくい。まだ再利用されない1回限りの装飾までトークン化しない。値を共有すべきかは同じ意味で変化するかで判断する。成功色とブランド色が同じ緑でも、意味の名前は分ける。

## 出典

- [m3.material.io/foundations/design-tokens ](https://m3.material.io/foundations/design-tokens)
- [m3.material.io/styles/color/roles ](https://m3.material.io/styles/color/roles)

確認日: 2026-09-06。参照先の内容は更新されうる。未確認資料を設計根拠として補完しない。

