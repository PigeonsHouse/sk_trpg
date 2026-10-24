---
name: charash-import
description: キャラッシュ(charash.jp)のキャラシデータを、KAIRI STATION(sk_trpg)の src/content/characters/*.json 形式に変換する。新規キャラ追加・既存キャラ更新の際に使う。
---

# キャラッシュ → KAIRI STATION 変換Skill

対象リポジトリ: `sk_trpg`（`src/content/characters/*.json` を編集する）

## 0. 入力の受け取り方

キャラッシュのページを `Ctrl+U`（表示ソース）で開いてそのままチャットに貼ると、**50,000文字制限で途中から切れる**（技能の後半や基本情報が欠落する）。
必ずファイルに保存してもらい、そのパスを教えてもらうこと。例:
- ページを保存 (`Ctrl+S`) → 保存先のHTMLファイルパスを聞く
- もしくは `Ctrl+U` の表示ソース全文をテキストファイルに貼って保存してもらう

`30.キャラシ` フォルダ（`D:\20251130_探索者サイト\素材管理\30.キャラシ`）には「いあきゃらテキスト」形式の過去データも残っている。これは技能テーブルが `技能名 合計 初期値 職業P 興味P 成長分 その他` の列で綺麗に整形されたプレーンテキストで、HTMLよりずっとパースしやすい。同じ形式のテキストが手に入るならそちらを優先してよい。

## 1. ゲームシステムの判定

`status.type` は次の3種類:
- `"CoC6版"`
- `"CoC7版"`
- `"エモクロア"`

判定方法:
1. キャラッシュ側のシステム選択(`emoklore` / `coc6` / `coc7`)を最優先で見る
2. 判別できない場合のフォールバック: 能力値 STR〜EDU が**すべて5の倍数**なら CoC7版、そうでなければ CoC6版
3. エモクロアは能力値が「身体/器用/精神/五感/知力/魅力/社会/運勢」という全く別体系なので一目で分かる

システムごとにJSONの `status`/`skills` の構造が異なるので、既存ファイルを都度参照する:
- CoC6版の例: `src/content/characters/01-kanade-shirabe.json`
- CoC7版の例: `src/content/characters/03-kanade-kotoko.json`
- エモクロアの例: `src/content/characters/21-someya-kureno.json`

## 2. profile（基本情報）

| キャラッシュ側 | サイト側 | 変換 |
|---|---|---|
| 名前(漢字) | `name` | 全角スペース区切り → 半角スペース1つに正規化（例:「奏　調」→「奏 調」） |
| ふりがな | `enName` | かな→ローマ字変換（3節参照）。**外来語名(カタカナ)は素の変換結果を鵜呑みにせず要確認**（例: 「クリーガー」を素直に変換すると `KURIIGAA` になるが実際は `KRIEGER`。「カマル」も `KAMARU` ではなく `KAMAL`）。人名としてありえるスペルに手動調整すること |
| 年齢 | `profile.age` | そのまま転記（キャラッシュ現在値。過去成長分が反映されていてもそれでよい） |
| 性別 | `profile.gender` | 「男」→「男性」「女」→「女性」 |
| 職業 | `profile.job` | 末尾の `（...）` 括弧書きは削除（例:「指揮者（ミュージシャン）」→「指揮者」） |
| 誕生日 | `profile.birthday` | そのまま |
| 出身 | `profile.from` | 基本はそのまま転記。都道府県名で末尾に「県」等が付いていない場合の補完は**確証がないので断定しない**（過去データでは「福岡」→「福岡県」という加工例があったが、これが常に正しいルールかは未検証。迷ったら転記のみにして本人に確認） |
| 身長・体重 | `profile.height`/`weight` | キャラッシュのHTML(CoC6テンプレ)には項目が無いことが多い。「いあきゃらテキスト」形式なら`身長:`/`体重:`欄がある。無ければ空欄のまま(手動入力待ち)にする |
| 外見的特徴・性格・経歴など | `profile.description` | **自動生成しない**。これらの生データはあくまで参考情報として提示し、`description` 文章自体は今まで通り手動で書いてもらう |

## 3. かな→ローマ字変換 / shortId下書き

`kana-romaji.mjs`（このSkillと同じフォルダ）に実装・検証済み:

```js
import { kanaToRomaji, kanaToEnName, shortIdDraft, enNameToPascal } from './kana-romaji.mjs';

kanaToRomaji('しらべ')        // "SHIRABE"
kanaToEnName('かなで', 'しらべ') // "KANADE SHIRABE"
shortIdDraft('しらべ')        // "SRB" (下書き。要確認)
enNameToPascal('KANADE SHIRABE') // "KanadeShirabe"
```

- ひらがな・カタカナ・拗音・促音・長音に対応済み（`くりーがー`→`KURIIGAA`等、機械的な音写になる点に注意）
- **shortId は完全自動化できない**。「名の先頭3モーラの頭文字」というルールで大半（奏調→SRB、奏琴子→KTK、染矢暮乃→KRN、刺賀煌亜来→KAR、クリーガー→KRG）は説明できるが、`サンドリア・K`→`KSK`、`アミーラ・カマル`→`KML` のように当てはまらない手動採番の実例がある。必ず「下書き案」として提示し、本人に確認を取ること

## 4. status（能力値）

### CoC6版
`str/con/pow/dex/app/siz/int/edu/hp/mp/san/idea/luck/knowledge` を能力値表から転記。
- **SANは「現在SAN値」ではなく能力値欄のSAN（減少前の初期値）を使う**
- `idea`/`luck`/`knowledge` はキャラッシュ側に表示があればそれを転記。無ければ `idea=int×5`, `luck=pow×5`, `knowledge=edu×5` で計算（キャラッシュ標準ルールと一致することを確認済み）
- `DB`、`BLD`、`MOV` はJSONに含めない

### CoC7版
値は0-100のパーセンテージ値をそのまま転記。
- `idea = int`, `knowledge = edu`（そのまま同値、計算不要）
- `luck` は専用ロール値なので**キャラッシュの表示値をそのまま転記**（計算では出せない）
- `san` は「現在SAN値」ではなく開始時SAN（キャラッシュの初期SAN欄）を転記

### エモクロア
`身体/器用/精神/五感/知力/魅力/社会/運勢` を**表示値そのまま転記**。計算式なし。

## 5. skills（技能値）

キャラッシュ(CoC6/7)の技能テーブルは `初期値・職業P・興味P・成長分・その他・合計` の列を持つ。

**変換ルール（実データで全件検証済み）:**
1. 値 = `初期値 + 職業P + 興味P + その他`（**成長分だけを除外**した合計）
2. 採用条件: `職業P + 興味P + その他` が1以上の技能だけを載せる（初期値のみ、または成長分だけで伸びた技能＝創作時に一切ポイントを振っていない技能は載せない）

> 補足: `30.キャラシ/00技能値変換用プロンプト.txt` に残る旧ルールは「合計値をそのまま使う」だったが、これは成長分が発生する前(作成直後)の卓では合計=初期+職業+興味+その他が常に成り立っていたための簡略化。現在のキャラッシュは**プレイ後の成長込みの値**を表示するため、成長分を差し引く現行ルールの方が正しい。

**技能名の正規化:**
- 全角括弧「（）」→ 半角括弧「()」に統一
- 「ほかの言語（英語）」のような『ほかの言語』プレフィックスは**削除**し、言語名だけにする（例:「ほかの言語（英語）」→「英語」）
- それ以外の項目名括弧（例:「芸術（音楽）」「製作（作曲）」）はプレフィックスを残し、半角化のみ（例:「芸術(音楽)」）

エモクロアの技能は `"技能名": "Lv.N"` という文字列形式。表示されているレベルをそのまま転記する（取捨選択や計算は不要）。

## 6. 画像パス・ディレクトリのダミー生成

`enName` から Pascal 名を作る（`enNameToPascal()`参照。例: `KANADE SHIRABE` → `KanadeShirabe`）。

キャラJSON作成と同時に、以下の空フォルダを作成しておく（後で本人が画像を配置する）:
```
public/images/{Pascal}/companions/
public/images/{Pascal}/icon/
public/images/{Pascal}/picture/
public/images/{Pascal}/sprite/
```

JSON内はダミーの**ファイル名まで**埋めておく:
```json
"thumbnailUrl": "/images/{Pascal}/{Pascal}_ad.png",
"backgroundUrl": "/images/bg/{Pascal}_bg.jpg",
"sprites": [
  {
    "iconUrl": "/images/{Pascal}/icon/{Pascal}_icon_0.png",
    "spriteUrl": "/images/{Pascal}/sprite/{Pascal}_sprite_0.png"
  }
]
```
（キャラッシュの画像は1枚のみのため sprites は1件だけ作る。表情差分などは後で本人が手動追加）

`companions` / `artGallery` はキャラッシュに情報が無いため空配列のままにする。

## 7. 完全に手動の項目（キャラッシュに存在しない）

`shortId`（下書きのみ自動、要確認）、`colorPalette`、`profile.description`、`histories`、`qaList`、`comment`、`artGallery`の中身。
これらは今まで通り本人に書いてもらう。生成したJSONにはプレースホルダー（空文字/空配列/TODOコメント代わりの分かりやすい仮値）を入れて、後で埋めやすい形にしておくこと。

**注意: `histories` は空配列 `[]` にしてはいけない。** `SpHistoryFrame.tsx` 等が `histories[selectedHistoryIndex]`（デフォルト0件目）を無条件に参照しており、空配列だと `getImageUrl(undefined, "icon")` でランタイムエラーになる（実際に発生した既知の不具合）。必ず `title: "", comment: "", companions: []` のプレースホルダーを最低1件入れておくこと。

## 8. ファイル命名・後処理

- ファイル名: `src/content/characters/{NN}-{kebab-enname}.json`（`NN`は既存最大連番+1、2桁ゼロ埋め）
- `characters.json` / `src/definitions/charactersName.ts` は `vite-plugins/generateCharactersList.ts` が自動生成するファイルなので**手編集しない**（`pnpm dev` 起動時 or ビルド時に再生成される）
- 派生キャラ（コスプレ/IF設定等）を作る場合は `"original"` キーを持たせる（一覧には出さない）。既存の `00-kanade-shirabe-student.json` 等を参照

## 9. 作業の進め方

1. キャラッシュのHTML(またはいあきゃらテキスト)をファイルで受け取る
2. システム種別を判定
3. profile / status / skills を上記ルールで抽出し、対応する既存キャラJSONの構造に合わせて下書きを作る
4. enName・shortIdの下書きを提示し、特に外来語名・shortIdは必ず本人確認を挟む
5. 画像ディレクトリを作成し、ダミーパスを埋める
6. 手動項目はプレースホルダーのまま残し、本人に伝える
7. `pnpm dev` 等でJSON schemaに問題ないか確認（型エラー・生成物の再生成）
