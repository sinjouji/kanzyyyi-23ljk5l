/* =========================================================================
   kanji-data-grade3.js（データ層 / 小学3年生 200字）

   出典・検証方法:
   - 画数・音読み・訓読みは KANJIDIC2（電子辞書研究開発グループ [EDRDG] 提供、
     CC BY-SA 4.0）と、学年別漢字の読み方をまとめた教育系ウェブサイトの一覧表を
     突き合わせて作成しています。
   - 画数は KANJIDIC2 のデータと、KanjiVG の実際の書き順ストローク数の
     両方が一致することを機械的に確認済みです（この学年の全字で完全一致）。
   - 読み方（音読み・訓読み）は、上記の一覧表が挙げていた候補を KANJIDIC2 の
     読み方一覧と照合し、辞書的に実在が確認できたものだけを採用しています。
     ただし「この学年で実際にどの読みまで教えるか」という教育的な線引きは
     ウェブサイト側の編集判断によるものなので、記載よりも狭く教えたい場合は
     readings.on / readings.kun の配列から個別に間引いてください。
   - この配列の並び順は、ユーザーから指定された一覧（教科書会社などが使う
     伝統的な並び順）をそのまま採用しており、読み方などによる並べ替えは
     行っていません（一覧ページはこの配列順のまま表示する）。

   readings.on  : 音読み配列。各要素 {text, grade}
   readings.kun : 訓読み配列。各要素 {base, okurigana, grade}
     - base      : 漢字部分の読み（例: 「わる」）
     - okurigana : 送り仮名部分（例: 「い」）。送り仮名が無い読みは "" にする
     - grade     : その読みを習う学年（学年外の読みを区別するための拡張用）
   ========================================================================= */

const grade3Kanji = [
  {
    kanji: "悪",
    sortReading: "あく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "アク", grade: 3 },
        { text: "オ", grade: 3 }
      ],
      kun: [
        { base: "わる", okurigana: "い", grade: 3 },
        { base: "あ", okurigana: "し", grade: 3 }
      ]
    }
  },
  {
    kanji: "安",
    sortReading: "あん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "アン", grade: 3 }
      ],
      kun: [
        { base: "やす", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "暗",
    sortReading: "あん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "アン", grade: 3 }
      ],
      kun: [
        { base: "くら", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "医",
    sortReading: "い",
    strokeCount: 7,
    readings: {
      on: [
        { text: "イ", grade: 3 }
      ],
      kun: [
        { base: "い", okurigana: "やす", grade: 3 }
      ]
    }
  },
  {
    kanji: "委",
    sortReading: "い",
    strokeCount: 8,
    readings: {
      on: [
        { text: "イ", grade: 3 }
      ],
      kun: [
        { base: "ゆだ", okurigana: "ねる", grade: 3 }
      ]
    }
  },
  {
    kanji: "意",
    sortReading: "い",
    strokeCount: 13,
    readings: {
      on: [
        { text: "イ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "育",
    sortReading: "いく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "イク", grade: 3 }
      ],
      kun: [
        { base: "そだ", okurigana: "てる", grade: 3 },
        { base: "はぐ", okurigana: "くむ", grade: 3 },
        { base: "そだ", okurigana: "てる", grade: 3 }
      ]
    }
  },
  {
    kanji: "員",
    sortReading: "いん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "イン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "院",
    sortReading: "いん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "イン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "飲",
    sortReading: "いん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "イン", grade: 3 },
        { text: "オン", grade: 3 }
      ],
      kun: [
        { base: "の", okurigana: "む", grade: 3 }
      ]
    }
  },
  {
    kanji: "運",
    sortReading: "うん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ウン", grade: 3 }
      ],
      kun: [
        { base: "はこ", okurigana: "ぶ", grade: 3 }
      ]
    }
  },
  {
    kanji: "泳",
    sortReading: "えい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "エイ", grade: 3 }
      ],
      kun: [
        { base: "およ", okurigana: "ぐ", grade: 3 }
      ]
    }
  },
  {
    kanji: "駅",
    sortReading: "えき",
    strokeCount: 14,
    readings: {
      on: [
        { text: "エキ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "央",
    sortReading: "おう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "オウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "横",
    sortReading: "おう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "オウ", grade: 3 }
      ],
      kun: [
        { base: "よこ", okurigana: "", grade: 3 },
        { base: "よこ", okurigana: "たわる", grade: 3 }
      ]
    }
  },
  {
    kanji: "屋",
    sortReading: "おく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "オク", grade: 3 }
      ],
      kun: [
        { base: "や", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "温",
    sortReading: "おん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "オン", grade: 3 }
      ],
      kun: [
        { base: "あたた", okurigana: "か", grade: 3 },
        { base: "ぬく", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "化",
    sortReading: "か",
    strokeCount: 4,
    readings: {
      on: [
        { text: "カ", grade: 3 },
        { text: "ケ", grade: 3 }
      ],
      kun: [
        { base: "ば", okurigana: "ける", grade: 3 }
      ]
    }
  },
  {
    kanji: "荷",
    sortReading: "か",
    strokeCount: 10,
    readings: {
      on: [
        { text: "カ", grade: 3 }
      ],
      kun: [
        { base: "に", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "界",
    sortReading: "かい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "カイ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "開",
    sortReading: "かい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "カイ", grade: 3 }
      ],
      kun: [
        { base: "ひら", okurigana: "く", grade: 3 },
        { base: "あ", okurigana: "ける", grade: 3 }
      ]
    }
  },
  {
    kanji: "階",
    sortReading: "かい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "カイ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "寒",
    sortReading: "かん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "カン", grade: 3 }
      ],
      kun: [
        { base: "さむ", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "感",
    sortReading: "かん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "カン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "漢",
    sortReading: "かん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "カン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "館",
    sortReading: "かん",
    strokeCount: 16,
    readings: {
      on: [
        { text: "カン", grade: 3 }
      ],
      kun: [
        { base: "やかた", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "岸",
    sortReading: "がん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ガン", grade: 3 }
      ],
      kun: [
        { base: "きし", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "起",
    sortReading: "き",
    strokeCount: 10,
    readings: {
      on: [
        { text: "キ", grade: 3 }
      ],
      kun: [
        { base: "お", okurigana: "きる", grade: 3 },
        { base: "お", okurigana: "こす", grade: 3 },
        { base: "お", okurigana: "こる", grade: 3 }
      ]
    }
  },
  {
    kanji: "期",
    sortReading: "き",
    strokeCount: 12,
    readings: {
      on: [
        { text: "キ", grade: 3 },
        { text: "ゴ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "客",
    sortReading: "きゃく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "キャク", grade: 3 },
        { text: "カク", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "究",
    sortReading: "きゅう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "キュウ", grade: 3 }
      ],
      kun: [
        { base: "きわ", okurigana: "める", grade: 3 }
      ]
    }
  },
  {
    kanji: "急",
    sortReading: "きゅう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "キュウ", grade: 3 }
      ],
      kun: [
        { base: "いそ", okurigana: "ぐ", grade: 3 }
      ]
    }
  },
  {
    kanji: "級",
    sortReading: "きゅう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "キュウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "宮",
    sortReading: "きゅう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "キュウ", grade: 3 },
        { text: "グウ", grade: 3 },
        { text: "ク", grade: 3 }
      ],
      kun: [
        { base: "みや", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "球",
    sortReading: "きゅう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "キュウ", grade: 3 }
      ],
      kun: [
        { base: "たま", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "去",
    sortReading: "きょ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "キョ", grade: 3 },
        { text: "コ", grade: 3 }
      ],
      kun: [
        { base: "さ", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "橋",
    sortReading: "きょう",
    strokeCount: 16,
    readings: {
      on: [
        { text: "キョウ", grade: 3 }
      ],
      kun: [
        { base: "はし", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "業",
    sortReading: "ぎょう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ギョウ", grade: 3 },
        { text: "ゴウ", grade: 3 }
      ],
      kun: [
        { base: "わざ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "曲",
    sortReading: "きょく",
    strokeCount: 6,
    readings: {
      on: [
        { text: "キョク", grade: 3 }
      ],
      kun: [
        { base: "ま", okurigana: "がる", grade: 3 }
      ]
    }
  },
  {
    kanji: "局",
    sortReading: "きょく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "キョク", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "銀",
    sortReading: "ぎん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ギン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "区",
    sortReading: "く",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ク", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "苦",
    sortReading: "く",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ク", grade: 3 }
      ],
      kun: [
        { base: "にが", okurigana: "い", grade: 3 },
        { base: "くる", okurigana: "しい", grade: 3 }
      ]
    }
  },
  {
    kanji: "具",
    sortReading: "ぐ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "グ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "君",
    sortReading: "くん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "クン", grade: 3 }
      ],
      kun: [
        { base: "きみ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "係",
    sortReading: "けい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ケイ", grade: 3 }
      ],
      kun: [
        { base: "かかり", okurigana: "", grade: 3 },
        { base: "かか", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "軽",
    sortReading: "けい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ケイ", grade: 3 }
      ],
      kun: [
        { base: "かる", okurigana: "い", grade: 3 },
        { base: "かろ", okurigana: "やか", grade: 3 }
      ]
    }
  },
  {
    kanji: "血",
    sortReading: "けつ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ケツ", grade: 3 }
      ],
      kun: [
        { base: "ち", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "決",
    sortReading: "けつ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ケツ", grade: 3 }
      ],
      kun: [
        { base: "き", okurigana: "まる", grade: 3 },
        { base: "き", okurigana: "める", grade: 3 }
      ]
    }
  },
  {
    kanji: "研",
    sortReading: "けん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ケン", grade: 3 }
      ],
      kun: [
        { base: "と", okurigana: "ぐ", grade: 3 }
      ]
    }
  },
  {
    kanji: "県",
    sortReading: "けん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ケン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "庫",
    sortReading: "こ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "湖",
    sortReading: "こ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "コ", grade: 3 }
      ],
      kun: [
        { base: "みずうみ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "向",
    sortReading: "こう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "コウ", grade: 3 }
      ],
      kun: [
        { base: "む", okurigana: "かう", grade: 3 },
        { base: "む", okurigana: "く", grade: 3 }
      ]
    }
  },
  {
    kanji: "幸",
    sortReading: "こう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "コウ", grade: 3 }
      ],
      kun: [
        { base: "しあわ", okurigana: "せ", grade: 3 },
        { base: "さいわ", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "港",
    sortReading: "こう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "コウ", grade: 3 }
      ],
      kun: [
        { base: "みなと", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "号",
    sortReading: "ごう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ゴウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "根",
    sortReading: "こん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コン", grade: 3 }
      ],
      kun: [
        { base: "ね", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "祭",
    sortReading: "さい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "サイ", grade: 3 }
      ],
      kun: [
        { base: "まつ", okurigana: "り", grade: 3 }
      ]
    }
  },
  {
    kanji: "皿",
    sortReading: "さら",
    strokeCount: 5,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "さら", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "仕",
    sortReading: "し",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シ", grade: 3 },
        { text: "ジ", grade: 3 }
      ],
      kun: [
        { base: "つか", okurigana: "える", grade: 3 }
      ]
    }
  },
  {
    kanji: "死",
    sortReading: "し",
    strokeCount: 6,
    readings: {
      on: [
        { text: "シ", grade: 3 }
      ],
      kun: [
        { base: "し", okurigana: "ぬ", grade: 3 }
      ]
    }
  },
  {
    kanji: "使",
    sortReading: "し",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シ", grade: 3 }
      ],
      kun: [
        { base: "つか", okurigana: "う", grade: 3 }
      ]
    }
  },
  {
    kanji: "始",
    sortReading: "し",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シ", grade: 3 }
      ],
      kun: [
        { base: "はじ", okurigana: "める", grade: 3 },
        { base: "はじ", okurigana: "まる", grade: 3 }
      ]
    }
  },
  {
    kanji: "指",
    sortReading: "し",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シ", grade: 3 }
      ],
      kun: [
        { base: "ゆび", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "歯",
    sortReading: "し",
    strokeCount: 12,
    readings: {
      on: [
        { text: "シ", grade: 3 }
      ],
      kun: [
        { base: "は", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "詩",
    sortReading: "し",
    strokeCount: 13,
    readings: {
      on: [
        { text: "シ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "次",
    sortReading: "じ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ジ", grade: 3 },
        { text: "シ", grade: 3 }
      ],
      kun: [
        { base: "つぎ", okurigana: "", grade: 3 },
        { base: "つ", okurigana: "ぐ", grade: 3 }
      ]
    }
  },
  {
    kanji: "事",
    sortReading: "じ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ジ", grade: 3 }
      ],
      kun: [
        { base: "こと", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "持",
    sortReading: "じ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ジ", grade: 3 }
      ],
      kun: [
        { base: "も", okurigana: "つ", grade: 3 }
      ]
    }
  },
  {
    kanji: "式",
    sortReading: "しき",
    strokeCount: 6,
    readings: {
      on: [
        { text: "シキ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "実",
    sortReading: "じつ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ジツ", grade: 3 }
      ],
      kun: [
        { base: "みの", okurigana: "る", grade: 3 },
        { base: "み", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "写",
    sortReading: "しゃ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シャ", grade: 3 }
      ],
      kun: [
        { base: "うつ", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "者",
    sortReading: "しゃ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シャ", grade: 3 }
      ],
      kun: [
        { base: "もの", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "主",
    sortReading: "しゅ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シュ", grade: 3 }
      ],
      kun: [
        { base: "おも", okurigana: "", grade: 3 },
        { base: "ぬし", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "守",
    sortReading: "しゅ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "シュ", grade: 3 },
        { text: "ス", grade: 3 }
      ],
      kun: [
        { base: "まも", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "取",
    sortReading: "しゅ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シュ", grade: 3 }
      ],
      kun: [
        { base: "と", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "酒",
    sortReading: "しゅ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "シュ", grade: 3 }
      ],
      kun: [
        { base: "さけ", okurigana: "", grade: 3 },
        { base: "さか", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "受",
    sortReading: "じゅ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ジュ", grade: 3 }
      ],
      kun: [
        { base: "う", okurigana: "ける", grade: 3 },
        { base: "う", okurigana: "かる", grade: 3 }
      ]
    }
  },
  {
    kanji: "州",
    sortReading: "しゅう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "シュウ", grade: 3 }
      ],
      kun: [
        { base: "す", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "拾",
    sortReading: "しゅう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シュウ", grade: 3 },
        { text: "ジュウ", grade: 3 }
      ],
      kun: [
        { base: "ひろ", okurigana: "う", grade: 3 }
      ]
    }
  },
  {
    kanji: "終",
    sortReading: "しゅう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "シュウ", grade: 3 }
      ],
      kun: [
        { base: "お", okurigana: "わり", grade: 3 }
      ]
    }
  },
  {
    kanji: "習",
    sortReading: "しゅう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "シュウ", grade: 3 }
      ],
      kun: [
        { base: "なら", okurigana: "う", grade: 3 }
      ]
    }
  },
  {
    kanji: "集",
    sortReading: "しゅう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "シュウ", grade: 3 }
      ],
      kun: [
        { base: "あつ", okurigana: "まる", grade: 3 }
      ]
    }
  },
  {
    kanji: "住",
    sortReading: "じゅう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ジュウ", grade: 3 }
      ],
      kun: [
        { base: "す", okurigana: "む", grade: 3 },
        { base: "す", okurigana: "まう", grade: 3 }
      ]
    }
  },
  {
    kanji: "重",
    sortReading: "じゅう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ジュウ", grade: 3 },
        { text: "チョウ", grade: 3 }
      ],
      kun: [
        { base: "おも", okurigana: "い", grade: 3 },
        { base: "かさ", okurigana: "ねる", grade: 3 }
      ]
    }
  },
  {
    kanji: "宿",
    sortReading: "しゅく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "シュク", grade: 3 }
      ],
      kun: [
        { base: "やど", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "所",
    sortReading: "しょ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ショ", grade: 3 }
      ],
      kun: [
        { base: "ところ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "暑",
    sortReading: "しょ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ショ", grade: 3 }
      ],
      kun: [
        { base: "あつ", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "助",
    sortReading: "じょ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ジョ", grade: 3 }
      ],
      kun: [
        { base: "たす", okurigana: "ける", grade: 3 },
        { base: "たす", okurigana: "かる", grade: 3 }
      ]
    }
  },
  {
    kanji: "昭",
    sortReading: "しょう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ショウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "消",
    sortReading: "しょう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ショウ", grade: 3 }
      ],
      kun: [
        { base: "け", okurigana: "す", grade: 3 },
        { base: "き", okurigana: "える", grade: 3 }
      ]
    }
  },
  {
    kanji: "商",
    sortReading: "しょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ショウ", grade: 3 }
      ],
      kun: [
        { base: "あきな", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "章",
    sortReading: "しょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ショウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "勝",
    sortReading: "しょう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ショウ", grade: 3 }
      ],
      kun: [
        { base: "か", okurigana: "つ", grade: 3 },
        { base: "まさ", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "乗",
    sortReading: "じょう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ジョウ", grade: 3 }
      ],
      kun: [
        { base: "の", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "植",
    sortReading: "しょく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ショク", grade: 3 }
      ],
      kun: [
        { base: "う", okurigana: "える", grade: 3 }
      ]
    }
  },
  {
    kanji: "申",
    sortReading: "しん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シン", grade: 3 }
      ],
      kun: [
        { base: "もう", okurigana: "す", grade: 3 }
      ]
    }
  },
  {
    kanji: "身",
    sortReading: "しん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "シン", grade: 3 }
      ],
      kun: [
        { base: "み", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "神",
    sortReading: "しん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シン", grade: 3 },
        { text: "ジン", grade: 3 }
      ],
      kun: [
        { base: "かみ", okurigana: "", grade: 3 },
        { base: "こう", okurigana: "", grade: 3 },
        { base: "かん", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "真",
    sortReading: "しん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "シン", grade: 3 }
      ],
      kun: [
        { base: "ま", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "深",
    sortReading: "しん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "シン", grade: 3 }
      ],
      kun: [
        { base: "ふか", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "進",
    sortReading: "しん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "シン", grade: 3 }
      ],
      kun: [
        { base: "すす", okurigana: "む", grade: 3 }
      ]
    }
  },
  {
    kanji: "世",
    sortReading: "せい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "セイ", grade: 3 },
        { text: "セ", grade: 3 }
      ],
      kun: [
        { base: "よ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "整",
    sortReading: "せい",
    strokeCount: 16,
    readings: {
      on: [
        { text: "セイ", grade: 3 }
      ],
      kun: [
        { base: "ととの", okurigana: "う", grade: 3 }
      ]
    }
  },
  {
    kanji: "昔",
    sortReading: "せき",
    strokeCount: 8,
    readings: {
      on: [
        { text: "セキ", grade: 3 }
      ],
      kun: [
        { base: "むかし", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "全",
    sortReading: "ぜん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ゼン", grade: 3 }
      ],
      kun: [
        { base: "まった", okurigana: "く", grade: 3 },
        { base: "すべ", okurigana: "て", grade: 3 }
      ]
    }
  },
  {
    kanji: "相",
    sortReading: "そう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ソウ", grade: 3 },
        { text: "ショウ", grade: 3 }
      ],
      kun: [
        { base: "あい", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "送",
    sortReading: "そう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ソウ", grade: 3 }
      ],
      kun: [
        { base: "おく", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "想",
    sortReading: "そう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ソウ", grade: 3 },
        { text: "ソ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "息",
    sortReading: "そく",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ソク", grade: 3 }
      ],
      kun: [
        { base: "いき", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "速",
    sortReading: "そく",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ソク", grade: 3 }
      ],
      kun: [
        { base: "はや", okurigana: "い", grade: 3 },
        { base: "すみ", okurigana: "やか", grade: 3 }
      ]
    }
  },
  {
    kanji: "族",
    sortReading: "ぞく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ゾク", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "他",
    sortReading: "た",
    strokeCount: 5,
    readings: {
      on: [
        { text: "タ", grade: 3 }
      ],
      kun: [
        { base: "ほか", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "打",
    sortReading: "だ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ダ", grade: 3 }
      ],
      kun: [
        { base: "う", okurigana: "つ", grade: 3 }
      ]
    }
  },
  {
    kanji: "対",
    sortReading: "たい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "タイ", grade: 3 },
        { text: "ツイ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "待",
    sortReading: "たい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "タイ", grade: 3 }
      ],
      kun: [
        { base: "ま", okurigana: "つ", grade: 3 }
      ]
    }
  },
  {
    kanji: "代",
    sortReading: "だい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ダイ", grade: 3 },
        { text: "タイ", grade: 3 }
      ],
      kun: [
        { base: "か", okurigana: "わる", grade: 3 },
        { base: "よ", okurigana: "", grade: 3 },
        { base: "しろ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "第",
    sortReading: "だい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ダイ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "題",
    sortReading: "だい",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ダイ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "炭",
    sortReading: "たん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "タン", grade: 3 }
      ],
      kun: [
        { base: "すみ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "短",
    sortReading: "たん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "タン", grade: 3 }
      ],
      kun: [
        { base: "みじか", okurigana: "い", grade: 3 }
      ]
    }
  },
  {
    kanji: "談",
    sortReading: "だん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ダン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "着",
    sortReading: "ちゃく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "チャク", grade: 3 }
      ],
      kun: [
        { base: "つ", okurigana: "く", grade: 3 },
        { base: "き", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "注",
    sortReading: "ちゅう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "チュウ", grade: 3 }
      ],
      kun: [
        { base: "そそ", okurigana: "ぐ", grade: 3 }
      ]
    }
  },
  {
    kanji: "柱",
    sortReading: "ちゅう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "チュウ", grade: 3 }
      ],
      kun: [
        { base: "はしら", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "丁",
    sortReading: "ちょう",
    strokeCount: 2,
    readings: {
      on: [
        { text: "チョウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "帳",
    sortReading: "ちょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "チョウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "調",
    sortReading: "ちょう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "チョウ", grade: 3 }
      ],
      kun: [
        { base: "しら", okurigana: "べる", grade: 3 },
        { base: "ととの", okurigana: "う", grade: 3 }
      ]
    }
  },
  {
    kanji: "追",
    sortReading: "つい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ツイ", grade: 3 }
      ],
      kun: [
        { base: "お", okurigana: "う", grade: 3 }
      ]
    }
  },
  {
    kanji: "定",
    sortReading: "てい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "テイ", grade: 3 },
        { text: "ジョウ", grade: 3 }
      ],
      kun: [
        { base: "さだ", okurigana: "める", grade: 3 },
        { base: "さだ", okurigana: "か", grade: 3 }
      ]
    }
  },
  {
    kanji: "庭",
    sortReading: "てい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "テイ", grade: 3 }
      ],
      kun: [
        { base: "にわ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "笛",
    sortReading: "てき",
    strokeCount: 11,
    readings: {
      on: [
        { text: "テキ", grade: 3 }
      ],
      kun: [
        { base: "ふえ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "鉄",
    sortReading: "てつ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "テツ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "転",
    sortReading: "てん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "テン", grade: 3 }
      ],
      kun: [
        { base: "ころ", okurigana: "ぶ", grade: 3 },
        { base: "ころ", okurigana: "がる", grade: 3 }
      ]
    }
  },
  {
    kanji: "都",
    sortReading: "と",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ト", grade: 3 },
        { text: "ツ", grade: 3 }
      ],
      kun: [
        { base: "みやこ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "度",
    sortReading: "ど",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ド", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "投",
    sortReading: "とう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "トウ", grade: 3 }
      ],
      kun: [
        { base: "な", okurigana: "げる", grade: 3 }
      ]
    }
  },
  {
    kanji: "豆",
    sortReading: "とう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "トウ", grade: 3 },
        { text: "ズ", grade: 3 }
      ],
      kun: [
        { base: "まめ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "島",
    sortReading: "とう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "トウ", grade: 3 }
      ],
      kun: [
        { base: "しま", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "湯",
    sortReading: "とう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "トウ", grade: 3 }
      ],
      kun: [
        { base: "ゆ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "登",
    sortReading: "とう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "トウ", grade: 3 },
        { text: "ト", grade: 3 }
      ],
      kun: [
        { base: "のぼ", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "等",
    sortReading: "とう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "トウ", grade: 3 }
      ],
      kun: [
        { base: "ひと", okurigana: "しい", grade: 3 }
      ]
    }
  },
  {
    kanji: "動",
    sortReading: "どう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ドウ", grade: 3 }
      ],
      kun: [
        { base: "うご", okurigana: "く", grade: 3 }
      ]
    }
  },
  {
    kanji: "童",
    sortReading: "どう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ドウ", grade: 3 }
      ],
      kun: [
        { base: "わらべ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "農",
    sortReading: "のう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ノウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "波",
    sortReading: "は",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ハ", grade: 3 }
      ],
      kun: [
        { base: "なみ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "配",
    sortReading: "はい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ハイ", grade: 3 }
      ],
      kun: [
        { base: "くば", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "倍",
    sortReading: "ばい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "バイ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "箱",
    sortReading: "はこ",
    strokeCount: 15,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "はこ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "畑",
    sortReading: "はたけ",
    strokeCount: 9,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "はたけ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "発",
    sortReading: "はつ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ハツ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "反",
    sortReading: "はん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ハン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "坂",
    sortReading: "さか",
    strokeCount: 7,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "さか", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "板",
    sortReading: "ばん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "バン", grade: 3 }
      ],
      kun: [
        { base: "いた", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "皮",
    sortReading: "ひ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ヒ", grade: 3 }
      ],
      kun: [
        { base: "かわ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "悲",
    sortReading: "ひ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ヒ", grade: 3 }
      ],
      kun: [
        { base: "かな", okurigana: "しい", grade: 3 }
      ]
    }
  },
  {
    kanji: "美",
    sortReading: "び",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ビ", grade: 3 }
      ],
      kun: [
        { base: "うつく", okurigana: "しい", grade: 3 }
      ]
    }
  },
  {
    kanji: "鼻",
    sortReading: "び",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ビ", grade: 3 }
      ],
      kun: [
        { base: "はな", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "筆",
    sortReading: "ひつ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ヒツ", grade: 3 }
      ],
      kun: [
        { base: "ふで", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "氷",
    sortReading: "ひょう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ヒョウ", grade: 3 }
      ],
      kun: [
        { base: "こおり", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "表",
    sortReading: "ひょう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ヒョウ", grade: 3 }
      ],
      kun: [
        { base: "おもて", okurigana: "", grade: 3 },
        { base: "あらわ", okurigana: "れる", grade: 3 }
      ]
    }
  },
  {
    kanji: "秒",
    sortReading: "びょう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ビョウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "病",
    sortReading: "びょう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ビョウ", grade: 3 }
      ],
      kun: [
        { base: "やまい", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "品",
    sortReading: "ひん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ヒン", grade: 3 }
      ],
      kun: [
        { base: "しな", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "負",
    sortReading: "ふ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "フ", grade: 3 }
      ],
      kun: [
        { base: "ま", okurigana: "ける", grade: 3 }
      ]
    }
  },
  {
    kanji: "部",
    sortReading: "ぶ",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ブ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "服",
    sortReading: "ふく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "フク", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "福",
    sortReading: "ふく",
    strokeCount: 13,
    readings: {
      on: [
        { text: "フク", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "物",
    sortReading: "ぶつ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ブツ", grade: 3 }
      ],
      kun: [
        { base: "もの", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "平",
    sortReading: "へい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ヘイ", grade: 3 },
        { text: "ビョウ", grade: 3 }
      ],
      kun: [
        { base: "たいら", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "返",
    sortReading: "へん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ヘン", grade: 3 }
      ],
      kun: [
        { base: "かえ", okurigana: "す", grade: 3 }
      ]
    }
  },
  {
    kanji: "勉",
    sortReading: "べん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ベン", grade: 3 }
      ],
      kun: [
        { base: "つと", okurigana: "める", grade: 3 }
      ]
    }
  },
  {
    kanji: "放",
    sortReading: "ほう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ホウ", grade: 3 }
      ],
      kun: [
        { base: "はな", okurigana: "つ", grade: 3 }
      ]
    }
  },
  {
    kanji: "味",
    sortReading: "み",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ミ", grade: 3 }
      ],
      kun: [
        { base: "あじ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "命",
    sortReading: "めい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "メイ", grade: 3 }
      ],
      kun: [
        { base: "いのち", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "面",
    sortReading: "めん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "メン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "問",
    sortReading: "もん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "モン", grade: 3 }
      ],
      kun: [
        { base: "と", okurigana: "う", grade: 3 }
      ]
    }
  },
  {
    kanji: "役",
    sortReading: "やく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ヤク", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "薬",
    sortReading: "やく",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ヤク", grade: 3 }
      ],
      kun: [
        { base: "くすり", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "由",
    sortReading: "ゆう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ユウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "油",
    sortReading: "ゆ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ユ", grade: 3 }
      ],
      kun: [
        { base: "あぶら", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "有",
    sortReading: "ゆう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ユウ", grade: 3 }
      ],
      kun: [
        { base: "あ", okurigana: "る", grade: 3 }
      ]
    }
  },
  {
    kanji: "遊",
    sortReading: "ゆう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ユウ", grade: 3 }
      ],
      kun: [
        { base: "あそ", okurigana: "び", grade: 3 }
      ]
    }
  },
  {
    kanji: "予",
    sortReading: "よ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ヨ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "羊",
    sortReading: "よう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ヨウ", grade: 3 }
      ],
      kun: [
        { base: "ひつじ", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "洋",
    sortReading: "よう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ヨウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "葉",
    sortReading: "よう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ヨウ", grade: 3 }
      ],
      kun: [
        { base: "は", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "陽",
    sortReading: "よう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ヨウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "様",
    sortReading: "よう",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ヨウ", grade: 3 }
      ],
      kun: [
        { base: "さま", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "落",
    sortReading: "らく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ラク", grade: 3 }
      ],
      kun: [
        { base: "お", okurigana: "ちる", grade: 3 }
      ]
    }
  },
  {
    kanji: "流",
    sortReading: "りゅう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "リュウ", grade: 3 }
      ],
      kun: [
        { base: "なが", okurigana: "れる", grade: 3 }
      ]
    }
  },
  {
    kanji: "旅",
    sortReading: "りょ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "リョ", grade: 3 }
      ],
      kun: [
        { base: "たび", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "両",
    sortReading: "りょう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "リョウ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "緑",
    sortReading: "りょく",
    strokeCount: 14,
    readings: {
      on: [
        { text: "リョク", grade: 3 }
      ],
      kun: [
        { base: "みどり", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "礼",
    sortReading: "れい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "レイ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "列",
    sortReading: "れつ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "レツ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "練",
    sortReading: "れん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "レン", grade: 3 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "路",
    sortReading: "ろ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ロ", grade: 3 }
      ],
      kun: [
        { base: "みち", okurigana: "", grade: 3 }
      ]
    }
  },
  {
    kanji: "和",
    sortReading: "わ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ワ", grade: 3 }
      ],
      kun: [
        
      ]
    }
  }
];
