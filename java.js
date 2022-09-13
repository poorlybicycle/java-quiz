const question = document.querySelector('#question');

const choices = Array.from(document.querySelectorAll('.choice-text'));

const progressText = document.querySelector('#progressText');

const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Commonly used data types do NOT include:',
        choice1: 'strings',
        choice2: 'booleans',
        choice3: 'alerts',
        choice4: 'numbers',
        answer: 2,
    },

    {
        question: 'The condition in an if/else statement is enclosed with _________',
        choice1: 'quotes',
        choice2: 'curly brackets',
        choice3: 'parenthesis',
        choice4: 'square brackets',
        answer: 3,
    }
]

const SCORE_POINTS = 60

startGame = () => {
    score = 60,
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length ===0)
    localStorage.setItem('mostRecentScore', score)
}
