// Default starter pool of questions 
export const baseQuestions = [
  {
    text: "What year did the first iPhone release?",
    answers: ["2005", "2007", "2009", "2011"],
    correct: 2
  },
  {
    text: "What was the first ever video uploaded to YouTube?",
    answers: ["Charlie Bit My Finger", "Me at the Zoo", "Evolution of Dance", "Keyboard Cat"],
    correct: 2
  },
  {
    text: "Who founded Microsoft?",
    answers: ["Elon Musk", "Mark Zuckerberg", "Bill Gates", "Steve Jobs"],
    correct: 3
  },
  {
    text: "What game did the “sus” meme come from?",
    answers: ["Among Us", "PUBG", "Minecraft", "Hyperblok"],
    correct: 1
  },
  {
    text: "What year did Google launch?",
    answers: ["2001", "1998", "1977", "1991"],
    correct: 2
  },
  {
    text: "What is the most-used social app worldwide?",
    answers: ["Tiktok", "Facebook", "Instagram", "Youtube"],
    correct: 1
  },
  {
    text: "What color was the original Twitter bird?",
    answers: ["Black", "Gold", "White", "Blue"],
    correct: 4
  },
  {
    text: "Which company owns Instagram?",
    answers: ["Meta", "Facebook", "Twitter", "Tesla"],
    correct: 1
  }
];

// Get all questions
export function getAllQuestions() {
  const stored = sessionStorage.getItem("addedQuestions");
  const added = stored ? JSON.parse(stored) : [];
  return [...baseQuestions, ...added];
}

// Add a new MCQ question
export function addQuestion(text, answers, correct) {
  const stored = sessionStorage.getItem("addedQuestions");
  const added = stored ? JSON.parse(stored) : [];

  added.push({ text, answers, correct });
  sessionStorage.setItem("addedQuestions", JSON.stringify(added));
}

// Pick a random question
export function getRandomQuestion() {
  const all = getAllQuestions();
  const index = Math.floor(Math.random() * all.length);
  return all[index];
}
