/* =========================================================================
   content-registry.js（一覧ページの選択肢まとめ）

   一覧ページの学年プルダウンから、ひらがな・カタカナ・すうじ・小学1〜6年生の
   漢字をすべて選べるようにするための統合レジストリ。

   KANJI_DATA_BY_GRADE（設定画面の「現在の学年」で使う、漢字1〜6年生のみの
   一覧）はそのまま残してあり、ここでは触れていない。

   各エントリの list の中身は、kanji タイプなら {kanji, readings, ...}、
   それ以外（hiragana/katakana/number）なら {character, strokeCount} という
   形なので、renderList 側で type を見て character の取り出し方を変えている。
   ========================================================================= */

const CONTENT_REGISTRY = {
  hiragana: { label: "ひらがな", type: "hiragana", list: hiraganaChars },
  katakana: { label: "カタカナ", type: "katakana", list: katakanaChars },
  numbers:  { label: "すうじ",   type: "number",   list: numberChars },
  1: { label: "小学1年生", type: "kanji", list: grade1Kanji },
  2: { label: "小学2年生", type: "kanji", list: grade2Kanji },
  3: { label: "小学3年生", type: "kanji", list: grade3Kanji },
  4: { label: "小学4年生", type: "kanji", list: grade4Kanji },
  5: { label: "小学5年生", type: "kanji", list: grade5Kanji },
  6: { label: "小学6年生", type: "kanji", list: grade6Kanji },
};

// 一覧ページのプルダウンに並べる順番（かな・すうじ→学年順）
const CONTENT_ORDER = ["hiragana", "katakana", "numbers", "1", "2", "3", "4", "5", "6"];
