/* =========================================================================
   kanji-data-grade1.js（データ層 / 小学1年生 80字）

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

const grade1Kanji = [
  {
    kanji: "一",
    sortReading: "いち",
    strokeCount: 1,
    readings: {
      on: [
        { text: "イチ", grade: 1 },
        { text: "イツ", grade: 1 }
      ],
      kun: [
        { base: "ひと", okurigana: "つ", grade: 1 }
      ]
    }
  },
  {
    kanji: "右",
    sortReading: "う",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ウ", grade: 1 },
        { text: "ユウ", grade: 1 }
      ],
      kun: [
        { base: "みぎ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "雨",
    sortReading: "う",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ウ", grade: 1 }
      ],
      kun: [
        { base: "あめ", okurigana: "", grade: 1 },
        { base: "あま", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "円",
    sortReading: "えん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "エン", grade: 1 }
      ],
      kun: [
        { base: "まる", okurigana: "い", grade: 1 }
      ]
    }
  },
  {
    kanji: "王",
    sortReading: "おう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "オウ", grade: 1 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "音",
    sortReading: "おん",
    strokeCount: 9,
    readings: {
      on: [
        { text: "オン", grade: 1 },
        { text: "イン", grade: 1 }
      ],
      kun: [
        { base: "おと", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "下",
    sortReading: "か",
    strokeCount: 3,
    readings: {
      on: [
        { text: "カ", grade: 1 },
        { text: "ゲ", grade: 1 }
      ],
      kun: [
        { base: "した", okurigana: "", grade: 1 },
        { base: "くだ", okurigana: "る", grade: 1 },
        { base: "くだ", okurigana: "さる", grade: 1 },
        { base: "さ", okurigana: "がる", grade: 1 },
        { base: "しも", okurigana: "", grade: 1 },
        { base: "もと", okurigana: "", grade: 1 },
        { base: "お", okurigana: "りる", grade: 1 }
      ]
    }
  },
  {
    kanji: "火",
    sortReading: "か",
    strokeCount: 4,
    readings: {
      on: [
        { text: "カ", grade: 1 }
      ],
      kun: [
        { base: "ひ", okurigana: "", grade: 1 },
        { base: "ほ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "花",
    sortReading: "か",
    strokeCount: 7,
    readings: {
      on: [
        { text: "カ", grade: 1 }
      ],
      kun: [
        { base: "はな", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "学",
    sortReading: "がく",
    strokeCount: 8,
    readings: {
      on: [
        { text: "ガク", grade: 1 }
      ],
      kun: [
        { base: "まな", okurigana: "ぶ", grade: 1 }
      ]
    }
  },
  {
    kanji: "気",
    sortReading: "き",
    strokeCount: 6,
    readings: {
      on: [
        { text: "キ", grade: 1 },
        { text: "ケ", grade: 1 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "九",
    sortReading: "きゅう",
    strokeCount: 2,
    readings: {
      on: [
        { text: "キュウ", grade: 1 },
        { text: "ク", grade: 1 }
      ],
      kun: [
        { base: "ここの", okurigana: "つ", grade: 1 }
      ]
    }
  },
  {
    kanji: "休",
    sortReading: "きゅう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "キュウ", grade: 1 }
      ],
      kun: [
        { base: "やす", okurigana: "む", grade: 1 },
        { base: "やす", okurigana: "まる", grade: 1 },
        { base: "やす", okurigana: "める", grade: 1 }
      ]
    }
  },
  {
    kanji: "玉",
    sortReading: "ぎょく",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ギョク", grade: 1 }
      ],
      kun: [
        { base: "たま", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "金",
    sortReading: "きん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "キン", grade: 1 },
        { text: "コン", grade: 1 }
      ],
      kun: [
        { base: "かね", okurigana: "", grade: 1 },
        { base: "かな", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "空",
    sortReading: "くう",
    strokeCount: 8,
    readings: {
      on: [
        { text: "クウ", grade: 1 }
      ],
      kun: [
        { base: "そら", okurigana: "", grade: 1 },
        { base: "あ", okurigana: "ける", grade: 1 },
        { base: "から", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "月",
    sortReading: "げつ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ゲツ", grade: 1 },
        { text: "ガツ", grade: 1 }
      ],
      kun: [
        { base: "つき", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "犬",
    sortReading: "けん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ケン", grade: 1 }
      ],
      kun: [
        { base: "いぬ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "見",
    sortReading: "けん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ケン", grade: 1 }
      ],
      kun: [
        { base: "み", okurigana: "る", grade: 1 },
        { base: "み", okurigana: "える", grade: 1 }
      ]
    }
  },
  {
    kanji: "五",
    sortReading: "ご",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ゴ", grade: 1 }
      ],
      kun: [
        { base: "いつ", okurigana: "つ", grade: 1 }
      ]
    }
  },
  {
    kanji: "口",
    sortReading: "こう",
    strokeCount: 3,
    readings: {
      on: [
        { text: "コウ", grade: 1 },
        { text: "ク", grade: 1 }
      ],
      kun: [
        { base: "くち", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "校",
    sortReading: "こう",
    strokeCount: 10,
    readings: {
      on: [
        { text: "コウ", grade: 1 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "左",
    sortReading: "さ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "サ", grade: 1 }
      ],
      kun: [
        { base: "ひだり", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "三",
    sortReading: "さん",
    strokeCount: 3,
    readings: {
      on: [
        { text: "サン", grade: 1 }
      ],
      kun: [
        { base: "みっ", okurigana: "つ", grade: 1 }
      ]
    }
  },
  {
    kanji: "山",
    sortReading: "さん",
    strokeCount: 3,
    readings: {
      on: [
        { text: "サン", grade: 1 }
      ],
      kun: [
        { base: "やま", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "子",
    sortReading: "し",
    strokeCount: 3,
    readings: {
      on: [
        { text: "シ", grade: 1 },
        { text: "ス", grade: 1 }
      ],
      kun: [
        { base: "こ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "四",
    sortReading: "し",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シ", grade: 1 }
      ],
      kun: [
        { base: "よっ", okurigana: "つ", grade: 1 },
        { base: "よん", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "糸",
    sortReading: "し",
    strokeCount: 6,
    readings: {
      on: [
        { text: "シ", grade: 1 }
      ],
      kun: [
        { base: "いと", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "字",
    sortReading: "じ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ジ", grade: 1 }
      ],
      kun: [
        { base: "あざ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "耳",
    sortReading: "じ",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ジ", grade: 1 }
      ],
      kun: [
        { base: "みみ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "七",
    sortReading: "しち",
    strokeCount: 2,
    readings: {
      on: [
        { text: "シチ", grade: 1 }
      ],
      kun: [
        { base: "なな", okurigana: "つ", grade: 1 },
        { base: "なな", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "車",
    sortReading: "しゃ",
    strokeCount: 7,
    readings: {
      on: [
        { text: "シャ", grade: 1 }
      ],
      kun: [
        { base: "くるま", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "十",
    sortReading: "じゅう",
    strokeCount: 2,
    readings: {
      on: [
        { text: "ジュウ", grade: 1 },
        { text: "ジッ", grade: 1 }
      ],
      kun: [
        { base: "とお", okurigana: "", grade: 1 },
        { base: "と", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "手",
    sortReading: "しゅ",
    strokeCount: 4,
    readings: {
      on: [
        { text: "シュ", grade: 1 }
      ],
      kun: [
        { base: "て", okurigana: "", grade: 1 },
        { base: "た", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "出",
    sortReading: "しゅつ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "シュツ", grade: 1 },
        { text: "スイ", grade: 1 }
      ],
      kun: [
        { base: "で", okurigana: "る", grade: 1 },
        { base: "だ", okurigana: "す", grade: 1 }
      ]
    }
  },
  {
    kanji: "女",
    sortReading: "じょ",
    strokeCount: 3,
    readings: {
      on: [
        { text: "ジョ", grade: 1 },
        { text: "ニョ", grade: 1 },
        { text: "ニョウ", grade: 1 }
      ],
      kun: [
        { base: "おんな", okurigana: "", grade: 1 },
        { base: "め", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "小",
    sortReading: "しょう",
    strokeCount: 3,
    readings: {
      on: [
        { text: "ショウ", grade: 1 }
      ],
      kun: [
        { base: "ちい", okurigana: "さい", grade: 1 },
        { base: "こ", okurigana: "", grade: 1 },
        { base: "お", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "上",
    sortReading: "じょう",
    strokeCount: 3,
    readings: {
      on: [
        { text: "ジョウ", grade: 1 },
        { text: "ショウ", grade: 1 }
      ],
      kun: [
        { base: "うえ", okurigana: "", grade: 1 },
        { base: "うわ", okurigana: "", grade: 1 },
        { base: "かみ", okurigana: "", grade: 1 },
        { base: "あ", okurigana: "げる", grade: 1 },
        { base: "のぼ", okurigana: "る", grade: 1 }
      ]
    }
  },
  {
    kanji: "森",
    sortReading: "しん",
    strokeCount: 12,
    readings: {
      on: [
        { text: "シン", grade: 1 }
      ],
      kun: [
        { base: "もり", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "人",
    sortReading: "じん",
    strokeCount: 2,
    readings: {
      on: [
        { text: "ジン", grade: 1 },
        { text: "ニン", grade: 1 }
      ],
      kun: [
        { base: "ひと", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "水",
    sortReading: "すい",
    strokeCount: 4,
    readings: {
      on: [
        { text: "スイ", grade: 1 }
      ],
      kun: [
        { base: "みず", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "正",
    sortReading: "せい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "セイ", grade: 1 },
        { text: "ショウ", grade: 1 }
      ],
      kun: [
        { base: "ただ", okurigana: "しい", grade: 1 },
        { base: "まさ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "生",
    sortReading: "せい",
    strokeCount: 5,
    readings: {
      on: [
        { text: "セイ", grade: 1 },
        { text: "ショウ", grade: 1 }
      ],
      kun: [
        { base: "い", okurigana: "きる", grade: 1 },
        { base: "う", okurigana: "まれる", grade: 1 },
        { base: "お", okurigana: "う", grade: 1 },
        { base: "は", okurigana: "える", grade: 1 },
        { base: "き", okurigana: "", grade: 1 },
        { base: "なま", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "青",
    sortReading: "せい",
    strokeCount: 8,
    readings: {
      on: [
        { text: "セイ", grade: 1 },
        { text: "ショウ", grade: 1 }
      ],
      kun: [
        { base: "あお", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "夕",
    sortReading: "せき",
    strokeCount: 3,
    readings: {
      on: [
        { text: "セキ", grade: 1 }
      ],
      kun: [
        { base: "ゆう", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "石",
    sortReading: "せき",
    strokeCount: 5,
    readings: {
      on: [
        { text: "セキ", grade: 1 },
        { text: "シャク", grade: 1 },
        { text: "コク", grade: 1 }
      ],
      kun: [
        { base: "いし", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "赤",
    sortReading: "せき",
    strokeCount: 7,
    readings: {
      on: [
        { text: "セキ", grade: 1 },
        { text: "シャク", grade: 1 }
      ],
      kun: [
        { base: "あか", okurigana: "", grade: 1 },
        { base: "あか", okurigana: "らめる", grade: 1 }
      ]
    }
  },
  {
    kanji: "千",
    sortReading: "せん",
    strokeCount: 3,
    readings: {
      on: [
        { text: "セン", grade: 1 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "川",
    sortReading: "せん",
    strokeCount: 3,
    readings: {
      on: [
        { text: "セン", grade: 1 }
      ],
      kun: [
        { base: "かわ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "先",
    sortReading: "せん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "セン", grade: 1 }
      ],
      kun: [
        { base: "さき", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "早",
    sortReading: "そう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ソウ", grade: 1 },
        { text: "サッ", grade: 1 }
      ],
      kun: [
        { base: "はや", okurigana: "い", grade: 1 },
        { base: "はや", okurigana: "まる", grade: 1 }
      ]
    }
  },
  {
    kanji: "草",
    sortReading: "そう",
    strokeCount: 9,
    readings: {
      on: [
        { text: "ソウ", grade: 1 }
      ],
      kun: [
        { base: "くさ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "足",
    sortReading: "そく",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ソク", grade: 1 }
      ],
      kun: [
        { base: "た", okurigana: "りる", grade: 1 },
        { base: "た", okurigana: "す", grade: 1 },
        { base: "あし", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "村",
    sortReading: "そん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ソン", grade: 1 }
      ],
      kun: [
        { base: "むら", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "大",
    sortReading: "たい",
    strokeCount: 3,
    readings: {
      on: [
        { text: "タイ", grade: 1 },
        { text: "ダイ", grade: 1 }
      ],
      kun: [
        { base: "おお", okurigana: "きい", grade: 1 },
        { base: "おお", okurigana: "いに", grade: 1 }
      ]
    }
  },
  {
    kanji: "男",
    sortReading: "だん",
    strokeCount: 7,
    readings: {
      on: [
        { text: "ダン", grade: 1 },
        { text: "ナン", grade: 1 }
      ],
      kun: [
        { base: "おとこ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "竹",
    sortReading: "ちく",
    strokeCount: 6,
    readings: {
      on: [
        { text: "チク", grade: 1 }
      ],
      kun: [
        { base: "たけ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "中",
    sortReading: "ちゅう",
    strokeCount: 4,
    readings: {
      on: [
        { text: "チュウ", grade: 1 }
      ],
      kun: [
        { base: "なか", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "虫",
    sortReading: "ちゅう",
    strokeCount: 6,
    readings: {
      on: [
        { text: "チュウ", grade: 1 }
      ],
      kun: [
        { base: "むし", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "町",
    sortReading: "ちょう",
    strokeCount: 7,
    readings: {
      on: [
        { text: "チョウ", grade: 1 }
      ],
      kun: [
        { base: "まち", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "天",
    sortReading: "てん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "テン", grade: 1 }
      ],
      kun: [
        { base: "あま", okurigana: "", grade: 1 },
        { base: "あめ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "田",
    sortReading: "でん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "デン", grade: 1 }
      ],
      kun: [
        { base: "た", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "土",
    sortReading: "ど",
    strokeCount: 3,
    readings: {
      on: [
        { text: "ド", grade: 1 },
        { text: "ト", grade: 1 }
      ],
      kun: [
        { base: "つち", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "二",
    sortReading: "に",
    strokeCount: 2,
    readings: {
      on: [
        { text: "ニ", grade: 1 }
      ],
      kun: [
        { base: "ふた", okurigana: "つ", grade: 1 }
      ]
    }
  },
  {
    kanji: "日",
    sortReading: "にち",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ニチ", grade: 1 },
        { text: "ジツ", grade: 1 }
      ],
      kun: [
        { base: "ひ", okurigana: "", grade: 1 },
        { base: "か", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "年",
    sortReading: "ねん",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ネン", grade: 1 }
      ],
      kun: [
        { base: "とし", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "入",
    sortReading: "にゅう",
    strokeCount: 2,
    readings: {
      on: [
        { text: "ニュウ", grade: 1 }
      ],
      kun: [
        { base: "はい", okurigana: "る", grade: 1 },
        { base: "い", okurigana: "れる", grade: 1 }
      ]
    }
  },
  {
    kanji: "貝",
    sortReading: "かい",
    strokeCount: 7,
    readings: {
      on: [
        
      ],
      kun: [
        { base: "かい", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "白",
    sortReading: "はく",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ハク", grade: 1 },
        { text: "ビャク", grade: 1 }
      ],
      kun: [
        { base: "しろ", okurigana: "い", grade: 1 },
        { base: "しろ", okurigana: "", grade: 1 },
        { base: "しら", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "八",
    sortReading: "はち",
    strokeCount: 2,
    readings: {
      on: [
        { text: "ハチ", grade: 1 }
      ],
      kun: [
        { base: "やっ", okurigana: "つ", grade: 1 },
        { base: "や", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "百",
    sortReading: "ひゃく",
    strokeCount: 6,
    readings: {
      on: [
        { text: "ヒャク", grade: 1 }
      ],
      kun: [
        
      ]
    }
  },
  {
    kanji: "文",
    sortReading: "ぶん",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ブン", grade: 1 },
        { text: "モン", grade: 1 }
      ],
      kun: [
        { base: "ふみ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "木",
    sortReading: "ぼく",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ボク", grade: 1 },
        { text: "モク", grade: 1 }
      ],
      kun: [
        { base: "き", okurigana: "", grade: 1 },
        { base: "こ", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "本",
    sortReading: "ほん",
    strokeCount: 5,
    readings: {
      on: [
        { text: "ホン", grade: 1 }
      ],
      kun: [
        { base: "もと", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "名",
    sortReading: "めい",
    strokeCount: 6,
    readings: {
      on: [
        { text: "メイ", grade: 1 },
        { text: "ミョウ", grade: 1 }
      ],
      kun: [
        { base: "な", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "目",
    sortReading: "もく",
    strokeCount: 5,
    readings: {
      on: [
        { text: "モク", grade: 1 },
        { text: "ボク", grade: 1 }
      ],
      kun: [
        { base: "め", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "立",
    sortReading: "りつ",
    strokeCount: 5,
    readings: {
      on: [
        { text: "リツ", grade: 1 },
        { text: "リュウ", grade: 1 }
      ],
      kun: [
        { base: "た", okurigana: "つ", grade: 1 },
        { base: "た", okurigana: "てる", grade: 1 }
      ]
    }
  },
  {
    kanji: "力",
    sortReading: "りょく",
    strokeCount: 2,
    readings: {
      on: [
        { text: "リョク", grade: 1 },
        { text: "リキ", grade: 1 }
      ],
      kun: [
        { base: "ちから", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "林",
    sortReading: "りん",
    strokeCount: 8,
    readings: {
      on: [
        { text: "リン", grade: 1 }
      ],
      kun: [
        { base: "はやし", okurigana: "", grade: 1 }
      ]
    }
  },
  {
    kanji: "六",
    sortReading: "ろく",
    strokeCount: 4,
    readings: {
      on: [
        { text: "ロク", grade: 1 }
      ],
      kun: [
        { base: "むっ", okurigana: "つ", grade: 1 },
        { base: "む", okurigana: "", grade: 1 },
        { base: "むい", okurigana: "", grade: 1 }
      ]
    }
  }
];
