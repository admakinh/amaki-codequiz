// code quiz



var startButton = document.querySelector(".start-button")
var timerElement = document.querySelector(".timer-count")

var timer;
var timerCount;

var questionDisp = document.querySelector(".question")
var buttonA = document.querySelector("#btnA");
var buttonB = document.querySelector("#btnB");
var buttonC = document.querySelector("#btnC");
var buttonD = document.querySelector("#btnD");


var numCorrect = document.querySelector("#numCorrect");
var numWrong = document.querySelector("#numWrong")



// list of questions
const questionList = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<scripting>",
            b: "<js>",
            c: "<javascript>",
            d: "<script>"
        },
        correctAnswer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "<head> or <body>",
            b: "<head>",
            c: "<body>",
            d: "<foot>"
        },
        correctAnswer: "<body>"
    },
    {
        question: "What is the % arithmetic operator used for",
        answers: {
            a: "Percent",
            b: "Increment",
            c: "Exponentiation",
            d: "Modulus"
        },
        correctAnswer: "Modulus"
    },
    {
        question: "JavaScript strings are for...",
        answers: {
            a: "storing and manipulating text.",
            b: "stitching data.",
            c: "brown paper pkgs.",
            d: "wrapping things up"
        },
        correctAnswer: "storing and manipulating text."
    },
    {
        question: "Which is not a reserved word?",
        answers: {
            a: "finally",
            b: "this",
            c: "break",
            d: "buck"
        },
        correctAnswer: "buck"
    },
    {
        question: "Which is not a primitive data type?",
        answers: {
            a: "boolean",
            b: "null",
            c: "void",
            d: "undefined"
        },
        correctAnswer: "void"
    },
];

const lastQuestion = questionList.length - 1;

var runningQuestion = 0;

function renderQuestion() {
    let q = questionList[runningQuestion];

    questionDisp.textContent = q.question;
    buttonA.textContent = q.answers.a;
    buttonB.textContent = q.answers.b;
    buttonC.textContent = q.answers.c;
    buttonD.textContent = q.answers.d;

}

// log user selection
// var peachMango = ("");

var userSelection = document.getElementsByClassName("userSelection");
for (var i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function (event) {
        console.log(event.target.textContent);
        var canadaDry = event.target.textContent;

        let q = questionList[runningQuestion];

        var userChoice = (canadaDry);
        var checkAgainst = q.correctAnswer;
        console.log(checkAgainst);
        console.log(userChoice);

        if (userChoice === checkAgainst) {
            rightChoice()
        }
        else {
            wrongChoice()
        }


    });
}

var numYes = 0;
var numNo = 0;


function rightChoice() {
    numYes++;
    numCorrect.innerHTML = numYes;
    numWrong.innerHTML = numNo;
    runningQuestion++;
    if (runningQuestion < lastQuestion) {
        renderQuestion()
    } else {
        // end game
    }
}

function wrongChoice() {
    numNo++;
    numCorrect.innerHTML = numYes;
    numWrong.innerHTML = numNo;
    timerCount = timerCount - 5;
    runningQuestion++;
    if (runningQuestion < lastQuestion) {
        renderQuestion()
    } else {
        endGame()
    }
}

function resetScore() {
    numYes = 0;
    numNo = 0;
    numCorrect.innerHTML = numYes;
    numWrong.innerHTML = numNo;
}



// End Game
function endGame() {
    setHighScore()
}

// saves over last score needs to append
function setHighScore() {
    var finalScore = numYes;
    var init = prompt("you got a high score! enter your initials:");

    var highScoresList = { "init": init, "score": finalScore };

    localStorage.setItem('highScoresList', JSON.stringify(highScoresList));

    dispHighScore()
}

// Doesn't Work
function dispHighScore() {
    var retrievedScores = JSON.parse(localStorage.getItem('highScoresList'));



    const listItem = document.createElement("li");
    const text = document.createTextNode(retrievedScores.init + " " + retrievedScores.score);
    listItem.appendChild(text);

    const list = document.querySelector(".highscores");
    list.appendChild(listItem);

}



// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            // if (isWin && timerCount > 0) {
            //     // Clears interval and stops timer
            //     clearInterval(timer);
            //     winGame();
            // }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            // loseGame();
        }
    }, 1000);
}

// start game function
function startGame() {
    console.log("startgame")
    console.log(questionList)
    // sets timer count
    timerCount = 60;
    // prevents start being clicked during game
    startButton.disabled = true
    // start timer
    startTimer()
    renderQuestion()

}

//   Starts button click listener
startButton.addEventListener("click", startGame);

var user



