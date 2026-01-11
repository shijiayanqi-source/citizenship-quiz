// app.js

const $ = (id) => document.getElementById(id);

const questionEl = $("question");
const choicesEl = $("choices");
const progressTextEl = $("progressText");
const scoreTextEl = $("scoreText");
const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");
const restartBtn = $("restartBtn");
const resultEl = $("result");

const questions = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];

let index = 0;
let selectedIndexByQ = {}; // { [qIndex]: choiceIndex }
let lockedByQ = {};        // { [qIndex]: true/false }
let score = 0;

function updateTopBar() {
  progressTextEl.textContent = `Question ${index + 1} of ${questions.length || 0}`;
  scoreTextEl.textContent = `Score: ${score}`;
}

function computeScore() {
  let s = 0;
  for (let i = 0; i < questions.length; i++) {
    const sel = selectedIndexByQ[i];
    if (sel === questions[i].answerIndex) s++;
  }
  return s;
}

function renderQuestion() {
  if (!questions.length) {
    questionEl.textContent = "No questions found. Please check questions.js";
    choicesEl.innerHTML = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const q = questions[index];
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

      // update score
      score = computeScore();

      renderQuestion();
      updateTopBar();

      // allow Next after answering
      nextBtn.disabled = (index >= questions.length - 1);
    });

    choicesEl.appendChild(btn);
  });

  // buttons
  prevBtn.disabled = (index === 0);
  nextBtn.disabled = !locked || (index >= questions.length - 1);

  // final screen handling
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

function goNext() {
  if (index < questions.length - 1) {
    index++;
    renderQuestion();
    updateTopBar();
    if (index === questions.length - 1 && lockedByQ[index]) {
      nextBtn.disabled = true;
    }
  } else {
    showResult();
  }
}

function showResult() {
  const finalScore = computeScore();
  score = finalScore;

  resultEl.style.display = "block";
  resultEl.innerHTML = `
    <strong>Finished!</strong><br/>
    You answered <strong>${finalScore}</strong> out of <strong>${questions.length}</strong> correctly.<br/>
    Accuracy: <strong>${Math.round((finalScore / questions.length) * 100)}%</strong>
  `;

  restartBtn.style.display = "inline-block";
  nextBtn.disabled = true;
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
  // if last question and already locked, show result
  if (index === questions.length - 1 && lockedByQ[index]) {
    showResult();
    return;
  }
  goNext();
});
restartBtn.addEventListener("click", restart);

// init
updateTopBar();
renderQuestion();
