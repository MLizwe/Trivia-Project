// Default starter pool of questions 
export const baseQuestions = [
  {
    text: "What year did the first iPhone release?",
    answers: ["2005", "2007", "2009", "2011"],
    correct: 2
  },
  {
    text: "What was the first video uploaded to YouTube?",
    answers: ["Evolution of Dance", "Me at the Zoo", "Charlie Bit My Finger", "First Blog Ever"],
    correct: 2
  },
  {
    text: "Who founded Microsoft?",
    answers: ["Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Larry Page"],
    correct: 2
  },
  {
    text: "Which game did the word 'sus' become popular from?",
    answers: ["Minecraft", "PUBG", "Among Us", "Roblox"],
    correct: 3
  },
  {
    text: "What year did Google launch?",
    answers: ["2001", "1998", "1991", "1989"],
    correct: 2
  },
  {
    text: "What company owns Instagram?",
    answers: ["Meta", "Twitter", "Google", "Snap Inc"],
    correct: 1
  },
  {
    text: "What color was the original Twitter bird?",
    answers: ["Black", "Blue", "Green", "White"],
    correct: 2
  },
  {
    text: "What does 'CPU' stand for?",
    answers: ["Central Process Unit", "Central Processing Unit", "Core Power Unit", "Compute Power Utility"],
    correct: 2
  },
  {
    text: "Which console introduced motion-based gaming?",
    answers: ["Xbox", "PlayStation 2", "Nintendo Wii", "Sega Dreamcast"],
    correct: 3
  },
  {
    text: "What is the most downloaded app of all time?",
    answers: ["Instagram", "TikTok", "Facebook", "WhatsApp"],
    correct: 3
  },
  {
    text: "Which company created the Android OS?",
    answers: ["Google", "Samsung", "HTC", "Motorola"],
    correct: 1
  },
  {
    text: "What does 'HTML' stand for?",
    answers: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "HyperText Markup Language",
      "Hyper Transfer Markup Logic"
    ],
    correct: 3
  },
  {
    text: "Who is the founder of Tesla?",
    answers: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Larry Ellison"],
    correct: 2
  },
  {
    text: "What is the main programming language used for web styling?",
    answers: ["HTML", "JavaScript", "CSS", "Python"],
    correct: 3
  },
  {
    text: "Which video game is the best-selling of all time?",
    answers: ["GTA V", "Tetris", "Minecraft", "Wii Sports"],
    correct: 3
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
