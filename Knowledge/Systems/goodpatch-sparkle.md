# GoodpatchとSparkle Design

確認日: 2026-09-06。公式本文とガイドライン、React導入方法を確認。

## 確認した内容

[企業サイトのWhy Design](https://goodpatch.com/en/design)では表層から戦略までを扱う設計の範囲を説明。[DSの構造](https://goodpatch.com/blog/2026-04-cz-ds-01)では組織の課題に応じた仕組みと運用を扱う。[Typography](https://sparkle-design.goodpatch.com/guidelines/themes/typography)ではフォント・サイズ・太さ・行高・字間の要素を組み合わせて意味上のスタイルを定義。[送信パターン](https://sparkle-design.goodpatch.com/guidelines/patterns/submit-button-initial-state)では初期状態で送信を無効化せず、不備を説明する。[React実装](https://sparkle-design.goodpatch.com/assets/libraries/sparkle-design-for-react)はパッケージと個別registryを提供。

## AwesomeDSの判断

企業サイトの表現をUIの一律ルールにしない。標準・テーマ・パターン・アセットという関係を正本に反映する。日本語フォントはBIZ UD系も案件候補に加えるが、現サイトは追加取得のないシステムフォントを維持。これはブランド表現・配信負荷・環境差の選択であり、どちらかを絶対的最適解としない。

## 適用と検証

Content規則とフォーム契約を追加。既存のフォームはsubmitを常時操作でき、形式エラーを説明する。新規テーマは一つのJSONで管理し、Pluginへ同期。ライブラリは既存トークン体系との衝突を評価して導入する。
