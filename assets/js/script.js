// Quiz variables
var questionCounter = 0;
// Time for quiz
var timeLeft = 75;
var timerInterval;
var score = 0;

// Variables for the DOM Elements
var codeQuizEl = document.querySelector(".code-quiz");
var startButton = document.querySelector("button");
var questionsEl = document.getElementById("questions");
var feedbackEl = document.querySelector(".feedback");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit-button");

// When you click start quiz, hide the intro container
function startQuiz() {
  codeQuizEl.style.display = "none";
  questionsEl.style.display = "block";
  startTimer();
  displayQuestion(questionCounter);
}

// Add click listener to start button
startButton.addEventListener("click", startQuiz);

// Start timer
function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    document.querySelector(".timer").textContent = "Timer: " + timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Display questions
function displayQuestion(counter) {
  var actualQuestionsEl = document.querySelector("#actual-question");
  var answerEl = document.querySelector("#answer");
  var questionObjEl = QandA[counter];

  actualQuestionsEl.textContent = questionObjEl.question;
  answerEl.innerHTML = "";

  for (var i = 0; i < questionObjEl.Answer.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = questionObjEl.Answer[i];
    answerButton.value = questionObjEl.Answer[i];
    answerEl.appendChild(answerButton);
    answerButton.addEventListener("click", function (event) {
      checkAnswer(event.target.value);
    });
  }
}

// Check if the answer is correct
function checkAnswer(userValue) {
  var questionObj = QandA[questionCounter];
  var isAnswerCorrect = false;

  for (var i = 0; i < questionObj.CorrectAnswer.length; i++) {
    if (userValue === questionObj.CorrectAnswer[i]) {
      isAnswerCorrect = true;
    }
  }

  if (isAnswerCorrect) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = "Incorrect!";
    timeLeft -= 15;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }

  // Correct/Incorrect Alert
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1200);

  questionCounter++;
  if (questionCounter < QandA.length) {
    displayQuestion(questionCounter);
  } else {
    endQuiz();
  }
}

// End Quiz
function endQuiz() {
  clearInterval(timerInterval);
  questionsEl.style.display = "none";
  feedbackEl.textContent = "Quiz Over!";
  document.querySelector(".timer").textContent = "Time: 0";
  document.getElementById("final-score").textContent =
    "Your final score is: " + score;
  document.getElementById("all-done").style.display = "block";
}

// Submit initials and score
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = initialsInput.value.slice(0, 3);
  var savedScore = { initials: initials, score: score };

  // Console.log
  console.log("Initials:", initials);
  console.log("Score:", score);
});
// questions
var QandA = [
  {
    question: "Commonly used data types DO NOT include:",
    // possible answers

    Answer: ["Strings", "Boolean", "Alerts", "Numbers"],
    //Correct  answers

    CorrectAnswer: "Alerts,",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    Answer: ["quotes", "curly brackets", "parentheses", "square brackets"],
    CorrectAnswer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    Answer: [
      "numbers & strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    CorrectAnswer: "all of the above,",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    Answer: ["commas", "curly brackets", "quotes", "parentheses"],
    CorrectAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    Answer: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    CorrectAnswer: "console.log",
  },
];

score = QandA.length;
