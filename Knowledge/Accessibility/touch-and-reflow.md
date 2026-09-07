---
title: "タップ領域と狭い画面"
category: "responsive"
checked_at: "2026-09-06"
evidence: "出典の記述とAwesomeDSの設計判断を分離"
---

# タップ領域と狭い画面

## 確認した知識

WCAG 2.2の2.5.8 AAは原則24×24 CSS px以上のターゲットを求め、間隔・インラインなどの例外がある。44pxを同じAA規定の数値と混同しない。Reflowは拡大や狭い表示での読みやすさを扱い、二次元配置が本質的な内容には例外がある。

## AwesomeDSへの適用（設計判断）

AwesomeDSの通常ボタンは44px程度の高さを使いやすさの初期目標にする。アイコンが16pxでもクリック領域は広く取れる。モバイルでは検索・フィルター・結果を順番に並べ、情報を削る前に配置を変える。コードや比較表は局所スクロールを許してページ全体の横スクロールを避ける。

## トレードオフと検証

全コントロールを大きくすると密度が下がる。頻繁に操作するものを優先し、デスクトップ向け高密度モードでも焦点表示と誤操作防止を保つ。320 CSS px相当、200%拡大、長い日本語ラベルで確認する。

## 出典

- [www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html ](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [www.w3.org/WAI/WCAG22/Understanding/reflow.html ](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

確認日: 2026-09-06。参照先の内容は更新されうる。未確認資料を設計根拠として補完しない。

