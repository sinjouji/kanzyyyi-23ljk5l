/* =========================================================================
   app.js（UI層）
   kanji-data.js / stroke-data.js より後に読み込まれる想定。
   ========================================================================= */
const STROKE_DURATION = 500; // 1画あたりの再生時間（ミリ秒）。ここを変えれば全体の速度を調整できる。

const SVG_NS = "http://www.w3.org/2000/svg";
const DEFAULT_GRADE_STORAGE_KEY = "kakijun-default-grade"; // 「今の学年」をブラウザに記憶しておくためのキー

// ---- 「今の選択（学年／ひらがな等）」の読み込み ----
// 前回選んだものを localStorage から復元する。保存されていない・
// 無効な値の場合は、CONTENT_ORDER の先頭（ひらがな）を使う。
// 保存キー名は既存のまま（以前は漢字の学年専用だったが、
// ひらがな・カタカナ・すうじも含めて記憶できるように対象を広げただけ）。
function loadDefaultGrade(){
  try {
    const saved = localStorage.getItem(DEFAULT_GRADE_STORAGE_KEY);
    if (CONTENT_ORDER.includes(saved)) return saved;
  } catch (e) {
    // localStorageが使えない環境では無視して既定値にフォールバックする
  }
  return CONTENT_ORDER[0];
}

// ---- 「今の選択」の保存 ----
function saveDefaultGrade(key){
  try {
    localStorage.setItem(DEFAULT_GRADE_STORAGE_KEY, String(key));
  } catch (e) {
    // 保存できなくてもアプリの動作自体は継続する
  }
}

let currentGrade = loadDefaultGrade(); // 現在選択中のキー（学年の数字 or "hiragana"等。前回の選択を引き継ぐ）
let currentIndex = 0;      // 個別ページで表示中の配列上のインデックス
let playTimers = [];       // 再生中の setTimeout ID（再タップ時にクリアするため）
let playToken = 0;         // 再生の世代を識別するトークン（多重タップ対策）

const el = {
  grid: document.getElementById("kanji-grid"),
  gradeSelect: document.getElementById("grade-select"),
  headerSearch: document.getElementById("header-search"),
  gradeSelectRow: document.querySelector(".grade-select-row"),
  searchResults: document.getElementById("search-results"),
  viewList: document.getElementById("view-list"),
  viewDetail: document.getElementById("view-detail"),
  focusKanji: document.getElementById("focus-kanji"),
  strokeSvg: document.getElementById("stroke-svg"),
  boxStroke: document.getElementById("box-stroke"),
  strokeCountLabel: document.getElementById("stroke-count-label"),
  onReadings: document.getElementById("on-readings"),
  kunReadings: document.getElementById("kun-readings"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  btnBackTop: document.getElementById("btn-back-top"),
  btnBackBottom: document.getElementById("btn-back-bottom"),
};

// ---- 一覧データまわりのヘルパー ----
// 一覧は CONTENT_REGISTRY に登録されている配列の順番をそのまま表示する
// （読み方などによる並べ替えは行わない）。関数名は既存のまま残しているが、
// 現在はひらがな・カタカナ・すうじも含めて返す。
function getActiveKanjiList(){
  return CONTENT_REGISTRY[currentGrade].list;
}

// ---- 学年（かな等を含む）セレクタの初期化 ----
function initGradeSelect(){
  el.gradeSelect.innerHTML = "";
  CONTENT_ORDER.forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = CONTENT_REGISTRY[key].label;
    el.gradeSelect.appendChild(option);
  });
  el.gradeSelect.value = currentGrade;
}

// ---- カタカナ→ひらがな変換（検索の読み一致に使う） ----
function kataToHira(str){
  return str.replace(/[\u30A1-\u30F6]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

// ---- エントリーから、検索対象の文字・画数・読みを取り出す ----
function getSearchableFields(entry, entryType){
  const character = entryType === "kanji" ? entry.kanji : entry.character;
  const strokeCount = entryType === "kanji" ? String(entry.strokeCount) : "";
  let readings = "";
  if (entryType === "kanji") {
    const on = entry.readings.on.map(r => kataToHira(r.text));
    const kun = entry.readings.kun.map(r => r.base + r.okurigana);
    readings = [...on, ...kun].join(" ");
  } else {
    readings = kataToHira(character);
  }
  return { character, strokeCount, readings };
}

// ---- 画数（数字のみの入力）・字そのもの・読み（音訓どちらもひらがな/カタカナ入力でヒット）で判定する ----
function fieldsMatchQuery(fields, query){
  if (!query) return true;
  if (/^[0-9０-９]+$/.test(query)) {
    const normalizedDigits = query.replace(/[０-９]/g, d => String.fromCharCode(d.charCodeAt(0) - 0xFEE0));
    return fields.strokeCount === normalizedDigits;
  }
  if (fields.character.includes(query)) return true;
  const normalizedQuery = kataToHira(query);
  if (fields.readings && fields.readings.includes(normalizedQuery)) return true;
  return false;
}

// ---- 1枚のカードを組み立てる（一覧ページ・横断検索結果の両方で共有） ----
// categoryKey: そのカードが属する CONTENT_REGISTRY のキー（学年の数字 or "hiragana"等）
function buildCard(entry, entryType, categoryKey, list, index){
  const character = entryType === "kanji" ? entry.kanji : entry.character;

  const card = document.createElement("div");
  card.className = "kanji-card";
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", character + "の書き順を見る");

  const glyph = document.createElement("span");
  glyph.className = "glyph";
  glyph.textContent = character;
  card.appendChild(glyph);

  card.addEventListener("click", () => {
    // 横断検索結果からタップした場合、そのカードが属する学年に切り替えてから開く
    // （前後移動やモード判定が、そのカード本来の学年を基準に行われるようにするため）
    if (currentGrade !== categoryKey) {
      currentGrade = categoryKey;
      el.gradeSelect.value = categoryKey;
      saveDefaultGrade(categoryKey);
    }
    if (entryType !== "kanji") {
      // ひらがな・カタカナ・すうじは設定に関係なく常に直接練習モード
      openPractice(character, { list, index });
      return;
    }
    // 漢字は、直接練習モードかどうかを判定し、対象なら新しい練習画面へ、
    // そうでなければ既存の書き順確認ページ（変更なし）へ。
    const mode = getPracticeMode("kanji", Number(categoryKey), loadSettings());
    if (mode === "practice") {
      openPractice(character, { list, index });
    } else {
      openDetail(index);
    }
  });
  return card;
}

// ---- 一覧ページの描画（現在選んでいる学年・かな等、1カテゴリぶん） ----
function renderList(){
  el.grid.innerHTML = "";
  const entryType = CONTENT_REGISTRY[currentGrade].type; // "kanji" | "hiragana" | "katakana" | "number"
  const list = getActiveKanjiList();

  list.forEach((entry, index) => {
    el.grid.appendChild(buildCard(entry, entryType, currentGrade, list, index));
  });
}

// ---- 横断検索結果の描画（ひらがな〜小学6年生まで全カテゴリを対象に検索する） ----
function renderSearchResults(query){
  el.searchResults.innerHTML = "";
  let hitCount = 0;

  CONTENT_ORDER.forEach(key => {
    const { label, type, list } = CONTENT_REGISTRY[key];
    const matchedIndices = [];
    list.forEach((entry, index) => {
      const fields = getSearchableFields(entry, type);
      if (fieldsMatchQuery(fields, query)) matchedIndices.push(index);
    });
    if (matchedIndices.length === 0) return;

    hitCount += matchedIndices.length;

    const group = document.createElement("div");
    group.className = "search-group";

    const heading = document.createElement("h3");
    heading.className = "search-group-heading";
    heading.textContent = "◼️ " + label;
    group.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "kanji-grid";
    matchedIndices.forEach(index => {
      grid.appendChild(buildCard(list[index], type, key, list, index));
    });
    group.appendChild(grid);

    el.searchResults.appendChild(group);
  });

  if (hitCount === 0) {
    const empty = document.createElement("div");
    empty.className = "search-empty-message";
    empty.textContent = "見つかりませんでした";
    el.searchResults.appendChild(empty);
  }
}

// ---- 検索欄の入力に応じて、通常の一覧／横断検索結果を切り替える ----
function updateSearchView(){
  const query = el.headerSearch.value.trim();
  if (!query) {
    el.searchResults.classList.add("hidden");
    el.grid.classList.remove("hidden");
    el.gradeSelectRow.classList.remove("hidden");
    el.gradeSelect.value = currentGrade;
    renderList(); // 横断検索結果からの遷移でcurrentGradeが変わっている場合があるため描き直す
    return;
  }
  el.grid.classList.add("hidden");
  el.gradeSelectRow.classList.add("hidden");
  el.searchResults.classList.remove("hidden");
  renderSearchResults(query);
}

// ---- 音読みの表示 ----
function renderOnReadings(container, onArray){
  container.innerHTML = "";
  onArray.forEach(r => {
    const line = document.createElement("div");
    line.className = "reading-item";
    // r.grade が対象学年と異なる場合はここで .out-of-grade を付与する拡張ポイント
    line.textContent = r.text;
    container.appendChild(line);
  });
}

// ---- 訓読みの表示（漢字部分＋送り仮名を「わる（い）」の形式で表示） ----
function renderKunReadings(container, kunArray){
  container.innerHTML = "";
  kunArray.forEach(r => {
    const line = document.createElement("div");
    line.className = "reading-item";
    // r.grade が対象学年と異なる場合はここで .out-of-grade を付与する拡張ポイント

    const baseText = document.createTextNode(r.base);
    line.appendChild(baseText);

    if (r.okurigana) {
      const okuri = document.createElement("span");
      okuri.className = "okurigana";
      okuri.textContent = "（" + r.okurigana + "）";
      line.appendChild(okuri);
    }

    container.appendChild(line);
  });
}

// ---- 個別ページを開く ----
function openDetail(index){
  currentIndex = index;
  clearPlayTimers();

  const entry = getActiveKanjiList()[currentIndex];

  el.focusKanji.textContent = entry.kanji;
  el.strokeCountLabel.textContent = entry.strokeCount + "画";

  renderOnReadings(el.onReadings, entry.readings.on);
  renderKunReadings(el.kunReadings, entry.readings.kun);

  buildStrokeSvg(entry.kanji);
  showCompletedState(); // 初期状態は完成形を表示

  el.btnPrev.disabled = currentIndex === 0;
  el.btnNext.disabled = currentIndex === getActiveKanjiList().length - 1;

  el.viewList.classList.add("hidden");
  el.viewDetail.classList.remove("hidden");
  el.viewDetail.scrollIntoView({ behavior: "instant", block: "start" });
}

function backToList(){
  clearPlayTimers();
  el.viewDetail.classList.add("hidden");
  el.viewList.classList.remove("hidden");
}

// ---- 書き順 SVG の構築 ----
let currentPathEls = []; // {el, length}

function buildStrokeSvg(kanji){
  const data = KANJI_STROKE_DATA[kanji];
  el.strokeSvg.setAttribute("viewBox", data.viewBox);
  el.strokeSvg.innerHTML = "";
  currentPathEls = [];

  // 背景のうすいガイド（お手本の輪郭）
  const ghostGroup = document.createElementNS(SVG_NS, "g");
  data.strokes.forEach(d => {
    const ghost = document.createElementNS(SVG_NS, "path");
    ghost.setAttribute("d", d);
    ghost.setAttribute("class", "stroke-ghost");
    ghostGroup.appendChild(ghost);
  });
  el.strokeSvg.appendChild(ghostGroup);

  // 実際に描画される画（アニメーション対象）
  data.strokes.forEach(d => {
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", d);
    path.setAttribute("class", "stroke-live");
    el.strokeSvg.appendChild(path);
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = 0; // 初期表示は完成形（0=見えている状態）
    currentPathEls.push({ el: path, length });
  });
}

// ---- 状態表示のヘルパー ----
function showCompletedState(){
  currentPathEls.forEach(p => {
    p.el.style.transition = "none";
    p.el.style.strokeDashoffset = 0;
  });
  el.boxStroke.classList.remove("playing");
}

function clearPlayTimers(){
  playTimers.forEach(t => clearTimeout(t));
  playTimers = [];
}

// ---- 書き順アニメーションの再生 ----
function playStrokes(){
  clearPlayTimers();
  playToken += 1;
  const myToken = playToken;

  // 1画目からやり直すため、いったんすべて非表示にする
  currentPathEls.forEach(p => {
    p.el.style.transition = "none";
    p.el.style.strokeDashoffset = p.length;
    p.el.classList.remove("stroke-active");
  });
  // 上のリセットを確実に反映させてからアニメーションを開始する
  void el.strokeSvg.offsetWidth; // reflow

  el.boxStroke.classList.add("playing");

  currentPathEls.forEach((p, i) => {
    const startTimer = setTimeout(() => {
      if (myToken !== playToken) return;
      p.el.style.transition = `stroke-dashoffset ${STROKE_DURATION}ms linear`;
      p.el.style.strokeDashoffset = 0;
      p.el.classList.add("stroke-active"); // 今描いている画だけ目立つ色にする
    }, i * STROKE_DURATION);
    playTimers.push(startTimer);

    const endTimer = setTimeout(() => {
      if (myToken !== playToken) return;
      p.el.classList.remove("stroke-active"); // 描き終わったら通常の色に戻す
    }, (i + 1) * STROKE_DURATION);
    playTimers.push(endTimer);
  });

  const endTimer = setTimeout(() => {
    if (myToken !== playToken) return;
    el.boxStroke.classList.remove("playing");
  }, currentPathEls.length * STROKE_DURATION);
  playTimers.push(endTimer);
}

// ---- ナビゲーション ----
function goPrev(){
  if (currentIndex > 0) openDetail(currentIndex - 1);
}
function goNext(){
  if (currentIndex < getActiveKanjiList().length - 1) openDetail(currentIndex + 1);
}

// ---- イベント登録 ----
el.boxStroke.addEventListener("click", playStrokes);
el.btnPrev.addEventListener("click", goPrev);
el.btnNext.addEventListener("click", goNext);
el.btnBackTop.addEventListener("click", backToList);
el.btnBackBottom.addEventListener("click", backToList);
el.gradeSelect.addEventListener("change", () => {
  currentGrade = el.gradeSelect.value;
  saveDefaultGrade(currentGrade); // 選んだ学年を「今の学年」として記憶しておく
  backToList();   // 学年を切り替えたら必ず一覧ページに戻す
  renderList();
});

el.headerSearch.addEventListener("input", updateSearchView);

// ---- 初期表示 ----
initGradeSelect();
renderList();
