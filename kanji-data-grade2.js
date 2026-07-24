/* =========================================================================
   kanji-data-grade2.js（データ層 / 小学2年生 160字）

   出典・検証方法:
   - 画数・音読み・訓読みは KANJIDIC2（電子辞書研究開発グループ [EDRDG] 提供、
     CC BY-SA 4.0）と、学年別漢字の読み方をまとめた教育系ウェブサイトの一覧表を
     突き合わせて作成しています。
   - 対象の160字は、KANJIDIC2の学年情報（文部科学省の学年別漢字配当表に基づく）
     でgrade=2として登録されている漢字と完全に一致することを確認済みです。
   - 画数は KANJIDIC2 のデータと、KanjiVG の実際の書き順ストローク数の
     両方が一致することを機械的に確認済みです（この学年の全字で完全一致）。
   - 読み方（音読み・訓読み）は、上記の一覧表が挙げていた候補を KANJIDIC2 の
     読み方一覧と照合し、辞書的に実在が確認できたものだけを採用しています。
     一覧表の誤り（例: 「体」の画数が4画と誤記されていた、「絵」の「え」が
     訓読み欄に誤って記載されていた等）はKANJIDIC2の値で補正しています。
   - この配列の並び順は、教育系ウェブサイトの一覧表の掲載順をそのまま採用して
     おり、読み方などによる並べ替えは行っていません（一覧ページはこの配列順の
     まま表示する）。

   readings.on  : 音読み配列。各要素 {text, grade}
   readings.kun : 訓読み配列。各要素 {base, okurigana, grade}
     - base      : 漢字部分の読み（例: 「わる」）
     - okurigana : 送り仮名部分（例: 「い」）。送り仮名が無い読みは "" にする
     - grade     : その読みを習う学年（学年外の読みを区別するための拡張用）
   ========================================================================= */

const grade2Kanji = [
  {
    kanji: "引",
    sortReading: "いん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "イン", grade: 2 }
      ],
      kun: [
        { base: "ひ", okurigana: "く", grade: 2 }
      ]
    }
  },
  {
    kanji: "羽",
    sortReading: "う",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ウ", grade: 2 }
      ],
      kun: [
        { base: "はね", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "園",
    sortReading: "えん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "エン", grade: 2 }
      ],
      kun: [
        { base: "その", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "遠",
    sortReading: "えん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "エン", grade: 2 },
        { text: "オン", grade: 2 }
      ],
      kun: [
        { base: "とお", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "雲",
    sortReading: "うん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ウン", grade: 2 }
      ],
      kun: [
        { base: "くも", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "何",
    sortReading: "か",
    strokeCount: 7,
    readings: {
      on: [
        { text: "カ", grade: 2 }
      ],
      kun: [
        { base: "なに", okurigana: "", grade: 2 },
        { base: "なん", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "科",
    sortReading: "か",
    strokeCount: 9,
    readings: {
      on: [
        { text: "カ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "夏",
    sortReading: "か",
    strokeCount: 10,
    readings: {
      on: [
        { text: "カ", grade: 2 },
        { text: "ゲ", grade: 2 }
      ],
      kun: [
        { base: "なつ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "家",
    sortReading: "か",
    strokeCount: 10,
    readings: {
      on: [
        { text: "カ", grade: 2 },
        { text: "ケ", grade: 2 }
      ],
      kun: [
        { base: "いえ", okurigana: "", grade: 2 },
        { base: "や", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "歌",
    sortReading: "か",
    strokeCount: 14,
    readings: {
      on: [
        { text: "カ", grade: 2 }
      ],
      kun: [
        { base: "うた", okurigana: "", grade: 2 },
        { base: "うた", okurigana: "う", grade: 2 }
      ]
    }
  },
  {
    kanji: "画",
    sortReading: "が",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ガ", grade: 2 }
      ],
      kun: [
        { base: "えが", okurigana: "く", grade: 2 },
        { base: "かく", okurigana: "する", grade: 2 }
      ]
    }
  },
  {
    kanji: "回",
    sortReading: "かい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "カイ", grade: 2 },
        { text: "エ", grade: 2 }
      ],
      kun: [
        { base: "まわ", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "会",
    sortReading: "かい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "カイ", grade: 2 },
        { text: "エ", grade: 2 }
      ],
      kun: [
        { base: "あ", okurigana: "う", grade: 2 }
      ]
    }
  },
  {
    kanji: "海",
    sortReading: "かい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "カイ", grade: 2 }
      ],
      kun: [
        { base: "うみ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "絵",
    sortReading: "かい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "カイ", grade: 2 },
        { text: "エ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "外",
    sortReading: "がい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ガイ", grade: 2 },
        { text: "ゲ", grade: 2 }
      ],
      kun: [
        { base: "そと", okurigana: "", grade: 2 },
        { base: "ほか", okurigana: "", grade: 2 },
        { base: "はず", okurigana: "す", grade: 2 }
      ]
    }
  },
  {
    kanji: "角",
    sortReading: "かく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "カク", grade: 2 }
      ],
      kun: [
        { base: "つの", okurigana: "", grade: 2 },
        { base: "かど", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "楽",
    sortReading: "らく",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ラク", grade: 2 },
        { text: "ガク", grade: 2 }
      ],
      kun: [
        { base: "たの", okurigana: "しい", grade: 2 }
      ]
    }
  },
  {
    kanji: "活",
    sortReading: "かつ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "カツ", grade: 2 }
      ],
      kun: [
        { base: "い", okurigana: "きる", grade: 2 }
      ]
    }
  },
  {
    kanji: "間",
    sortReading: "かん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "カン", grade: 2 },
        { text: "ケン", grade: 2 }
      ],
      kun: [
        { base: "あいだ", okurigana: "", grade: 2 },
        { base: "ま", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "丸",
    sortReading: "がん",
    strokeCount: 3,
    readings: {
      on: [
        { text: "ガン", grade: 2 }
      ],
      kun: [
        { base: "まる", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "岩",
    sortReading: "がん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ガン", grade: 2 }
      ],
      kun: [
        { base: "いわ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "顔",
    sortReading: "がん",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ガン", grade: 2 }
      ],
      kun: [
        { base: "かお", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "汽",
    sortReading: "き",
    strokeCount: 7,
    readings: {
      on: [
        { text: "キ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "記",
    sortReading: "き",
    strokeCount: 10,
    readings: {
      on: [
        { text: "キ", grade: 2 }
      ],
      kun: [
        { base: "しる", okurigana: "す", grade: 2 }
      ]
    }
  },
  {
    kanji: "帰",
    sortReading: "き",
    strokeCount: 10,
    readings: {
      on: [
        { text: "キ", grade: 2 }
      ],
      kun: [
        { base: "かえ", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "弓",
    sortReading: "きゅう",
    strokeCount: 3,
    readings: {
      on: [
        { text: "キュウ", grade: 2 }
      ],
      kun: [
        { base: "ゆみ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "牛",
    sortReading: "ぎゅう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ギュウ", grade: 2 }
      ],
      kun: [
        { base: "うし", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "魚",
    sortReading: "ぎょ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ギョ", grade: 2 }
      ],
      kun: [
        { base: "さかな", okurigana: "", grade: 2 },
        { base: "うお", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "京",
    sortReading: "きょう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "キョウ", grade: 2 },
        { text: "ケイ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "強",
    sortReading: "きょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キョウ", grade: 2 },
        { text: "ゴウ", grade: 2 }
      ],
      kun: [
        { base: "つよ", okurigana: "い", grade: 2 },
        { base: "し", okurigana: "いる", grade: 2 }
      ]
    }
  },
  {
    kanji: "教",
    sortReading: "きょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キョウ", grade: 2 }
      ],
      kun: [
        { base: "おし", okurigana: "える", grade: 2 },
        { base: "おそ", okurigana: "わる", grade: 2 }
      ]
    }
  },
  {
    kanji: "近",
    sortReading: "きん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "キン", grade: 2 }
      ],
      kun: [
        { base: "ちか", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "兄",
    sortReading: "けい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ケイ", grade: 2 },
        { text: "キョウ", grade: 2 }
      ],
      kun: [
        { base: "あに", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "形",
    sortReading: "けい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ケイ", grade: 2 },
        { text: "ギョウ", grade: 2 }
      ],
      kun: [
        { base: "かたち", okurigana: "", grade: 2 },
        { base: "かた", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "計",
    sortReading: "けい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ケイ", grade: 2 }
      ],
      kun: [
        { base: "はか", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "元",
    sortReading: "げん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ゲン", grade: 2 },
        { text: "ガン", grade: 2 }
      ],
      kun: [
        { base: "もと", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "言",
    sortReading: "げん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ゲン", grade: 2 },
        { text: "ゴン", grade: 2 }
      ],
      kun: [
        { base: "い", okurigana: "う", grade: 2 },
        { base: "こと", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "原",
    sortReading: "げん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ゲン", grade: 2 }
      ],
      kun: [
        { base: "はら", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "戸",
    sortReading: "こ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "コ", grade: 2 }
      ],
      kun: [
        { base: "と", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "古",
    sortReading: "こ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "コ", grade: 2 }
      ],
      kun: [
        { base: "ふる", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "午",
    sortReading: "ご",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ゴ", grade: 2 }
      ],
      kun: [
        { base: "うま", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "後",
    sortReading: "ご",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ゴ", grade: 2 }
      ],
      kun: [
        { base: "うし", okurigana: "ろ", grade: 2 },
        { base: "あと", okurigana: "", grade: 2 },
        { base: "のち", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "語",
    sortReading: "ご",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ゴ", grade: 2 }
      ],
      kun: [
        { base: "かた", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "工",
    sortReading: "こう",
    strokeCount: 3,
    readings: {
      on: [
        { text: "コウ", grade: 2 },
        { text: "ク", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "公",
    sortReading: "こう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "コウ", grade: 2 },
        { text: "ク", grade: 2 }
      ],
      kun: [
        { base: "おおやけ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "広",
    sortReading: "こう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "コウ", grade: 2 }
      ],
      kun: [
        { base: "ひろ", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "交",
    sortReading: "こう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "コウ", grade: 2 }
      ],
      kun: [
        { base: "まじ", okurigana: "わる", grade: 2 }
      ]
    }
  },
  {
    kanji: "光",
    sortReading: "こう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "コウ", grade: 2 }
      ],
      kun: [
        { base: "ひか", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "考",
    sortReading: "こう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "コウ", grade: 2 }
      ],
      kun: [
        { base: "かんが", okurigana: "える", grade: 2 }
      ]
    }
  },
  {
    kanji: "行",
    sortReading: "こう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "コウ", grade: 2 },
        { text: "ギョウ", grade: 2 }
      ],
      kun: [
        { base: "い", okurigana: "く", grade: 2 },
        { base: "ゆ", okurigana: "く", grade: 2 },
        { base: "おこな", okurigana: "う", grade: 2 }
      ]
    }
  },
  {
    kanji: "高",
    sortReading: "こう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コウ", grade: 2 }
      ],
      kun: [
        { base: "たか", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "黄",
    sortReading: "こう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "コウ", grade: 2 },
        { text: "オウ", grade: 2 }
      ],
      kun: [
        { base: "き", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "合",
    sortReading: "ごう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ゴウ", grade: 2 },
        { text: "カッ", grade: 2 }
      ],
      kun: [
        { base: "あ", okurigana: "う", grade: 2 }
      ]
    }
  },
  {
    kanji: "谷",
    sortReading: "こく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "コク", grade: 2 }
      ],
      kun: [
        { base: "たに", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "国",
    sortReading: "こく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "コク", grade: 2 }
      ],
      kun: [
        { base: "くに", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "黒",
    sortReading: "こく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "コク", grade: 2 }
      ],
      kun: [
        { base: "くろ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "今",
    sortReading: "こん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "コン", grade: 2 },
        { text: "キン", grade: 2 }
      ],
      kun: [
        { base: "いま", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "才",
    sortReading: "さい",
    strokeCount: 3,
    readings: {
      on: [
        { text: "サイ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "細",
    sortReading: "さい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "サイ", grade: 2 }
      ],
      kun: [
        { base: "ほそ", okurigana: "い", grade: 2 },
        { base: "ほそ", okurigana: "る", grade: 2 },
        { base: "こま", okurigana: "かい", grade: 2 }
      ]
    }
  },
  {
    kanji: "作",
    sortReading: "さく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "サク", grade: 2 },
        { text: "サ", grade: 2 }
      ],
      kun: [
        { base: "つく", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "算",
    sortReading: "さん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "サン", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "止",
    sortReading: "し",
    strokeCount: 4,
    readings: {
      on: [
        { text: "シ", grade: 2 }
      ],
      kun: [
        { base: "と", okurigana: "まる", grade: 2 }
      ]
    }
  },
  {
    kanji: "市",
    sortReading: "し",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シ", grade: 2 }
      ],
      kun: [
        { base: "いち", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "矢",
    sortReading: "し",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シ", grade: 2 }
      ],
      kun: [
        { base: "や", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "姉",
    sortReading: "し",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シ", grade: 2 }
      ],
      kun: [
        { base: "あね", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "思",
    sortReading: "し",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シ", grade: 2 }
      ],
      kun: [
        { base: "おも", okurigana: "う", grade: 2 }
      ]
    }
  },
  {
    kanji: "紙",
    sortReading: "し",
    strokeCount: 10,
    readings: {
      on: [
        { text: "シ", grade: 2 }
      ],
      kun: [
        { base: "かみ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "寺",
    sortReading: "じ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ジ", grade: 2 }
      ],
      kun: [
        { base: "てら", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "自",
    sortReading: "じ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ジ", grade: 2 },
        { text: "シ", grade: 2 }
      ],
      kun: [
        { base: "みずか", okurigana: "ら", grade: 2 }
      ]
    }
  },
  {
    kanji: "時",
    sortReading: "じ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ジ", grade: 2 }
      ],
      kun: [
        { base: "とき", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "室",
    sortReading: "しつ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シツ", grade: 2 }
      ],
      kun: [
        { base: "むろ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "社",
    sortReading: "しゃ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "シャ", grade: 2 }
      ],
      kun: [
        { base: "やしろ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "弱",
    sortReading: "じゃく",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ジャク", grade: 2 }
      ],
      kun: [
        { base: "よわ", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "首",
    sortReading: "しゅ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シュ", grade: 2 }
      ],
      kun: [
        { base: "くび", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "秋",
    sortReading: "しゅう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シュウ", grade: 2 }
      ],
      kun: [
        { base: "あき", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "週",
    sortReading: "しゅう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "シュウ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "春",
    sortReading: "しゅん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シュン", grade: 2 }
      ],
      kun: [
        { base: "はる", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "書",
    sortReading: "しょ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ショ", grade: 2 }
      ],
      kun: [
        { base: "か", okurigana: "く", grade: 2 }
      ]
    }
  },
  {
    kanji: "少",
    sortReading: "しょう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ショウ", grade: 2 }
      ],
      kun: [
        { base: "すく", okurigana: "ない", grade: 2 },
        { base: "すこ", okurigana: "し", grade: 2 }
      ]
    }
  },
  {
    kanji: "場",
    sortReading: "じょう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ジョウ", grade: 2 }
      ],
      kun: [
        { base: "ば", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "色",
    sortReading: "しき",
    strokeCount: 6,
    readings: {
      on: [
        { text: "シキ", grade: 2 },
        { text: "ショク", grade: 2 }
      ],
      kun: [
        { base: "いろ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "食",
    sortReading: "しょく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ショク", grade: 2 }
      ],
      kun: [
        { base: "た", okurigana: "べる", grade: 2 },
        { base: "く", okurigana: "う", grade: 2 }
      ]
    }
  },
  {
    kanji: "心",
    sortReading: "しん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "シン", grade: 2 }
      ],
      kun: [
        { base: "こころ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "新",
    sortReading: "しん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "シン", grade: 2 }
      ],
      kun: [
        { base: "あたら", okurigana: "しい", grade: 2 },
        { base: "あら", okurigana: "た", grade: 2 }
      ]
    }
  },
  {
    kanji: "親",
    sortReading: "しん",
    strokeCount: 16,
    readings: {
      on: [
        { text: "シン", grade: 2 }
      ],
      kun: [
        { base: "おや", okurigana: "", grade: 2 },
        { base: "した", okurigana: "しい", grade: 2 }
      ]
    }
  },
  {
    kanji: "図",
    sortReading: "ず",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ズ", grade: 2 },
        { text: "ト", grade: 2 }
      ],
      kun: [
        { base: "はか", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "数",
    sortReading: "すう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "スウ", grade: 2 }
      ],
      kun: [
        { base: "かず", okurigana: "", grade: 2 },
        { base: "かぞ", okurigana: "える", grade: 2 }
      ]
    }
  },
  {
    kanji: "西",
    sortReading: "せい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "セイ", grade: 2 },
        { text: "サイ", grade: 2 }
      ],
      kun: [
        { base: "にし", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "声",
    sortReading: "せい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "セイ", grade: 2 }
      ],
      kun: [
        { base: "こえ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "星",
    sortReading: "せい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "セイ", grade: 2 }
      ],
      kun: [
        { base: "ほし", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "晴",
    sortReading: "せい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "セイ", grade: 2 }
      ],
      kun: [
        { base: "は", okurigana: "れる", grade: 2 }
      ]
    }
  },
  {
    kanji: "切",
    sortReading: "せつ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "セツ", grade: 2 }
      ],
      kun: [
        { base: "き", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "雪",
    sortReading: "せつ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "セツ", grade: 2 }
      ],
      kun: [
        { base: "ゆき", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "船",
    sortReading: "せん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "セン", grade: 2 }
      ],
      kun: [
        { base: "ふね", okurigana: "", grade: 2 },
        { base: "ふな", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "線",
    sortReading: "せん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "セン", grade: 2 }
      ],
      kun: [
        { base: "すじ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "前",
    sortReading: "ぜん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ゼン", grade: 2 }
      ],
      kun: [
        { base: "まえ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "組",
    sortReading: "そ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ソ", grade: 2 }
      ],
      kun: [
        { base: "くみ", okurigana: "", grade: 2 },
        { base: "く", okurigana: "む", grade: 2 }
      ]
    }
  },
  {
    kanji: "走",
    sortReading: "そう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ソウ", grade: 2 }
      ],
      kun: [
        { base: "はし", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "多",
    sortReading: "た",
    strokeCount: 6,
    readings: {
      on: [
        { text: "タ", grade: 2 }
      ],
      kun: [
        { base: "おお", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "太",
    sortReading: "たい",
    strokeCount: 4,
    readings: {
      on: [
        { text: "タイ", grade: 2 },
        { text: "タ", grade: 2 }
      ],
      kun: [
        { base: "ふと", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "体",
    sortReading: "たい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "タイ", grade: 2 },
        { text: "テイ", grade: 2 }
      ],
      kun: [
        { base: "からだ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "台",
    sortReading: "だい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ダイ", grade: 2 },
        { text: "タイ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "地",
    sortReading: "ち",
    strokeCount: 6,
    readings: {
      on: [
        { text: "チ", grade: 2 },
        { text: "ジ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "池",
    sortReading: "ち",
    strokeCount: 6,
    readings: {
      on: [
        { text: "チ", grade: 2 }
      ],
      kun: [
        { base: "いけ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "知",
    sortReading: "ち",
    strokeCount: 8,
    readings: {
      on: [
        { text: "チ", grade: 2 }
      ],
      kun: [
        { base: "し", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "茶",
    sortReading: "ちゃ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "チャ", grade: 2 },
        { text: "サ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "昼",
    sortReading: "ちゅう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "チュウ", grade: 2 }
      ],
      kun: [
        { base: "ひる", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "長",
    sortReading: "ちょう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "チョウ", grade: 2 }
      ],
      kun: [
        { base: "なが", okurigana: "い", grade: 2 }
      ]
    }
  },
  {
    kanji: "鳥",
    sortReading: "ちょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "チョウ", grade: 2 }
      ],
      kun: [
        { base: "とり", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "朝",
    sortReading: "ちょう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "チョウ", grade: 2 }
      ],
      kun: [
        { base: "あさ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "直",
    sortReading: "ちょく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "チョク", grade: 2 },
        { text: "ジキ", grade: 2 }
      ],
      kun: [
        { base: "なお", okurigana: "す", grade: 2 }
      ]
    }
  },
  {
    kanji: "通",
    sortReading: "つう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ツウ", grade: 2 }
      ],
      kun: [
        { base: "とお", okurigana: "る", grade: 2 },
        { base: "かよ", okurigana: "う", grade: 2 },
        { base: "とおり", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "弟",
    sortReading: "だい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ダイ", grade: 2 }
      ],
      kun: [
        { base: "おとうと", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "店",
    sortReading: "てん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "テン", grade: 2 }
      ],
      kun: [
        { base: "みせ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "点",
    sortReading: "てん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "テン", grade: 2 }
      ],
      kun: [
        { base: "つ", okurigana: "ける", grade: 2 },
        { base: "つ", okurigana: "く", grade: 2 }
      ]
    }
  },
  {
    kanji: "電",
    sortReading: "でん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "デン", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "刀",
    sortReading: "とう",
    strokeCount: 2,
    readings: {
      on: [
        { text: "トウ", grade: 2 }
      ],
      kun: [
        { base: "かたな", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "冬",
    sortReading: "とう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "トウ", grade: 2 }
      ],
      kun: [
        { base: "ふゆ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "当",
    sortReading: "とう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "トウ", grade: 2 }
      ],
      kun: [
        { base: "あ", okurigana: "たる", grade: 2 }
      ]
    }
  },
  {
    kanji: "東",
    sortReading: "とう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "トウ", grade: 2 }
      ],
      kun: [
        { base: "ひがし", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "答",
    sortReading: "とう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "トウ", grade: 2 }
      ],
      kun: [
        { base: "こた", okurigana: "える", grade: 2 }
      ]
    }
  },
  {
    kanji: "頭",
    sortReading: "とう",
    strokeCount: 16,
    readings: {
      on: [
        { text: "トウ", grade: 2 },
        { text: "ズ", grade: 2 }
      ],
      kun: [
        { base: "あたま", okurigana: "", grade: 2 },
        { base: "かしら", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "同",
    sortReading: "どう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ドウ", grade: 2 }
      ],
      kun: [
        { base: "おな", okurigana: "じ", grade: 2 }
      ]
    }
  },
  {
    kanji: "道",
    sortReading: "どう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ドウ", grade: 2 }
      ],
      kun: [
        { base: "みち", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "読",
    sortReading: "どく",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ドク", grade: 2 },
        { text: "トウ", grade: 2 },
        { text: "トク", grade: 2 }
      ],
      kun: [
        { base: "よ", okurigana: "む", grade: 2 }
      ]
    }
  },
  {
    kanji: "内",
    sortReading: "だい",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ダイ", grade: 2 },
        { text: "ナイ", grade: 2 }
      ],
      kun: [
        { base: "うち", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "南",
    sortReading: "なん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ナン", grade: 2 }
      ],
      kun: [
        { base: "みなみ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "肉",
    sortReading: "にく",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ニク", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "馬",
    sortReading: "ば",
    strokeCount: 10,
    readings: {
      on: [
        { text: "バ", grade: 2 }
      ],
      kun: [
        { base: "うま", okurigana: "", grade: 2 },
        { base: "ま", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "売",
    sortReading: "ばい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "バイ", grade: 2 }
      ],
      kun: [
        { base: "う", okurigana: "る", grade: 2 },
        { base: "う", okurigana: "れる", grade: 2 }
      ]
    }
  },
  {
    kanji: "買",
    sortReading: "ばい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "バイ", grade: 2 }
      ],
      kun: [
        { base: "か", okurigana: "う", grade: 2 }
      ]
    }
  },
  {
    kanji: "麦",
    sortReading: "ばく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "バク", grade: 2 }
      ],
      kun: [
        { base: "むぎ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "半",
    sortReading: "はん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ハン", grade: 2 }
      ],
      kun: [
        { base: "なか", okurigana: "ば", grade: 2 }
      ]
    }
  },
  {
    kanji: "番",
    sortReading: "ばん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "バン", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "父",
    sortReading: "ふ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "フ", grade: 2 }
      ],
      kun: [
        { base: "ちち", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "風",
    sortReading: "ふう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "フウ", grade: 2 }
      ],
      kun: [
        { base: "かぜ", okurigana: "", grade: 2 },
        { base: "かざ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "分",
    sortReading: "ぶん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ブン", grade: 2 },
        { text: "ブ", grade: 2 },
        { text: "フン", grade: 2 }
      ],
      kun: [
        { base: "わ", okurigana: "ける", grade: 2 }
      ]
    }
  },
  {
    kanji: "聞",
    sortReading: "ぶん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ブン", grade: 2 },
        { text: "モン", grade: 2 }
      ],
      kun: [
        { base: "き", okurigana: "く", grade: 2 }
      ]
    }
  },
  {
    kanji: "米",
    sortReading: "べい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ベイ", grade: 2 }
      ],
      kun: [
        { base: "こめ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "歩",
    sortReading: "ほ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ホ", grade: 2 },
        { text: "フ", grade: 2 },
        { text: "ブ", grade: 2 }
      ],
      kun: [
        { base: "ある", okurigana: "く", grade: 2 },
        { base: "あゆ", okurigana: "む", grade: 2 }
      ]
    }
  },
  {
    kanji: "母",
    sortReading: "ぼ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ボ", grade: 2 }
      ],
      kun: [
        { base: "はは", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "方",
    sortReading: "ほう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ホウ", grade: 2 }
      ],
      kun: [
        { base: "かた", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "北",
    sortReading: "ほく",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ホク", grade: 2 }
      ],
      kun: [
        { base: "きた", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "毎",
    sortReading: "まい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "マイ", grade: 2 }
      ],
      kun: [
        { base: "ごと", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "妹",
    sortReading: "まい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "マイ", grade: 2 }
      ],
      kun: [
        { base: "いもうと", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "万",
    sortReading: "ばん",
    strokeCount: 3,
    readings: {
      on: [
        { text: "バン", grade: 2 },
        { text: "マン", grade: 2 }
      ],
      kun: [
        { base: "よろず", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "明",
    sortReading: "めい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "メイ", grade: 2 },
        { text: "ミョウ", grade: 2 }
      ],
      kun: [
        { base: "あか", okurigana: "るい", grade: 2 },
        { base: "あか", okurigana: "り", grade: 2 },
        { base: "あき", okurigana: "らか", grade: 2 },
        { base: "あ", okurigana: "かす", grade: 2 },
        { base: "あ", okurigana: "く", grade: 2 }
      ]
    }
  },
  {
    kanji: "鳴",
    sortReading: "めい",
    strokeCount: 14,
    readings: {
      on: [
        { text: "メイ", grade: 2 }
      ],
      kun: [
        { base: "な", okurigana: "く", grade: 2 }
      ]
    }
  },
  {
    kanji: "毛",
    sortReading: "もう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "モウ", grade: 2 }
      ],
      kun: [
        { base: "け", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "門",
    sortReading: "もん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "モン", grade: 2 }
      ],
      kun: [
        { base: "かど", okurigana: "", grade: 2 },
        { base: "と", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "夜",
    sortReading: "や",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ヤ", grade: 2 }
      ],
      kun: [
        { base: "よる", okurigana: "", grade: 2 },
        { base: "よ", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "野",
    sortReading: "や",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ヤ", grade: 2 }
      ],
      kun: [
        { base: "の", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "友",
    sortReading: "ゆう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ユウ", grade: 2 }
      ],
      kun: [
        { base: "とも", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "用",
    sortReading: "よう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ヨウ", grade: 2 }
      ],
      kun: [
        { base: "もち", okurigana: "いる", grade: 2 }
      ]
    }
  },
  {
    kanji: "曜",
    sortReading: "よう",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ヨウ", grade: 2 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "来",
    sortReading: "らい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ライ", grade: 2 }
      ],
      kun: [
        { base: "く", okurigana: "る", grade: 2 },
        { base: "き", okurigana: "たす", grade: 2 },
        { base: "きた", okurigana: "る", grade: 2 }
      ]
    }
  },
  {
    kanji: "里",
    sortReading: "り",
    strokeCount: 7,
    readings: {
      on: [
        { text: "リ", grade: 2 }
      ],
      kun: [
        { base: "さと", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "理",
    sortReading: "り",
    strokeCount: 11,
    readings: {
      on: [
        { text: "リ", grade: 2 }
      ],
      kun: [
        { base: "ことわり", okurigana: "", grade: 2 }
      ]
    }
  },
  {
    kanji: "話",
    sortReading: "わ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ワ", grade: 2 }
      ],
      kun: [
        { base: "はな", okurigana: "す", grade: 2 },
        { base: "はなし", okurigana: "", grade: 2 }
      ]
    }
  }
];
