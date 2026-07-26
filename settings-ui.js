/* =========================================================================
   settings-ui.js（設定画面のUI層）

   settings.js（保存・モード判定ロジック）に依存するが、app.js の内部変数
   （el, currentGrade など）には触れず、このファイル内で完結させている。
   既存の一覧・個別ページのコードには一切手を加えていない。
   ========================================================================= */

(function(){
  const settingsEl = {
    viewList: document.getElementById("view-list"),
    viewDetail: document.getElementById("view-detail"),
    viewSettings: document.getElementById("view-settings"),
    btnOpen: document.getElementById("btn-open-settings"),
    btnBack: document.getElementById("btn-settings-back"),
    currentGradeSelect: document.getElementById("setting-current-grade"),
    perGradeBox: document.getElementById("settings-per-grade"),
  };

  let settings = loadSettings();

  // ---- 「現在の学年」プルダウンの中身を用意する ----
  function initCurrentGradeSelect(){
    settingsEl.currentGradeSelect.innerHTML = "";
    Object.keys(KANJI_DATA_BY_GRADE)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach(grade => {
        const option = document.createElement("option");
        option.value = grade;
        option.textContent = KANJI_DATA_BY_GRADE[grade].label;
        settingsEl.currentGradeSelect.appendChild(option);
      });
  }

  // ---- 保存されている設定をフォームに反映する ----
  function renderSettingsForm(){
    settingsEl.currentGradeSelect.value = settings.currentGrade;

    document.querySelectorAll('input[name="practice-mode-type"]').forEach(el => {
      el.checked = el.value === settings.practiceModeType;
    });
    document.querySelectorAll('input[name="sample-position"]').forEach(el => {
      el.checked = el.value === settings.samplePosition;
    });
    document.querySelectorAll('input[name="tolerance"]').forEach(el => {
      el.checked = el.value === settings.tolerance;
    });
    document.querySelectorAll('input[name="redo-mode"]').forEach(el => {
      el.checked = el.value === settings.redoMode;
    });
    document.querySelectorAll('#settings-per-grade input[type="checkbox"]').forEach(el => {
      const grade = Number(el.dataset.grade);
      el.checked = !!settings.perGradeSelection[grade];
    });

    settingsEl.perGradeBox.classList.toggle("hidden", settings.practiceModeType !== "perGrade");
  }

  // ---- 画面切り替え ----
  function openSettings(){
    settingsEl.viewList.classList.add("hidden");
    settingsEl.viewDetail.classList.add("hidden");
    settingsEl.viewSettings.classList.remove("hidden");
    renderSettingsForm();
  }
  function closeSettings(){
    settingsEl.viewSettings.classList.add("hidden");
    settingsEl.viewList.classList.remove("hidden");
  }

  // ---- イベント登録 ----
  settingsEl.btnOpen.addEventListener("click", openSettings);
  settingsEl.btnBack.addEventListener("click", closeSettings);

  settingsEl.currentGradeSelect.addEventListener("change", () => {
    settings.currentGrade = Number(settingsEl.currentGradeSelect.value);
    saveSettings(settings);
  });

  document.querySelectorAll('input[name="practice-mode-type"]').forEach(el => {
    el.addEventListener("change", () => {
      settings.practiceModeType = el.value;
      settingsEl.perGradeBox.classList.toggle("hidden", settings.practiceModeType !== "perGrade");
      saveSettings(settings);
    });
  });

  document.querySelectorAll('input[name="sample-position"]').forEach(el => {
    el.addEventListener("change", () => {
      settings.samplePosition = el.value;
      saveSettings(settings);
    });
  });

  document.querySelectorAll('input[name="tolerance"]').forEach(el => {
    el.addEventListener("change", () => {
      settings.tolerance = el.value;
      saveSettings(settings);
    });
  });

  document.querySelectorAll('input[name="redo-mode"]').forEach(el => {
    el.addEventListener("change", () => {
      settings.redoMode = el.value;
      saveSettings(settings);
    });
  });

  document.querySelectorAll('#settings-per-grade input[type="checkbox"]').forEach(el => {
    el.addEventListener("change", () => {
      const grade = Number(el.dataset.grade);
      settings.perGradeSelection[grade] = el.checked;
      saveSettings(settings);
    });
  });

  // ---- 初期化 ----
  initCurrentGradeSelect();
})();
