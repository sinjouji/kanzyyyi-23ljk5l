/* =========================================================================
   kanji-data.js（データ層 / 学年まとめ）

   kanji-data-grade1.js 〜 kanji-data-grade6.js より後に読み込む想定。
   これで小学1〜6年生、全1,026字を収録済み。
   新しい学年（中学以降など）を追加する場合は、
     1. kanji-data-gradeN.js を追加（grade1〜grade6 と同じ形式で gradeNKanji を定義）
     2. index.html に kanji-data-gradeN.js を読み込む script タグを追記
     3. 下の KANJI_DATA_BY_GRADE に1行足す
   の3手順でよい。

   list は「その学年の一覧ページに表示する順番」そのもの（並べ替えは行わない）。
   ========================================================================= */
const KANJI_DATA_BY_GRADE = {
  1: { label: "小学1年生", list: grade1Kanji },
  2: { label: "小学2年生", list: grade2Kanji },
  3: { label: "小学3年生", list: grade3Kanji },
  4: { label: "小学4年生", list: grade4Kanji },
  5: { label: "小学5年生", list: grade5Kanji },
  6: { label: "小学6年生", list: grade6Kanji },
};
