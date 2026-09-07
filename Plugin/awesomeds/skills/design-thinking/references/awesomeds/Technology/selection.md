# フロントエンド技術の選定

確認日: 2026-09-06。ライブラリは用途がある場合に採用し、存在するだけで依存を増やしません。新規導入時は公式資料、互換性、保守状態、ライセンス、初回転送量を確認します。

| 領域 | 初期選択 | 採用する条件 | このサイト |
| --- | --- | --- | --- |
| UI | React + Vite | 静的なドキュメントと操作デモ | 導入済み |
| SSR/認証 | 案件に応じたフレームワーク | 動的SEO、セッション、サーバ処理が必要 | 未導入 |
| 基礎部品 | HTML + CSS | ボタン、入力、dialogで足りる | 導入済み |
| 複雑な部品 | shadcn/ui | menu、combobox等の状態管理が必要 | 選定候補 |
| 日本語DS | Sparkle Design for React | チームがその規約・テーマを採用する | 調査済み候補 |
| AI会話 | assistant-ui | モデル接続、生成、中断、再試行が必要 | 設計ノートのみ |
| 通常の動き | CSS transition | 単一要素の状態変化 | 導入済み |
| レイアウトの動き | Motion | React状態と位置の連動 | 導入済み |
| ベクターアニメーション | Lottie light | デザイナー作成素材の再生 | 遅延読込 |
| 3D | Three.js | 奥行き・視点操作が情報になる | 遅延読込・代替表示 |
| アイコン | Lucide | 一貫した線画セットが必要 | 導入済み |
| 文書表示 | marked + DOMPurify | Markdownを安全なHTMLにする | 導入済み |

## Sparkleを追加候補にした理由

公式にReactパッケージとshadcn registryによる個別導入が案内されています。既存AwesomeDSのプリミティブと同時に無計画に入れると、テーマ変数やfocusの規則が衝突します。日本語製品で採用するときは、部品の所有方法、CSS生成、フォント配信を一括で決定します。

## 評価記録

導入前に「解決する問題 / 代替 / 追加依存 / 保守責任 / 実画面の比較」を残す。小さいhoverにThreeを使わない。WebGLなしで主要情報と操作を維持する。LottieとThreeは必要なページだけロードし、離脱時に停止・破棄する。低速回線で本文が先に読めることを優先。

公式: [Sparkle React](https://sparkle-design.goodpatch.com/assets/libraries/sparkle-design-for-react)、[shadcn](https://ui.shadcn.com/docs)、[assistant-ui](https://www.assistant-ui.com/)、[Motion](https://motion.dev/docs/react)、[Three.js](https://threejs.org/docs/)、[Lottie](https://github.com/airbnb/lottie-web)。
