# コンポーネントの契約

各部品は見た目に加え、意味・状態・操作・失敗時のふるまいを持ちます。

| 部品 | 必須 | 避けること |
| --- | --- | --- |
| Button | 動詞の名前、focus、hover、active、disabledの意味 | divのクリックだけで実装、色のみの優先度 |
| Switch | accessible name、aria-checked、Space操作 | 保存済みと未保存の混同 |
| Input | label、適切なtype、説明とエラーの関連付け | placeholderだけをラベルにする |
| Dialog | 名前、閉じる手段、フォーカス管理 | 内容を隠すだけ、背景に操作が抜ける |
| Tabs/選択群 | 選択状態、選択可能な領域、更新先 | 見た目だけtab役割を付けキーボード契約を欠く |
| Progress | 現在値と最大値、数値と視覚の一致 | 色やアニメーションだけで進捗を表す |
| Toast | status通知、永続的な結果の別表示 | 重要なエラーを自動消去だけで伝える |

## 形と細部

入れ子の丸角は `inner = max(0, outer - inset)` を初期値に比較する。全ての形を機械的に同心円にするのではなく、厚い境界線、非対称形、用途を含めて判断。影は奥行き、境界線は区切りに使う。要素の位置を変えないhoverを優先。頻繁な操作に入場アニメーションを繰り返さない。

## 実装の選択

標準HTMLを優先する。複雑なフォーカス管理・選択パターンには実績のあるプリミティブを使う。shadcn/uiは生成したコードの所有と保守を引き受ける導入方式であり、自動的にアクセシビリティを保証するものではない。

参考: [shadcn Button](https://ui.shadcn.com/docs/components/button)、[UI Skills better-ui](https://www.ui-skills.com/skills/jakubkrehel/better-ui)。具体的な120/180/280msなどの値はAwesomeDS独自の初期値であり、外部Skillの厳密な数値指定を混ぜません。
