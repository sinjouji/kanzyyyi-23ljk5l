/* =========================================================================
   kanji-data-grade6.js（データ層 / 小学6年生 191字）

   出典・検証方法:
   - 2020年度の学習指導要領改訂により、4年生で習っていた2字・5年生で習って
     いた9字がこの学年に移動しています。
   - 画数・音読み・訓読みは KANJIDIC2（電子辞書研究開発グループ [EDRDG] 提供、
     CC BY-SA 4.0）と、学年別漢字の読み方をまとめた教育系ウェブサイトの一覧表を
     突き合わせて作成しています。
   - 画数は KANJIDIC2 のデータと、KanjiVG の実際の書き順ストローク数の
     両方が一致することを機械的に確認済みです（この学年の全字で完全一致）。
   - 読み方（音読み・訓読み）は、上記の一覧表が挙げていた候補を KANJIDIC2 の
     読み方一覧と照合し、辞書的に実在が確認できたものだけを採用しています。
     一覧表側の誤り（例:「延」の音読みが「エイ」と誤記されていた〈正しくは
     「エン」〉、画数の誤記が13件など）はKANJIDIC2で補正しています。
   - この配列の並び順は、ユーザーから指定された一覧の並び順をそのまま採用して
     おり、読み方などによる並べ替えは行っていません（一覧ページはこの配列順の
     まま表示する）。

   これで小学1〜6年生、全1,026字の収録が完了しました。

   readings.on  : 音読み配列。各要素 {text, grade}
   readings.kun : 訓読み配列。各要素 {base, okurigana, grade}
     - base      : 漢字部分の読み（例: 「わる」）
     - okurigana : 送り仮名部分（例: 「い」）。送り仮名が無い読みは "" にする
     - grade     : その読みを習う学年（学年外の読みを区別するための拡張用）
   ========================================================================= */

const grade6Kanji = [
  {
    kanji: "胃",
    sortReading: "い",
    strokeCount: 9,
    readings: {
      on: [
        { text: "イ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "異",
    sortReading: "い",
    strokeCount: 11,
    readings: {
      on: [
        { text: "イ", grade: 6 }
      ],
      kun: [
        { base: "こと", okurigana: "なる", grade: 6 }
      ]
    }
  },
  {
    kanji: "遺",
    sortReading: "い",
    strokeCount: 15,
    readings: {
      on: [
        { text: "イ", grade: 6 },
        { text: "ユイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "域",
    sortReading: "いき",
    strokeCount: 11,
    readings: {
      on: [
        { text: "イキ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "宇",
    sortReading: "う",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "映",
    sortReading: "えい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "エイ", grade: 6 }
      ],
      kun: [
        { base: "うつ", okurigana: "す", grade: 6 },
        { base: "は", okurigana: "える", grade: 6 }
      ]
    }
  },
  {
    kanji: "延",
    sortReading: "えん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "エン", grade: 6 }
      ],
      kun: [
        { base: "の", okurigana: "ばす", grade: 6 }
      ]
    }
  },
  {
    kanji: "沿",
    sortReading: "えん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "エン", grade: 6 }
      ],
      kun: [
        { base: "そ", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "恩",
    sortReading: "おん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "オン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "我",
    sortReading: "が",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ガ", grade: 6 }
      ],
      kun: [
        { base: "われ", okurigana: "", grade: 6 },
        { base: "わ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "灰",
    sortReading: "かい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "カイ", grade: 6 }
      ],
      kun: [
        { base: "はい", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "拡",
    sortReading: "かく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "カク", grade: 6 }
      ],
      kun: [
        { base: "ひろ", okurigana: "がる", grade: 6 }
      ]
    }
  },
  {
    kanji: "革",
    sortReading: "かく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "カク", grade: 6 }
      ],
      kun: [
        { base: "かわ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "閣",
    sortReading: "かく",
    strokeCount: 14,
    readings: {
      on: [
        { text: "カク", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "割",
    sortReading: "かつ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "カツ", grade: 6 }
      ],
      kun: [
        { base: "わ", okurigana: "る", grade: 6 },
        { base: "わり", okurigana: "", grade: 6 },
        { base: "さ", okurigana: "く", grade: 6 }
      ]
    }
  },
  {
    kanji: "株",
    sortReading: "かぶ",
    strokeCount: 10,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "かぶ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "干",
    sortReading: "かん",
    strokeCount: 3,
    readings: {
      on: [
        { text: "カン", grade: 6 }
      ],
      kun: [
        { base: "ほ", okurigana: "す", grade: 6 },
        { base: "ひ", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "巻",
    sortReading: "かん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "カン", grade: 6 },
        { text: "ケン", grade: 6 }
      ],
      kun: [
        { base: "ま", okurigana: "く", grade: 6 }
      ]
    }
  },
  {
    kanji: "看",
    sortReading: "かん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "カン", grade: 6 }
      ],
      kun: [
        { base: "み", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "簡",
    sortReading: "かん",
    strokeCount: 18,
    readings: {
      on: [
        { text: "カン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "危",
    sortReading: "き",
    strokeCount: 6,
    readings: {
      on: [
        { text: "キ", grade: 6 }
      ],
      kun: [
        { base: "あぶ", okurigana: "ない", grade: 6 },
        { base: "あや", okurigana: "うい", grade: 6 }
      ]
    }
  },
  {
    kanji: "机",
    sortReading: "き",
    strokeCount: 6,
    readings: {
      on: [
        { text: "キ", grade: 6 }
      ],
      kun: [
        { base: "つくえ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "揮",
    sortReading: "き",
    strokeCount: 12,
    readings: {
      on: [
        { text: "キ", grade: 6 }
      ],
      kun: [
        { base: "ふる", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "貴",
    sortReading: "き",
    strokeCount: 12,
    readings: {
      on: [
        { text: "キ", grade: 6 }
      ],
      kun: [
        { base: "とうと", okurigana: "い", grade: 6 },
        { base: "たっと", okurigana: "い", grade: 6 }
      ]
    }
  },
  {
    kanji: "疑",
    sortReading: "ぎ",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ギ", grade: 6 }
      ],
      kun: [
        { base: "うたが", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "吸",
    sortReading: "きゅう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "キュウ", grade: 6 }
      ],
      kun: [
        { base: "す", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "供",
    sortReading: "きょう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "キョウ", grade: 6 },
        { text: "ク", grade: 6 }
      ],
      kun: [
        { base: "とも", okurigana: "", grade: 6 },
        { base: "そな", okurigana: "える", grade: 6 }
      ]
    }
  },
  {
    kanji: "胸",
    sortReading: "きょう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "キョウ", grade: 6 }
      ],
      kun: [
        { base: "むね", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "郷",
    sortReading: "きょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キョウ", grade: 6 },
        { text: "ゴウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "勤",
    sortReading: "きん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "キン", grade: 6 },
        { text: "ゴン", grade: 6 }
      ],
      kun: [
        { base: "つと", okurigana: "める", grade: 6 }
      ]
    }
  },
  {
    kanji: "筋",
    sortReading: "きん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "キン", grade: 6 }
      ],
      kun: [
        { base: "すじ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "系",
    sortReading: "けい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ケイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "敬",
    sortReading: "けい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ケイ", grade: 6 }
      ],
      kun: [
        { base: "うやま", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "警",
    sortReading: "けい",
    strokeCount: 19,
    readings: {
      on: [
        { text: "ケイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "劇",
    sortReading: "げき",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ゲキ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "激",
    sortReading: "げき",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ゲキ", grade: 6 }
      ],
      kun: [
        { base: "はげ", okurigana: "しい", grade: 6 }
      ]
    }
  },
  {
    kanji: "穴",
    sortReading: "けつ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ケツ", grade: 6 }
      ],
      kun: [
        { base: "あな", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "券",
    sortReading: "けん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ケン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "絹",
    sortReading: "けん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ケン", grade: 6 }
      ],
      kun: [
        { base: "きぬ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "権",
    sortReading: "けん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ケン", grade: 6 },
        { text: "ゴン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "憲",
    sortReading: "けん",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ケン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "源",
    sortReading: "げん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ゲン", grade: 6 }
      ],
      kun: [
        { base: "みなもと", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "厳",
    sortReading: "げん",
    strokeCount: 17,
    readings: {
      on: [
        { text: "ゲン", grade: 6 },
        { text: "ゴン", grade: 6 }
      ],
      kun: [
        { base: "きび", okurigana: "しい", grade: 6 },
        { base: "おごそ", okurigana: "か", grade: 6 }
      ]
    }
  },
  {
    kanji: "己",
    sortReading: "こ",
    strokeCount: 3,
    readings: {
      on: [
        { text: "コ", grade: 6 },
        { text: "キ", grade: 6 }
      ],
      kun: [
        { base: "おのれ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "呼",
    sortReading: "こ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "コ", grade: 6 }
      ],
      kun: [
        { base: "よ", okurigana: "ぶ", grade: 6 }
      ]
    }
  },
  {
    kanji: "誤",
    sortReading: "ご",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ゴ", grade: 6 }
      ],
      kun: [
        { base: "あやま", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "后",
    sortReading: "ご",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ゴ", grade: 6 }
      ],
      kun: [
        { base: "きさき", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "孝",
    sortReading: "こう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "コウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "皇",
    sortReading: "こう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "コウ", grade: 6 },
        { text: "オウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "紅",
    sortReading: "こう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "コウ", grade: 6 },
        { text: "ク", grade: 6 }
      ],
      kun: [
        { base: "べに", okurigana: "", grade: 6 },
        { base: "あか", okurigana: "い", grade: 6 },
        { base: "くれない", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "降",
    sortReading: "こう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コウ", grade: 6 }
      ],
      kun: [
        { base: "お", okurigana: "りる", grade: 6 },
        { base: "ふ", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "鋼",
    sortReading: "こう",
    strokeCount: 16,
    readings: {
      on: [
        { text: "コウ", grade: 6 }
      ],
      kun: [
        { base: "はがね", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "刻",
    sortReading: "こく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "コク", grade: 6 }
      ],
      kun: [
        { base: "きざ", okurigana: "む", grade: 6 }
      ]
    }
  },
  {
    kanji: "穀",
    sortReading: "こく",
    strokeCount: 14,
    readings: {
      on: [
        { text: "コク", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "骨",
    sortReading: "こつ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コツ", grade: 6 }
      ],
      kun: [
        { base: "ほね", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "困",
    sortReading: "こん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "コン", grade: 6 }
      ],
      kun: [
        { base: "こま", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "砂",
    sortReading: "さ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "サ", grade: 6 },
        { text: "シャ", grade: 6 }
      ],
      kun: [
        { base: "すな", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "座",
    sortReading: "ざ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ザ", grade: 6 }
      ],
      kun: [
        { base: "すわ", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "済",
    sortReading: "さい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "サイ", grade: 6 }
      ],
      kun: [
        { base: "す", okurigana: "む", grade: 6 }
      ]
    }
  },
  {
    kanji: "裁",
    sortReading: "さい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "サイ", grade: 6 }
      ],
      kun: [
        { base: "さば", okurigana: "く", grade: 6 },
        { base: "た", okurigana: "つ", grade: 6 }
      ]
    }
  },
  {
    kanji: "策",
    sortReading: "さく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "サク", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "冊",
    sortReading: "さく",
    strokeCount: 5,
    readings: {
      on: [
        { text: "サク", grade: 6 },
        { text: "サツ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "蚕",
    sortReading: "さん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "サン", grade: 6 }
      ],
      kun: [
        { base: "かいこ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "至",
    sortReading: "し",
    strokeCount: 6,
    readings: {
      on: [
        { text: "シ", grade: 6 }
      ],
      kun: [
        { base: "いた", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "私",
    sortReading: "し",
    strokeCount: 7,
    readings: {
      on: [
        { text: "シ", grade: 6 }
      ],
      kun: [
        { base: "わたし", okurigana: "", grade: 6 },
        { base: "わたくし", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "姿",
    sortReading: "し",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シ", grade: 6 }
      ],
      kun: [
        { base: "すがた", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "視",
    sortReading: "し",
    strokeCount: 11,
    readings: {
      on: [
        { text: "シ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "詞",
    sortReading: "し",
    strokeCount: 12,
    readings: {
      on: [
        { text: "シ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "誌",
    sortReading: "し",
    strokeCount: 14,
    readings: {
      on: [
        { text: "シ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "磁",
    sortReading: "じ",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ジ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "射",
    sortReading: "しゃ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "シャ", grade: 6 }
      ],
      kun: [
        { base: "い", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "捨",
    sortReading: "しゃ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "シャ", grade: 6 }
      ],
      kun: [
        { base: "す", okurigana: "てる", grade: 6 }
      ]
    }
  },
  {
    kanji: "尺",
    sortReading: "しゃく",
    strokeCount: 4,
    readings: {
      on: [
        { text: "シャク", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "若",
    sortReading: "じゃく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ジャク", grade: 6 },
        { text: "ニャク", grade: 6 }
      ],
      kun: [
        { base: "わか", okurigana: "い", grade: 6 },
        { base: "も", okurigana: "しくは", grade: 6 }
      ]
    }
  },
  {
    kanji: "樹",
    sortReading: "じゅ",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ジュ", grade: 6 }
      ],
      kun: [
        { base: "き", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "収",
    sortReading: "しゅう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "シュウ", grade: 6 }
      ],
      kun: [
        { base: "おさ", okurigana: "める", grade: 6 }
      ]
    }
  },
  {
    kanji: "宗",
    sortReading: "しゅう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シュウ", grade: 6 },
        { text: "ソウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "就",
    sortReading: "しゅう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "シュウ", grade: 6 },
        { text: "ジュ", grade: 6 }
      ],
      kun: [
        { base: "つ", okurigana: "く", grade: 6 }
      ]
    }
  },
  {
    kanji: "衆",
    sortReading: "しゅう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "シュウ", grade: 6 },
        { text: "シュ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "従",
    sortReading: "じゅう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ジュウ", grade: 6 },
        { text: "ショウ", grade: 6 },
        { text: "ジュ", grade: 6 }
      ],
      kun: [
        { base: "したが", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "縦",
    sortReading: "じゅう",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ジュウ", grade: 6 }
      ],
      kun: [
        { base: "たて", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "縮",
    sortReading: "しゅく",
    strokeCount: 17,
    readings: {
      on: [
        { text: "シュク", grade: 6 }
      ],
      kun: [
        { base: "ちぢ", okurigana: "む", grade: 6 },
        { base: "ちぢ", okurigana: "める", grade: 6 }
      ]
    }
  },
  {
    kanji: "熟",
    sortReading: "じゅく",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ジュク", grade: 6 }
      ],
      kun: [
        { base: "う", okurigana: "れる", grade: 6 }
      ]
    }
  },
  {
    kanji: "純",
    sortReading: "じゅん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ジュン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "処",
    sortReading: "しょ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ショ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "署",
    sortReading: "しょ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ショ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "諸",
    sortReading: "しょ",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ショ", grade: 6 }
      ],
      kun: [
        { base: "もろ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "除",
    sortReading: "じょ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ジョ", grade: 6 },
        { text: "ジ", grade: 6 }
      ],
      kun: [
        { base: "のぞ", okurigana: "く", grade: 6 }
      ]
    }
  },
  {
    kanji: "承",
    sortReading: "しょう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ショウ", grade: 6 }
      ],
      kun: [
        { base: "うけたまわ", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "将",
    sortReading: "しょう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ショウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "傷",
    sortReading: "しょう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ショウ", grade: 6 }
      ],
      kun: [
        { base: "きず", okurigana: "", grade: 6 },
        { base: "いた", okurigana: "む", grade: 6 }
      ]
    }
  },
  {
    kanji: "障",
    sortReading: "しょう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ショウ", grade: 6 }
      ],
      kun: [
        { base: "さわ", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "蒸",
    sortReading: "じょう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ジョウ", grade: 6 }
      ],
      kun: [
        { base: "む", okurigana: "らす", grade: 6 }
      ]
    }
  },
  {
    kanji: "針",
    sortReading: "しん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "シン", grade: 6 }
      ],
      kun: [
        { base: "はり", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "仁",
    sortReading: "じん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ジン", grade: 6 },
        { text: "ニ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "垂",
    sortReading: "すい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "スイ", grade: 6 }
      ],
      kun: [
        { base: "た", okurigana: "れる", grade: 6 }
      ]
    }
  },
  {
    kanji: "推",
    sortReading: "すい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "スイ", grade: 6 }
      ],
      kun: [
        { base: "お", okurigana: "す", grade: 6 }
      ]
    }
  },
  {
    kanji: "寸",
    sortReading: "すん",
    strokeCount: 3,
    readings: {
      on: [
        { text: "スン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "盛",
    sortReading: "せい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "セイ", grade: 6 },
        { text: "ジョウ", grade: 6 }
      ],
      kun: [
        { base: "も", okurigana: "る", grade: 6 },
        { base: "さか", okurigana: "ん", grade: 6 }
      ]
    }
  },
  {
    kanji: "聖",
    sortReading: "せい",
    strokeCount: 13,
    readings: {
      on: [
        { text: "セイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "誠",
    sortReading: "せい",
    strokeCount: 13,
    readings: {
      on: [
        { text: "セイ", grade: 6 }
      ],
      kun: [
        { base: "まこと", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "舌",
    sortReading: "ぜつ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ゼツ", grade: 6 }
      ],
      kun: [
        { base: "した", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "宣",
    sortReading: "せん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "セン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "専",
    sortReading: "せん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "セン", grade: 6 }
      ],
      kun: [
        { base: "もっぱ", okurigana: "ら", grade: 6 }
      ]
    }
  },
  {
    kanji: "泉",
    sortReading: "せん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "セン", grade: 6 }
      ],
      kun: [
        { base: "いずみ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "洗",
    sortReading: "せん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "セン", grade: 6 }
      ],
      kun: [
        { base: "あら", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "染",
    sortReading: "せん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "セン", grade: 6 }
      ],
      kun: [
        { base: "そ", okurigana: "める", grade: 6 },
        { base: "し", okurigana: "みる", grade: 6 }
      ]
    }
  },
  {
    kanji: "銭",
    sortReading: "せん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "セン", grade: 6 }
      ],
      kun: [
        { base: "ぜに", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "善",
    sortReading: "ぜん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ゼン", grade: 6 }
      ],
      kun: [
        { base: "よ", okurigana: "い", grade: 6 }
      ]
    }
  },
  {
    kanji: "奏",
    sortReading: "そう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ソウ", grade: 6 }
      ],
      kun: [
        { base: "かな", okurigana: "でる", grade: 6 }
      ]
    }
  },
  {
    kanji: "窓",
    sortReading: "そう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ソウ", grade: 6 }
      ],
      kun: [
        { base: "まど", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "創",
    sortReading: "そう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ソウ", grade: 6 }
      ],
      kun: [
        { base: "つく", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "装",
    sortReading: "そう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ソウ", grade: 6 },
        { text: "ショウ", grade: 6 }
      ],
      kun: [
        { base: "よそお", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "層",
    sortReading: "そう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ソウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "操",
    sortReading: "そう",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ソウ", grade: 6 }
      ],
      kun: [
        { base: "あやつ", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "蔵",
    sortReading: "ぞう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ゾウ", grade: 6 }
      ],
      kun: [
        { base: "くら", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "臓",
    sortReading: "ぞう",
    strokeCount: 19,
    readings: {
      on: [
        { text: "ゾウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "存",
    sortReading: "そん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ソン", grade: 6 },
        { text: "ゾン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "尊",
    sortReading: "そん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ソン", grade: 6 }
      ],
      kun: [
        { base: "とうと", okurigana: "い", grade: 6 },
        { base: "たっと", okurigana: "い", grade: 6 }
      ]
    }
  },
  {
    kanji: "退",
    sortReading: "たい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "タイ", grade: 6 }
      ],
      kun: [
        { base: "しりぞ", okurigana: "く", grade: 6 }
      ]
    }
  },
  {
    kanji: "宅",
    sortReading: "たく",
    strokeCount: 6,
    readings: {
      on: [
        { text: "タク", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "担",
    sortReading: "たん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "タン", grade: 6 }
      ],
      kun: [
        { base: "かつ", okurigana: "ぐ", grade: 6 },
        { base: "にな", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "探",
    sortReading: "たん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "タン", grade: 6 }
      ],
      kun: [
        { base: "さが", okurigana: "す", grade: 6 },
        { base: "さぐ", okurigana: "る", grade: 6 }
      ]
    }
  },
  {
    kanji: "誕",
    sortReading: "たん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "タン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "段",
    sortReading: "だん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ダン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "暖",
    sortReading: "だん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ダン", grade: 6 }
      ],
      kun: [
        { base: "あたた", okurigana: "かい", grade: 6 },
        { base: "あたた", okurigana: "まる", grade: 6 }
      ]
    }
  },
  {
    kanji: "値",
    sortReading: "ち",
    strokeCount: 10,
    readings: {
      on: [
        { text: "チ", grade: 6 }
      ],
      kun: [
        { base: "ね", okurigana: "", grade: 6 },
        { base: "あたい", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "宙",
    sortReading: "ちゅう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "チュウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "忠",
    sortReading: "ちゅう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "チュウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "著",
    sortReading: "ちょ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "チョ", grade: 6 }
      ],
      kun: [
        { base: "あらわ", okurigana: "す", grade: 6 },
        { base: "いちじる", okurigana: "しい", grade: 6 }
      ]
    }
  },
  {
    kanji: "庁",
    sortReading: "ちょう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "チョウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "頂",
    sortReading: "ちょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "チョウ", grade: 6 }
      ],
      kun: [
        { base: "いただ", okurigana: "く", grade: 6 },
        { base: "いただき", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "腸",
    sortReading: "ちょう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "チョウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "潮",
    sortReading: "ちょう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "チョウ", grade: 6 }
      ],
      kun: [
        { base: "しお", okurigana: "", grade: 6 },
        { base: "うしお", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "賃",
    sortReading: "ちん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "チン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "痛",
    sortReading: "つう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ツウ", grade: 6 }
      ],
      kun: [
        { base: "いた", okurigana: "い", grade: 6 },
        { base: "いた", okurigana: "む", grade: 6 },
        { base: "いた", okurigana: "める", grade: 6 }
      ]
    }
  },
  {
    kanji: "敵",
    sortReading: "てき",
    strokeCount: 15,
    readings: {
      on: [
        { text: "テキ", grade: 6 }
      ],
      kun: [
        { base: "かたき", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "展",
    sortReading: "てん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "テン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "討",
    sortReading: "とう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "トウ", grade: 6 }
      ],
      kun: [
        { base: "う", okurigana: "つ", grade: 6 }
      ]
    }
  },
  {
    kanji: "党",
    sortReading: "とう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "トウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "糖",
    sortReading: "とう",
    strokeCount: 16,
    readings: {
      on: [
        { text: "トウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "届",
    sortReading: "とどける",
    strokeCount: 8,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "とど", okurigana: "ける", grade: 6 },
        { base: "とど", okurigana: "く", grade: 6 }
      ]
    }
  },
  {
    kanji: "難",
    sortReading: "なん",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ナン", grade: 6 }
      ],
      kun: [
        { base: "むずか", okurigana: "しい", grade: 6 },
        { base: "かた", okurigana: "い", grade: 6 }
      ]
    }
  },
  {
    kanji: "乳",
    sortReading: "にゅう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ニュウ", grade: 6 }
      ],
      kun: [
        { base: "ちち", okurigana: "", grade: 6 },
        { base: "ち", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "認",
    sortReading: "にん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ニン", grade: 6 }
      ],
      kun: [
        { base: "みと", okurigana: "める", grade: 6 }
      ]
    }
  },
  {
    kanji: "納",
    sortReading: "のう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ノウ", grade: 6 },
        { text: "ナッ", grade: 6 },
        { text: "ナ", grade: 6 },
        { text: "ナン", grade: 6 },
        { text: "トウ", grade: 6 }
      ],
      kun: [
        { base: "おさ", okurigana: "める", grade: 6 }
      ]
    }
  },
  {
    kanji: "脳",
    sortReading: "のう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ノウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "派",
    sortReading: "は",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ハ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "拝",
    sortReading: "はい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ハイ", grade: 6 }
      ],
      kun: [
        { base: "おが", okurigana: "む", grade: 6 }
      ]
    }
  },
  {
    kanji: "背",
    sortReading: "はい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ハイ", grade: 6 }
      ],
      kun: [
        { base: "せ", okurigana: "", grade: 6 },
        { base: "せい", okurigana: "", grade: 6 },
        { base: "そむ", okurigana: "く", grade: 6 }
      ]
    }
  },
  {
    kanji: "肺",
    sortReading: "はい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ハイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "俳",
    sortReading: "はい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ハイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "班",
    sortReading: "はん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ハン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "晩",
    sortReading: "ばん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "バン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "否",
    sortReading: "ひ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ヒ", grade: 6 }
      ],
      kun: [
        { base: "いな", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "批",
    sortReading: "ひ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ヒ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "秘",
    sortReading: "ひ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ヒ", grade: 6 }
      ],
      kun: [
        { base: "ひ", okurigana: "める", grade: 6 }
      ]
    }
  },
  {
    kanji: "俵",
    sortReading: "ひょう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ヒョウ", grade: 6 }
      ],
      kun: [
        { base: "たわら", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "腹",
    sortReading: "ふく",
    strokeCount: 13,
    readings: {
      on: [
        { text: "フク", grade: 6 }
      ],
      kun: [
        { base: "はら", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "奮",
    sortReading: "ふん",
    strokeCount: 16,
    readings: {
      on: [
        { text: "フン", grade: 6 }
      ],
      kun: [
        { base: "ふる", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "並",
    sortReading: "へい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ヘイ", grade: 6 }
      ],
      kun: [
        { base: "なみ", okurigana: "", grade: 6 },
        { base: "なら", okurigana: "べる", grade: 6 },
        { base: "なら", okurigana: "びに", grade: 6 }
      ]
    }
  },
  {
    kanji: "陛",
    sortReading: "へい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ヘイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "閉",
    sortReading: "へい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ヘイ", grade: 6 }
      ],
      kun: [
        { base: "と", okurigana: "じる", grade: 6 },
        { base: "し", okurigana: "まる", grade: 6 },
        { base: "し", okurigana: "める", grade: 6 }
      ]
    }
  },
  {
    kanji: "片",
    sortReading: "へん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ヘン", grade: 6 }
      ],
      kun: [
        { base: "かた", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "補",
    sortReading: "ほ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ホ", grade: 6 }
      ],
      kun: [
        { base: "おぎな", okurigana: "う", grade: 6 }
      ]
    }
  },
  {
    kanji: "暮",
    sortReading: "ぼ",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ボ", grade: 6 }
      ],
      kun: [
        { base: "く", okurigana: "れる", grade: 6 },
        { base: "く", okurigana: "らす", grade: 6 }
      ]
    }
  },
  {
    kanji: "宝",
    sortReading: "ほう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ホウ", grade: 6 }
      ],
      kun: [
        { base: "たから", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "訪",
    sortReading: "ほう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ホウ", grade: 6 }
      ],
      kun: [
        { base: "おとず", okurigana: "れる", grade: 6 },
        { base: "たず", okurigana: "ねる", grade: 6 }
      ]
    }
  },
  {
    kanji: "亡",
    sortReading: "ぼう",
    strokeCount: 3,
    readings: {
      on: [
        { text: "ボウ", grade: 6 },
        { text: "モウ", grade: 6 }
      ],
      kun: [
        { base: "な", okurigana: "い", grade: 6 }
      ]
    }
  },
  {
    kanji: "忘",
    sortReading: "ぼう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ボウ", grade: 6 }
      ],
      kun: [
        { base: "わす", okurigana: "れる", grade: 6 }
      ]
    }
  },
  {
    kanji: "棒",
    sortReading: "ぼう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ボウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "枚",
    sortReading: "まい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "マイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "幕",
    sortReading: "まく",
    strokeCount: 13,
    readings: {
      on: [
        { text: "マク", grade: 6 },
        { text: "バク", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "密",
    sortReading: "みつ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ミツ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "盟",
    sortReading: "めい",
    strokeCount: 13,
    readings: {
      on: [
        { text: "メイ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "模",
    sortReading: "も",
    strokeCount: 14,
    readings: {
      on: [
        { text: "モ", grade: 6 },
        { text: "ボ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "訳",
    sortReading: "やく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ヤク", grade: 6 }
      ],
      kun: [
        { base: "わけ", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "郵",
    sortReading: "ゆう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ユウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "優",
    sortReading: "ゆう",
    strokeCount: 17,
    readings: {
      on: [
        { text: "ユウ", grade: 6 }
      ],
      kun: [
        { base: "やさ", okurigana: "しい", grade: 6 },
        { base: "すぐ", okurigana: "れる", grade: 6 }
      ]
    }
  },
  {
    kanji: "預",
    sortReading: "よ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ヨ", grade: 6 }
      ],
      kun: [
        { base: "あず", okurigana: "ける", grade: 6 },
        { base: "あず", okurigana: "かる", grade: 6 }
      ]
    }
  },
  {
    kanji: "幼",
    sortReading: "よう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ヨウ", grade: 6 }
      ],
      kun: [
        { base: "おさな", okurigana: "い", grade: 6 }
      ]
    }
  },
  {
    kanji: "欲",
    sortReading: "よく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ヨク", grade: 6 }
      ],
      kun: [
        { base: "ほ", okurigana: "しい", grade: 6 }
      ]
    }
  },
  {
    kanji: "翌",
    sortReading: "よく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ヨク", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "乱",
    sortReading: "らん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ラン", grade: 6 }
      ],
      kun: [
        { base: "みだ", okurigana: "れる", grade: 6 }
      ]
    }
  },
  {
    kanji: "卵",
    sortReading: "らん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ラン", grade: 6 }
      ],
      kun: [
        { base: "たまご", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "覧",
    sortReading: "らん",
    strokeCount: 17,
    readings: {
      on: [
        { text: "ラン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "裏",
    sortReading: "り",
    strokeCount: 13,
    readings: {
      on: [
        { text: "リ", grade: 6 }
      ],
      kun: [
        { base: "うら", okurigana: "", grade: 6 }
      ]
    }
  },
  {
    kanji: "律",
    sortReading: "りつ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "リツ", grade: 6 },
        { text: "リチ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "臨",
    sortReading: "りん",
    strokeCount: 18,
    readings: {
      on: [
        { text: "リン", grade: 6 }
      ],
      kun: [
        { base: "のぞ", okurigana: "む", grade: 6 }
      ]
    }
  },
  {
    kanji: "朗",
    sortReading: "ろう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ロウ", grade: 6 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "論",
    sortReading: "ろん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ロン", grade: 6 }
      ],
      kun: [
        
      ]
    }
  }
];
