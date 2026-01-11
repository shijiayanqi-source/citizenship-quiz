// questions.js
// IMPORTANT: must attach to window for browser use
// Add all your questions into this array (128 total).
window.QUESTIONS = [
  {
    id: 1,
    q: { en: "What is the supreme law of the land?", zh: "美国的最高法律是什么？" },
    options: [
      { en: "The Constitution", zh: "宪法" },
      { en: "The Declaration of Independence", zh: "独立宣言" },
      { en: "The Bill of Rights", zh: "权利法案" }
    ],
    answerIndex: 0
  },
  {
    id: 2,
    q: { en: "What does the Constitution do?", zh: "宪法的作用是什么？" },
    options: [
      { en: "Sets up the government", zh: "建立政府" },
      { en: "Declares war", zh: "宣布战争" },
      { en: "Names the president", zh: "指定总统" }
    ],
    answerIndex: 0
  },
  {
    id: 3,
    q: { en: "The idea of self-government is in the first three words of the Constitution. What are these words?", zh: "宪法前三个词体现自治理念，这三个词是什么？" },
    options: [
      { en: "We the People", zh: "我们人民" },
      { en: "United States of America", zh: "美利坚合众国" },
      { en: "In God We Trust", zh: "我们信仰上帝" }
    ],
    answerIndex: 0
  }
  // ✅ 这里继续往下加，直到 128 题，格式不变
];
