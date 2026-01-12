const $ = (id) => document.getElementById(id);

const modeTag = $("modeTag");
const wrongTag = $("wrongTag");
const starTag = $("starTag");

const btnFull = $("btnFull");
const btnRandom20 = $("btnRandom20");
const btnWrongOnly = $("btnWrongOnly");
const btnClearWrong = $("btnClearWrong");

const questionEl = $("question");
const choicesEl = $("choices");
const progressTextEl = $("progressText");
const scoreTextEl = $("scoreText");
const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");
const restartBtn = $("restartBtn");
const resultEl = $("result");

/** ---------- Load bank (no need to modify questions.js) ---------- */
const RAW =
  (Array.isArray(window.QUESTIONS) && window.QUESTIONS) ||
  (typeof QUESTIONS !== "undefined" && Array.isArray(QUESTIONS) ? QUESTIONS : []);

function norm(item, fallbackIndex) {
  const id = item.id ?? (fallbackIndex + 1);
  return {
    id,
    star: !!item.star,
    en: String(item.en ?? item.q ?? "").trim(),
    zh: String(item.zh ?? "").trim(),
    answers_en: Array.isArray(item.answers_en) ? item.answers_en.map(s => String(s).trim()).filter(Boolean) : [],
    answers_zh: Array.isArray(item.answers_zh) ? item.answers_zh.map(s => String(s).trim()).filter(Boolean) : [],
  };
}

const BANK = RAW.map(norm).filter(x => x.en && x.answers_en.length);

/** ---------- Wrong set persisted ---------- */
const LS_KEY_WRONG = "uscis_wrong_ids_v1";

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

/** ---------- Deterministic multiple-choice generation ---------- */
/**
 * We create 4 choices:
 * - Correct: BANK[i].answers_en[0] (canonical)
 * - Distractors: pulled from global answer pool
 * deterministic per question id (so choices stable across sessions)
 */
const ANSWER_POOL = Array.from(
  new Set(BANK.flatMap(q => q.answers_en).map(s => String(s).trim()).filter(Boolean))
);

function hashToSeed(x) {
  // simple string hash -> uint32
  const str = String(x);
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0);
}
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleWithRng(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildMC(q) {
  const correct = q.answers_en[0]; // canonical
  const rng = mulberry32(hashToSeed(q.id));

  const candidates = ANSWER_POOL.filter(a => a !== correct);
  const picked = [];
  // pick 3 distractors deterministically
  for (let k = 0; k < 2000 && picked.length < 3; k++) {
    const idx = Math.floor(rng() * candidates.length);
    const val = candidates[idx];
    if (val && !picked.includes(val) && val !== correct) picked.push(val);
  }
  while (picked.length < 3) picked.push("N/A");

  const choices = shuffleWithRng([correct, ...picked], rng);
  return {
    qid: q.id,
    star: q.star,
    qEn: q.en,
    qZh: q.zh,
    answersEnAll: q.answers_en,
    answersZhAll: q.answers_zh,
    choices,
    answerIndex: choices.indexOf(correct),
    correctText: correct,
  };
}

const MC_ALL = BANK.map(buildMC);
const MC_BY_ID = new Map(MC_ALL.map(x => [x.qid, x]));

/** ---------- Modes & session state ---------- */
const MODE = {
  FULL: "FULL",
  RAND20: "RAND20",
  WRONG: "WRONG",
};

let mode = MODE.FULL;
let activeIds = [];   // list of qid
let pos = 0;          // position within activeIds
let selectedByPos = {};  // {pos: idx}
let lockedByPos = {};    // {pos: true}
let score = 0;

function setModeTag() {
  const text =
    mode === MODE.FULL ? "Mode: Full 128" :
    mode === MODE.RAND20 ? "Mode: Random 20" :
    "Mode: Wrong Only";
  modeTag.textContent = text;
  wrongTag.textContent = `Wrong: ${wrongSet.size}`;
}

function computeScore() {
  let s = 0;
  for (let p = 0; p < activeIds.length; p++) {
    const q = MC_BY_ID.get(activeIds[p]);
    const sel = selectedByPos[p];
    if (lockedByPos[p] && sel === q.answerIndex) s++;
  }
  return s;
}

function makeActiveIdsFull() {
  return MC_ALL.map(x => x.qid);
}
function makeActiveIdsRandom20() {
  const ids = makeActiveIdsFull();
  // Fisher–Yates shuffle with Math.random (ok)
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids.slice(0, 20);
}
function makeActiveIdsWrongOnly() {
  const ids = Array.from(wrongSet).filter(id => MC_BY_ID.has(id));
  return ids;
}

function startSession(newMode) {
  mode = newMode;

  if (mode === MODE.FULL) activeIds = makeActiveIdsFull();
  if (mode === MODE.RAND20) activeIds = makeActiveIdsRandom20();
  if (mode === MODE.WRONG) activeIds = makeActiveIdsWrongOnly();

  pos = 0;
  selectedByPos = {};
  lockedByPos = {};
  score = 0;

  setModeTag();
  render();
}

/** ---------- Render ---------- */
function updateTopBar() {
  progressTextEl.textContent = activeIds.length
    ? `Question ${pos + 1} of ${activeIds.length}`
    : "Question 0";

  scoreTextEl.textContent = `Score: ${score}`;

  const q = getCurrent();
  if (q?.star) {
    starTag.style.display = "inline-block";
  } else {
    starTag.style.display = "none";
  }
}

function getCurrent() {
  if (!activeIds.length) return null;
  const id = activeIds[pos];
  return MC_BY_ID.get(id) || null;
}

function render() {
  setModeTag();

  if (!activeIds.length) {
    questionEl.innerHTML = `
      <div>No questions in this mode.</div>
      ${mode === MODE.WRONG ? `<div class="muted zh" style="margin-top:6px;">错题本为空（先做题，做错会自动记录）</div>` : ""}
    `;
    choicesEl.innerHTML = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    restartBtn.style.display = "inline-block";
    resultEl.style.display = "none";
    updateTopBar();
    return;
  }

  const q = getCurrent();
  const locked = !!lockedByPos[pos];
  const selected = selectedByPos[pos];

  // question bilingual
  questionEl.innerHTML = `
    <div>${escapeHtml(q.qEn)}</div>
    ${q.qZh ? `<div class="muted zh">${escapeHtml(q.qZh)}</div>` : ""}
  `;

  // choices
  choicesEl.innerHTML = "";
  q.choices.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.textContent = text;

    if (locked) {
      btn.disabled = true;
      if (i === q.answerIndex) btn.classList.add("correct");
      if (selected === i && selected !== q.answerIndex) btn.classList.add("wrong");
    }

    btn.addEventListener("click", () => {
      if (lockedByPos[pos]) return;

      selectedByPos[pos] = i;
      lockedByPos[pos] = true;

      // wrong tracking
      const isCorrect = (i === q.answerIndex);
      if (!isCorrect) {
        wrongSet.add(q.qid);
      }
      saveWrongSet(wrongSet);

      score = computeScore();
      setModeTag();
      render(); // re-render to show colors and explanation
      updateTopBar();
    });

    choicesEl.appendChild(btn);
  });

  // result/explanation for this question (shown only after answer)
  if (locked) {
    const isCorrect = (selected === q.answerIndex);
    const yourText = selected != null ? q.choices[selected] : "";
    const acceptableEn = q.answersEnAll?.length ? q.answersEnAll : [q.correctText];
    const acceptableZh = q.answersZhAll?.length ? q.answersZhAll : [];

    resultEl.style.display = "block";
    resultEl.innerHTML = `
      <div><strong>${isCorrect ? "✅ Correct" : "❌ Wrong"}</strong></div>
      <div class="muted" style="margin-top:6px;">Your choice: ${escapeHtml(String(yourText))}</div>
      <div class="muted">Correct: ${escapeHtml(String(q.correctText))}</div>
      <div style="margin-top:10px;">
        <div class="muted">Acceptable answers (EN):</div>
        <ol style="margin:6px 0 0; padding-left:18px;">
          ${acceptableEn.slice(0, 8).map(a => `<li style="margin:5px 0;">${escapeHtml(a)}</li>`).join("")}
        </ol>
        ${acceptableZh.length ? `
          <div class="muted" style="margin-top:10px;">可接受答案（中文参考）：</div>
          <ol style="margin:6px 0 0; padding-left:18px;">
            ${acceptableZh.slice(0, 8).map(a => `<li style="margin:5px 0;">${escapeHtml(a)}</li>`).join("")}
          </ol>
        ` : ""}
      </div>
      <div class="muted mini" style="margin-top:10px;">
        错题会自动进入错题本（Wrong Only 可练习错题）。
      </div>
    `;
  } else {
    resultEl.style.display = "none";
  }

  // buttons
  prevBtn.disabled = (pos === 0);
  nextBtn.disabled = !locked || (pos >= activeIds.length - 1);

  restartBtn.style.display = "none";

  updateTopBar();
}

function showFinal() {
  const finalScore = computeScore();
  score = finalScore;

  const acc = activeIds.length ? Math.round((finalScore / activeIds.length) * 100) : 0;

  resultEl.style.display = "block";
  resultEl.innerHTML = `
    <div><strong>Finished!</strong></div>
    <div style="margin-top:6px;">Score: <strong>${finalScore}</strong> / <strong>${activeIds.length}</strong> (${acc}%)</div>
    <div class="muted" style="margin-top:10px;">Wrong count (saved): ${wrongSet.size}</div>
  `;
  restartBtn.style.display = "inline-block";
  nextBtn.disabled = true;
}

/** ---------- Helpers ---------- */
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/** ---------- Events ---------- */
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
    showFinal();
  }
});

restartBtn.addEventListener("click", () => {
  startSession(mode); // restart same mode
});

btnFull.addEventListener("click", () => startSession(MODE.FULL));
btnRandom20.addEventListener("click", () => startSession(MODE.RAND20));
btnWrongOnly.addEventListener("click", () => startSession(MODE.WRONG));

btnClearWrong.addEventListener("click", () => {
  wrongSet = new Set();
  saveWrongSet(wrongSet);
  setModeTag();
  // if currently wrong-only, refresh list
  if (mode === MODE.WRONG) startSession(MODE.WRONG);
  else render();
});

/** ---------- Init ---------- */
if (!BANK.length) {
  questionEl.textContent = "No questions found. Make sure questions.js defines const QUESTIONS = [...]";
  choicesEl.innerHTML = "";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  restartBtn.style.display = "inline-block";
} else {
  startSession(MODE.FULL);
}
