/* =========================================================================
   kanji-data-grade4.js（データ層 / 小学4年生 202字）

   出典・検証方法:
   - 2020年度の学習指導要領改訂により、都道府県名で使う漢字20字が新規に追加され、
     旧課程で5年生だった「賀・群・徳・富」、6年生だった「城」の5字がこの学年に
     移動しています。KANJIDIC2の学年情報はこの移動を反映していない場合がある
     ため、この学年についてはユーザーから指定された202字のリスト（現行の学年別
     漢字配当表に基づく）をそのまま採用し、KANJIDIC2は画数・読み方の事実確認
     （辞書的な正しさの検証）のみに使っています。
   - 画数・音読み・訓読みは KANJIDIC2（電子辞書研究開発グループ [EDRDG] 提供、
     CC BY-SA 4.0）と、学年別漢字の読み方をまとめた教育系ウェブサイトの一覧表を
     突き合わせて作成しています。
   - 画数は KANJIDIC2 のデータと、KanjiVG の実際の書き順ストローク数の
     両方が一致することを機械的に確認済みです（この学年の全字で完全一致）。
   - 読み方（音読み・訓読み）は、上記の一覧表が挙げていた候補を KANJIDIC2 の
     読み方一覧と照合し、辞書的に実在が確認できたものだけを採用しています。
     一覧表側の誤り（例:「憶」「貸」は本来「億」「貨」のはずが誤って掲載されて
     いた、「健」が丸ごと抜けていた、「関」の音読み「カン」が抜けていた等）は
     KANJIDIC2で補正・追加しています。
   - この配列の並び順は、ユーザーから指定された一覧の並び順をそのまま採用して
     おり、読み方などによる並べ替えは行っていません（一覧ページはこの配列順の
     まま表示する）。

   readings.on  : 音読み配列。各要素 {text, grade}
   readings.kun : 訓読み配列。各要素 {base, okurigana, grade}
     - base      : 漢字部分の読み（例: 「わる」）
     - okurigana : 送り仮名部分（例: 「い」）。送り仮名が無い読みは "" にする
     - grade     : その読みを習う学年（学年外の読みを区別するための拡張用）
   ========================================================================= */

const grade4Kanji = [
  {
    kanji: "愛",
    sortReading: "あい",
    strokeCount: 13,
    readings: {
      on: [
        { text: "アイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "案",
    sortReading: "あん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "アン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "以",
    sortReading: "い",
    strokeCount: 5,
    readings: {
      on: [
        { text: "イ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "衣",
    sortReading: "い",
    strokeCount: 6,
    readings: {
      on: [
        { text: "イ", grade: 4 }
      ],
      kun: [
        { base: "ころも", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "位",
    sortReading: "い",
    strokeCount: 7,
    readings: {
      on: [
        { text: "イ", grade: 4 }
      ],
      kun: [
        { base: "くらい", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "茨",
    sortReading: "いばら",
    strokeCount: 9,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "いばら", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "印",
    sortReading: "いん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "イン", grade: 4 }
      ],
      kun: [
        { base: "しるし", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "英",
    sortReading: "えい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "エイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "栄",
    sortReading: "えい",
    strokeCount: 9,
    readings: {
      on: [
        { text: "エイ", grade: 4 }
      ],
      kun: [
        { base: "さか", okurigana: "える", grade: 4 }
      ]
    }
  },
  {
    kanji: "媛",
    sortReading: "ひめ",
    strokeCount: 12,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "ひめ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "塩",
    sortReading: "えん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "エン", grade: 4 }
      ],
      kun: [
        { base: "しお", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "岡",
    sortReading: "おか",
    strokeCount: 8,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "おか", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "億",
    sortReading: "おく",
    strokeCount: 15,
    readings: {
      on: [
        { text: "オク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "加",
    sortReading: "か",
    strokeCount: 5,
    readings: {
      on: [
        { text: "カ", grade: 4 }
      ],
      kun: [
        { base: "くわ", okurigana: "える", grade: 4 },
        { base: "くわ", okurigana: "わる", grade: 4 }
      ]
    }
  },
  {
    kanji: "果",
    sortReading: "か",
    strokeCount: 8,
    readings: {
      on: [
        { text: "カ", grade: 4 }
      ],
      kun: [
        { base: "は", okurigana: "てる", grade: 4 },
        { base: "は", okurigana: "たす", grade: 4 }
      ]
    }
  },
  {
    kanji: "貨",
    sortReading: "か",
    strokeCount: 11,
    readings: {
      on: [
        { text: "カ", grade: 4 }
      ],
      kun: [
        { base: "たから", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "課",
    sortReading: "か",
    strokeCount: 15,
    readings: {
      on: [
        { text: "カ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "芽",
    sortReading: "が",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ガ", grade: 4 }
      ],
      kun: [
        { base: "め", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "賀",
    sortReading: "が",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ガ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "改",
    sortReading: "かい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "カイ", grade: 4 }
      ],
      kun: [
        { base: "あらた", okurigana: "める", grade: 4 },
        { base: "あらた", okurigana: "まる", grade: 4 }
      ]
    }
  },
  {
    kanji: "械",
    sortReading: "かい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "カイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "害",
    sortReading: "がい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ガイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "街",
    sortReading: "がい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ガイ", grade: 4 }
      ],
      kun: [
        { base: "まち", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "各",
    sortReading: "かく",
    strokeCount: 6,
    readings: {
      on: [
        { text: "カク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "覚",
    sortReading: "かく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "カク", grade: 4 }
      ],
      kun: [
        { base: "おぼ", okurigana: "える", grade: 4 },
        { base: "さ", okurigana: "める", grade: 4 }
      ]
    }
  },
  {
    kanji: "潟",
    sortReading: "かた",
    strokeCount: 15,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "かた", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "完",
    sortReading: "かん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "カン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "官",
    sortReading: "かん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "カン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "管",
    sortReading: "かん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "カン", grade: 4 }
      ],
      kun: [
        { base: "くだ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "関",
    sortReading: "かん",
    strokeCount: 14,
    readings: {
      on: [
        { text: "カン", grade: 4 }
      ],
      kun: [
        { base: "かか", okurigana: "わる", grade: 4 },
        { base: "せき", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "観",
    sortReading: "かん",
    strokeCount: 18,
    readings: {
      on: [
        { text: "カン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "願",
    sortReading: "がん",
    strokeCount: 19,
    readings: {
      on: [
        { text: "ガン", grade: 4 }
      ],
      kun: [
        { base: "ねが", okurigana: "い", grade: 4 }
      ]
    }
  },
  {
    kanji: "岐",
    sortReading: "き",
    strokeCount: 7,
    readings: {
      on: [
        { text: "キ", grade: 4 },
        { text: "ギ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "希",
    sortReading: "き",
    strokeCount: 7,
    readings: {
      on: [
        { text: "キ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "季",
    sortReading: "き",
    strokeCount: 8,
    readings: {
      on: [
        { text: "キ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "旗",
    sortReading: "き",
    strokeCount: 14,
    readings: {
      on: [
        { text: "キ", grade: 4 }
      ],
      kun: [
        { base: "はた", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "器",
    sortReading: "き",
    strokeCount: 15,
    readings: {
      on: [
        { text: "キ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "機",
    sortReading: "き",
    strokeCount: 16,
    readings: {
      on: [
        { text: "キ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "議",
    sortReading: "ぎ",
    strokeCount: 20,
    readings: {
      on: [
        { text: "ギ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "求",
    sortReading: "きゅう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "キュウ", grade: 4 }
      ],
      kun: [
        { base: "もと", okurigana: "める", grade: 4 }
      ]
    }
  },
  {
    kanji: "泣",
    sortReading: "きゅう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "キュウ", grade: 4 }
      ],
      kun: [
        { base: "な", okurigana: "く", grade: 4 }
      ]
    }
  },
  {
    kanji: "給",
    sortReading: "きゅう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "キュウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "挙",
    sortReading: "きょ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "キョ", grade: 4 }
      ],
      kun: [
        { base: "あ", okurigana: "げる", grade: 4 }
      ]
    }
  },
  {
    kanji: "漁",
    sortReading: "ぎょ",
    strokeCount: 14,
    readings: {
      on: [
        { text: "ギョ", grade: 4 },
        { text: "リョウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "共",
    sortReading: "きょう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "キョウ", grade: 4 }
      ],
      kun: [
        { base: "とも", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "協",
    sortReading: "きょう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "キョウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "鏡",
    sortReading: "きょう",
    strokeCount: 19,
    readings: {
      on: [
        { text: "キョウ", grade: 4 }
      ],
      kun: [
        { base: "かがみ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "競",
    sortReading: "きょう",
    strokeCount: 20,
    readings: {
      on: [
        { text: "キョウ", grade: 4 },
        { text: "ケイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "極",
    sortReading: "きょく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "キョク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "熊",
    sortReading: "くま",
    strokeCount: 14,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "くま", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "訓",
    sortReading: "くん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "クン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "軍",
    sortReading: "ぐん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "グン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "郡",
    sortReading: "ぐん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "グン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "群",
    sortReading: "ぐん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "グン", grade: 4 }
      ],
      kun: [
        { base: "む", okurigana: "れる", grade: 4 },
        { base: "むら", okurigana: "がる", grade: 4 }
      ]
    }
  },
  {
    kanji: "径",
    sortReading: "けい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ケイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "景",
    sortReading: "けい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ケイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "芸",
    sortReading: "げい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ゲイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "欠",
    sortReading: "けつ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ケツ", grade: 4 }
      ],
      kun: [
        { base: "か", okurigana: "ける", grade: 4 },
        { base: "か", okurigana: "く", grade: 4 }
      ]
    }
  },
  {
    kanji: "結",
    sortReading: "けつ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ケツ", grade: 4 }
      ],
      kun: [
        { base: "むす", okurigana: "ぶ", grade: 4 }
      ]
    }
  },
  {
    kanji: "建",
    sortReading: "けん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ケン", grade: 4 }
      ],
      kun: [
        { base: "た", okurigana: "てる", grade: 4 },
        { base: "た", okurigana: "つ", grade: 4 }
      ]
    }
  },
  {
    kanji: "健",
    sortReading: "けん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ケン", grade: 4 }
      ],
      kun: [
        { base: "すこ", okurigana: "やか", grade: 4 }
      ]
    }
  },
  {
    kanji: "験",
    sortReading: "けん",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ケン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "固",
    sortReading: "こ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "コ", grade: 4 }
      ],
      kun: [
        { base: "かた", okurigana: "い", grade: 4 },
        { base: "かた", okurigana: "める", grade: 4 }
      ]
    }
  },
  {
    kanji: "功",
    sortReading: "こう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "コウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "好",
    sortReading: "こう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "コウ", grade: 4 }
      ],
      kun: [
        { base: "この", okurigana: "み", grade: 4 },
        { base: "す", okurigana: "き", grade: 4 }
      ]
    }
  },
  {
    kanji: "香",
    sortReading: "かおり",
    strokeCount: 9,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "かお", okurigana: "り", grade: 4 },
        { base: "か", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "候",
    sortReading: "こう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "康",
    sortReading: "こう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "コウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "佐",
    sortReading: "さ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "サ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "差",
    sortReading: "さ",
    strokeCount: 10,
    readings: {
      on: [
        { text: "サ", grade: 4 }
      ],
      kun: [
        { base: "さ", okurigana: "す", grade: 4 }
      ]
    }
  },
  {
    kanji: "菜",
    sortReading: "さい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "サイ", grade: 4 }
      ],
      kun: [
        { base: "な", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "最",
    sortReading: "さい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "サイ", grade: 4 }
      ],
      kun: [
        { base: "もっと", okurigana: "も", grade: 4 }
      ]
    }
  },
  {
    kanji: "埼",
    sortReading: "さい",
    strokeCount: 11,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "さい", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "材",
    sortReading: "ざい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ザイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "崎",
    sortReading: "さき",
    strokeCount: 11,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "さき", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "昨",
    sortReading: "さく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "サク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "札",
    sortReading: "さつ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "サツ", grade: 4 }
      ],
      kun: [
        { base: "ふだ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "刷",
    sortReading: "さつ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "サツ", grade: 4 }
      ],
      kun: [
        { base: "す", okurigana: "る", grade: 4 }
      ]
    }
  },
  {
    kanji: "察",
    sortReading: "さつ",
    strokeCount: 14,
    readings: {
      on: [
        { text: "サツ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "参",
    sortReading: "さん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "サン", grade: 4 }
      ],
      kun: [
        { base: "まい", okurigana: "る", grade: 4 }
      ]
    }
  },
  {
    kanji: "産",
    sortReading: "さん",
    strokeCount: 11,
    readings: {
      on: [
        { text: "サン", grade: 4 }
      ],
      kun: [
        { base: "う", okurigana: "まれる", grade: 4 },
        { base: "う", okurigana: "む", grade: 4 }
      ]
    }
  },
  {
    kanji: "散",
    sortReading: "さん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "サン", grade: 4 }
      ],
      kun: [
        { base: "ち", okurigana: "る", grade: 4 },
        { base: "ち", okurigana: "らかす", grade: 4 },
        { base: "ち", okurigana: "らす", grade: 4 }
      ]
    }
  },
  {
    kanji: "残",
    sortReading: "ざん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ザン", grade: 4 }
      ],
      kun: [
        { base: "のこ", okurigana: "る", grade: 4 }
      ]
    }
  },
  {
    kanji: "氏",
    sortReading: "し",
    strokeCount: 4,
    readings: {
      on: [
        { text: "シ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "司",
    sortReading: "し",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "試",
    sortReading: "し",
    strokeCount: 13,
    readings: {
      on: [
        { text: "シ", grade: 4 }
      ],
      kun: [
        { base: "こころ", okurigana: "みる", grade: 4 }
      ]
    }
  },
  {
    kanji: "児",
    sortReading: "じ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ジ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "治",
    sortReading: "じ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ジ", grade: 4 }
      ],
      kun: [
        { base: "なお", okurigana: "す", grade: 4 },
        { base: "おさ", okurigana: "める", grade: 4 }
      ]
    }
  },
  {
    kanji: "滋",
    sortReading: "し",
    strokeCount: 12,
    readings: {
      on: [
        { text: "シ", grade: 4 },
        { text: "ジ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "辞",
    sortReading: "じ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ジ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "鹿",
    sortReading: "しか",
    strokeCount: 11,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "しか", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "失",
    sortReading: "しつ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シツ", grade: 4 }
      ],
      kun: [
        { base: "うしな", okurigana: "う", grade: 4 }
      ]
    }
  },
  {
    kanji: "借",
    sortReading: "しゃく",
    strokeCount: 10,
    readings: {
      on: [
        { text: "シャク", grade: 4 }
      ],
      kun: [
        { base: "か", okurigana: "りる", grade: 4 }
      ]
    }
  },
  {
    kanji: "種",
    sortReading: "しゅ",
    strokeCount: 14,
    readings: {
      on: [
        { text: "シュ", grade: 4 }
      ],
      kun: [
        { base: "たね", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "周",
    sortReading: "しゅう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "シュウ", grade: 4 }
      ],
      kun: [
        { base: "まわ", okurigana: "り", grade: 4 }
      ]
    }
  },
  {
    kanji: "祝",
    sortReading: "しゅく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シュク", grade: 4 }
      ],
      kun: [
        { base: "いわ", okurigana: "う", grade: 4 }
      ]
    }
  },
  {
    kanji: "順",
    sortReading: "じゅん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ジュン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "初",
    sortReading: "しょ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ショ", grade: 4 }
      ],
      kun: [
        { base: "はつ", okurigana: "", grade: 4 },
        { base: "はじ", okurigana: "め", grade: 4 }
      ]
    }
  },
  {
    kanji: "松",
    sortReading: "しょう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ショウ", grade: 4 }
      ],
      kun: [
        { base: "まつ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "笑",
    sortReading: "わらう",
    strokeCount: 10,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "わら", okurigana: "う", grade: 4 }
      ]
    }
  },
  {
    kanji: "唱",
    sortReading: "しょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ショウ", grade: 4 }
      ],
      kun: [
        { base: "とな", okurigana: "える", grade: 4 }
      ]
    }
  },
  {
    kanji: "焼",
    sortReading: "しょう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ショウ", grade: 4 }
      ],
      kun: [
        { base: "や", okurigana: "く", grade: 4 },
        { base: "や", okurigana: "ける", grade: 4 }
      ]
    }
  },
  {
    kanji: "照",
    sortReading: "しょう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ショウ", grade: 4 }
      ],
      kun: [
        { base: "て", okurigana: "らす", grade: 4 },
        { base: "て", okurigana: "る", grade: 4 }
      ]
    }
  },
  {
    kanji: "城",
    sortReading: "じょう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ジョウ", grade: 4 }
      ],
      kun: [
        { base: "しろ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "縄",
    sortReading: "なわ",
    strokeCount: 15,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "なわ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "臣",
    sortReading: "じん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ジン", grade: 4 },
        { text: "シン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "信",
    sortReading: "しん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "シン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "井",
    sortReading: "い",
    strokeCount: 4,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "い", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "成",
    sortReading: "せい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "セイ", grade: 4 }
      ],
      kun: [
        { base: "な", okurigana: "る", grade: 4 },
        { base: "な", okurigana: "す", grade: 4 }
      ]
    }
  },
  {
    kanji: "省",
    sortReading: "しょう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ショウ", grade: 4 },
        { text: "セイ", grade: 4 }
      ],
      kun: [
        { base: "はぶ", okurigana: "く", grade: 4 }
      ]
    }
  },
  {
    kanji: "清",
    sortReading: "せい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "セイ", grade: 4 }
      ],
      kun: [
        { base: "きよ", okurigana: "める", grade: 4 }
      ]
    }
  },
  {
    kanji: "静",
    sortReading: "せい",
    strokeCount: 14,
    readings: {
      on: [
        { text: "セイ", grade: 4 }
      ],
      kun: [
        { base: "しず", okurigana: "か", grade: 4 },
        { base: "しず", okurigana: "まる", grade: 4 }
      ]
    }
  },
  {
    kanji: "席",
    sortReading: "せき",
    strokeCount: 10,
    readings: {
      on: [
        { text: "セキ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "積",
    sortReading: "せき",
    strokeCount: 16,
    readings: {
      on: [
        { text: "セキ", grade: 4 }
      ],
      kun: [
        { base: "つ", okurigana: "もる", grade: 4 },
        { base: "つ", okurigana: "む", grade: 4 }
      ]
    }
  },
  {
    kanji: "折",
    sortReading: "せつ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "セツ", grade: 4 }
      ],
      kun: [
        { base: "お", okurigana: "れる", grade: 4 },
        { base: "おり", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "節",
    sortReading: "せつ",
    strokeCount: 13,
    readings: {
      on: [
        { text: "セツ", grade: 4 }
      ],
      kun: [
        { base: "ふし", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "説",
    sortReading: "せつ",
    strokeCount: 14,
    readings: {
      on: [
        { text: "セツ", grade: 4 }
      ],
      kun: [
        { base: "と", okurigana: "く", grade: 4 }
      ]
    }
  },
  {
    kanji: "浅",
    sortReading: "あさい",
    strokeCount: 9,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "あさ", okurigana: "い", grade: 4 }
      ]
    }
  },
  {
    kanji: "戦",
    sortReading: "せん",
    strokeCount: 13,
    readings: {
      on: [
        { text: "セン", grade: 4 }
      ],
      kun: [
        { base: "たたか", okurigana: "う", grade: 4 }
      ]
    }
  },
  {
    kanji: "選",
    sortReading: "せん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "セン", grade: 4 }
      ],
      kun: [
        { base: "えら", okurigana: "ぶ", grade: 4 }
      ]
    }
  },
  {
    kanji: "然",
    sortReading: "ぜん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ゼン", grade: 4 },
        { text: "ネン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "争",
    sortReading: "そう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ソウ", grade: 4 }
      ],
      kun: [
        { base: "あらそ", okurigana: "う", grade: 4 }
      ]
    }
  },
  {
    kanji: "倉",
    sortReading: "そう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ソウ", grade: 4 }
      ],
      kun: [
        { base: "くら", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "巣",
    sortReading: "す",
    strokeCount: 11,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "す", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "束",
    sortReading: "そく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ソク", grade: 4 }
      ],
      kun: [
        { base: "たば", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "側",
    sortReading: "そく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ソク", grade: 4 }
      ],
      kun: [
        { base: "がわ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "続",
    sortReading: "ぞく",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ゾク", grade: 4 }
      ],
      kun: [
        { base: "つづ", okurigana: "く", grade: 4 },
        { base: "つづ", okurigana: "ける", grade: 4 }
      ]
    }
  },
  {
    kanji: "卒",
    sortReading: "そつ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ソツ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "孫",
    sortReading: "そん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ソン", grade: 4 }
      ],
      kun: [
        { base: "まご", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "帯",
    sortReading: "たい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "タイ", grade: 4 }
      ],
      kun: [
        { base: "おび", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "隊",
    sortReading: "たい",
    strokeCount: 12,
    readings: {
      on: [
        { text: "タイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "達",
    sortReading: "たつ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "タツ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "単",
    sortReading: "たん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "タン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "置",
    sortReading: "ち",
    strokeCount: 13,
    readings: {
      on: [
        { text: "チ", grade: 4 }
      ],
      kun: [
        { base: "お", okurigana: "く", grade: 4 }
      ]
    }
  },
  {
    kanji: "仲",
    sortReading: "なか",
    strokeCount: 6,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "なか", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "沖",
    sortReading: "おき",
    strokeCount: 7,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "おき", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "兆",
    sortReading: "ちょう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "チョウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "低",
    sortReading: "てい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "テイ", grade: 4 }
      ],
      kun: [
        { base: "ひく", okurigana: "い", grade: 4 },
        { base: "ひく", okurigana: "まる", grade: 4 }
      ]
    }
  },
  {
    kanji: "底",
    sortReading: "てい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "テイ", grade: 4 }
      ],
      kun: [
        { base: "そこ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "的",
    sortReading: "てき",
    strokeCount: 8,
    readings: {
      on: [
        { text: "テキ", grade: 4 }
      ],
      kun: [
        { base: "まと", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "典",
    sortReading: "てん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "テン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "伝",
    sortReading: "でん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "デン", grade: 4 }
      ],
      kun: [
        { base: "つた", okurigana: "える", grade: 4 },
        { base: "つた", okurigana: "わる", grade: 4 }
      ]
    }
  },
  {
    kanji: "徒",
    sortReading: "と",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ト", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "努",
    sortReading: "ど",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ド", grade: 4 }
      ],
      kun: [
        { base: "つと", okurigana: "める", grade: 4 }
      ]
    }
  },
  {
    kanji: "灯",
    sortReading: "とう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "トウ", grade: 4 }
      ],
      kun: [
        { base: "あか", okurigana: "り", grade: 4 }
      ]
    }
  },
  {
    kanji: "働",
    sortReading: "どう",
    strokeCount: 13,
    readings: {
      on: [
        { text: "ドウ", grade: 4 }
      ],
      kun: [
        { base: "はたら", okurigana: "く", grade: 4 }
      ]
    }
  },
  {
    kanji: "特",
    sortReading: "とく",
    strokeCount: 10,
    readings: {
      on: [
        { text: "トク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "徳",
    sortReading: "とく",
    strokeCount: 14,
    readings: {
      on: [
        { text: "トク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "栃",
    sortReading: "とち",
    strokeCount: 9,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "とち", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "奈",
    sortReading: "な",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ナ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "梨",
    sortReading: "なし",
    strokeCount: 11,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "なし", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "熱",
    sortReading: "ねつ",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ネツ", grade: 4 }
      ],
      kun: [
        { base: "あつ", okurigana: "い", grade: 4 }
      ]
    }
  },
  {
    kanji: "念",
    sortReading: "ねん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ネン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "敗",
    sortReading: "はい",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ハイ", grade: 4 }
      ],
      kun: [
        { base: "やぶ", okurigana: "れる", grade: 4 }
      ]
    }
  },
  {
    kanji: "梅",
    sortReading: "ばい",
    strokeCount: 10,
    readings: {
      on: [
        { text: "バイ", grade: 4 }
      ],
      kun: [
        { base: "うめ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "博",
    sortReading: "はく",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ハク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "阪",
    sortReading: "はん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ハン", grade: 4 }
      ],
      kun: [
        { base: "さか", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "飯",
    sortReading: "はん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ハン", grade: 4 }
      ],
      kun: [
        { base: "めし", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "飛",
    sortReading: "ひ",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ヒ", grade: 4 }
      ],
      kun: [
        { base: "と", okurigana: "ぶ", grade: 4 },
        { base: "と", okurigana: "ばす", grade: 4 }
      ]
    }
  },
  {
    kanji: "必",
    sortReading: "ひつ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ヒツ", grade: 4 }
      ],
      kun: [
        { base: "かなら", okurigana: "ず", grade: 4 }
      ]
    }
  },
  {
    kanji: "票",
    sortReading: "ひょう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ヒョウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "標",
    sortReading: "ひょう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ヒョウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "不",
    sortReading: "ふ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "フ", grade: 4 },
        { text: "ブ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "夫",
    sortReading: "ふ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "フ", grade: 4 }
      ],
      kun: [
        { base: "おっと", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "付",
    sortReading: "ふ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "フ", grade: 4 }
      ],
      kun: [
        { base: "つ", okurigana: "ける", grade: 4 },
        { base: "つ", okurigana: "く", grade: 4 }
      ]
    }
  },
  {
    kanji: "府",
    sortReading: "ふ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "フ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "阜",
    sortReading: "ふ",
    strokeCount: 8,
    readings: {
      on: [
        { text: "フ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "富",
    sortReading: "ふ",
    strokeCount: 12,
    readings: {
      on: [
        { text: "フ", grade: 4 }
      ],
      kun: [
        { base: "とみ", okurigana: "", grade: 4 },
        { base: "と", okurigana: "む", grade: 4 }
      ]
    }
  },
  {
    kanji: "副",
    sortReading: "ふく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "フク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "兵",
    sortReading: "へい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ヘイ", grade: 4 },
        { text: "ヒョウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "別",
    sortReading: "べつ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ベツ", grade: 4 }
      ],
      kun: [
        { base: "わか", okurigana: "れ", grade: 4 }
      ]
    }
  },
  {
    kanji: "辺",
    sortReading: "へん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ヘン", grade: 4 }
      ],
      kun: [
        { base: "あた", okurigana: "り", grade: 4 }
      ]
    }
  },
  {
    kanji: "変",
    sortReading: "へん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ヘン", grade: 4 }
      ],
      kun: [
        { base: "か", okurigana: "わる", grade: 4 },
        { base: "か", okurigana: "える", grade: 4 }
      ]
    }
  },
  {
    kanji: "便",
    sortReading: "べん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ベン", grade: 4 },
        { text: "ビン", grade: 4 }
      ],
      kun: [
        { base: "たよ", okurigana: "り", grade: 4 }
      ]
    }
  },
  {
    kanji: "包",
    sortReading: "ほう",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ホウ", grade: 4 }
      ],
      kun: [
        { base: "つつ", okurigana: "む", grade: 4 }
      ]
    }
  },
  {
    kanji: "法",
    sortReading: "ほう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ホウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "望",
    sortReading: "ぼう",
    strokeCount: 11,
    readings: {
      on: [
        { text: "ボウ", grade: 4 }
      ],
      kun: [
        { base: "のぞ", okurigana: "む", grade: 4 }
      ]
    }
  },
  {
    kanji: "牧",
    sortReading: "ぼく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ボク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "末",
    sortReading: "まつ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "マツ", grade: 4 }
      ],
      kun: [
        { base: "すえ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "満",
    sortReading: "まん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "マン", grade: 4 }
      ],
      kun: [
        { base: "み", okurigana: "たす", grade: 4 },
        { base: "み", okurigana: "ちる", grade: 4 }
      ]
    }
  },
  {
    kanji: "未",
    sortReading: "み",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ミ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "民",
    sortReading: "みん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ミン", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "無",
    sortReading: "む",
    strokeCount: 12,
    readings: {
      on: [
        { text: "ム", grade: 4 },
        { text: "ブ", grade: 4 }
      ],
      kun: [
        { base: "な", okurigana: "し", grade: 4 },
        { base: "な", okurigana: "い", grade: 4 }
      ]
    }
  },
  {
    kanji: "約",
    sortReading: "やく",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ヤク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "勇",
    sortReading: "ゆう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ユウ", grade: 4 }
      ],
      kun: [
        { base: "いさ", okurigana: "む", grade: 4 }
      ]
    }
  },
  {
    kanji: "要",
    sortReading: "よう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ヨウ", grade: 4 }
      ],
      kun: [
        { base: "かなめ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "養",
    sortReading: "よう",
    strokeCount: 15,
    readings: {
      on: [
        { text: "ヨウ", grade: 4 }
      ],
      kun: [
        { base: "やしな", okurigana: "う", grade: 4 }
      ]
    }
  },
  {
    kanji: "浴",
    sortReading: "よく",
    strokeCount: 10,
    readings: {
      on: [
        { text: "ヨク", grade: 4 }
      ],
      kun: [
        { base: "あ", okurigana: "びる", grade: 4 },
        { base: "あ", okurigana: "びせる", grade: 4 }
      ]
    }
  },
  {
    kanji: "利",
    sortReading: "り",
    strokeCount: 7,
    readings: {
      on: [
        { text: "リ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "陸",
    sortReading: "りく",
    strokeCount: 11,
    readings: {
      on: [
        { text: "リク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "良",
    sortReading: "りょう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "リョウ", grade: 4 }
      ],
      kun: [
        { base: "よ", okurigana: "い", grade: 4 }
      ]
    }
  },
  {
    kanji: "料",
    sortReading: "りょう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "リョウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "量",
    sortReading: "りょう",
    strokeCount: 12,
    readings: {
      on: [
        { text: "リョウ", grade: 4 }
      ],
      kun: [
        { base: "はか", okurigana: "る", grade: 4 }
      ]
    }
  },
  {
    kanji: "輪",
    sortReading: "りん",
    strokeCount: 15,
    readings: {
      on: [
        { text: "リン", grade: 4 }
      ],
      kun: [
        { base: "わ", okurigana: "", grade: 4 }
      ]
    }
  },
  {
    kanji: "類",
    sortReading: "るい",
    strokeCount: 18,
    readings: {
      on: [
        { text: "ルイ", grade: 4 }
      ],
      kun: [
        { base: "たぐ", okurigana: "い", grade: 4 }
      ]
    }
  },
  {
    kanji: "令",
    sortReading: "れい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "レイ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "冷",
    sortReading: "れい",
    strokeCount: 7,
    readings: {
      on: [
        { text: "レイ", grade: 4 }
      ],
      kun: [
        { base: "つめ", okurigana: "たい", grade: 4 },
        { base: "ひ", okurigana: "やす", grade: 4 }
      ]
    }
  },
  {
    kanji: "例",
    sortReading: "れい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "レイ", grade: 4 }
      ],
      kun: [
        { base: "たと", okurigana: "える", grade: 4 }
      ]
    }
  },
  {
    kanji: "連",
    sortReading: "れん",
    strokeCount: 10,
    readings: {
      on: [
        { text: "レン", grade: 4 }
      ],
      kun: [
        { base: "つ", okurigana: "れる", grade: 4 },
        { base: "つら", okurigana: "なる", grade: 4 }
      ]
    }
  },
  {
    kanji: "老",
    sortReading: "ろう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ロウ", grade: 4 }
      ],
      kun: [
        { base: "お", okurigana: "いる", grade: 4 }
      ]
    }
  },
  {
    kanji: "労",
    sortReading: "ろう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ロウ", grade: 4 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "録",
    sortReading: "ろく",
    strokeCount: 16,
    readings: {
      on: [
        { text: "ロク", grade: 4 }
      ],
      kun: [
        
      ]
    }
  }
];
