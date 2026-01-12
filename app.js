const $ = (id) => document.getElementById(id);

const modeTag = $("modeTag");
const countTag = $("countTag");
const wrongTag = $("wrongTag");
const debugTag = $("debugTag");
const starTag = $("starTag");

const btnFull = $("btnFull");
const btnRandom20 = $("btnRandom20");
const btnStar = $("btnStar");
const btnWrongOnly = $("btnWrongOnly");
const btnClearWrong = $("btnClearWrong");

const progressTextEl = $("progressText");
const questionEl = $("question");

const answerDetails = $("answerDetails");
const answerPanel = $("answerPanel");

const markKnowBtn = $("markKnowBtn");
const markWrongBtn = $("markWrongBtn");
const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");
const restartBtn = $("restartBtn");

debugTag.textContent = "Loaded: app.js OK";

/** 读题库：兼容你现在的 questions.js = const QUESTIONS = [...] */
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

const BANK = RAW.map(norm).filter(x => x.en); // 只要有英文题就收进来

const LS_KEY_WRONG = "uscis_wrong_ids_v3";
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

const MODE = { FULL:"FULL", RAND20:"RAND20", STAR:"STAR", WRONG:"WRONG" };
let mode = MODE.FULL;

let activeIds = [];
let pos = 0;

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setHeader() {
  const label =
    mode === MODE.FULL ? "Mode: Full 128" :
    mode === MODE.RAND20 ? "Mode: Random 20" :
    mode === MODE.STAR ? "Mode: 65/20 ★" :
    "Mode: Wrong Only";

  modeTag.textContent = label;
  countTag.textContent = `Count: ${activeIds.length}`;
  wrongTag.textContent = `Wrong: ${wrongSet.size}`;
  debugTag.textContent = `Loaded: app.js OK • BANK: ${BANK.length}`;
}

function buildActive(newMode) {
  mode = newMode;

  let list = BANK.map(x => x.id);

  if (mode === MODE.RAND20) list = shuffle(list).slice(0, 20);
  if (mode === MODE.STAR) list = BANK.filter(x => x.star).map(x => x.id);
  if (mode === MODE.WRONG) {
    const all = new Set(BANK.map(x => x.id));
    list = Array.from(wrongSet).filter(id => all.has(id));
  }

  activeIds = list;
  pos = 0;
  answerDetails.open = false; // 每题默认收起
  setHeader();
  render();
}

function getCurrent() {
  if (!activeIds.length) return null;
  const id = activeIds[pos];
  return BANK.find(x => x.id === id) || null;
}

function render() {
  setHeader();

  if (!BANK.length) {
    questionEl.textContent = "❌ BANK=0：你的 questions.js 没被读取到（可能路径/目录不对或脚本没加载）。";
    answerPanel.innerHTML = "";
    return;
  }

  if (!activeIds.length) {
    questionEl.innerHTML = mode === MODE.WRONG
      ? `<div>错题本为空。</div><div class="muted zh" style="margin-top:6px;">点“没记住”会加入错题。</div>`
      : `<div>这个模式下没有题目。</div>`;
    answerPanel.innerHTML = "";
    return;
  }

  const q = getCurrent();
  progressTextEl.textContent = `Question ${pos + 1} of ${activeIds.length}`;
  starTag.style.display = q.star ? "inline-block" : "none";

  questionEl.innerHTML = `
    <div>${escapeHtml(q.en)}</div>
    ${q.zh ? `<div class="muted zh">${escapeHtml(q.zh)}</div>` : ""}
  `;

  // 答案（就算 answers_zh 没有，英文也一定显示）
  const en = (q.answers_en && q.answers_en.length)
    ? `<div class="muted">Acceptable answers (EN):</div><ol>${q.answers_en.map(a => `<li>${escapeHtml(a)}</li>`).join("")}</ol>`
    : `<div class="muted">Acceptable answers (EN): (empty)</div>`;

  const zh = (q.answers_zh && q.answers_zh.length)
    ? `<div class="muted" style="margin-top:10px;">可接受答案（中文）：</div><ol>${q.answers_zh.map(a => `<li>${escapeHtml(a)}</li>`).join("")}</ol>`
    : `<div class="muted" style="margin-top:10px;">可接受答案（中文）：（无）</div>`;

  answerPanel.innerHTML = en + zh;
}

/** actions */
markKnowBtn.addEventListener("click", () => {
  const q = getCurrent();
  if (!q) return;
  wrongSet.delete(q.id);
  saveWrongSet(wrongSet);
  setHeader();
});

markWrongBtn.addEventListener("click", () => {
  const q = getCurrent();
  if (!q) return;
  wrongSet.add(q.id);
  saveWrongSet(wrongSet);
  setHeader();
});

prevBtn.addEventListener("click", () => {
  if (pos > 0) {
    pos--;
    answerDetails.open = false;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (!activeIds.length) return;
  if (pos < activeIds.length - 1) pos++;
  else pos = 0;
  answerDetails.open = false;
  render();
});

restartBtn.addEventListener("click", () => buildActive(mode));

btnFull.addEventListener("click", () => buildActive(MODE.FULL));
btnRandom20.addEventListener("click", () => buildActive(MODE.RAND20));
btnStar.addEventListener("click", () => buildActive(MODE.STAR));
btnWrongOnly.addEventListener("click", () => buildActive(MODE.WRONG));
btnClearWrong.addEventListener("click", () => {
  wrongSet = new Set();
  saveWrongSet(wrongSet);
  buildActive(mode);
});

/** init */
buildActive(MODE.FULL);
