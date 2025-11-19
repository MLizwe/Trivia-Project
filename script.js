"use strict";

//will start with a basic pool of questions 
const questions = [
    {
        text: "What year did the first iPhone release?",
        answers: ["2005", "2007", "2009", "2011"],
        correct: 2
    },
    {
        text: "What was the first ever video uploaded to YouTube?",
        answers: ["Charlie Bit My Finger", "Me at the Zoo", "Evoluiton of Dance", "Keyboard Cat"],
        correct: 2
    },
    {
        text: "Who founded Microsoft?",
        answers: ["Elon Mask", "Mark Zuckerburg", "Bill Gates", "Steve Jobs"],
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
        text: "What is the most-used social app worldwide? ",
        answers: ["Tiktok", "Facebook", "Instagram", "Youtube"],
        correct: 1
    },
    {
        text: "What color was the original Twitter bird?",
        answers: ["Black", "Gold", "White","Blue"],
        correct: 4
    },
    {
        text: "Which company owns Instagram?",
        answers: ["Meta", "Facebook", "Twitter", "Tesla"],
        correct: 1
    }
    
];

//state of the game 
let currentIndex = 0;
let score = 0;

//possible functions ***to be expanded***
function startGame() {
    currentIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const q = questions[currentIndex];

    const container = document.getElementById("game-screen");
    container.innerHTML = `
        <h2>${q.text}</h2>
        <div id="answers"></div>
    `;

    const answersDiv = document.getElementById("answers");

    q.answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.onclick = () => checkAnswer(i + 1);
        answersDiv.appendChild(btn);
    });
};

function showQuestions() {};
function checkAnswer(selected) {
    const q = questions[currentIndex];
    if (selected === q.correct) {
        score++;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
};

function endGame() {
    document.getElementById("game-screen").innerHTML = `
        <h2>Game Over!</h2>
        <p>You scored ${score} out of ${questions.length}.</p>
    `;
};


startGame();

//firgure out how to add questions from html form...
const form = document.getElementById("question-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //grab values 
    const qText = document.getElementById("qText").value;
    const a1 = document.getElementById("a1").value;
    const a2 = document.getElementById("a2").value;
    const a3 = document.getElementById("a3").value;
    const a4= document.getElementById("a4").value;
    const correct = parseInt(document.getElementById("correct").value);

    const newQuestion = {
        text: qText,
        answers: [a1, a2, a3, a4],
        correct: correct
    };

    //Add to questions array
    questions.push(newQuestion);

    form.reset();

    alert(`Question added! Total questions: ${questions.length}`)
});