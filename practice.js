/* =========================================================================
   practice.js（直接練習モード）

   見本エリア：既存の書き順確認と同じ見た目、タップで最初から再生（変更なし）
   練習エリア：
     - うすいお手本＋「今書くべき1画」を目立つ色で表示＋始点○・終点□
     - ポインター（指／マウス）でなぞった軌跡を、お手本の点列との距離で判定
     - 判定の厳しさ設定（やさしい／ふつう／きびしい）に応じて許容距離を変更
     - 失敗時は設定（その1画だけ／すべて最初から）に応じて書き直し
     - 全画終了後、各画の判定を集計して文字全体の評価を表示し、
       「もういちど」「つぎのじ」を選べるようにする

   既存の app.js（一覧・個別ページ）には手を加えていない。
   ========================================================================= */

(function(){
  const pEl = {
    viewList: document.getElementById("view-list"),
    viewDetail: document.getElementById("view-detail"),
    viewSettings: document.getElementById("view-settings"),
    viewPractice: document.getElementById("view-practice"),
    focusChar: document.getElementById("practice-focus-char"),
    instruction: document.getElementById("practice-instruction"),
    boxesRow: document.getElementById("practice-boxes-row"),
    btnBack: document.getElementById("btn-practice-back"),
  };

  // ---- 判定の厳しさ → 平均許容距離（SVGのviewBox単位、109x109基準） ----
  const TOLERANCE_THRESHOLD = { easy: 16, normal: 11, hard: 7 };
  const SAMPLE_POINT_COUNT = 24; // お手本を何点サンプリングして距離判定するか

  let practiceStrokeIndex = 0;
  let practiceCharData = null;
  let practiceCharacter = null;
  let practiceListContext = null; // { list, index } つぎのじ用。無ければ null
  let strokeGrades = [];          // 各画の判定結果（"◎"|"○"|"△"）
  let userPoints = [];            // 現在なぞっている最中の点列
  let isDrawing = false;
  let userInkEl = null;           // なぞり軌跡を表示する polyline

  let sampleCurrentPathEls = [];
  let samplePlayTimers = [];

  /* ---------------------------------------------------------------------
     見本エリア（既存の確認ページと同じロジック。変更していない）
     --------------------------------------------------------------------- */
  function buildSampleBox(character){
    const wrap = document.createElement("div");
    wrap.className = "kanji-box-wrap";
    wrap.innerHTML = `
      <span class="box-label">見本</span>
      <div class="kanji-box box-stroke" id="practice-sample-box">
        <svg class="grid-guide" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="0" x2="50" y2="100"></line>
          <line x1="0" y1="50" x2="100" y2="50"></line>
        </svg>
        <svg class="stroke-svg" id="practice-sample-svg" viewBox="0 0 109 109"></svg>
      </div>`;

    const data = KANJI_STROKE_DATA[character];
    const svg = wrap.querySelector("#practice-sample-svg");
    svg.setAttribute("viewBox", data.viewBox);
    sampleCurrentPathEls = [];

    const ghostGroup = document.createElementNS(SVG_NS, "g");
    data.strokes.forEach(d => {
      const ghost = document.createElementNS(SVG_NS, "path");
      ghost.setAttribute("d", d);
      ghost.setAttribute("class", "stroke-ghost");
      ghostGroup.appendChild(ghost);
    });
    svg.appendChild(ghostGroup);

    data.strokes.forEach(d => {
      const path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("class", "stroke-live");
      svg.appendChild(path);
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = 0;
      sampleCurrentPathEls.push({ el: path, length });
    });

    wrap.querySelector("#practice-sample-box").addEventListener("click", playSample);
    return wrap;
  }

  function clearSampleTimers(){
    samplePlayTimers.forEach(t => clearTimeout(t));
    samplePlayTimers = [];
  }

  function playSample(){
    clearSampleTimers();
    const box = document.getElementById("practice-sample-box");
    sampleCurrentPathEls.forEach(p => {
      p.el.style.transition = "none";
      p.el.style.strokeDashoffset = p.length;
    });
    void document.getElementById("practice-sample-svg").getBBox();

    box.classList.add("playing");
    sampleCurrentPathEls.forEach((p, i) => {
      samplePlayTimers.push(setTimeout(() => {
        p.el.style.transition = `stroke-dashoffset ${STROKE_DURATION}ms linear`;
        p.el.style.strokeDashoffset = 0;
      }, i * STROKE_DURATION));
    });
    samplePlayTimers.push(setTimeout(() => {
      box.classList.remove("playing");
    }, sampleCurrentPathEls.length * STROKE_DURATION));
  }

  /* ---------------------------------------------------------------------
     練習エリア
     --------------------------------------------------------------------- */
  function buildPracticeBox(){
    const wrap = document.createElement("div");
    wrap.className = "kanji-box-wrap";
    wrap.innerHTML = `
      <span class="box-label">れんしゅう</span>
      <div class="kanji-box box-stroke" id="practice-write-box">
        <svg class="grid-guide" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="0" x2="50" y2="100"></line>
          <line x1="0" y1="50" x2="100" y2="50"></line>
        </svg>
        <svg class="stroke-svg" id="practice-write-svg" viewBox="0 0 109 109" style="touch-action:none;"></svg>
      </div>`;
    return wrap;
  }

  function renderPracticeArea(){
    const svg = document.getElementById("practice-write-svg");
    if (!svg) return;
    svg.innerHTML = "";
    svg.setAttribute("viewBox", practiceCharData.viewBox);
    userInkEl = null;

    const ghostGroup = document.createElementNS(SVG_NS, "g");
    practiceCharData.strokes.forEach(d => {
      const ghost = document.createElementNS(SVG_NS, "path");
      ghost.setAttribute("d", d);
      ghost.setAttribute("class", "stroke-ghost");
      ghostGroup.appendChild(ghost);
    });
    svg.appendChild(ghostGroup);

    practiceCharData.strokes.forEach((d, i) => {
      if (i >= practiceStrokeIndex) return;
      const path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("class", "stroke-done");
      svg.appendChild(path);
    });

    if (practiceStrokeIndex < practiceCharData.strokes.length) {
      const d = practiceCharData.strokes[practiceStrokeIndex];
      const current = document.createElementNS(SVG_NS, "path");
      current.setAttribute("d", d);
      current.setAttribute("class", "stroke-current");
      current.id = "practice-current-path";
      svg.appendChild(current);

      const len = current.getTotalLength();
      const start = current.getPointAtLength(0);
      const end = current.getPointAtLength(len);

      const startMark = document.createElementNS(SVG_NS, "circle");
      startMark.setAttribute("cx", start.x);
      startMark.setAttribute("cy", start.y);
      startMark.setAttribute("r", 4.5);
      startMark.setAttribute("class", "stroke-marker-start");
      svg.appendChild(startMark);

      const endSize = 6;
      const endMark = document.createElementNS(SVG_NS, "rect");
      endMark.setAttribute("x", end.x - endSize / 2);
      endMark.setAttribute("y", end.y - endSize / 2);
      endMark.setAttribute("width", endSize);
      endMark.setAttribute("height", endSize);
      endMark.setAttribute("class", "stroke-marker-end");
      svg.appendChild(endMark);

      userInkEl = document.createElementNS(SVG_NS, "polyline");
      userInkEl.setAttribute("class", "user-ink");
      userInkEl.setAttribute("points", "");
      svg.appendChild(userInkEl);
    } else {
      showResult();
    }
  }

  function toSvgPoint(svg, clientX, clientY){
    const rect = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    if (!rect.width || !rect.height || !vb || !vb.width) {
      return { x: 0, y: 0 };
    }
    const x = vb.x + ((clientX - rect.left) / rect.width) * vb.width;
    const y = vb.y + ((clientY - rect.top) / rect.height) * vb.height;
    return { x, y };
  }

  function updateInkPolyline(){
    if (!userInkEl) return;
    userInkEl.setAttribute("points", userPoints.map(p => `${p.x},${p.y}`).join(" "));
  }

  function onPointerDown(e){
    if (practiceStrokeIndex >= practiceCharData.strokes.length) return;
    isDrawing = true;
    userPoints = [];
    const svg = document.getElementById("practice-write-svg");
    svg.setPointerCapture && svg.setPointerCapture(e.pointerId);
    const pt = toSvgPoint(svg, e.clientX, e.clientY);
    userPoints.push(pt);
    updateInkPolyline();
    e.preventDefault();
  }

  function onPointerMove(e){
    if (!isDrawing) return;
    const svg = document.getElementById("practice-write-svg");
    const pt = toSvgPoint(svg, e.clientX, e.clientY);
    userPoints.push(pt);
    updateInkPolyline();
    e.preventDefault();
  }

  function onPointerUp(e){
    if (!isDrawing) return;
    isDrawing = false;
    e.preventDefault();
    judgeCurrentStroke();
  }

  /* ---------------------------------------------------------------------
     なぞり判定
     --------------------------------------------------------------------- */
  function sampleModelPoints(pathEl, n){
    const len = pathEl.getTotalLength();
    const pts = [];
    for (let i = 0; i <= n; i++){
      const p = pathEl.getPointAtLength((len * i) / n);
      pts.push({ x: p.x, y: p.y });
    }
    return pts;
  }

  function nearestDistance(pt, pts){
    let min = Infinity;
    for (const q of pts){
      const dx = pt.x - q.x, dy = pt.y - q.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < min) min = d;
    }
    return min;
  }

  function judgeStroke(pathEl, tracedPoints, tolerance){
    const threshold = TOLERANCE_THRESHOLD[tolerance] || TOLERANCE_THRESHOLD.normal;
    if (tracedPoints.length < 2) {
      return { pass: false, grade: null, avgDistance: Infinity };
    }
    const modelPts = sampleModelPoints(pathEl, SAMPLE_POINT_COUNT);
    const distances = modelPts.map(p => nearestDistance(p, tracedPoints));
    const avgDistance = distances.reduce((a, b) => a + b, 0) / distances.length;
    const maxDistance = Math.max(...distances);

    const pass = avgDistance <= threshold && maxDistance <= threshold * 2.2;
    let grade = null;
    if (pass) {
      if (avgDistance < threshold * 0.35) grade = "◎";
      else if (avgDistance < threshold * 0.7) grade = "○";
      else grade = "△";
    }
    return { pass, grade, avgDistance, maxDistance };
  }

  function judgeCurrentStroke(){
    const pathEl = document.getElementById("practice-current-path");
    if (!pathEl) return;
    const settings = loadSettings();
    const result = judgeStroke(pathEl, userPoints, settings.tolerance);

    if (result.pass) {
      strokeGrades.push(result.grade);
      practiceStrokeIndex += 1;
      pEl.instruction.textContent = "見本をタップで再生 ▶️／なぞって書いてみよう";
      renderPracticeArea();
      attachPointerHandlers();
    } else {
      handleStrokeFailure(settings.redoMode);
    }
  }

  function handleStrokeFailure(redoMode){
    userPoints = [];
    if (redoMode === "fromStart") {
      practiceStrokeIndex = 0;
      strokeGrades = [];
      pEl.instruction.textContent = "もういちど、1画目から書いてみよう";
    } else {
      pEl.instruction.textContent = "もういちど、この画をなぞってみよう";
    }
    renderPracticeArea();
    attachPointerHandlers();
  }

  function attachPointerHandlers(){
    const svg = document.getElementById("practice-write-svg");
    if (!svg) return;
    svg.addEventListener("pointerdown", onPointerDown);
    svg.addEventListener("pointermove", onPointerMove);
    svg.addEventListener("pointerup", onPointerUp);
    svg.addEventListener("pointercancel", onPointerUp);
  }

  /* ---------------------------------------------------------------------
     結果表示
     --------------------------------------------------------------------- */
  const GRADE_VALUE = { "◎": 3, "○": 2, "△": 1 };
  const GRADE_MESSAGE = {
    "◎": "じょうず！",
    "○": "いいかんじ！",
    "△": "もういちどやってみよう",
  };

  function computeOverallGrade(){
    if (strokeGrades.length === 0) return "△";
    const sum = strokeGrades.reduce((a, g) => a + (GRADE_VALUE[g] || 1), 0);
    const avg = sum / strokeGrades.length;
    if (avg >= 2.5) return "◎";
    if (avg >= 1.5) return "○";
    return "△";
  }

  function showResult(){
    const overall = computeOverallGrade();
    pEl.instruction.textContent = "";

    const existing = document.getElementById("practice-result-overlay");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "practice-result-overlay";
    overlay.className = "practice-result-overlay";
    overlay.innerHTML = `
      <div class="practice-result-card">
        <div class="practice-result-grade">${overall}</div>
        <div class="practice-result-message">${GRADE_MESSAGE[overall]}</div>
        <div class="practice-result-buttons">
          <button class="nav-btn" id="btn-practice-retry">もういちど</button>
          <button class="nav-btn" id="btn-practice-next">つぎのじ</button>
        </div>
      </div>`;
    pEl.viewPractice.appendChild(overlay);

    document.getElementById("btn-practice-retry").addEventListener("click", retryCurrentCharacter);
    document.getElementById("btn-practice-next").addEventListener("click", goToNextCharacter);
  }

  function removeResultOverlay(){
    const existing = document.getElementById("practice-result-overlay");
    if (existing) existing.remove();
  }

  function retryCurrentCharacter(){
    removeResultOverlay();
    practiceStrokeIndex = 0;
    strokeGrades = [];
    pEl.instruction.textContent = "見本をタップで再生 ▶️／なぞって書いてみよう";
    renderPracticeArea();
    attachPointerHandlers();
  }

  function goToNextCharacter(){
    removeResultOverlay();
    if (!practiceListContext) { closePractice(); return; }
    const { list, index } = practiceListContext;
    const nextIndex = index + 1;
    if (nextIndex >= list.length) { closePractice(); return; }

    const entryType = CONTENT_REGISTRY[currentGrade].type;
    const nextEntry = list[nextIndex];
    const nextCharacter = entryType === "kanji" ? nextEntry.kanji : nextEntry.character;

    if (entryType !== "kanji") {
      openPractice(nextCharacter, { list, index: nextIndex });
      return;
    }
    const settings = loadSettings();
    const mode = getPracticeMode("kanji", Number(currentGrade), settings);
    if (mode === "practice") {
      openPractice(nextCharacter, { list, index: nextIndex });
    } else {
      openDetail(nextIndex);
    }
  }

  /* ---------------------------------------------------------------------
     画面の開閉
     --------------------------------------------------------------------- */
  function openPractice(character, listContext){
    practiceCharacter = character;
    practiceCharData = KANJI_STROKE_DATA[character];
    practiceStrokeIndex = 0;
    strokeGrades = [];
    userPoints = [];
    practiceListContext = listContext || null;
    clearSampleTimers();
    removeResultOverlay();

    pEl.focusChar.textContent = character;
    pEl.instruction.textContent = "見本をタップで再生 ▶️／なぞって書いてみよう";

    const settings = loadSettings();
    const sampleBox = buildSampleBox(character);
    const writeBox = buildPracticeBox();

    pEl.boxesRow.innerHTML = "";
    if (settings.samplePosition === "right") {
      pEl.boxesRow.appendChild(writeBox);
      pEl.boxesRow.appendChild(sampleBox);
    } else {
      pEl.boxesRow.appendChild(sampleBox);
      pEl.boxesRow.appendChild(writeBox);
    }

    renderPracticeArea();
    attachPointerHandlers();

    pEl.viewList.classList.add("hidden");
    pEl.viewDetail.classList.add("hidden");
    pEl.viewSettings.classList.add("hidden");
    pEl.viewPractice.classList.remove("hidden");
  }

  function closePractice(){
    clearSampleTimers();
    removeResultOverlay();
    pEl.viewPractice.classList.add("hidden");
    pEl.viewList.classList.remove("hidden");
  }

  pEl.btnBack.addEventListener("click", closePractice);

  window.openPractice = openPractice;
})();
