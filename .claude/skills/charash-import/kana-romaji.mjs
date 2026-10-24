// ひらがな/カタカナ → ヘボン式ローマ字 変換ヘルパー
// キャラッシュ(charash.jp)のふりがなから enName / shortId(下書き) を導出するために使う。
// 検証済み: かなで→KANADE, しらべ→SHIRABE, そめや→SOMEYA, くれの→KURENO,
//          ことこ→KOTOKO, きあら→KIARA, くりーがー→KRIEGER(長音・カタカナ含む)

const YOON = {
  きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo',
  しゃ: 'sha', しゅ: 'shu', しょ: 'sho',
  ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho',
  にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo',
  ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo',
  みゃ: 'mya', みゅ: 'myu', みょ: 'myo',
  りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo',
  ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
  じゃ: 'ja', じゅ: 'ju', じょ: 'jo',
  びゃ: 'bya', びゅ: 'byu', びょ: 'byo',
  ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo',
};
const MORA = {
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', を: 'o', ん: 'n',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
};

// カタカナは対応するひらがなに正規化してから処理する(コードポイント差分 0x60)
function normalizeKana(input) {
  return [...input]
    .map((c) => {
      const code = c.codePointAt(0);
      if (code >= 0x30a1 && code <= 0x30f6) {
        return String.fromCodePoint(code - 0x60);
      }
      return c;
    })
    .join('');
}

function splitMorae(kanaRaw) {
  const kana = normalizeKana(kanaRaw);
  const chars = [...kana];
  const morae = [];
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (c === 'ー') { morae.push({ raw: c, type: 'long' }); continue; }
    if (c === 'っ') { morae.push({ raw: c, type: 'sokuon' }); continue; }
    const next = chars[i + 1];
    if (next && YOON[c + next]) {
      morae.push({ raw: c + next, type: 'youon' });
      i++;
      continue;
    }
    morae.push({ raw: c, type: 'normal' });
  }
  return morae;
}

// かな(ひらがな/カタカナ) → ローマ字大文字。例: "しらべ" -> "SHIRABE"
export function kanaToRomaji(kana) {
  const morae = splitMorae(kana);
  const romajiMorae = [];
  for (const m of morae) {
    if (m.type === 'youon') romajiMorae.push(YOON[m.raw]);
    else if (m.type === 'normal') romajiMorae.push(MORA[m.raw] ?? '');
    else if (m.type === 'long') {
      const prev = romajiMorae[romajiMorae.length - 1] || '';
      romajiMorae.push(prev.slice(-1)); // 直前母音を伸ばす
    } else if (m.type === 'sokuon') romajiMorae.push('\0'); // 促音マーカー
  }
  const result = [];
  for (let i = 0; i < romajiMorae.length; i++) {
    if (romajiMorae[i] === '\0') {
      const next = romajiMorae[i + 1] || '';
      const cons = next.match(/^[bcdfghjklmnpqrstvwxyz]/i);
      if (cons) result.push(cons[0]);
      continue;
    }
    result.push(romajiMorae[i]);
  }
  return result.join('').toUpperCase();
}

// enName生成: 姓・名のふりがなをそれぞれ変換して半角スペースで結合
// 例: kanaToEnName("かなで", "しらべ") -> "KANADE SHIRABE"
export function kanaToEnName(...kanaParts) {
  return kanaParts.map(kanaToRomaji).join(' ');
}

// shortIdの下書き(要確認): 名前(通常は名の部分)先頭3モーラの頭文字
// 注意: サンドリア・K→KSK, アミーラ・カマル→KMLのように、このルールに
// 当てはまらない手動採番の実例が存在するため、必ず人間の確認を挟むこと。
export function shortIdDraft(kana, count = 3) {
  const morae = splitMorae(kana).filter((m) => m.type !== 'sokuon' && m.type !== 'long');
  return morae
    .slice(0, count)
    .map((m) => {
      const romaji = m.type === 'youon' ? YOON[m.raw] : MORA[m.raw];
      return romaji ? romaji[0].toUpperCase() : '';
    })
    .join('');
}

// PascalCase変換: enName "KANADE SHIRABE" -> "KanadeShirabe" (画像ディレクトリ名用)
export function enNameToPascal(enName) {
  return enName
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}
