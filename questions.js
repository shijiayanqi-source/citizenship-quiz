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
  ,
  {
    id: 4,
    q: { en: "What is an amendment?", zh: "什么是宪法修正案？" },
    options: [
      { en: "A change to the Constitution", zh: "对宪法的修改" },
      { en: "A law passed by Congress", zh: "国会通过的法律" },
      { en: "A decision by the President", zh: "总统的决定" }
    ],
    answerIndex: 0
  },
  {
    id: 5,
    q: { en: "What do we call the first ten amendments to the Constitution?", zh: "宪法前十条修正案合称什么？" },
    options: [
      { en: "The Bill of Rights", zh: "权利法案" },
      { en: "The Federalist Papers", zh: "联邦党人文集" },
      { en: "The Articles of Confederation", zh: "邦联条例" }
    ],
    answerIndex: 0
  },
  {
    id: 6,
    q: { en: "What is one right or freedom from the First Amendment?", zh: "第一修正案保护的一项权利或自由是什么？" },
    options: [
      { en: "Freedom of speech", zh: "言论自由" },
      { en: "Right to bear arms", zh: "持枪权" },
      { en: "Right to a speedy trial", zh: "快速审判权" }
    ],
    answerIndex: 0
  },
  {
    id: 7,
    q: { en: "How many amendments does the Constitution have?", zh: "宪法共有多少条修正案？" },
    options: [
      { en: "27", zh: "27" },
      { en: "10", zh: "10" },
      { en: "50", zh: "50" }
    ],
    answerIndex: 0
  },
  {
    id: 8,
    q: { en: "What did the Declaration of Independence do?", zh: "《独立宣言》做了什么？" },
    options: [
      { en: "Announced our independence (from Great Britain)", zh: "宣布（从英国）独立" },
      { en: "Created the Constitution", zh: "制定宪法" },
      { en: "Ended the Civil War", zh: "结束内战" }
    ],
    answerIndex: 0
  },
  {
    id: 9,
    q: { en: "What are two rights in the Declaration of Independence?", zh: "《独立宣言》中提到的两项权利是什么？" },
    options: [
      { en: "Life and liberty", zh: "生命和自由" },
      { en: "Education and voting", zh: "教育和投票" },
      { en: "Housing and healthcare", zh: "住房和医疗" }
    ],
    answerIndex: 0
  },
  {
    id: 10,
    q: { en: "What is freedom of religion?", zh: "什么是宗教自由？" },
    options: [
      { en: "You can practice any religion, or not practice a religion", zh: "可以信仰任何宗教或不信仰宗教" },
      { en: "You must follow a state religion", zh: "必须信仰国家宗教" },
      { en: "Religion is controlled by government", zh: "宗教由政府控制" }
    ],
    answerIndex: 0
  },
  {
    id: 11,
    q: { en: "What is the economic system in the United States?", zh: "美国的经济制度是什么？" },
    options: [
      { en: "Capitalist economy", zh: "资本主义经济" },
      { en: "Communist economy", zh: "共产主义经济" },
      { en: "Feudal economy", zh: "封建经济" }
    ],
    answerIndex: 0
  },
  {
    id: 12,
    q: { en: "What is the \"rule of law\"?", zh: "什么是“法治”（rule of law）？" },
    options: [
      { en: "Everyone must follow the law", zh: "人人都必须遵守法律" },
      { en: "Only leaders must follow the law", zh: "只有领导必须遵守法律" },
      { en: "Laws are optional", zh: "法律是可选的" }
    ],
    answerIndex: 0
  },
  {
    id: 13,
    q: { en: "Name one branch or part of the government.", zh: "说出政府的一个部门/分支。" },
    options: [
      { en: "Congress", zh: "国会（立法）" },
      { en: "The media", zh: "媒体" },
      { en: "Banks", zh: "银行" }
    ],
    answerIndex: 0
  },
  {
    id: 14,
    q: { en: "What stops one branch of government from becoming too powerful?", zh: "什么防止政府某一分支权力过大？" },
    options: [
      { en: "Checks and balances", zh: "制衡制度（checks and balances）" },
      { en: "Political parties", zh: "政党" },
      { en: "The IRS", zh: "国税局" }
    ],
    answerIndex: 0
  },
  {
    id: 15,
    q: { en: "Who is in charge of the executive branch?", zh: "谁负责行政部门（executive branch）？" },
    options: [
      { en: "The President", zh: "总统" },
      { en: "The Speaker of the House", zh: "众议院议长" },
      { en: "The Chief Justice", zh: "首席大法官" }
    ],
    answerIndex: 0
  },
  {
    id: 16,
    q: { en: "Who makes federal laws?", zh: "谁制定联邦法律？" },
    options: [
      { en: "Congress", zh: "国会" },
      { en: "The President", zh: "总统" },
      { en: "The Supreme Court", zh: "最高法院" }
    ],
    answerIndex: 0
  },
  {
    id: 17,
    q: { en: "What are the two parts of the U.S. Congress?", zh: "美国国会由哪两部分组成？" },
    options: [
      { en: "The Senate and House of Representatives", zh: "参议院和众议院" },
      { en: "The President and the Cabinet", zh: "总统和内阁" },
      { en: "The Supreme Court and lower courts", zh: "最高法院和下级法院" }
    ],
    answerIndex: 0
  },
  {
    id: 18,
    q: { en: "How many U.S. Senators are there?", zh: "美国有多少名参议员？" },
    options: [
      { en: "100", zh: "100" },
      { en: "50", zh: "50" },
      { en: "435", zh: "435" }
    ],
    answerIndex: 0
  },
  {
    id: 19,
    q: { en: "We elect a U.S. Senator for how many years?", zh: "美国参议员任期多少年？" },
    options: [
      { en: "6", zh: "6 年" },
      { en: "2", zh: "2 年" },
      { en: "4", zh: "4 年" }
    ],
    answerIndex: 0
  },
  {
    id: 20,
    q: { en: "Who is one of your state's U.S. Senators now?", zh: "你所在州现任的一位联邦参议员是谁？" },
    options: [
      { en: "Depends on your state (check current senator)", zh: "因州而异（请查询现任参议员）" },
      { en: "The President", zh: "总统" },
      { en: "The Governor", zh: "州长" }
    ],
    answerIndex: 0
  },
  {
    id: 21,
    q: { en: "The House of Representatives has how many voting members?", zh: "众议院有多少名有投票权的议员？" },
    options: [
      { en: "435", zh: "435" },
      { en: "100", zh: "100" },
      { en: "50", zh: "50" }
    ],
    answerIndex: 0
  },
  {
    id: 22,
    q: { en: "We elect a U.S. Representative for how many years?", zh: "美国众议员任期多少年？" },
    options: [
      { en: "2", zh: "2 年" },
      { en: "4", zh: "4 年" },
      { en: "6", zh: "6 年" }
    ],
    answerIndex: 0
  },
  {
    id: 23,
    q: { en: "Name your U.S. Representative.", zh: "说出你所在选区的联邦众议员是谁。" },
    options: [
      { en: "Depends on where you live (check current representative)", zh: "因居住地而异（请查询现任众议员）" },
      { en: "The Vice President", zh: "副总统" },
      { en: "The Secretary of State", zh: "国务卿" }
    ],
    answerIndex: 0
  },
  {
    id: 24,
    q: { en: "Who does a U.S. Senator represent?", zh: "一名美国参议员代表谁？" },
    options: [
      { en: "All people of the state", zh: "该州的所有人民" },
      { en: "Only the president", zh: "只代表总统" },
      { en: "Only one city", zh: "只代表一个城市" }
    ],
    answerIndex: 0
  },
  {
    id: 25,
    q: { en: "Why do some states have more Representatives than other states?", zh: "为什么有些州的众议员比其他州多？" },
    options: [
      { en: "Because of the state's population", zh: "因为州人口不同" },
      { en: "Because of the state's size", zh: "因为州面积不同" },
      { en: "Because of the state's age", zh: "因为州成立时间不同" }
    ],
    answerIndex: 0
  },
  {
    id: 26,
    q: { en: "We elect a President for how many years?", zh: "美国总统任期多少年？" },
    options: [
      { en: "4", zh: "4 年" },
      { en: "2", zh: "2 年" },
      { en: "6", zh: "6 年" }
    ],
    answerIndex: 0
  },
  {
    id: 27,
    q: { en: "In what month do we vote for President?", zh: "我们在哪个月投票选总统？" },
    options: [
      { en: "November", zh: "11 月" },
      { en: "January", zh: "1 月" },
      { en: "March", zh: "3 月" }
    ],
    answerIndex: 0
  },
  {
    id: 28,
    q: { en: "What is the name of the President of the United States now?", zh: "现任美国总统是谁？" },
    options: [
      { en: "Depends on current president (check official source)", zh: "随现任总统而变（请查询官方信息）" },
      { en: "George Washington", zh: "乔治·华盛顿" },
      { en: "Abraham Lincoln", zh: "亚伯拉罕·林肯" }
    ],
    answerIndex: 0
  },
  {
    id: 29,
    q: { en: "What is the name of the Vice President of the United States now?", zh: "现任美国副总统是谁？" },
    options: [
      { en: "Depends on current vice president (check official source)", zh: "随现任副总统而变（请查询官方信息）" },
      { en: "The Speaker of the House", zh: "众议院议长" },
      { en: "The Chief Justice", zh: "首席大法官" }
    ],
    answerIndex: 0
  },
  {
    id: 30,
    q: { en: "If the President can no longer serve, who becomes President?", zh: "如果总统无法履职，谁成为总统？" },
    options: [
      { en: "The Vice President", zh: "副总统" },
      { en: "The Speaker of the House", zh: "众议院议长" },
      { en: "The Secretary of State", zh: "国务卿" }
    ],
    answerIndex: 0
  },
  {
    id: 31,
    q: { en: "If both the President and the Vice President can no longer serve, who becomes President?", zh: "如果总统和副总统都无法履职，谁成为总统？" },
    options: [
      { en: "The Speaker of the House", zh: "众议院议长" },
      { en: "The Chief Justice", zh: "首席大法官" },
      { en: "The Attorney General", zh: "司法部长" }
    ],
    answerIndex: 0
  },
  {
    id: 32,
    q: { en: "Who is the Commander in Chief of the military?", zh: "谁是军队的总司令？" },
    options: [
      { en: "The President", zh: "总统" },
      { en: "The Vice President", zh: "副总统" },
      { en: "Congress", zh: "国会" }
    ],
    answerIndex: 0
  }
  ,
  {
    id: 33,
    q: { en: "Who signs bills to become laws?", zh: "谁签署法案使其成为法律？" },
    options: [
      { en: "The President", zh: "总统" },
      { en: "The Vice President", zh: "副总统" },
      { en: "The Supreme Court", zh: "最高法院" }
    ],
    answerIndex: 0
  },
  {
    id: 34,
    q: { en: "Who vetoes bills?", zh: "谁可以否决法案？" },
    options: [
      { en: "The President", zh: "总统" },
      { en: "The Speaker of the House", zh: "众议院议长" },
      { en: "The Governor", zh: "州长" }
    ],
    answerIndex: 0
  },
  {
    id: 35,
    q: { en: "What does the President’s Cabinet do?", zh: "总统内阁做什么？" },
    options: [
      { en: "Advises the President", zh: "为总统提供建议" },
      { en: "Writes the Constitution", zh: "编写宪法" },
      { en: "Runs the Supreme Court", zh: "管理最高法院" }
    ],
    answerIndex: 0
  },
  {
    id: 36,
    q: { en: "What are two Cabinet-level positions?", zh: "说出两个内阁级职位。" },
    options: [
      { en: "Secretary of State and Secretary of Defense", zh: "国务卿 和 国防部长" },
      { en: "Speaker of the House and Chief Justice", zh: "众议院议长 和 首席大法官" },
      { en: "Senator and Governor", zh: "参议员 和 州长" }
    ],
    answerIndex: 0
  },
  {
    id: 37,
    q: { en: "What does the judicial branch do?", zh: "司法部门做什么？" },
    options: [
      { en: "Reviews laws (explains laws)", zh: "审查法律（解释法律）" },
      { en: "Makes laws", zh: "制定法律" },
      { en: "Commands the military", zh: "指挥军队" }
    ],
    answerIndex: 0
  },
  {
    id: 38,
    q: { en: "What is the highest court in the United States?", zh: "美国最高法院是什么？" },
    options: [
      { en: "The Supreme Court", zh: "最高法院" },
      { en: "The Federal Court", zh: "联邦法院" },
      { en: "The State Court", zh: "州法院" }
    ],
    answerIndex: 0
  },
  {
    id: 39,
    q: { en: "How many justices are on the Supreme Court?", zh: "最高法院有多少位大法官？" },
    options: [
      { en: "9", zh: "9 位" },
      { en: "12", zh: "12 位" },
      { en: "100", zh: "100 位" }
    ],
    answerIndex: 0
  },
  {
    id: 40,
    q: { en: "Who is the Chief Justice of the United States now?", zh: "现任美国首席大法官是谁？" },
    options: [
      { en: "Depends on the current Chief Justice (check official source)", zh: "随现任首席大法官而变（请查询官方信息）" },
      { en: "The President", zh: "总统" },
      { en: "The Speaker of the House", zh: "众议院议长" }
    ],
    answerIndex: 0
  },
  {
    id: 41,
    q: { en: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", zh: "根据宪法，有些权力属于联邦政府。请说出一项联邦政府的权力。" },
    options: [
      { en: "To declare war", zh: "宣战" },
      { en: "To issue driver’s licenses", zh: "发放驾照" },
      { en: "To provide schooling", zh: "提供学校教育" }
    ],
    answerIndex: 0
  },
  {
    id: 42,
    q: { en: "Under our Constitution, some powers belong to the states. What is one power of the states?", zh: "根据宪法，有些权力属于州政府。请说出一项州政府的权力。" },
    options: [
      { en: "Provide schooling and education", zh: "提供学校教育" },
      { en: "Print money", zh: "印钞" },
      { en: "Make treaties", zh: "签订条约" }
    ],
    answerIndex: 0
  },
  {
    id: 43,
    q: { en: "Who is the Governor of your state now?", zh: "你所在州现任州长是谁？" },
    options: [
      { en: "Depends on your state (check current governor)", zh: "因州而异（请查询现任州长）" },
      { en: "The President", zh: "总统" },
      { en: "The Chief Justice", zh: "首席大法官" }
    ],
    answerIndex: 0
  },
  {
    id: 44,
    q: { en: "What is the capital of your state?", zh: "你所在州的首府（州府）是哪里？" },
    options: [
      { en: "Depends on your state (check your state capital)", zh: "因州而异（请查询州首府）" },
      { en: "Washington, D.C.", zh: "华盛顿特区" },
      { en: "New York City", zh: "纽约市" }
    ],
    answerIndex: 0
  },
  {
    id: 45,
    q: { en: "What are the two major political parties in the United States?", zh: "美国两大政党是什么？" },
    options: [
      { en: "Democratic and Republican", zh: "民主党 和 共和党" },
      { en: "Green and Libertarian", zh: "绿党 和 自由意志党" },
      { en: "Labor and Conservative", zh: "工党 和 保守党" }
    ],
    answerIndex: 0
  },
  {
    id: 46,
    q: { en: "What is the political party of the President now?", zh: "现任总统属于哪个政党？" },
    options: [
      { en: "Depends on the current President (check official source)", zh: "随现任总统而变（请查询官方信息）" },
      { en: "Always Democratic", zh: "永远是民主党" },
      { en: "Always Republican", zh: "永远是共和党" }
    ],
    answerIndex: 0
  },
  {
    id: 47,
    q: { en: "What is one power of the federal government?", zh: "联邦政府的一项权力是什么？" },
    options: [
      { en: "To print money", zh: "印钞" },
      { en: "To set up schools", zh: "建立学校" },
      { en: "To issue driver’s licenses", zh: "发放驾照" }
    ],
    answerIndex: 0
  },
  {
    id: 48,
    q: { en: "Who is the Speaker of the House of Representatives now?", zh: "现任众议院议长是谁？" },
    options: [
      { en: "Depends on the current Speaker (check official source)", zh: "随现任议长而变（请查询官方信息）" },
      { en: "The Vice President", zh: "副总统" },
      { en: "The Governor", zh: "州长" }
    ],
    answerIndex: 0
  },
  {
    id: 49,
    q: { en: "How old do citizens have to be to vote for President?", zh: "公民必须多大才能投票选总统？" },
    options: [
      { en: "18 and older", zh: "18 岁及以上" },
      { en: "16 and older", zh: "16 岁及以上" },
      { en: "21 and older", zh: "21 岁及以上" }
    ],
    answerIndex: 0
  },
  {
    id: 50,
    q: { en: "What are two ways that Americans can participate in their democracy?", zh: "美国人参与民主的两种方式是什么？" },
    options: [
      { en: "Vote and join a political party", zh: "投票 和 加入政党" },
      { en: "Only pay taxes", zh: "只缴税" },
      { en: "Only watch the news", zh: "只看新闻" }
    ],
    answerIndex: 0
  },
  {
    id: 51,
    q: { en: "When is the last day you can send in federal income tax forms?", zh: "提交联邦所得税表的最后日期通常是哪天？" },
    options: [
      { en: "April 15", zh: "4 月 15 日" },
      { en: "January 1", zh: "1 月 1 日" },
      { en: "July 4", zh: "7 月 4 日" }
    ],
    answerIndex: 0
  },
  {
    id: 52,
    q: { en: "When must all men register for the Selective Service?", zh: "所有男性何时必须登记征兵登记（Selective Service）？" },
    options: [
      { en: "At age 18 (18–26)", zh: "18 岁开始（18–26 岁之间）" },
      { en: "At age 30", zh: "30 岁" },
      { en: "Only during wartime", zh: "只在战时" }
    ],
    answerIndex: 0
  },
  {
    id: 53,
    q: { en: "What is one reason colonists came to America?", zh: "殖民者来到美国的一个原因是什么？" },
    options: [
      { en: "Freedom (religion or political liberty)", zh: "追求自由（宗教或政治自由）" },
      { en: "To become kings", zh: "当国王" },
      { en: "To avoid learning English", zh: "避免学英语" }
    ],
    answerIndex: 0
  },
  {
    id: 54,
    q: { en: "Who lived in America before the Europeans arrived?", zh: "欧洲人到来之前，谁生活在美洲？" },
    options: [
      { en: "Native Americans", zh: "美洲原住民（印第安人）" },
      { en: "French kings", zh: "法国国王" },
      { en: "The British Parliament", zh: "英国议会" }
    ],
    answerIndex: 0
  },
  {
    id: 55,
    q: { en: "What group of people was taken to America and sold as slaves?", zh: "哪一群人被带到美国并被作为奴隶出售？" },
    options: [
      { en: "Africans", zh: "非洲人" },
      { en: "Canadians", zh: "加拿大人" },
      { en: "Australians", zh: "澳大利亚人" }
    ],
    answerIndex: 0
  },
  {
    id: 56,
    q: { en: "Why did the colonists fight the British?", zh: "殖民者为什么与英国作战？" },
    options: [
      { en: "Because of high taxes (taxation without representation)", zh: "因为高税收（无代表不纳税）" },
      { en: "Because Britain offered them free land", zh: "因为英国给他们免费土地" },
      { en: "Because they wanted to join Britain", zh: "因为他们想加入英国" }
    ],
    answerIndex: 0
  },
  {
    id: 57,
    q: { en: "Who wrote the Declaration of Independence?", zh: "谁撰写了《独立宣言》？" },
    options: [
      { en: "Thomas Jefferson", zh: "托马斯·杰斐逊" },
      { en: "George Washington", zh: "乔治·华盛顿" },
      { en: "Benjamin Franklin", zh: "本杰明·富兰克林" }
    ],
    answerIndex: 0
  },
  {
    id: 58,
    q: { en: "When was the Declaration of Independence adopted?", zh: "《独立宣言》何时被通过？" },
    options: [
      { en: "July 4, 1776", zh: "1776 年 7 月 4 日" },
      { en: "December 25, 1776", zh: "1776 年 12 月 25 日" },
      { en: "July 4, 1787", zh: "1787 年 7 月 4 日" }
    ],
    answerIndex: 0
  },
  {
    id: 59,
    q: { en: "There were 13 original states. Name three.", zh: "最初有 13 个州，请说出其中 3 个。" },
    options: [
      { en: "New York, Virginia, Massachusetts", zh: "纽约、弗吉尼亚、马萨诸塞" },
      { en: "California, Hawaii, Alaska", zh: "加州、夏威夷、阿拉斯加" },
      { en: "Texas, Florida, Arizona", zh: "德州、佛州、亚利桑那" }
    ],
    answerIndex: 0
  },
  {
    id: 60,
    q: { en: "What happened at the Constitutional Convention?", zh: "宪法会议（Constitutional Convention）发生了什么？" },
    options: [
      { en: "The Constitution was written", zh: "制定/撰写了宪法" },
      { en: "The Civil War ended", zh: "内战结束" },
      { en: "The president was elected", zh: "选出了总统" }
    ],
    answerIndex: 0
  },
  {
    id: 61,
    q: { en: "When was the Constitution written?", zh: "宪法是什么时候写成的？" },
    options: [
      { en: "1787", zh: "1787 年" },
      { en: "1776", zh: "1776 年" },
      { en: "1865", zh: "1865 年" }
    ],
    answerIndex: 0
  },
  {
    id: 62,
    q: { en: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", zh: "《联邦党人文集》支持通过宪法。请说出一位作者。" },
    options: [
      { en: "James Madison", zh: "詹姆斯·麦迪逊" },
      { en: "Martin Luther King, Jr.", zh: "马丁·路德·金" },
      { en: "Susan B. Anthony", zh: "苏珊·安东尼" }
    ],
    answerIndex: 0
  },
  {
    id: 63,
    q: { en: "What is one thing Benjamin Franklin is famous for?", zh: "本杰明·富兰克林因什么而著名？（举一例）" },
    options: [
      { en: "U.S. diplomat", zh: "美国外交官" },
      { en: "Invented the television", zh: "发明电视" },
      { en: "Wrote the Constitution alone", zh: "独自撰写宪法" }
    ],
    answerIndex: 0
  },
  {
    id: 64,
    q: { en: "Who is the “Father of Our Country”?", zh: "谁被称为“国父”（Father of Our Country）？" },
    options: [
      { en: "George Washington", zh: "乔治·华盛顿" },
      { en: "Thomas Jefferson", zh: "托马斯·杰斐逊" },
      { en: "Abraham Lincoln", zh: "亚伯拉罕·林肯" }
    ],
    answerIndex: 0
  }
  ,
  {
    id: 65,
    q: { en: "What is one reason the colonists fought the British?", zh: "殖民者与英国作战的一个原因是什么？" },
    options: [
      { en: "Because of high taxes (taxation without representation)", zh: "因为高税收（无代表不纳税）" },
      { en: "Because they wanted a king", zh: "因为他们想要国王" },
      { en: "Because Britain gave them too much freedom", zh: "因为英国给了太多自由" }
    ],
    answerIndex: 0
  },
  {
    id: 66,
    q: { en: "Who was the first President?", zh: "第一任美国总统是谁？" },
    options: [
      { en: "George Washington", zh: "乔治·华盛顿" },
      { en: "Thomas Jefferson", zh: "托马斯·杰斐逊" },
      { en: "Abraham Lincoln", zh: "亚伯拉罕·林肯" }
    ],
    answerIndex: 0
  },
  {
    id: 67,
    q: { en: "What territory did the United States buy from France in 1803?", zh: "美国在 1803 年从法国购买了哪块领土？" },
    options: [
      { en: "The Louisiana Territory", zh: "路易斯安那领地" },
      { en: "Alaska", zh: "阿拉斯加" },
      { en: "Hawaii", zh: "夏威夷" }
    ],
    answerIndex: 0
  },
  {
    id: 68,
    q: { en: "Name one war fought by the United States in the 1800s.", zh: "说出美国在 1800 年代打过的一场战争。" },
    options: [
      { en: "The Civil War", zh: "内战" },
      { en: "World War II", zh: "二战" },
      { en: "The Gulf War", zh: "海湾战争" }
    ],
    answerIndex: 0
  },
  {
    id: 69,
    q: { en: "Name the U.S. war between the North and the South.", zh: "美国南北之间的战争叫什么？" },
    options: [
      { en: "The Civil War", zh: "内战" },
      { en: "The Revolutionary War", zh: "独立战争" },
      { en: "World War I", zh: "一战" }
    ],
    answerIndex: 0
  },
  {
    id: 70,
    q: { en: "Name one problem that led to the Civil War.", zh: "导致内战的一个问题是什么？" },
    options: [
      { en: "Slavery", zh: "奴隶制" },
      { en: "Too many presidents", zh: "总统太多" },
      { en: "No Constitution", zh: "没有宪法" }
    ],
    answerIndex: 0
  },
  {
    id: 71,
    q: { en: "What was one important thing that Abraham Lincoln did?", zh: "林肯做过的一件重要的事是什么？" },
    options: [
      { en: "Freed the slaves (Emancipation Proclamation)", zh: "解放奴隶（解放宣言）" },
      { en: "Bought Alaska", zh: "购买阿拉斯加" },
      { en: "Wrote the Declaration of Independence", zh: "撰写独立宣言" }
    ],
    answerIndex: 0
  },
  {
    id: 72,
    q: { en: "What did the Emancipation Proclamation do?", zh: "《解放宣言》做了什么？" },
    options: [
      { en: "Freed the slaves in the Confederate states", zh: "解放邦联各州的奴隶" },
      { en: "Gave women the right to vote", zh: "赋予女性投票权" },
      { en: "Ended World War I", zh: "结束一战" }
    ],
    answerIndex: 0
  },
  {
    id: 73,
    q: { en: "What did Susan B. Anthony do?", zh: "苏珊·安东尼做了什么？" },
    options: [
      { en: "Fought for women's rights", zh: "为妇女权利而奋斗" },
      { en: "Was the first President", zh: "是第一任总统" },
      { en: "Invented electricity", zh: "发明电" }
    ],
    answerIndex: 0
  },
  {
    id: 74,
    q: { en: "Name one war fought by the United States in the 1900s.", zh: "说出美国在 1900 年代打过的一场战争。" },
    options: [
      { en: "World War II", zh: "二战" },
      { en: "The Civil War", zh: "内战" },
      { en: "The Revolutionary War", zh: "独立战争" }
    ],
    answerIndex: 0
  },
  {
    id: 75,
    q: { en: "Who was President during World War I?", zh: "一战期间的美国总统是谁？" },
    options: [
      { en: "Woodrow Wilson", zh: "伍德罗·威尔逊" },
      { en: "Franklin Roosevelt", zh: "富兰克林·罗斯福" },
      { en: "John Kennedy", zh: "约翰·肯尼迪" }
    ],
    answerIndex: 0
  },
  {
    id: 76,
    q: { en: "Who was President during the Great Depression and World War II?", zh: "经济大萧条和二战期间的美国总统是谁？" },
    options: [
      { en: "Franklin Roosevelt", zh: "富兰克林·罗斯福" },
      { en: "Theodore Roosevelt", zh: "西奥多·罗斯福" },
      { en: "George Washington", zh: "乔治·华盛顿" }
    ],
    answerIndex: 0
  },
  {
    id: 77,
    q: { en: "Who did the United States fight in World War II?", zh: "二战中美国与哪些国家作战？" },
    options: [
      { en: "Japan, Germany, and Italy", zh: "日本、德国、意大利" },
      { en: "France and Britain", zh: "法国和英国" },
      { en: "Canada and Mexico", zh: "加拿大和墨西哥" }
    ],
    answerIndex: 0
  },
  {
    id: 78,
    q: { en: "Before he was President, Eisenhower was a general. What war was he in?", zh: "艾森豪威尔当总统前是将军，他参加了哪场战争？" },
    options: [
      { en: "World War II", zh: "二战" },
      { en: "The Civil War", zh: "内战" },
      { en: "The Revolutionary War", zh: "独立战争" }
    ],
    answerIndex: 0
  },
  {
    id: 79,
    q: { en: "During the Cold War, what was the main concern of the United States?", zh: "冷战期间，美国主要担忧是什么？" },
    options: [
      { en: "Communism", zh: "共产主义" },
      { en: "Not enough states", zh: "州太少" },
      { en: "No elections", zh: "没有选举" }
    ],
    answerIndex: 0
  },
  {
    id: 80,
    q: { en: "What movement tried to end racial discrimination?", zh: "哪场运动试图结束种族歧视？" },
    options: [
      { en: "Civil rights movement", zh: "民权运动" },
      { en: "Gold rush", zh: "淘金热" },
      { en: "Industrial revolution", zh: "工业革命" }
    ],
    answerIndex: 0
  },
  {
    id: 81,
    q: { en: "What did Martin Luther King, Jr. do?", zh: "马丁·路德·金做了什么？" },
    options: [
      { en: "Fought for civil rights", zh: "争取民权" },
      { en: "Was the first Vice President", zh: "是第一任副总统" },
      { en: "Wrote the Constitution", zh: "撰写宪法" }
    ],
    answerIndex: 0
  },
  {
    id: 82,
    q: { en: "What major event happened on September 11, 2001, in the United States?", zh: "2001 年 9 月 11 日美国发生了什么重大事件？" },
    options: [
      { en: "Terrorists attacked the United States", zh: "恐怖分子袭击美国" },
      { en: "The Constitution was written", zh: "宪法写成" },
      { en: "The Civil War ended", zh: "内战结束" }
    ],
    answerIndex: 0
  },
  {
    id: 83,
    q: { en: "Name one American Indian tribe in the United States.", zh: "说出美国的一个美洲印第安部落。" },
    options: [
      { en: "Cherokee", zh: "切罗基（Cherokee）" },
      { en: "Vikings", zh: "维京人" },
      { en: "Romans", zh: "罗马人" }
    ],
    answerIndex: 0
  },
  {
    id: 84,
    q: { en: "Name one of the two longest rivers in the United States.", zh: "说出美国两条最长河流之一。" },
    options: [
      { en: "Mississippi River", zh: "密西西比河" },
      { en: "Nile River", zh: "尼罗河" },
      { en: "Amazon River", zh: "亚马逊河" }
    ],
    answerIndex: 0
  },
  {
    id: 85,
    q: { en: "What ocean is on the West Coast of the United States?", zh: "美国西海岸是哪片大洋？" },
    options: [
      { en: "Pacific Ocean", zh: "太平洋" },
      { en: "Atlantic Ocean", zh: "大西洋" },
      { en: "Indian Ocean", zh: "印度洋" }
    ],
    answerIndex: 0
  },
  {
    id: 86,
    q: { en: "What ocean is on the East Coast of the United States?", zh: "美国东海岸是哪片大洋？" },
    options: [
      { en: "Atlantic Ocean", zh: "大西洋" },
      { en: "Pacific Ocean", zh: "太平洋" },
      { en: "Arctic Ocean", zh: "北冰洋" }
    ],
    answerIndex: 0
  },
  {
    id: 87,
    q: { en: "Name one U.S. territory.", zh: "说出一个美国领地。" },
    options: [
      { en: "Puerto Rico", zh: "波多黎各" },
      { en: "Texas", zh: "德克萨斯州" },
      { en: "California", zh: "加利福尼亚州" }
    ],
    answerIndex: 0
  },
  {
    id: 88,
    q: { en: "Name one state that borders Canada.", zh: "说出一个与加拿大接壤的州。" },
    options: [
      { en: "New York", zh: "纽约州" },
      { en: "Florida", zh: "佛罗里达州" },
      { en: "Hawaii", zh: "夏威夷州" }
    ],
    answerIndex: 0
  },
  {
    id: 89,
    q: { en: "Name one state that borders Mexico.", zh: "说出一个与墨西哥接壤的州。" },
    options: [
      { en: "Texas", zh: "德克萨斯州" },
      { en: "Alaska", zh: "阿拉斯加州" },
      { en: "Maine", zh: "缅因州" }
    ],
    answerIndex: 0
  },
  {
    id: 90,
    q: { en: "What is the capital of the United States?", zh: "美国首都在哪里？" },
    options: [
      { en: "Washington, D.C.", zh: "华盛顿特区" },
      { en: "New York City", zh: "纽约市" },
      { en: "Los Angeles", zh: "洛杉矶" }
    ],
    answerIndex: 0
  },
  {
    id: 91,
    q: { en: "Where is the Statue of Liberty?", zh: "自由女神像在哪里？" },
    options: [
      { en: "New York Harbor", zh: "纽约港" },
      { en: "Washington, D.C.", zh: "华盛顿特区" },
      { en: "Chicago", zh: "芝加哥" }
    ],
    answerIndex: 0
  },
  {
    id: 92,
    q: { en: "Why does the flag have 13 stripes?", zh: "为什么国旗有 13 条条纹？" },
    options: [
      { en: "Because there were 13 original colonies", zh: "因为最初有 13 个殖民地" },
      { en: "Because there are 13 presidents", zh: "因为有 13 位总统" },
      { en: "Because there are 13 courts", zh: "因为有 13 个法院" }
    ],
    answerIndex: 0
  },
  {
    id: 93,
    q: { en: "Why does the flag have 50 stars?", zh: "为什么国旗有 50 颗星？" },
    options: [
      { en: "Because there are 50 states", zh: "因为有 50 个州" },
      { en: "Because there are 50 senators", zh: "因为有 50 位参议员" },
      { en: "Because there are 50 presidents", zh: "因为有 50 位总统" }
    ],
    answerIndex: 0
  },
  {
    id: 94,
    q: { en: "What is the name of the national anthem?", zh: "美国国歌叫什么？" },
    options: [
      { en: "The Star-Spangled Banner", zh: "星条旗之歌" },
      { en: "America the Beautiful", zh: "美丽的美利坚" },
      { en: "God Bless America", zh: "上帝保佑美国" }
    ],
    answerIndex: 0
  },
  {
    id: 95,
    q: { en: "When do we celebrate Independence Day?", zh: "我们在什么时候庆祝独立日？" },
    options: [
      { en: "July 4", zh: "7 月 4 日" },
      { en: "June 14", zh: "6 月 14 日" },
      { en: "December 25", zh: "12 月 25 日" }
    ],
    answerIndex: 0
  },
  {
    id: 96,
    q: { en: "Name two national U.S. holidays.", zh: "说出两个美国全国性节日。" },
    options: [
      { en: "Thanksgiving and Independence Day", zh: "感恩节 和 独立日" },
      { en: "Valentine's Day and Halloween", zh: "情人节 和 万圣节" },
      { en: "Mother's Day and Father's Day", zh: "母亲节 和 父亲节" }
    ],
    answerIndex: 0
  }
  ,
  {
    id: 97,
    q: { en: "What is the name of the Speaker of the House of Representatives now?", zh: "现任众议院议长是谁？" },
    options: [
      { en: "Mike Johnson", zh: "迈克·约翰逊" },
      { en: "Nancy Pelosi", zh: "南希·佩洛西" },
      { en: "Chuck Schumer", zh: "查克·舒默" }
    ],
    answerIndex: 0
  },
  {
    id: 98,
    q: { en: "Who is the Chief Justice of the United States now?", zh: "现任美国首席大法官是谁？" },
    options: [
      { en: "John Roberts", zh: "约翰·罗伯茨" },
      { en: "Clarence Thomas", zh: "克拉伦斯·托马斯" },
      { en: "Sonia Sotomayor", zh: "索尼娅·索托马约尔" }
    ],
    answerIndex: 0
  },
  {
    id: 99,
    q: { en: "Name one branch or part of the government.", zh: "说出政府的一个部门。" },
    options: [
      { en: "Congress", zh: "国会" },
      { en: "The press", zh: "媒体" },
      { en: "The police", zh: "警察" }
    ],
    answerIndex: 0
  },
  {
    id: 100,
    q: { en: "What is the capital of your state?", zh: "你所在州的首府是哪里？" },
    options: [
      { en: "Sacramento (example)", zh: "萨克拉门托（示例）" },
      { en: "Los Angeles", zh: "洛杉矶" },
      { en: "San Francisco", zh: "旧金山" }
    ],
    answerIndex: 0
  },
  {
    id: 101,
    q: { en: "What is the largest state (by area)?", zh: "面积最大的州是哪个？" },
    options: [
      { en: "Alaska", zh: "阿拉斯加州" },
      { en: "Texas", zh: "德克萨斯州" },
      { en: "California", zh: "加州" }
    ],
    answerIndex: 0
  },
  {
    id: 102,
    q: { en: "What is the smallest state?", zh: "最小的州是哪个？" },
    options: [
      { en: "Rhode Island", zh: "罗德岛州" },
      { en: "Delaware", zh: "特拉华州" },
      { en: "Hawaii", zh: "夏威夷州" }
    ],
    answerIndex: 0
  },
  {
    id: 103,
    q: { en: "What is the capital of California?", zh: "加州首府是哪里？" },
    options: [
      { en: "Sacramento", zh: "萨克拉门托" },
      { en: "Los Angeles", zh: "洛杉矶" },
      { en: "San Diego", zh: "圣地亚哥" }
    ],
    answerIndex: 0
  },
  {
    id: 104,
    q: { en: "Which state has the most people?", zh: "人口最多的州是哪个？" },
    options: [
      { en: "California", zh: "加利福尼亚州" },
      { en: "Texas", zh: "德克萨斯州" },
      { en: "Florida", zh: "佛罗里达州" }
    ],
    answerIndex: 0
  },
  {
    id: 105,
    q: { en: "What is one promise you make when you become a U.S. citizen?", zh: "成为美国公民时你要做出的一个承诺是什么？" },
    options: [
      { en: "Be loyal to the United States", zh: "忠于美国" },
      { en: "Buy a house", zh: "买房" },
      { en: "Join the military", zh: "参军" }
    ],
    answerIndex: 0
  },
  {
    id: 106,
    q: { en: "What age must citizens be to vote for President?", zh: "公民多少岁才能投总统选举？" },
    options: [
      { en: "18 and older", zh: "18 岁及以上" },
      { en: "21 and older", zh: "21 岁及以上" },
      { en: "25 and older", zh: "25 岁及以上" }
    ],
    answerIndex: 0
  },
  {
    id: 107,
    q: { en: "What are two ways that Americans can participate in their democracy?", zh: "美国人参与民主的两种方式是什么？" },
    options: [
      { en: "Vote and run for office", zh: "投票和竞选公职" },
      { en: "Watch TV and shop", zh: "看电视和购物" },
      { en: "Travel and work", zh: "旅行和工作" }
    ],
    answerIndex: 0
  },
  {
    id: 108,
    q: { en: "When is the last day you can send in federal income tax forms?", zh: "联邦报税的最后截止日是？" },
    options: [
      { en: "April 15", zh: "4 月 15 日" },
      { en: "January 1", zh: "1 月 1 日" },
      { en: "July 4", zh: "7 月 4 日" }
    ],
    answerIndex: 0
  },
  {
    id: 109,
    q: { en: "When must all men register for the Selective Service?", zh: "男性必须在什么时候登记兵役？" },
    options: [
      { en: "At age 18", zh: "18 岁" },
      { en: "At age 21", zh: "21 岁" },
      { en: "At age 25", zh: "25 岁" }
    ],
    answerIndex: 0
  },
  {
    id: 110,
    q: { en: "What is one right only for United States citizens?", zh: "只有美国公民才有的一项权利是什么？" },
    options: [
      { en: "Vote in a federal election", zh: "参加联邦选举投票" },
      { en: "Attend public school", zh: "上公立学校" },
      { en: "Work in the U.S.", zh: "在美国工作" }
    ],
    answerIndex: 0
  },
  {
    id: 111,
    q: { en: "What is one responsibility that is only for United States citizens?", zh: "只有美国公民才有的一项责任是什么？" },
    options: [
      { en: "Serve on a jury", zh: "担任陪审团" },
      { en: "Pay taxes", zh: "交税" },
      { en: "Obey the law", zh: "守法" }
    ],
    answerIndex: 0
  },
  {
    id: 112,
    q: { en: "What is the capital of the United States?", zh: "美国首都是哪里？" },
    options: [
      { en: "Washington, D.C.", zh: "华盛顿特区" },
      { en: "New York", zh: "纽约" },
      { en: "Philadelphia", zh: "费城" }
    ],
    answerIndex: 0
  },
  {
    id: 113,
    q: { en: "Name one U.S. territory.", zh: "说出一个美国领地。" },
    options: [
      { en: "Puerto Rico", zh: "波多黎各" },
      { en: "New Jersey", zh: "新泽西州" },
      { en: "Ohio", zh: "俄亥俄州" }
    ],
    answerIndex: 0
  },
  {
    id: 114,
    q: { en: "Name one national holiday.", zh: "说出一个美国全国性节日。" },
    options: [
      { en: "Independence Day", zh: "独立日" },
      { en: "Valentine's Day", zh: "情人节" },
      { en: "Halloween", zh: "万圣节" }
    ],
    answerIndex: 0
  },
  {
    id: 115,
    q: { en: "What is the name of the U.S. national anthem?", zh: "美国国歌叫什么？" },
    options: [
      { en: "The Star-Spangled Banner", zh: "星条旗之歌" },
      { en: "America the Beautiful", zh: "美丽的美利坚" },
      { en: "God Bless America", zh: "上帝保佑美国" }
    ],
    answerIndex: 0
  },
  {
    id: 116,
    q: { en: "Why does the flag have 50 stars?", zh: "国旗为什么有 50 颗星？" },
    options: [
      { en: "Because there are 50 states", zh: "因为有 50 个州" },
      { en: "Because there are 50 senators", zh: "因为有 50 名参议员" },
      { en: "Because there were 50 colonies", zh: "因为有 50 个殖民地" }
    ],
    answerIndex: 0
  },
  {
    id: 117,
    q: { en: "Why does the flag have 13 stripes?", zh: "国旗为什么有 13 条条纹？" },
    options: [
      { en: "Because there were 13 original colonies", zh: "因为最初有 13 个殖民地" },
      { en: "Because there were 13 presidents", zh: "因为有 13 位总统" },
      { en: "Because there were 13 courts", zh: "因为有 13 个法院" }
    ],
    answerIndex: 0
  },
  {
    id: 118,
    q: { en: "When do we celebrate Independence Day?", zh: "独立日是哪一天？" },
    options: [
      { en: "July 4", zh: "7 月 4 日" },
      { en: "June 14", zh: "6 月 14 日" },
      { en: "December 25", zh: "12 月 25 日" }
    ],
    answerIndex: 0
  },
  {
    id: 119,
    q: { en: "Name one right guaranteed by the First Amendment.", zh: "第一修正案保障的一项权利是什么？" },
    options: [
      { en: "Freedom of speech", zh: "言论自由" },
      { en: "Right to drive", zh: "驾驶权" },
      { en: "Right to a job", zh: "工作权" }
    ],
    answerIndex: 0
  },
  {
    id: 120,
    q: { en: "Who is the Father of Our Country?", zh: "谁被称为“国父”？" },
    options: [
      { en: "George Washington", zh: "乔治·华盛顿" },
      { en: "Thomas Jefferson", zh: "托马斯·杰斐逊" },
      { en: "Abraham Lincoln", zh: "亚伯拉罕·林肯" }
    ],
    answerIndex: 0
  },
  {
    id: 121,
    q: { en: "Who wrote the Declaration of Independence?", zh: "谁写了《独立宣言》？" },
    options: [
      { en: "Thomas Jefferson", zh: "托马斯·杰斐逊" },
      { en: "George Washington", zh: "乔治·华盛顿" },
      { en: "James Madison", zh: "詹姆斯·麦迪逊" }
    ],
    answerIndex: 0
  },
  {
    id: 122,
    q: { en: "What is one reason colonists came to America?", zh: "殖民者来美国的一个原因是什么？" },
    options: [
      { en: "Freedom", zh: "自由" },
      { en: "Free cars", zh: "免费汽车" },
      { en: "Free houses", zh: "免费房子" }
    ],
    answerIndex: 0
  },
  {
    id: 123,
    q: { en: "Who lived in America before the Europeans arrived?", zh: "欧洲人到来之前，谁住在美洲？" },
    options: [
      { en: "American Indians", zh: "美洲原住民" },
      { en: "Europeans", zh: "欧洲人" },
      { en: "Africans", zh: "非洲人" }
    ],
    answerIndex: 0
  },
  {
    id: 124,
    q: { en: "What is one group that was taken to America and sold as slaves?", zh: "哪一群人被带到美洲并被卖为奴隶？" },
    options: [
      { en: "Africans", zh: "非洲人" },
      { en: "Europeans", zh: "欧洲人" },
      { en: "Asians", zh: "亚洲人" }
    ],
    answerIndex: 0
  },
  {
    id: 125,
    q: { en: "Why did the colonists declare independence from Britain?", zh: "殖民者为什么宣布脱离英国独立？" },
    options: [
      { en: "Because of unfair taxes and lack of self-government", zh: "因为不公平的税收和缺乏自治" },
      { en: "Because Britain helped them too much", zh: "因为英国帮助太多" },
      { en: "Because Britain was too far away", zh: "因为英国太远" }
    ],
    answerIndex: 0
  },
  {
    id: 126,
    q: { en: "Who did the United States fight in the Revolutionary War?", zh: "独立战争中美国与谁作战？" },
    options: [
      { en: "Britain", zh: "英国" },
      { en: "France", zh: "法国" },
      { en: "Spain", zh: "西班牙" }
    ],
    answerIndex: 0
  },
  {
    id: 127,
    q: { en: "When was the Constitution written?", zh: "宪法是什么时候写成的？" },
    options: [
      { en: "1787", zh: "1787 年" },
      { en: "1776", zh: "1776 年" },
      { en: "1800", zh: "1800 年" }
    ],
    answerIndex: 0
  },
  {
    id: 128,
    q: { en: "What is one thing Benjamin Franklin is famous for?", zh: "本杰明·富兰克林因什么而出名？" },
    options: [
      { en: "He was a U.S. diplomat and inventor", zh: "美国外交官和发明家" },
      { en: "He was a king", zh: "国王" },
      { en: "He was a general", zh: "将军" }
    ],
    answerIndex: 0
  }

  // ✅ 这里继续往下加，直到 128 题，格式不变
];
