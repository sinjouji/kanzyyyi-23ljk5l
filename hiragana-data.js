/* =========================================================================
   hiragana-data.js（データ層 / ひらがな 46字）

   五十音順（あ〜ん）。読み方の概念が無いため、漢字データと違い
   readings は持たない（character がそのまま読み方でもある）。
   書き順データは KanjiVG（CC BY-SA 3.0）由来で、stroke-data.js 側の
   HIRAGANA_STROKE_DATA... ではなく共通の KANJI_STROKE_DATA に
   文字をキーとして格納している（漢字と同じキー空間を共有）。
   濁音・半濁音・拗音（が/ぱ/ゃ 等）は未収録。必要になったら
   この配列に同じ形式で追記する。
   ========================================================================= */

const hiraganaChars = [
  { character: "あ", strokeCount: 3 },
  { character: "い", strokeCount: 2 },
  { character: "う", strokeCount: 2 },
  { character: "え", strokeCount: 2 },
  { character: "お", strokeCount: 3 },
  { character: "か", strokeCount: 3 },
  { character: "き", strokeCount: 4 },
  { character: "く", strokeCount: 1 },
  { character: "け", strokeCount: 3 },
  { character: "こ", strokeCount: 2 },
  { character: "さ", strokeCount: 3 },
  { character: "し", strokeCount: 1 },
  { character: "す", strokeCount: 2 },
  { character: "せ", strokeCount: 3 },
  { character: "そ", strokeCount: 1 },
  { character: "た", strokeCount: 4 },
  { character: "ち", strokeCount: 2 },
  { character: "つ", strokeCount: 1 },
  { character: "て", strokeCount: 1 },
  { character: "と", strokeCount: 2 },
  { character: "な", strokeCount: 4 },
  { character: "に", strokeCount: 3 },
  { character: "ぬ", strokeCount: 2 },
  { character: "ね", strokeCount: 2 },
  { character: "の", strokeCount: 1 },
  { character: "は", strokeCount: 3 },
  { character: "ひ", strokeCount: 1 },
  { character: "ふ", strokeCount: 4 },
  { character: "へ", strokeCount: 1 },
  { character: "ほ", strokeCount: 4 },
  { character: "ま", strokeCount: 3 },
  { character: "み", strokeCount: 2 },
  { character: "む", strokeCount: 3 },
  { character: "め", strokeCount: 2 },
  { character: "も", strokeCount: 3 },
  { character: "や", strokeCount: 3 },
  { character: "ゆ", strokeCount: 2 },
  { character: "よ", strokeCount: 2 },
  { character: "ら", strokeCount: 2 },
  { character: "り", strokeCount: 2 },
  { character: "る", strokeCount: 1 },
  { character: "れ", strokeCount: 2 },
  { character: "ろ", strokeCount: 1 },
  { character: "わ", strokeCount: 2 },
  { character: "を", strokeCount: 3 },
  { character: "ん", strokeCount: 1 }
];
