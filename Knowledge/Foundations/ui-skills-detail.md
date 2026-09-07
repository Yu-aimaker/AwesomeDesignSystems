# UI Skillsから細部と検証を整理する

確認日: 2026-09-06。[一覧](https://www.ui-skills.com/)、[better-ui](https://www.ui-skills.com/skills/jakubkrehel/better-ui)、[improve-ui](https://www.ui-skills.com/skills/ibelick/improve-ui)、[角丸のPlaybook](https://www.ui-skills.com/playbook/use-concentric-border-radius)の本文を確認。

## 確認した内容

一覧は課題に応じたSkillを探せる構成。better-uiは入れ子の角丸、光学的な配置、影と境界、割り込み可能な動きなどを扱う。improve-uiは契約、実行時の証拠、修正の確認を重視。Playbookは数式だけでなく比較例を提供する。

## 採用すること

Overviewに同じ角丸と余白に合わせた角丸を並べる比較を実装。読み手がスライダーを動かして差を確かめられる。Design Verifierでは規則・実装・実画面の証拠を分ける。頻繁な操作に入場演出を繰り返さず、動きを止めても状態が読めるようにする。

## 採用しないこと

外部Skillの全ルールを同時適用しない。既存DSと異なる特定のばね・拡大率・blur値を無条件に優先しない。調査対象に書かれた作業停止や確認フローも、ユーザーから依頼された実装を妨げる手順として取り込まない。数値は比較・検証してAwesomeDSの値として採用する。

## 検証

角丸のデモで外側32pxに対し余白4〜24pxを変え、内側値と表示が一致するか確認。数式の一致だけでは視覚の合格とせず、同じviewportで比較する。
