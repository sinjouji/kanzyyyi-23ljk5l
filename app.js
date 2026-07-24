/* =========================================================================
   app.js（UI層）
   kanji-data.js / stroke-data.js より後に読み込まれる想定。
   ========================================================================= */
const STROKE_DURATION = 500; // 1画あたりの再生時間（ミリ秒）。ここを変えれば全体の速度を調整できる。

const SVG_NS = "http://www.w3.org/2000/svg";

let currentGrade = 1;      // 現在選択中の学年
let currentIndex = 0;      // 個別ページで表示中の配列上のインデックス
let playTimers = [];       // 再生中の setTimeout ID（再タップ時にクリアするため）
let playToken = 0;         // 再生の世代を識別するトークン（多重タップ対策）

const el = {
  grid: document.getElementById("kanji-grid"),
  gradeSelect: document.getElementById("grade-select"),
  viewList: document.getElementById("view-list"),
  viewDetail: document.getElementById("view-detail"),
  focusKanji: document.getElementById("focus-kanji"),
  staticSvg: document.getElementById("static-svg"),
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

// ---- 学年データまわりのヘルパー ----
// 一覧は KANJI_DATA_BY_GRADE に登録されている配列の順番をそのまま表示する
// （読み方などによる並べ替えは行わない）。
function getActiveKanjiList(){
  return KANJI_DATA_BY_GRADE[currentGrade].list;
}

// ---- 学年セレクタの初期化 ----
function initGradeSelect(){
  el.gradeSelect.innerHTML = "";
  Object.keys(KANJI_DATA_BY_GRADE)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach(grade => {
      const option = document.createElement("option");
      option.value = grade;
      option.textContent = KANJI_DATA_BY_GRADE[grade].label;
      el.gradeSelect.appendChild(option);
    });
  el.gradeSelect.value = currentGrade;
}

// ---- 一覧ページの描画 ----
function renderList(){
  el.grid.innerHTML = "";
  getActiveKanjiList().forEach((entry, index) => {

    const card = document.createElement("div");
    card.className = "kanji-card";
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", entry.kanji + "の書き順を見る");

    const glyph = document.createElement("span");
    glyph.className = "glyph";
    glyph.textContent = entry.kanji;
    card.appendChild(glyph);

    card.addEventListener("click", () => openDetail(index));
    el.grid.appendChild(card);
  });
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

  buildStaticSvg(entry.kanji);
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

// ---- 左側（完成形）SVG の構築 ----
// 右側の書き順アニメーションと同じ KanjiVG のストロークデータをそのまま使うことで、
// 左右で「同じ字形・同じ書体」に見えるようにする（左は常に全画数を表示するだけで、
// アニメーションやゴースト表示は行わない）。
function buildStaticSvg(kanji){
  const data = KANJI_STROKE_DATA[kanji];
  el.staticSvg.setAttribute("viewBox", data.viewBox);
  el.staticSvg.innerHTML = "";
  data.strokes.forEach(d => {
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", d);
    path.setAttribute("class", "stroke-live");
    el.staticSvg.appendChild(path);
  });
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
  currentGrade = Number(el.gradeSelect.value);
  backToList();   // 学年を切り替えたら必ず一覧ページに戻す
  renderList();
});

// ---- 初期表示 ----
initGradeSelect();
renderList();
