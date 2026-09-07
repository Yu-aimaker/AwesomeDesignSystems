# Reference — 出典レジストリ

確認日: **2026-09-06**。公開資料と、その実装判断を補強する一次資料を記録する。

本ファイルが参照元の正本。Knowledgeは資料の転載ではなく、確認できた知識と独自の設計判断を分けた日本語要約である。人気、星数、見た目だけで客観的優劣を決めない。

| ID | 資料 | 種別 | 確認状態 | 用途・限界 |
| --- | --- | --- | --- | --- |
| R01 | [VoltAgent / awesome-design-md](https://github.com/voltagent/awesome-design-md) | 第三者・公開ソース | 本文確認 | DESIGN.mdの項目構成とAIへの渡し方。ブランド公式仕様ではない。 |
| R02 | [awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) | 第三者・公開ソース | 本文確認 | 日本語組版の観点。数値の全案件への一般化はしない。 |
| R03 | [Taste Skill](https://github.com/Leonxlnx/taste-skill) | 第三者・作者の一次資料 | 本文確認 | 個性・動き・密度の調整。美的ルールは文脈で選択。 |
| R04 | [neropursue 指定投稿](https://x.com/neropursue/status/2089263766428950683) | SNS・未確認 | 取得不可 | 投稿本文を取得できず。内容・作者の主張を推測しない。 |
| R05 | [shadcn/ui](https://ui.shadcn.com/docs) | 公式ドキュメント | 本文確認 | ソース所有・合成・配布モデル。画面全体のアクセシビリティは別検証。 |
| R06 | [assistant-ui repository](https://github.com/assistant-ui/assistant-ui) | 公式・公開ソース | 本文確認 | 会話ランタイム、プリミティブ、バックエンド接続の境界。 |
| R07 | [assistant-ui Elements](https://www.assistant-ui.com/elements) | 公式ドキュメント | 本文確認 | 状態別AI UIと実演。elements.assistant-ui.comは取得不可、公式本体内の有効ページを採用。 |
| R08 | [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) | 公式ガイド | 一部確認・JS依存 | トップページはJS要求。公式のTypography/Accessibility検索索引に限定して補完。全文精読済みとはしない。 |
| R09 | [Apple Typography](https://developer.apple.com/design/human-interface-guidelines/typography) | 公式ガイド | 検索索引のみ | 可読性と情報階層の目的。詳細な数値は未確認。 |
| R10 | [Apple Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) | 公式ガイド | 検索索引のみ | 文字やアイコンを読みやすく調整する観点。 |
| R11 | [Material Design 3](https://m3.material.io/) | 公式ガイド | 一部確認・JS依存 | トップページはJS要求。下記の公式個別ページの検索索引で限定確認。 |
| R12 | [Material Design tokens](https://m3.material.io/foundations/design-tokens) | 公式ガイド | 検索索引のみ | 用途に応じたトークン。 |
| R13 | [Material Color roles](https://m3.material.io/styles/color/roles) | 公式ガイド | 検索索引のみ | 色値と役割の分離。 |
| R14 | [Material Applying type](https://m3.material.io/styles/typography/applying-type) | 公式ガイド | 検索索引のみ | display/headline/title/body/labelの役割。 |
| R15 | [Duolingo Duologues](https://blog.duolingo.com/duologues-design-conversations/) | 企業公式記事 | 本文確認 | craft・strategy・resilience、設計の対話と細部。コンポーネント仕様書ではない。 |
| R16 | [指定Figma Communityファイル](https://www.figma.com/community/file/1460744749282136015) | コミュニティ資料・公式性未確認 | 取得不可・robots制約 | Duolingo公式と認定しない。作者、内容、配布ライセンスは未確認。非公式参考候補としてのみ登録。 |
| R17 | [Duolingo design archive / 指定時刻](https://web.archive.org/web/20260310155248/https://design.duolingo.com/) | 歴史資料・アーカイブ候補 | 取得不可 | 指定URLは保持。スナップショット内容も現行仕様との一致も未確認。 |
| R18 | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | W3C勧告・規範 | 本文確認 | アクセシビリティの基準。採用や準拠を自動的に宣言しない。 |
| R19 | [Contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | W3C解説・非規範 | 本文確認 | 文字コントラストの閾値と例外。 |
| R20 | [Target size minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | W3C解説・非規範 | 本文確認 | AAの24 CSS pxと例外。44px設計目標と区別。 |
| R21 | [Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | W3C解説・非規範 | 本文確認 | 拡大時の再配置と二次元表示の例外。 |
| R22 | [APG Modal dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | W3C実装ガイド・非規範 | 本文確認 | フォーカス管理、Escape、復帰。 |
| R23 | [APG Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) | W3C実装ガイド・非規範 | 本文確認 | タブの意味、関連付け、キーボード。フィルタボタンと混同しない。 |
| R24 | [WAI Form notifications](https://www.w3.org/WAI/tutorials/forms/notifications/) | W3Cチュートリアル | 本文確認 | 入力エラーの説明と復旧。 |
| R25 | [Japanese Text Layout](https://www.w3.org/TR/jlreq/) | W3Cグループノート | 本文確認 | 日本語組版、禁則、混植。WCAGのような適合基準とは異なる。 |
| R26 | [Motion accessibility](https://motion.dev/docs/react-accessibility) | 公式ドキュメント | 本文確認 | Reduced Motion、MotionConfig、移動の抑制。 |
| R27 | [Three.js Creating a scene](https://threejs.org/manual/en/creating-a-scene.html) | 公式ドキュメント | 本文確認 | scene/camera/rendererの基礎。 |
| R28 | [Three.js Cleanup](https://threejs.org/manual/en/cleanup.html) | 公式ドキュメント | 本文確認 | GPU資源のdisposeと解放。 |
| R29 | [lottie-web](https://github.com/airbnb/lottie-web) | 公式・公開ソース | 本文確認 | renderer、再生、停止、破棄、性能制約。素材ライセンスは別確認。 |
| R30 | [Google Web Vitals](https://web.dev/articles/vitals) | Google公式解説 | 本文確認 | LCP/INP/CLS、75パーセンタイル。実測値の代わりにはしない。 |

## 証拠の扱い

- **本文確認**: 当日の公開ページ本文を取得して該当記述を確認した。動作、完全な実装、ライセンス全条文まで保証するものではない。
- **検索索引のみ**: 公式ページの索引に表示された記述だけを採用した。取得できない段落・数値を補完しない。
- **取得不可**: URLを保存し、内容を根拠として使わない。アクセス失敗は資料が存在しないことを意味しない。
- **第三者分析**: 元ブランドの公式承認や完全な仕様との一致を主張しない。
- **アーカイブ**: 取得できた場合でも当時の資料。現行の仕様や利用条件として扱わない。

## 更新手順

1. 元ページを再取得し、確認日と状態を更新する。
2. Knowledgeの主張と出典の対応を確認し、独自判断にはその旨を残す。
3. 数値・API・ライセンスの変更は関連テンプレートにも反映する。
4. 壊れたリンクは削除して隠さず、旧URLと後継URL、移動を確認できたかを記録する。

コードや画像の再配布前には対象ファイルのライセンスを確認する。本リポジトリは上記のブランド資産・DESIGN.md・Skill全文を転載していない。


## 追加調査 — 2026-09-06

| ソース | 確認範囲・用途 | 状態 |
| --- | --- | --- |
| [Nothing](https://us.nothing.tech/) | 製品セクションの本文構成 | 本文確認、視覚未確認 |
| [Goodpatch Why Design](https://goodpatch.com/en/design) | 戦略から表層までの設計範囲 | 本文確認 |
| [Sparkle Design](https://sparkle-design.goodpatch.com/) | 原則・テーマ・部品・パターン・資産 | 本文確認 |
| [Sparkle Typography](https://sparkle-design.goodpatch.com/guidelines/themes/typography) | 要素から意味上の文字スタイル | 本文確認 |
| [Sparkle送信パターン](https://sparkle-design.goodpatch.com/guidelines/patterns/submit-button-initial-state) | 入力不備の回復 | 本文確認 |
| [Sparkle React](https://sparkle-design.goodpatch.com/assets/libraries/sparkle-design-for-react) | packageとregistry導入方式 | 本文確認 |
| [DSの構造](https://goodpatch.com/blog/2026-04-cz-ds-01) | 組織の課題・運用・標準 | 本文確認 |
| [SmartHR](https://smarthr.design/) | 領域分離 | 構成確認 |
| [SmartHRの文章](https://smarthr.design/basics/text/) | 読者、用語、文法、レビュー | 本文一部確認 |
| [Pepabo](https://design.pepabo.com/) | 基盤とブランドの分離 | 構成確認 |
| [Carbon Content](https://carbondesignsystem.com/guidelines/content/overview/) | voiceとtone、文言設計 | 本文確認 |
| [Apple Dynamic Type](https://developer.apple.com/videos/play/wwdc2024/10074/) | 拡大と階層 | 本文確認 |
| [Google Expressive研究](https://design.google/library/expressive-material-design-google-research) | 色・形・サイズ・まとまり | 本文確認 |
| [UI Skills](https://www.ui-skills.com/) | 課題別Skill発見 | 本文確認 |
| [better-ui](https://www.ui-skills.com/skills/jakubkrehel/better-ui) | 角丸、状態変化、細部 | 本文確認 |
| [improve-ui](https://www.ui-skills.com/skills/ibelick/improve-ui) | 契約・実行・修正の証拠 | 本文確認 |
| [角丸の比較](https://www.ui-skills.com/playbook/use-concentric-border-radius) | 計算と実例 | 本文確認 |
| [追加X投稿](https://x.com/karlarboledas/status/2096298216866087318) | ユーザー指定 | 取得不能・内容未採用 |

Xの元指定投稿も再取得できず、本文の推測を行っていません。第三者のDESIGN.mdは抽出者の分析であり、ブランド公式仕様と区別します。
