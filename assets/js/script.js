// When you click start quiz, hide the intro container
function startQuiz(){
    console.log('function started')
    var questionCounter = 0;
    var codeQuizEl = document.querySelector('.code-quiz')
    codeQuizEl.style.display = 'none';

    var questionsEl = document.querySelector('#questions')
    questionsEl.style.display = 'block';

    displayquestion(questionCounter)
}
// Add click listener to hide the intro container
    var codeQuizEl = document.querySelector('.code-quiz');
    codeQuizEl.addEventListener('click', startQuiz);
// Un-hide questions
var questionsEl = document.getElementById('questions');

// Display questions
function displayquestion(counter) {
    var actualQuestionsEl = document.querySelector('#actual-question')
    var answerEL = document.querySelector('#answer')

    var questionObjEl = QandA[counter]

    actualQuestionsEl.text = questionObjEl.question

    for (let i = 0; i < questionObjEl.answer; i++) {
        
    } 
    console.log(QandA[counter])
}

// check if answer is right or wrong
//If wrong, you decrease amount of time


// questions
var QandA = [
    {
    question:'Commonly used data types DO NOT include:',
    // possible answers

    Anwer: ['Strings', 'Boolean', 'Alerts', 'Numbers'],
    //Correct  answers

    CorrectAnswer: 'Alerts,'
},
{
    question: 'The condition in an if / else statement is enclosed within ____.',
    Anwer: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    CorrectAnswer: 'parentheses',
},
{
    question: 'Arrays in JavaScript can be used to store ____.',
    Anwer: ['numbers & strings', 'other arrays', 'booleans', 'all of the above'],
    CorrectAnswer: 'all of the above,'
},
{
    question: 'String values must be enclosed within ____ when being assigned to variables.',
    Anwer: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    CorrectAnswer: 'quotes',
},
{
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    Answer: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    CorrectAnswer: 'console.log',
}
];

//event delegation 19 or 9