"use strict";

import { getAllQuestions, addQuestion } from "./questions.js";

// game state
let questionsList = []; 
let currentIndex = 0;
let score = 0;
let wrong = 0;


function pickRandomQuestions(list, count) {
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function startGame() {
    const fullList = getAllQuestions(); // base + added
    questionsList = pickRandomQuestions(fullList, 10); // pick 10 random
    currentIndex = 0;
    score = 0;
    wrong = 0;
    updateScoreBoard();
    showQuestion();
}

function updateScoreBoard() {
    document.getElementById("correct").textContent = score;
    document.getElementById("wrong").textContent = wrong;
}

function showQuestion() {
    const q = questionsList[currentIndex];
    const container = document.getElementById("game-screen");

    if (!q) {
        endGame();
        return;
    }

    // Build answer buttons
    let answersHTML = "";
    q.answers.forEach((ans, i) => {
        answersHTML += `
            <button class="answer-btn" data-index="${i + 1}">
                ${ans}
            </button>
        `;
    });

    container.innerHTML = `
      <div class="question-card">
        <div class="question-header">
          <img src="assets/questions.png" class="q-icon">
          <h2>${q.text}</h2>
        </div>

        <div class="answers">
          ${answersHTML}
        </div>
      </div>
    `;

    // add click events
    const answerButtons = container.querySelectorAll(".answer-btn");
    answerButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const selected = parseInt(btn.dataset.index);
            checkAnswer(selected);
        });
    });
}

function checkAnswer(selected) {
    if (currentIndex >= questionsList.length) {
        endGame();
        return;
    }

    const q = questionsList[currentIndex];

    if (selected === q.correct) {
        score++;
    } else {
        wrong++;
    }

    updateScoreBoard();

    currentIndex++;

    if (currentIndex < questionsList.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
const container = document.getElementById("game-screen");
const percentage = Math.round((score / questionsList.length) * 100);
    
container.innerHTML = `
        <div class="question-card">
            <h2>🎮 Game Over!</h2>
            <p style="font-size: 1.5rem; margin: 20px 0;">
                <span style="color: #4eff8c;">Correct: ${score}</span> | 
                <span style="color: #ff6b6b;">Wrong: ${wrong}</span>
            </p>
            <p style="font-size: 1.2rem; margin: 15px 0;">
                Final Score: ${score}/${questionsList.length} (${percentage}%)
            </p>
            <button id="play-again-btn">
                🔄 Play Again
            </button>
        </div>
    `;
    
    // Add click event to the new button
    document.getElementById("play-again-btn").addEventListener("click", startGame);
}
// Start game on load
startGame();

//
// FORM: Add new multiple-choice question
//
const form = document.getElementById("question-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const qText = document.getElementById("qText").value;
    const a1 = document.getElementById("a1").value;
    const a2 = document.getElementById("a2").value;
    const a3 = document.getElementById("a3").value;
    const a4 = document.getElementById("a4").value;
    const correct = parseInt(document.getElementById("correctAns").value);

    // SAVE to sessionStorage through module
    addQuestion(qText, [a1, a2, a3, a4], correct);

    // refresh the list
    questionsList = getAllQuestions();

    // feedback
    form.reset();
    const msg = document.createElement("p");
    msg.textContent = "Question added!";
    form.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
});
