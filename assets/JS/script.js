// ACCEPTANCE CRITERIA

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

var timerEL = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var questionOne = []
var questionTwo = []
var questionThree = []

// main quiz timer

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            timerEL.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEL.textContent = timeLeft = " second remaining";
            timeLeft--;
        } else {
            timerEL.textContent = '';
            clearInterval(timeInterval);
            displayQuestion();
        }
    }, 1000);
}

// WHEN I answer a question

function displayQuestion() {

}
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score