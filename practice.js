/* =========================================================================
   practice.js（直接練習モード）

   タブレット利用を前提に、練習エリアを最優先で表示する設計。
   お手本は常時表示せず、「▶️ お手本を見る」ボタンからオーバーレイ
   （position:fixedのボトムシート）として開く。オーバーレイの開閉は
   練習エリアのSVG（#practice-write-svg）にも状態変数
   （practiceStrokeIndex / strokeGrades / userPoints）にも一切触れないため、
   お手本を確認しても、それまでに書いた内容やなぞり判定の進み具合は
   失われない。

   なぞり判定・採点のロジック（judgeStroke 以下）は既存のまま変更していない。
   ========================================================================= */

(function(){
  const pEl = {
    viewList: document.getElementById("view-list"),
    viewDetail: document.getElementById("view-detail"),
    viewSettings: document.getElementById("view-settings"),
    viewPractice: document.getElementById("view-practice"),
    instruction: document.getElementById("practice-instruction"),
    btnBack: document.getElementById("btn-practice-back"),
    btnViewSample: document.getElementById("btn-view-sample"),
    sampleOverlay: document.getElementById("practice-sample-overlay"),
    btnOverlayClose: document.getElementById("btn-sample-overlay-close"),
    btnSampleReplay: document.getElementById("btn-sample-replay"),
    btnSampleContinue: document.getElementById("btn-sample-continue"),
  };

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

  let sampleBuilt = false;        // お手本SVGを組み立て済みかどうか（文字が変わったら作り直す）
  let sampleCurrentPathEls = [];
  let samplePlayTimers = [];

  /* ---------------------------------------------------------------------
     お手本オーバーレイ（練習エリアの状態には一切触れない）
     --------------------------------------------------------------------- */
  function buildSampleSvgIfNeeded(){
    if (sampleBuilt) return;
    const data = practiceCharData;
    const svg = document.getElementById("practice-sample-svg");
    svg.setAttribute("viewBox", data.viewBox);
    svg.innerHTML = "";
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
    sampleBuilt = true;
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

  // ---- オーバーレイを開く／閉じる ----
  // 練習エリア（#practice-write-svg）にも状態変数にも触れないので、
  // 開閉しても練習の途中経過は保持されたままになる。
  function openSampleOverlay(){
    buildSampleSvgIfNeeded();
    pEl.sampleOverlay.classList.add("overlay-open");
  }
  function closeSampleOverlay(){
    clearSampleTimers();
    pEl.sampleOverlay.classList.remove("overlay-open");
  }

  /* ---------------------------------------------------------------------
     練習エリア（最優先で表示するメインエリア）
     書き込みマスの大きさは box-stroke-large クラスにより、確認モードの
     マスと同じサイズ（CSS側で固定）に揃えている。JSでの個別サイズ計算は
     行わない。
     --------------------------------------------------------------------- */

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
    if (!rect.width || !rect.height || !vb || !vb.width || !vb.height) {
      return { x: 0, y: 0 };
    }
    // 既定の preserveAspectRatio（xMidYMid meet）では、枠が正方形でない場合
    // 実際の描画は縦横比を保ったまま中央に収まる（余白ができる）。
    // ここでその実際の描画範囲（scale・オフセット）を計算してから
    // クライアント座標をSVG座標に変換することで、枠の縦横比によらず
    // 実際になぞった距離とずれないようにする。
    const scale = Math.min(rect.width / vb.width, rect.height / vb.height);
    const renderedWidth = vb.width * scale;
    const renderedHeight = vb.height * scale;
    const offsetX = rect.left + (rect.width - renderedWidth) / 2;
    const offsetY = rect.top + (rect.height - renderedHeight) / 2;
    const x = vb.x + (clientX - offsetX) / scale;
    const y = vb.y + (clientY - offsetY) / scale;
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
     なぞり判定（変更なし）
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
      pEl.instruction.textContent = "";
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
     結果表示（変更なし）
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
    pEl.instruction.textContent = "";
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
      document.body.classList.remove("no-page-scroll"); // 確認ページへ移るのでスクロール制限を解除
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
    sampleBuilt = false;
    clearSampleTimers();
    removeResultOverlay();
    pEl.sampleOverlay.classList.remove("overlay-open");

    pEl.instruction.textContent = "";

    renderPracticeArea();
    attachPointerHandlers();

    pEl.viewList.classList.add("hidden");
    pEl.viewDetail.classList.add("hidden");
    pEl.viewSettings.classList.add("hidden");
    pEl.viewPractice.classList.remove("hidden");
    document.body.classList.add("no-page-scroll"); // 練習中はページ全体のスクロールを止める
  }

  function closePractice(){
    clearSampleTimers();
    removeResultOverlay();
    pEl.sampleOverlay.classList.remove("overlay-open");
    pEl.viewPractice.classList.add("hidden");
    pEl.viewList.classList.remove("hidden");
    document.body.classList.remove("no-page-scroll"); // 通常のスクロールに戻す
  }

  // ---- イベント登録 ----
  pEl.btnBack.addEventListener("click", closePractice);
  pEl.btnViewSample.addEventListener("click", openSampleOverlay);
  pEl.btnOverlayClose.addEventListener("click", closeSampleOverlay);
  pEl.btnSampleContinue.addEventListener("click", closeSampleOverlay);
  pEl.btnSampleReplay.addEventListener("click", playSample);
  document.getElementById("practice-sample-box").addEventListener("click", playSample);

  window.openPractice = openPractice;
})();
