// ACCEPTANCE CRITERIA

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

var startScreen = document.getElementById("div1")
var start = document.getElementById("startBtn")
var timerEL = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var timeLeft = 60;
var clock;
var questionSection = document.getElementById('div2');
var quizResults = document.getElementById("div3");
var indexTracker = 0

// questions are formed as an array of objects

var questions = [
    {
        title: "What is the purpose of local storage?",
        choices: ["Cookies", "Easy Homework", "Delete Data", "Persist Data"],
        answer: "Persist Data"
    },

    {
        title: "What is an API?",
        choices: ["Annual Process Income", "Average Push Information", "Almost Programmed Incorrectly", "Application Program Interface"],
        answer: "Application Program Interface"
    },

    {
        title: "What does the && logical operator require to return true?",
        choices: ["Both conditions to be truthy", "Both conditions to be false", "Only one condition to be truthy", "What's a logical operator?"],
        answer: "Both conditions to be truthy"
    },

    {
        title: "What are examples of wireframing?",
        choices: ["Excalidraw", "Drawio", "Balsalmiq", "All of the above"],
        answer: "All of the above"
    },
];


function displayQuestion() {
    var title = document.getElementById("title")
    var choice0 = document.getElementById("choice0")
    var choice1 = document.getElementById("choice1")
    var choice2 = document.getElementById("choice2")
    var choice3 = document.getElementById("choice3")
    var q = questions[indexTracker]


};


// main quiz timer

function countdown() {


    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            timerEL.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEL.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEL.textContent = '';
            clearInterval(timeInterval);
            displayQuestion();
        }
    }, 1000);
}

// WHEN I answer a question
// THEN I am presented with another question

function startGame(event) {
    startScreen.classList.add("hide")
    questionSection.classList.remove("hide")
    displayQuestion();
    // start timer 


}

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

function gameOver() {

}

start.addEventListener("click", startGame);