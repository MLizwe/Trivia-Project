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
    }
];

//state of the game 
let currentIndex = 0;
let score = 0;

//possible functions ***to be expanded***
function startGame() {};
function showQuestions() {};
function checkAnswer() {};
function endGame () {};

console.log("JS loaded. Questions ready:", questions.length);