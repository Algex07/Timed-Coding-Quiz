//Creating a button in html, and adding a click event listener in JS.
// HTML: <button =id/class>
//- High score appears on the top left using getItem from local storage. Timer appears to the top right.
//- Flexbox, with space-between.
// JS: let startBTN = document.querySelector("") (declared at the top of the JS document)
//- let startQuiz = document.querySelector("") (declared at the top of JS doc)
//- let startClick = document.querySelector("") <- (declared at top)>, syntax: function playQuiz () {}
// - call questions function.
//- call the WINS/LOSS function, syntax: getItem. (if you wanted it to show up on start)



//THEN a timer starts and I am presented with a question

// When the start button is clicked, a timer function starts and a question with options is presented.
//- JS Syntax: call TimerName() <--- calling timer function by name.
//- HTML: create a container for the questions, results, and highscore.
//- JS create an array of objects, to store questions for questions function.
// - JS syntax suggestion below:
//[{}.{},{},{}]
//   [{
//      question:somevalue,
//      answers:["answer1",2,3,4],
//      rigthtanswer:"answer1"
//  },
//  {
//      question:somevalue,
//       answers:["answer1",2,3,4],
//      rigthtanswer:"answer1"
//  },
//   },
//  {
//      question:somevalue,
//      answers:["answer1",2,3,4],
//      rigthtanswer:"answer1"
//  },
//  }]
//  - Display the questions in the container created for questions, results and highscore.
//    - Link HTML in JS Syntax: let QUESTIONSCONTAINER =  document.queryselector("NAME OF THE CONTAINER IN HTML") <--- goes top.
//    - HTML: Container is gonna have 3 DIVS, DIV Question1, OL Answer Options WITH OL (append OL using JS), DIVCHILD3 correct or incorrect. document.this.DIV2.push(QUESTION). DIV3 is going to have a border top!
//    - JS syntax: QUESTIONCONTAINER.CHILDX.textContent = (done for the question and answers)
//  - JS: if question is wrong (ans != correct answer), then we will decrement the timerFunction value by a set numnber.
// - JS: Click event listener for user's selection
//  - JS: Based on their selection, we will QUESTIONCONTAINER.CHILDX.textContent = (correct or incorrect using if statement).
// - JS: If the answer is incorrect, we will deduct time from the value held in the timer function.
// - if timer = 0 || all questions answered, we need to escape playQuiz function. and move to scoreboard.

//WHEN I answer a question
//THEN I am presented with another question
//// - Contained in last line of above criteria.
///- JS: run the function above in a loop until the timer is either = 0, or the questions.length = 0.
// Once condition is met, then move on to next question.

//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

// X seconds is subtracted from the timer function when answer != the correct answer.

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

// When the timer runs out, or there are no more questions, then the game is over.

//WHEN the game is over
//THEN I can save my initials and my score


// When the game is over, we will get input from the user for ther initials, and them save it to local storage.
//HTML: create a form with a button to its right.
//JS: Event Listener for submiting your initials, and save it to local storage (localStorage.setItem)

let counter= 0;
let correct = 0;
let wrong = 0;
let score = 0;
let questions = document.querySelector(".question")
let highScores = document.querySelector(".viewhighscore");
let timerElement = document.querySelector(".timer");
let startButton = document.querySelector(".start");

let allQuestions = [{

  question: "What is java-script?",
  answers: ["A computer coding language.", "A markup language.", "A cup of coffee."],
  correct: "A computer coding language"

}, {
  question: "What is HTML??",
  answers: ["Hyper-Text Markup Language ", "Hyper-Tech Moving load", "Hyper-Top-Main Language"],
  correct: "Hyper-Text Markup Language"
}, {
  question: "What is ?",
  answers: ["A pie", "Yellow", "Red"],
  correct: "Yellow"
}];

//main.setAttribute("style","display:block;")
let currentQuestion = allQuestions[counter]
let title=document.querySelector(".question")
let answer1=document.querySelector(".question1")
let answer2=document.querySelector(".question2")
let answer3=document.querySelector(".question3")
console.log(allQuestions.length);
console.log(answer1)
title.textContent=currentQuestion.question;
answer1.textContent=currentQuestion.answers[0];
answer2.textContent=currentQuestion.answers[1];
answer3.textContent=currentQuestion.answers[2];

function init() {
  getCorrect();
  getWrong();
}
function startQuiz() {
  startButton.disabled =true;
}

function diplayQuestion() {
  for (let i=0; i < allQuestions.length;i++)

console.log(allQuestions[i]);

}




