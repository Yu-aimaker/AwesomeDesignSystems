# Knowledge — 判断に使うデザイン知識

確認日: 2026-09-06。目的は「唯一の正解」を配ることではなく、文脈に合わせて選び、実装し、検証できる判断材料を残すこと。

各ノートは **確認した知識 / AwesomeDSへの適用（独自の設計判断） / トレードオフと検証 / 出典** の順で読む。数値の初期案と規格の要求値を区別する。未確認の指定資料は[Reference](../Reference/README.md)に状態を明記している。

| 領域 | ノート |
| --- | --- |
| Foundations | [デザインは文脈から決める](./Foundations/design-context.md) |
| Foundations | [AIが扱えるDESIGN.md](./Foundations/design-md.md) |
| Foundations | [個性・動き・密度の調整](./Foundations/taste-and-variance.md) |
| Typography | [日本語タイポグラフィ](./Typography/japanese.md) |
| Foundations | [意味で管理するデザイントークン](./Foundations/tokens.md) |
| Accessibility | [コントラストと色の意味](./Accessibility/contrast.md) |
| Accessibility | [キーボードとダイアログ](./Accessibility/keyboard-and-dialogs.md) |
| Accessibility | [タップ領域と狭い画面](./Accessibility/touch-and-reflow.md) |
| Components | [shadcn/uiを土台にする判断](./Components/shadcn.md) |
| Patterns | [AIインターフェースの状態設計](./Patterns/ai-conversation.md) |
| Patterns | [入力・エラー・空状態](./Patterns/forms-and-feedback.md) |
| Motion | [意味のあるモーション](./Motion/purpose-and-reduction.md) |
| Motion | [Three.jsと3Dの採用条件](./Motion/three-dimensional.md) |
| Motion | [Lottieとアニメーション素材](./Motion/lottie.md) |
| Systems | [Apple HIGとMaterialを使い分ける](./Systems/apple-material.md) |
| Operations | [体験を測り、根拠を更新する](./Operations/performance-and-evidence.md) |

## 推奨する読み方

- 新規案件: 文脈 → DESIGN.md → 日本語 → トークン → 必要なパターン。
- UIレビュー: コントラスト → キーボード → タップ・再配置 → フィードバック → 性能。
- AIプロダクト: 状態設計 → shadcn → キーボード → モーション。
- 表現の探索: 個性・密度 → Apple/Material → Motion/Three/Lottieの採用条件。

AIへは案件の要件、採用するテーマ、関係するノートだけを渡す。複数のブランド規則を無条件に混ぜず、どの原則を採ったかを出力に残す。


## 構成とブランドの追加調査

- [デザインシステムの構成比較](Systems/architecture-comparison.md)
- [GoodpatchとSparkle](Systems/goodpatch-sparkle.md)
- [Nothingの構成と確認範囲](Systems/nothing.md)
- [Apple・Google・Duolingo](Systems/apple-google-duolingo.md)
- [UI Skillsの細部と検証](Foundations/ui-skills-detail.md)
