const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
        correctAnswer: "Carbon dioxide"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "India", "Japan", "South Korea"],
        correctAnswer: "Japan"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue whale", "Hippopotamus"],
        correctAnswer: "Blue whale"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn", "btn-light", "option");
        if (selectedAnswer === option) {
            button.classList.add("selected");
        }
        button.addEventListener("click", () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });

    nextButton.disabled = selectedAnswer === null;
}

function selectAnswer(option) {
    selectedAnswer = option;
    showQuestion();
}

function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    selectedAnswer = null; // Reset selected answer
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionNumber.style.display = "none";
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.style.display = "block";
    scoreText.textContent = `Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        checkAnswer();
    }
});

document.getElementById("restart-button").addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    showQuestion();
    questionNumber.style.display = "block";
    questionText.style.display = "block";
    optionsContainer.style.display = "block";
    nextButton.style.display = "block";
    resultContainer.style.display = "none";
});

// Initial setup
showQuestion();
