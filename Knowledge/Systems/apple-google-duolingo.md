# Apple・Google・Duolingoを文脈で読み分ける

確認日: 2026-09-06。

## Apple

[Dynamic Typeの公式解説](https://developer.apple.com/videos/play/wwdc2024/10074/)は拡大時にも文字の階層を維持する実装を扱う。HIG本文は取得環境でJavaScript要求となったため、全本文を読めたとは扱わない。独自の適用: WebではネイティブDynamic TypeのAPIを移植するのでなく、文字拡大・再配置・長文で階層と操作を確認する。システムフォントは一つの出発点。

## Google

[Expressiveの公式研究](https://design.google/library/expressive-material-design-google-research)は色・形・サイズ・まとまりによって重要な対象に注意を向けることを説明。独自の適用: 全てを目立たせず、Overviewの実装例と操作入口に強弱をつける。特定の研究結果をAwesomeDSの使いやすさの証明にはしない。業務・学習・ブランドで密度を変える。

## Duolingo

[Duologues](https://blog.duolingo.com/duologues-design-conversations/)は学習者に近づくことや初期探索など、デザイナーの実践を扱う。独自の適用: 学習デモは選択後に理由を示し、再回答できる。緑色・丸角だけで学習体験を実現したとはしない。指定Figmaとアーカイブは前回取得不能であり、公式デザイントークンとして採用していない。

## 共通の判断

企業の外観を平均して「最大公約数」にしない。利用者の目的、文字の知覚、操作と回復の共通条件を標準化し、ブランド表現を差分として持つ。各社のユーザー研究を、このサイトのユーザーテストの代用にしない。
