const $ = (id) => document.getElementById(id);

const questionEl = $("question");
const choicesEl = $("choices");
const progressTextEl = $("progressText");
const scoreTextEl = $("scoreText");
const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");
const restartBtn = $("restartBtn");
const resultEl = $("result");

// 兼容：你现在 questions.js 是 const QUESTIONS = [...]
const RAW =
  (Array.isArray(window.QUESTIONS) && window.QUESTIONS) ||
  (typeof QUESTIONS !== "undefined" && Array.isArray(QUESTIONS) ? QUESTIONS : []);

function normalizeQnA(item) {
  const q = item.en ?? item.q ?? "";
  const answers = Array.isArray(item.answers_en) ? item.answers_en : [];
  return { q, answers };
}

const QNA = RAW.map(normalizeQnA).filter(x => x.q && x.answers && x.answers.length);

// 把所有可选答案打平，作为干扰项池
const ANSWER_POOL = Array.from(
  new Set(QNA.flatMap(x => x.answers).map(s => String(s).trim()).filter(Boolean))
);

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 生成四选一（每题只生成一次，保证前后翻页一致）
const MC = QNA.map((x, idx) => {
  // 正确答案：默认取 answers_en 的第 1 个（更稳定）
  const correct = String(x.answers[0]).trim();

  // 干扰项：从全局池里抽 3 个，不重复、不等于正确
  const candidates = ANSWER_POOL.filter(a => a !== correct);
  shuffle(candidates);
  const distractors = candidates.slice(0, 3);

  // 万一池子不够（极少），就补空字符串
  while (distractors.length < 3) distractors.push("N/A");

  const choices = shuffle([correct, ...distractors]);

  return {
    q: x.q,
    choices,
    answerIndex: choices.indexOf(correct),
    _correctText: correct
  };
});

let index = 0;
let selectedIndexByQ = {}; // { [qIndex]: choiceIndex }
let lockedByQ = {};        // { [qIndex]: true/false }
let score = 0;

function updateTopBar() {
  progressTextEl.textContent = `Question ${index + 1} of ${MC.length || 0}`;
  scoreTextEl.textContent = `Score: ${score}`;
}

function computeScore() {
  let s = 0;
  for (let i = 0; i < MC.length; i++) {
    const sel = selectedIndexByQ[i];
    if (sel === MC[i].answerIndex) s++;
  }
  return s;
}

function renderQuestion() {
  if (!MC.length) {
    questionEl.textContent =
      "No usable questions found. Your questions.js must contain const QUESTIONS = [{ en:'', answers_en:[...] }, ...]";
    choicesEl.innerHTML = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const q = MC[index];
  questionEl.textContent = q.q;

  choicesEl.innerHTML = "";
  const locked = !!lockedByQ[index];
  const selected = selectedIndexByQ[index];

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
      if (lockedByQ[index]) return;

      selectedIndexByQ[index] = i;
      lockedByQ[index] = true;

      score = computeScore();
      renderQuestion();
      updateTopBar();

      nextBtn.disabled = (index >= MC.length - 1);
    });

    choicesEl.appendChild(btn);
  });

  prevBtn.disabled = (index === 0);
  nextBtn.disabled = !locked || (index >= MC.length - 1);

  restartBtn.style.display = "none";
  resultEl.style.display = "none";
}

function goPrev() {
  if (index > 0) {
    index--;
    renderQuestion();
    updateTopBar();
  }
}

function showResult() {
  const finalScore = computeScore();
  score = finalScore;

  resultEl.style.display = "block";
  resultEl.innerHTML = `
    <strong>Finished!</strong><br/>
    You answered <strong>${finalScore}</strong> out of <strong>${MC.length}</strong> correctly.<br/>
    Accuracy: <strong>${Math.round((finalScore / MC.length) * 100)}%</strong>
  `;

  restartBtn.style.display = "inline-block";
  nextBtn.disabled = true;
}

function goNext() {
  if (index < MC.length - 1) {
    index++;
    renderQuestion();
    updateTopBar();
  } else {
    showResult();
  }
}

function restart() {
  index = 0;
  selectedIndexByQ = {};
  lockedByQ = {};
  score = 0;
  renderQuestion();
  updateTopBar();
}

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", () => {
  if (index === MC.length - 1 && lockedByQ[index]) {
    showResult();
    return;
  }
  goNext();
});
restartBtn.addEventListener("click", restart);

// init
updateTopBar();
renderQuestion();
