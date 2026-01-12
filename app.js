const $ = (id) => document.getElementById(id);

const modeTag = $("modeTag");
const countTag = $("countTag");
const wrongTag = $("wrongTag");
const starTag = $("starTag");

const btnFull = $("btnFull");
const btnRandom20 = $("btnRandom20");
const btnStar = $("btnStar");
const btnWrongOnly = $("btnWrongOnly");
const btnClearWrong = $("btnClearWrong");

const progressTextEl = $("progressText");
const questionEl = $("question");
const answerPanel = $("answerPanel");
const toggleAnswerBtn = $("toggleAnswerBtn");

const markKnowBtn = $("markKnowBtn");
const markWrongBtn = $("markWrongBtn");

const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");
const restartBtn = $("restartBtn");

/** --------- Load bank (keep your questions.js as-is) --------- */
const RAW =
  (Array.isArray(window.QUESTIONS) && window.QUESTIONS) ||
  (typeof QUESTIONS !== "undefined" && Array.isArray(QUESTIONS) ? QUESTIONS : []);

function norm(item, fallbackIndex) {
  const id = item.id ?? (fallbackIndex + 1);
  return {
    id,
    star: !!item.star,
    en: String(item.en ?? "").trim(),
    zh: String(item.zh ?? "").trim(),
    answers_en: Array.isArray(item.answers_en) ? item.answers_en.map(s => String(s).trim()).filter(Boolean) : [],
    answers_zh: Array.isArray(item.answers_zh) ? item.answers_zh.map(s => String(s).trim()).filter(Boolean) : [],
  };
}

const BANK = RAW.map(norm).filter(x => x.en && x.answers_en.length);

/** --------- Wrong set persisted --------- */
const LS_KEY_WRONG = "uscis_wrong_ids_v2";
function loadWrongSet() {
  try {
    const arr = JSON.parse(localStorage.getItem(LS_KEY_WRONG) || "[]");
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}
function saveWrongSet(set) {
  localStorage.setItem(LS_KEY_WRONG, JSON.stringify(Array.from(set)));
}
let wrongSet = loadWrongSet();

/** --------- Modes --------- */
const MODE = { FULL:"FULL", RAND20:"RAND20", STAR:"STAR", WRONG:"WRONG" };
let mode = MODE.FULL;

let activeIds = [];
let pos = 0;
let revealedByPos = {}; // {pos: true/false}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setHeaderTags() {
  const label =
    mode === MODE.FULL ? "Mode: Full 128" :
    mode === MODE.RAND20 ? "Mode: Random 20" :
    mode === MODE.STAR ? "Mode: 65/20 ★" :
    "Mode: Wrong Only";

  if (modeTag) modeTag.textContent = label;
  if (countTag) countTag.textContent = `Count: ${activeIds.length}`;
  if (wrongTag) wrongTag.textContent = `Wrong: ${wrongSet.size}`;
}

function buildActiveIds(newMode) {
  mode = newMode;

  let list = BANK.map(x => x.id);

  if (mode === MODE.RAND20) {
    list = shuffle(list).slice(0, 20);
  } else if (mode === MODE.STAR) {
    list = BANK.filter(x => x.star).map(x => x.id);
  } else if (mode === MODE.WRONG) {
    const allIds = new Set(BANK.map(x => x.id));
    list = Array.from(wrongSet).filter(id => allIds.has(id));
  }

  activeIds = list;
  pos = 0;
  revealedByPos = {};
  setHeaderTags();
  render();
}

function getCurrent() {
  if (!activeIds.length) return null;
  const id = activeIds[pos];
  return BANK.find(x => x.id === id) || null;
}

function updateTopBar() {
  if (!activeIds.length) {
    progressTextEl.textContent = "Question 0";
    if (starTag) starTag.style.display = "none";
    return;
  }
  progressTextEl.textContent = `Question ${pos + 1} of ${activeIds.length}`;
  const q = getCurrent();
  if (starTag) starTag.style.display = q?.star ? "inline-block" : "none";
}

function setAnswerVisible(visible) {
  // 关键：这里直接控制显示，并且同步按钮文字
  answerPanel.style.display = visible ? "block" : "none";
  toggleAnswerBtn.textContent = visible ? "Hide Answer" : "Show Answer";
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  setHeaderTags();
  updateTopBar();

  if (!BANK.length) {
    questionEl.textContent = "No questions found. Check questions.js (const QUESTIONS = [...]).";
    answerPanel.style.display = "none";
    setAnswerVisible(false);
    return;
  }

  if (!activeIds.length) {
    questionEl.innerHTML = `
      <div>这个模式下没有题目。</div>
      ${mode === MODE.WRONG ? `<div class="muted zh" style="margin-top:6px;">错题本为空：点“没记住”会加入错题。</div>` : ""}
    `;
    answerPanel.style.display = "none";
    setAnswerVisible(false);
    return;
  }

  const q = getCurrent();

  questionEl.innerHTML = `
    <div>${escapeHtml(q.en)}</div>
    ${q.zh ? `<div class="muted zh">${escapeHtml(q.zh)}</div>` : ""}
  `;

  const enList = q.answers_en.length
    ? `<div class="muted">Acceptable answers (EN):</div>
       <ol>${q.answers_en.map(a => `<li>${escapeHtml(a)}</li>`).join("")}</ol>`
    : `<div class="muted">Acceptable answers (EN): (none)</div>`;

  const zhList = q.answers_zh.length
    ? `<div class="muted" style="margin-top:10px;">可接受答案（中文）：</div>
       <ol>${q.answers_zh.map(a => `<li>${escapeHtml(a)}</li>`).join("")}</ol>`
    : `<div class="muted" style="margin-top:10px;">可接受答案（中文）：（无）</div>`;

  answerPanel.innerHTML = `${enList}${zhList}`;

  const revealed = !!revealedByPos[pos];
  setAnswerVisible(revealed);
}

/** --------- Show Answer (Global) --------- */
window.__toggleAnswer = function () {
  if (!activeIds.length) return;
  const now = !!revealedByPos[pos];
  revealedByPos[pos] = !now;
  setAnswerVisible(!now);
};

/** --------- Also bind as backup (in case) --------- */
toggleAnswerBtn.addEventListener("click", () => {
  window.__toggleAnswer();
});

/** --------- Other actions --------- */
markKnowBtn.addEventListener("click", () => {
  const q = getCurrent();
  if (!q) return;
  if (wrongSet.has(q.id)) {
    wrongSet.delete(q.id);
    saveWrongSet(wrongSet);
    setHeaderTags();
  }
});

markWrongBtn.addEventListener("click", () => {
  const q = getCurrent();
  if (!q) return;
  wrongSet.add(q.id);
  saveWrongSet(wrongSet);
  setHeaderTags();
});

prevBtn.addEventListener("click", () => {
  if (pos > 0) {
    pos--;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (!activeIds.length) return;
  if (pos < activeIds.length - 1) {
    pos++;
    render();
  } else {
    pos = 0; // loop
    render();
  }
});

restartBtn.addEventListener("click", () => buildActiveIds(mode));

btnFull.addEventListener("click", () => buildActiveIds(MODE.FULL));
btnRandom20.addEventListener("click", () => buildActiveIds(MODE.RAND20));
btnStar.addEventListener("click", () => buildActiveIds(MODE.STAR));
btnWrongOnly.addEventListener("click", () => buildActiveIds(MODE.WRONG));

btnClearWrong.addEventListener("click", () => {
  wrongSet = new Set();
  saveWrongSet(wrongSet);
  if (mode === MODE.WRONG) buildActiveIds(MODE.WRONG);
  else {
    setHeaderTags();
    render();
  }
});

/** --------- Init --------- */
buildActiveIds(MODE.FULL);
