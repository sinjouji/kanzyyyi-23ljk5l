/* =========================================================================
   kanji-data-grade5.js（データ層 / 小学5年生 193字）

   出典・検証方法:
   - 2020年度の学習指導要領改訂により、4年生で習っていた21字がこの学年に
     移動しています（囲・紀・喜・救・型・航・告・殺・士・史・象・賞・貯・
     停・堂・得・毒・費・粉・脈・歴）。
   - 画数・音読み・訓読みは KANJIDIC2（電子辞書研究開発グループ [EDRDG] 提供、
     CC BY-SA 4.0）と、学年別漢字の読み方をまとめた教育系ウェブサイトの一覧表を
     突き合わせて作成しています。
   - 画数は KANJIDIC2 のデータと、KanjiVG の実際の書き順ストローク数の
     両方が一致することを機械的に確認済みです（この学年の全字で完全一致）。
   - 読み方（音読み・訓読み）は、上記の一覧表が挙げていた候補を KANJIDIC2 の
     読み方一覧と照合し、辞書的に実在が確認できたものだけを採用しています。
     一覧表側の抜け・誤り（例:「際」が丸ごと抜けていた、「比」の訓読みが
     誤記されていた、画数の誤記が20件など）はKANJIDIC2で補正・追加しています。
   - この配列の並び順は、ユーザーから指定された一覧の並び順をそのまま採用して
     おり、読み方などによる並べ替えは行っていません（一覧ページはこの配列順の
     まま表示する）。

   readings.on  : 音読み配列。各要素 {text, grade}
   readings.kun : 訓読み配列。各要素 {base, okurigana, grade}
     - base      : 漢字部分の読み（例: 「わる」）
     - okurigana : 送り仮名部分（例: 「い」）。送り仮名が無い読みは "" にする
     - grade     : その読みを習う学年（学年外の読みを区別するための拡張用）
   ========================================================================= */

const grade5Kanji = [
  {
    kanji: "圧",
    sortReading: "あつ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "アツ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "囲",
    sortReading: "い",
    strokeCount: 7,
    readings: {
      on: [
        { text: "イ", grade: 5 }
      ],
      kun: [
        { base: "かこ", okurigana: "む", grade: 5 }
      ]
    }
  },
  {
    kanji: "移",
    sortReading: "い",
    strokeCount: 11,
    readings: {
      on: [
        { text: "イ", grade: 5 }
      ],
      kun: [
        { base: "うつ", okurigana: "す", grade: 5 },
        { base: "うつ", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "因",
    sortReading: "いん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "イン", grade: 5 }
      ],
      kun: [
        { base: "ちな", okurigana: "む", grade: 5 },
        { base: "よ", okurigana: "って", grade: 5 }
      ]
    }
  },
  {
    kanji: "永",
    sortReading: "えい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "エイ", grade: 5 }
      ],
      kun: [
        { base: "なが", okurigana: "い", grade: 5 }
      ]
    }
  },
  {
    kanji: "営",
    sortReading: "えい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "エイ", grade: 5 }
      ],
      kun: [
        { base: "いとな", okurigana: "む", grade: 5 }
      ]
    }
  },
  {
    kanji: "衛",
    sortReading: "え",
    strokeCount: 16,
    readings: {
      on: [
        { text: "エ", grade: 5 },
        { text: "エイ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "易",
    sortReading: "い",
    strokeCount: 8,
    readings: {
      on: [
        { text: "イ", grade: 5 },
        { text: "エキ", grade: 5 }
      ],
      kun: [
        { base: "やさ", okurigana: "しい", grade: 5 }
      ]
    }
  },
  {
    kanji: "益",
    sortReading: "えき",
    strokeCount: 10,
    readings: {
      on: [
        { text: "エキ", grade: 5 },
        { text: "ヤク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "液",
    sortReading: "えき",
    strokeCount: 11,
    readings: {
      on: [
        { text: "エキ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "演",
    sortReading: "えん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "エン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "応",
    sortReading: "おう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "オウ", grade: 5 }
      ],
      kun: [
        { base: "こた", okurigana: "える", grade: 5 }
      ]
    }
  },
  {
    kanji: "往",
    sortReading: "おう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "オウ", grade: 5 }
      ],
      kun: [
        { base: "い", okurigana: "く", grade: 5 },
        { base: "ゆ", okurigana: "く", grade: 5 }
      ]
    }
  },
  {
    kanji: "桜",
    sortReading: "おう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "オウ", grade: 5 }
      ],
      kun: [
        { base: "さくら", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "可",
    sortReading: "か",
    strokeCount: 5,
    readings: {
      on: [
        { text: "カ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "仮",
    sortReading: "か",
    strokeCount: 6,
    readings: {
      on: [
        { text: "カ", grade: 5 },
        { text: "ケ", grade: 5 }
      ],
      kun: [
        { base: "かり", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "価",
    sortReading: "か",
    strokeCount: 8,
    readings: {
      on: [
        { text: "カ", grade: 5 }
      ],
      kun: [
        { base: "あたい", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "河",
    sortReading: "か",
    strokeCount: 8,
    readings: {
      on: [
        { text: "カ", grade: 5 }
      ],
      kun: [
        { base: "かわ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "過",
    sortReading: "か",
    strokeCount: 12,
    readings: {
      on: [
        { text: "カ", grade: 5 }
      ],
      kun: [
        { base: "す", okurigana: "ぎる", grade: 5 },
        { base: "あやま", okurigana: "ち", grade: 5 }
      ]
    }
  },
  {
    kanji: "快",
    sortReading: "かい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "カイ", grade: 5 }
      ],
      kun: [
        { base: "こころよ", okurigana: "い", grade: 5 }
      ]
    }
  },
  {
    kanji: "解",
    sortReading: "かい",
    strokeCount: 13,
    readings: {
      on: [
        { text: "カイ", grade: 5 },
        { text: "ゲ", grade: 5 }
      ],
      kun: [
        { base: "と", okurigana: "く", grade: 5 }
      ]
    }
  },
  {
    kanji: "格",
    sortReading: "かく",
    strokeCount: 10,
    readings: {
      on: [
        { text: "カク", grade: 5 },
        { text: "コウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "確",
    sortReading: "かく",
    strokeCount: 15,
    readings: {
      on: [
        { text: "カク", grade: 5 }
      ],
      kun: [
        { base: "たし", okurigana: "かめる", grade: 5 }
      ]
    }
  },
  {
    kanji: "額",
    sortReading: "がく",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ガク", grade: 5 }
      ],
      kun: [
        { base: "ひたい", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "刊",
    sortReading: "かん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "カン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "幹",
    sortReading: "かん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "カン", grade: 5 }
      ],
      kun: [
        { base: "みき", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "慣",
    sortReading: "かん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "カン", grade: 5 }
      ],
      kun: [
        { base: "な", okurigana: "れる", grade: 5 }
      ]
    }
  },
  {
    kanji: "眼",
    sortReading: "がん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ガン", grade: 5 }
      ],
      kun: [
        { base: "まなこ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "紀",
    sortReading: "き",
    strokeCount: 9,
    readings: {
      on: [
        { text: "キ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "基",
    sortReading: "き",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キ", grade: 5 }
      ],
      kun: [
        { base: "もと", okurigana: "", grade: 5 },
        { base: "もとい", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "寄",
    sortReading: "き",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キ", grade: 5 }
      ],
      kun: [
        { base: "よ", okurigana: "せる", grade: 5 }
      ]
    }
  },
  {
    kanji: "規",
    sortReading: "き",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "喜",
    sortReading: "き",
    strokeCount: 12,
    readings: {
      on: [
        { text: "キ", grade: 5 }
      ],
      kun: [
        { base: "よろこ", okurigana: "び", grade: 5 }
      ]
    }
  },
  {
    kanji: "技",
    sortReading: "ぎ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ギ", grade: 5 }
      ],
      kun: [
        { base: "わざ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "義",
    sortReading: "ぎ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ギ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "逆",
    sortReading: "ぎゃく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ギャク", grade: 5 }
      ],
      kun: [
        { base: "さか", okurigana: "", grade: 5 },
        { base: "さか", okurigana: "らう", grade: 5 }
      ]
    }
  },
  {
    kanji: "久",
    sortReading: "きゅう",
    strokeCount: 3,
    readings: {
      on: [
        { text: "キュウ", grade: 5 },
        { text: "ク", grade: 5 }
      ],
      kun: [
        { base: "ひさ", okurigana: "しい", grade: 5 }
      ]
    }
  },
  {
    kanji: "旧",
    sortReading: "きゅう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "キュウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "救",
    sortReading: "きゅう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キュウ", grade: 5 }
      ],
      kun: [
        { base: "すく", okurigana: "う", grade: 5 }
      ]
    }
  },
  {
    kanji: "居",
    sortReading: "きょ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "キョ", grade: 5 }
      ],
      kun: [
        { base: "い", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "許",
    sortReading: "きょ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キョ", grade: 5 }
      ],
      kun: [
        { base: "ゆる", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "境",
    sortReading: "きょう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "キョウ", grade: 5 },
        { text: "ケイ", grade: 5 }
      ],
      kun: [
        { base: "さかい", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "均",
    sortReading: "きん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "キン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "禁",
    sortReading: "きん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "キン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "句",
    sortReading: "く",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "型",
    sortReading: "けい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ケイ", grade: 5 }
      ],
      kun: [
        { base: "かた", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "経",
    sortReading: "けい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ケイ", grade: 5 },
        { text: "キョウ", grade: 5 }
      ],
      kun: [
        { base: "へ", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "潔",
    sortReading: "けつ",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ケツ", grade: 5 }
      ],
      kun: [
        { base: "いさぎよ", okurigana: "い", grade: 5 }
      ]
    }
  },
  {
    kanji: "件",
    sortReading: "けん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ケン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "険",
    sortReading: "けん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ケン", grade: 5 }
      ],
      kun: [
        { base: "けわ", okurigana: "しい", grade: 5 }
      ]
    }
  },
  {
    kanji: "検",
    sortReading: "けん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ケン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "限",
    sortReading: "げん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ゲン", grade: 5 }
      ],
      kun: [
        { base: "かぎ", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "現",
    sortReading: "げん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ゲン", grade: 5 }
      ],
      kun: [
        { base: "あらわ", okurigana: "れる", grade: 5 }
      ]
    }
  },
  {
    kanji: "減",
    sortReading: "げん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ゲン", grade: 5 }
      ],
      kun: [
        { base: "へ", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "故",
    sortReading: "こ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "コ", grade: 5 }
      ],
      kun: [
        { base: "ゆえ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "個",
    sortReading: "こ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "護",
    sortReading: "ご",
    strokeCount: 20,
    readings: {
      on: [
        { text: "ゴ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "効",
    sortReading: "こう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "コウ", grade: 5 }
      ],
      kun: [
        { base: "き", okurigana: "く", grade: 5 }
      ]
    }
  },
  {
    kanji: "厚",
    sortReading: "こう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "コウ", grade: 5 }
      ],
      kun: [
        { base: "あつ", okurigana: "い", grade: 5 }
      ]
    }
  },
  {
    kanji: "耕",
    sortReading: "こう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コウ", grade: 5 }
      ],
      kun: [
        { base: "たがや", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "航",
    sortReading: "こう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "鉱",
    sortReading: "こう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "コウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "構",
    sortReading: "こう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "コウ", grade: 5 }
      ],
      kun: [
        { base: "かま", okurigana: "う", grade: 5 }
      ]
    }
  },
  {
    kanji: "興",
    sortReading: "こう",
    strokeCount: 16,
    readings: {
      on: [
        { text: "コウ", grade: 5 },
        { text: "キョウ", grade: 5 }
      ],
      kun: [
        { base: "おこ", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "講",
    sortReading: "こう",
    strokeCount: 17,
    readings: {
      on: [
        { text: "コウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "告",
    sortReading: "こく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "コク", grade: 5 }
      ],
      kun: [
        { base: "つ", okurigana: "げる", grade: 5 }
      ]
    }
  },
  {
    kanji: "混",
    sortReading: "こん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "コン", grade: 5 }
      ],
      kun: [
        { base: "ま", okurigana: "ざる", grade: 5 }
      ]
    }
  },
  {
    kanji: "査",
    sortReading: "さ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "サ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "再",
    sortReading: "さ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "サ", grade: 5 },
        { text: "サイ", grade: 5 }
      ],
      kun: [
        { base: "ふたた", okurigana: "び", grade: 5 }
      ]
    }
  },
  {
    kanji: "災",
    sortReading: "さい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "サイ", grade: 5 }
      ],
      kun: [
        { base: "わざわい", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "妻",
    sortReading: "さい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "サイ", grade: 5 }
      ],
      kun: [
        { base: "つま", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "採",
    sortReading: "さい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "サイ", grade: 5 }
      ],
      kun: [
        { base: "と", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "際",
    sortReading: "さい",
    strokeCount: 14,
    readings: {
      on: [
        { text: "サイ", grade: 5 }
      ],
      kun: [
        { base: "きわ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "在",
    sortReading: "ざい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ザイ", grade: 5 }
      ],
      kun: [
        { base: "あ", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "財",
    sortReading: "ざい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ザイ", grade: 5 },
        { text: "サイ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "罪",
    sortReading: "ざい",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ザイ", grade: 5 }
      ],
      kun: [
        { base: "つみ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "殺",
    sortReading: "さつ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "サツ", grade: 5 },
        { text: "サイ", grade: 5 },
        { text: "セツ", grade: 5 }
      ],
      kun: [
        { base: "ころ", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "雑",
    sortReading: "ざつ",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ザツ", grade: 5 },
        { text: "ゾウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "酸",
    sortReading: "さん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "サン", grade: 5 }
      ],
      kun: [
        { base: "す", okurigana: "い", grade: 5 }
      ]
    }
  },
  {
    kanji: "賛",
    sortReading: "さん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "サン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "士",
    sortReading: "し",
    strokeCount: 3,
    readings: {
      on: [
        { text: "シ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "支",
    sortReading: "し",
    strokeCount: 4,
    readings: {
      on: [
        { text: "シ", grade: 5 }
      ],
      kun: [
        { base: "ささ", okurigana: "える", grade: 5 }
      ]
    }
  },
  {
    kanji: "史",
    sortReading: "し",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "志",
    sortReading: "し",
    strokeCount: 7,
    readings: {
      on: [
        { text: "シ", grade: 5 }
      ],
      kun: [
        { base: "こころざし", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "枝",
    sortReading: "し",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シ", grade: 5 }
      ],
      kun: [
        { base: "えだ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "師",
    sortReading: "し",
    strokeCount: 10,
    readings: {
      on: [
        { text: "シ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "資",
    sortReading: "し",
    strokeCount: 13,
    readings: {
      on: [
        { text: "シ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "飼",
    sortReading: "し",
    strokeCount: 13,
    readings: {
      on: [
        { text: "シ", grade: 5 }
      ],
      kun: [
        { base: "か", okurigana: "う", grade: 5 }
      ]
    }
  },
  {
    kanji: "示",
    sortReading: "し",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シ", grade: 5 },
        { text: "ジ", grade: 5 }
      ],
      kun: [
        { base: "しめ", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "似",
    sortReading: "じ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ジ", grade: 5 }
      ],
      kun: [
        { base: "に", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "識",
    sortReading: "しき",
    strokeCount: 19,
    readings: {
      on: [
        { text: "シキ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "質",
    sortReading: "しつ",
    strokeCount: 15,
    readings: {
      on: [
        { text: "シツ", grade: 5 },
        { text: "シチ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "舎",
    sortReading: "しゃ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シャ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "謝",
    sortReading: "しゃ",
    strokeCount: 17,
    readings: {
      on: [
        { text: "シャ", grade: 5 }
      ],
      kun: [
        { base: "あやま", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "授",
    sortReading: "じゅ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ジュ", grade: 5 }
      ],
      kun: [
        { base: "さず", okurigana: "かる", grade: 5 }
      ]
    }
  },
  {
    kanji: "修",
    sortReading: "しゅう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "シュウ", grade: 5 }
      ],
      kun: [
        { base: "おさ", okurigana: "める", grade: 5 }
      ]
    }
  },
  {
    kanji: "述",
    sortReading: "じゅつ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ジュツ", grade: 5 }
      ],
      kun: [
        { base: "の", okurigana: "べる", grade: 5 }
      ]
    }
  },
  {
    kanji: "術",
    sortReading: "じゅつ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ジュツ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "準",
    sortReading: "じゅん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ジュン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "序",
    sortReading: "じょ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ジョ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "招",
    sortReading: "しょう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ショウ", grade: 5 }
      ],
      kun: [
        { base: "まね", okurigana: "く", grade: 5 }
      ]
    }
  },
  {
    kanji: "証",
    sortReading: "しょう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ショウ", grade: 5 }
      ],
      kun: [
        { base: "あかし", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "象",
    sortReading: "しょう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ショウ", grade: 5 },
        { text: "ゾウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "賞",
    sortReading: "しょう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ショウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "条",
    sortReading: "じょう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ジョウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "状",
    sortReading: "じょう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ジョウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "常",
    sortReading: "じょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ジョウ", grade: 5 }
      ],
      kun: [
        { base: "つね", okurigana: "", grade: 5 },
        { base: "とこ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "情",
    sortReading: "じょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ジョウ", grade: 5 },
        { text: "セイ", grade: 5 }
      ],
      kun: [
        { base: "なさけ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "織",
    sortReading: "しょく",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ショク", grade: 5 },
        { text: "シキ", grade: 5 }
      ],
      kun: [
        { base: "お", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "職",
    sortReading: "しょく",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ショク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "制",
    sortReading: "せい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "セイ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "性",
    sortReading: "せい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "セイ", grade: 5 },
        { text: "ショウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "政",
    sortReading: "せい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "セイ", grade: 5 },
        { text: "ショウ", grade: 5 }
      ],
      kun: [
        { base: "まつりごと", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "勢",
    sortReading: "せい",
    strokeCount: 13,
    readings: {
      on: [
        { text: "セイ", grade: 5 }
      ],
      kun: [
        { base: "いきお", okurigana: "い", grade: 5 }
      ]
    }
  },
  {
    kanji: "精",
    sortReading: "せい",
    strokeCount: 14,
    readings: {
      on: [
        { text: "セイ", grade: 5 },
        { text: "ショウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "製",
    sortReading: "せい",
    strokeCount: 14,
    readings: {
      on: [
        { text: "セイ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "税",
    sortReading: "ぜい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ゼイ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "責",
    sortReading: "せき",
    strokeCount: 11,
    readings: {
      on: [
        { text: "セキ", grade: 5 }
      ],
      kun: [
        { base: "せ", okurigana: "める", grade: 5 }
      ]
    }
  },
  {
    kanji: "績",
    sortReading: "せき",
    strokeCount: 17,
    readings: {
      on: [
        { text: "セキ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "接",
    sortReading: "せつ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "セツ", grade: 5 }
      ],
      kun: [
        { base: "つ", okurigana: "ぐ", grade: 5 }
      ]
    }
  },
  {
    kanji: "設",
    sortReading: "せつ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "セツ", grade: 5 }
      ],
      kun: [
        { base: "もう", okurigana: "ける", grade: 5 }
      ]
    }
  },
  {
    kanji: "絶",
    sortReading: "ぜつ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ゼツ", grade: 5 }
      ],
      kun: [
        { base: "た", okurigana: "つ", grade: 5 },
        { base: "た", okurigana: "える", grade: 5 }
      ]
    }
  },
  {
    kanji: "祖",
    sortReading: "そ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ソ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "素",
    sortReading: "そ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ソ", grade: 5 },
        { text: "ス", grade: 5 }
      ],
      kun: [
        { base: "もと", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "総",
    sortReading: "そう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ソウ", grade: 5 }
      ],
      kun: [
        { base: "す", okurigana: "べる", grade: 5 },
        { base: "ふさ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "造",
    sortReading: "ぞう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ゾウ", grade: 5 }
      ],
      kun: [
        { base: "つく", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "像",
    sortReading: "ぞう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ゾウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "増",
    sortReading: "ぞう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ゾウ", grade: 5 }
      ],
      kun: [
        { base: "ふ", okurigana: "える", grade: 5 },
        { base: "ま", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "則",
    sortReading: "そく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ソク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "測",
    sortReading: "そく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ソク", grade: 5 }
      ],
      kun: [
        { base: "はか", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "属",
    sortReading: "ぞく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ゾク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "率",
    sortReading: "そつ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ソツ", grade: 5 },
        { text: "リツ", grade: 5 }
      ],
      kun: [
        { base: "ひき", okurigana: "いる", grade: 5 }
      ]
    }
  },
  {
    kanji: "損",
    sortReading: "そん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ソン", grade: 5 }
      ],
      kun: [
        { base: "そこ", okurigana: "なう", grade: 5 }
      ]
    }
  },
  {
    kanji: "貸",
    sortReading: "たい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "タイ", grade: 5 }
      ],
      kun: [
        { base: "か", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "態",
    sortReading: "たい",
    strokeCount: 14,
    readings: {
      on: [
        { text: "タイ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "団",
    sortReading: "だん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ダン", grade: 5 },
        { text: "トン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "断",
    sortReading: "だん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ダン", grade: 5 }
      ],
      kun: [
        { base: "ことわ", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "築",
    sortReading: "ちく",
    strokeCount: 16,
    readings: {
      on: [
        { text: "チク", grade: 5 }
      ],
      kun: [
        { base: "きず", okurigana: "く", grade: 5 }
      ]
    }
  },
  {
    kanji: "貯",
    sortReading: "ちょ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "チョ", grade: 5 }
      ],
      kun: [
        { base: "た", okurigana: "める", grade: 5 }
      ]
    }
  },
  {
    kanji: "張",
    sortReading: "ちょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "チョウ", grade: 5 }
      ],
      kun: [
        { base: "は", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "停",
    sortReading: "てい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "テイ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "提",
    sortReading: "てい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "テイ", grade: 5 }
      ],
      kun: [
        { base: "さ", okurigana: "げる", grade: 5 }
      ]
    }
  },
  {
    kanji: "程",
    sortReading: "てい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "テイ", grade: 5 }
      ],
      kun: [
        { base: "ほど", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "適",
    sortReading: "てき",
    strokeCount: 14,
    readings: {
      on: [
        { text: "テキ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "統",
    sortReading: "とう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "トウ", grade: 5 }
      ],
      kun: [
        { base: "す", okurigana: "べる", grade: 5 }
      ]
    }
  },
  {
    kanji: "堂",
    sortReading: "どう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ドウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "銅",
    sortReading: "どう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ドウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "導",
    sortReading: "どう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ドウ", grade: 5 }
      ],
      kun: [
        { base: "みちび", okurigana: "く", grade: 5 }
      ]
    }
  },
  {
    kanji: "得",
    sortReading: "とく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "トク", grade: 5 }
      ],
      kun: [
        { base: "え", okurigana: "る", grade: 5 },
        { base: "う", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "毒",
    sortReading: "どく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ドク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "独",
    sortReading: "どく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ドク", grade: 5 }
      ],
      kun: [
        { base: "ひと", okurigana: "り", grade: 5 }
      ]
    }
  },
  {
    kanji: "任",
    sortReading: "にん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ニン", grade: 5 }
      ],
      kun: [
        { base: "まか", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "燃",
    sortReading: "ねん",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ネン", grade: 5 }
      ],
      kun: [
        { base: "も", okurigana: "える", grade: 5 }
      ]
    }
  },
  {
    kanji: "能",
    sortReading: "のう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ノウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "破",
    sortReading: "は",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ハ", grade: 5 }
      ],
      kun: [
        { base: "やぶ", okurigana: "れる", grade: 5 }
      ]
    }
  },
  {
    kanji: "犯",
    sortReading: "はん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ハン", grade: 5 }
      ],
      kun: [
        { base: "おか", okurigana: "す", grade: 5 }
      ]
    }
  },
  {
    kanji: "判",
    sortReading: "はん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ハン", grade: 5 },
        { text: "バン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "版",
    sortReading: "はん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ハン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "比",
    sortReading: "ひ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ヒ", grade: 5 }
      ],
      kun: [
        { base: "くら", okurigana: "べる", grade: 5 }
      ]
    }
  },
  {
    kanji: "肥",
    sortReading: "ひ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ヒ", grade: 5 }
      ],
      kun: [
        { base: "こ", okurigana: "え", grade: 5 },
        { base: "こ", okurigana: "える", grade: 5 }
      ]
    }
  },
  {
    kanji: "非",
    sortReading: "ひ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ヒ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "費",
    sortReading: "ひ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ヒ", grade: 5 }
      ],
      kun: [
        { base: "つい", okurigana: "やす", grade: 5 }
      ]
    }
  },
  {
    kanji: "備",
    sortReading: "び",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ビ", grade: 5 }
      ],
      kun: [
        { base: "そな", okurigana: "える", grade: 5 }
      ]
    }
  },
  {
    kanji: "評",
    sortReading: "ひょう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ヒョウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "貧",
    sortReading: "ひん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ヒン", grade: 5 },
        { text: "ビン", grade: 5 }
      ],
      kun: [
        { base: "まず", okurigana: "しい", grade: 5 }
      ]
    }
  },
  {
    kanji: "布",
    sortReading: "ふ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "フ", grade: 5 }
      ],
      kun: [
        { base: "ぬの", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "婦",
    sortReading: "ふ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "フ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "武",
    sortReading: "ぶ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ブ", grade: 5 },
        { text: "ム", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "復",
    sortReading: "ふく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "フク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "複",
    sortReading: "ふく",
    strokeCount: 14,
    readings: {
      on: [
        { text: "フク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "仏",
    sortReading: "ぶつ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ブツ", grade: 5 }
      ],
      kun: [
        { base: "ほとけ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "粉",
    sortReading: "ふん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "フン", grade: 5 }
      ],
      kun: [
        { base: "こな", okurigana: "", grade: 5 },
        { base: "こ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "編",
    sortReading: "へん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ヘン", grade: 5 }
      ],
      kun: [
        { base: "あ", okurigana: "む", grade: 5 }
      ]
    }
  },
  {
    kanji: "弁",
    sortReading: "べん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ベン", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "保",
    sortReading: "ほ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ホ", grade: 5 }
      ],
      kun: [
        { base: "たも", okurigana: "つ", grade: 5 }
      ]
    }
  },
  {
    kanji: "墓",
    sortReading: "ぼ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ボ", grade: 5 }
      ],
      kun: [
        { base: "はか", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "報",
    sortReading: "ほう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ホウ", grade: 5 }
      ],
      kun: [
        { base: "むく", okurigana: "いる", grade: 5 }
      ]
    }
  },
  {
    kanji: "豊",
    sortReading: "ほう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ホウ", grade: 5 }
      ],
      kun: [
        { base: "ゆたか", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "防",
    sortReading: "ぼう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ボウ", grade: 5 }
      ],
      kun: [
        { base: "ふせ", okurigana: "ぐ", grade: 5 }
      ]
    }
  },
  {
    kanji: "貿",
    sortReading: "ぼう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ボウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "暴",
    sortReading: "ぼう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ボウ", grade: 5 }
      ],
      kun: [
        { base: "あば", okurigana: "れる", grade: 5 }
      ]
    }
  },
  {
    kanji: "脈",
    sortReading: "みゃく",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ミャク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "務",
    sortReading: "む",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ム", grade: 5 }
      ],
      kun: [
        { base: "つと", okurigana: "める", grade: 5 }
      ]
    }
  },
  {
    kanji: "夢",
    sortReading: "む",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ム", grade: 5 }
      ],
      kun: [
        { base: "ゆめ", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "迷",
    sortReading: "めい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "メイ", grade: 5 }
      ],
      kun: [
        { base: "まよ", okurigana: "う", grade: 5 }
      ]
    }
  },
  {
    kanji: "綿",
    sortReading: "めん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "メン", grade: 5 }
      ],
      kun: [
        { base: "わた", okurigana: "", grade: 5 }
      ]
    }
  },
  {
    kanji: "輸",
    sortReading: "ゆ",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ユ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "余",
    sortReading: "よ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ヨ", grade: 5 }
      ],
      kun: [
        { base: "あま", okurigana: "る", grade: 5 }
      ]
    }
  },
  {
    kanji: "容",
    sortReading: "よう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ヨウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "略",
    sortReading: "りゃく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "リャク", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "留",
    sortReading: "りゅう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "リュウ", grade: 5 },
        { text: "ル", grade: 5 }
      ],
      kun: [
        { base: "と", okurigana: "める", grade: 5 }
      ]
    }
  },
  {
    kanji: "領",
    sortReading: "りょう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "リョウ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "歴",
    sortReading: "れき",
    strokeCount: 14,
    readings: {
      on: [
        { text: "レキ", grade: 5 }
      ],
      kun: [
        
      ]
    }
  }
];
