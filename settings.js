/* =========================================================================
   settings.js（設定・モード判定層）

   既存の「今の学年（一覧ページでどの学年を表示するか）」は app.js 側の
   currentGrade / kakijun-default-grade のまま変更していない。
   ここで扱う設定は、それとは別物の「直接練習モード判定用の設定」で、
   localStorage の別キー（SETTINGS_STORAGE_KEY）にJSONとして保存する。

   settings.currentGrade は「子どもの現在の学年」を表す設定値であり、
   一覧ページの表示学年（currentGrade変数）とは意味も保存場所も別。
   名前が紛らわしいので、参照するときは必ず settings.currentGrade の形で書く。
   ========================================================================= */

const SETTINGS_STORAGE_KEY = "kakijun-settings";

const DEFAULT_SETTINGS = {
  currentGrade: 1,              // 子どもの現在の学年（1〜6）
  practiceModeType: "belowGrade", // "belowGrade" | "all" | "perGrade"
  perGradeSelection: {          // "perGrade" のときだけ使う、学年ごとのON/OFF
    1: false, 2: false, 3: false, 4: false, 5: false, 6: false
  },
  samplePosition: "left",       // 書き順見本の位置: "left" | "right"
  tolerance: "normal",          // なぞり判定の厳しさ: "easy" | "normal" | "hard"
  redoMode: "strokeOnly",       // 失敗時の書き直し方法: "strokeOnly" | "fromStart"
};

// ---- 設定の読み込み ----
// 保存されている設定に、新しく増えた項目があってもDEFAULT_SETTINGSで
// 補完するので、設定ファイルの形が変わっても古い保存データが壊れない。
function loadSettings(){
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY));
    if (saved && typeof saved === "object") {
      return {
        ...DEFAULT_SETTINGS,
        ...saved,
        perGradeSelection: {
          ...DEFAULT_SETTINGS.perGradeSelection,
          ...(saved.perGradeSelection || {})
        }
      };
    }
  } catch (e) {
    // 壊れている・保存されていない場合は既定値にフォールバックする
  }
  return { ...DEFAULT_SETTINGS };
}

// ---- 設定の保存 ----
function saveSettings(settings){
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    // 保存できなくてもアプリの動作自体は継続する
  }
}

// ---- 直接練習モードかどうかの判定 ----
// charType: "hiragana" | "katakana" | "number" | "kanji"
// grade    : 漢字のときだけ意味を持つ（1〜6）。かな・数字では無視してよい。
// 戻り値   : "practice"（直接練習）| "confirm"（既存の書き順確認）
function getPracticeMode(charType, grade, settings){
  // ひらがな・カタカナ・数字は設定に関係なく常に直接練習モード
  if (charType !== "kanji") return "practice";

  switch (settings.practiceModeType) {
    case "all":
      return "practice";
    case "perGrade":
      return settings.perGradeSelection[grade] ? "practice" : "confirm";
    case "belowGrade":
    default:
      // 「設定した学年より下」＝ settings.currentGrade 未満の学年だけ直接練習
      return grade < settings.currentGrade ? "practice" : "confirm";
  }
}
