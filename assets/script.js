let counter = 0;
let correct = 0;
let wrong = 0;
let score = 0;
let questions = document.querySelector(".question")
let highScores = document.querySelector(".viewhighscore");
let timerElement = document.querySelector(".timer-count");
let startButton = document.querySelector(".start");
let centerHTwo = document.querySelector(".centerh2");
let submitBtn = document.getElementById("submit")
let endScreenDiv = document.getElementById("end-screen");
let initialsInput = document.getElementById("initials");
let timer;
let timerCount;
let allQuestions = [{

  question: "What is javaScript?",
  answers: ["A computer coding language.", "A markup language.", "A cup of coffee."],
  correct: "A computer coding language."

}, {
  question: "What is HTML??",
  answers: ["Hyper-Text Markup Language", "Hyper-Tech Moving load", "Hyper-Top-Main Language"],
  correct: "Hyper-Text Markup Language"
}, {
  question: "What is vanilla javaScript ?",
  answers: ["original js", "vanilla coffee", "text editor"],
  correct: "original js"
}];



function startQuiz() {
  timerCount = 40;
  startButton.setAttribute("class", "hide")
  centerHTwo.setAttribute('class', "hide")
  timer = setInterval(startTimer, 1000)

  let main = document.querySelector(".main")
  main.setAttribute("style", "display:block;")
  displayQuestion()

}
let userAnswer;
function checkQuestion(event) {

  userAnswer = event.target.textContent
  console.log("userAnswer", userAnswer)
  console.log("CORRECT ANSWER", allQuestions[counter].correct)
  if (userAnswer === allQuestions[counter].correct) {
    correct++
  } else {
    wrong++
    timerCount -= 15;


  }
  counter++
  
  if (counter === allQuestions.length || counter === 0 ) {
    endQuiz();
    let main = document.querySelector("main")
    main.innerHTML = `correct:${correct} wrong:${wrong}`
    console.log(correct)

    
  } 
  
  
  else {
    displayQuestion()

  }
}


function displayQuestion() {
  let currentQuestion = allQuestions[counter]
  let title = document.querySelector(".question")
  let answer1 = document.querySelector(".question1")
  let answer2 = document.querySelector(".question2")
  let answer3 = document.querySelector(".question3")


  title.textContent = currentQuestion.question;
  answer1.textContent = currentQuestion.answers[0];
  answer2.textContent = currentQuestion.answers[1];
  answer3.textContent = currentQuestion.answers[2];

  answer1.addEventListener("click", checkQuestion);
  answer2.addEventListener("click", checkQuestion);
  answer3.addEventListener("click", checkQuestion);


}

function startTimer() {

  timerCount--;
  timerElement.textContent = timerCount;

  if (timerCount <= 0) {
    endQuiz();
  }

}

var endQuiz = function () {
  
  clearInterval(timer); 
  
  endScreenDiv.removeAttribute("class")
 
}

function saveScore() {
  let finalScore;
  let initials = initialsInput.value;

  let highScore = JSON.parse(localStorage.getItem('highscores')) || [];

  if(correct < allQuestions.length){
    let finalScoreMath = correct / allQuestions.length
    finalScore = finalScoreMath.toFixed(2).split("0.")[1] + "%";
  } else {
    finalScore = 100 + "%";
  }
  

  let newScores = {
    initials: initials,
    score: finalScore
  }

  console.log("initials input", initialsInput.value, newScores)
  console.log(highScore)

  highScore.push(newScores)
  localStorage.setItem("highscores", JSON.stringify(highScore))

  window.location.href = "highscore.html";

}



startButton.addEventListener("click", startQuiz);
submitBtn.onclick = saveScore;
highScores.addEventListener('click', function(){
  window.location.href = "highscore.html"
})


let endScreen = document.getElementById("end-screen")

$("#end-screen")