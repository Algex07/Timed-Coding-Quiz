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
  correct: "A computer coding language."

}, {
  question: "What is HTML??",
  answers: ["Hyper-Text Markup Language", "Hyper-Tech Moving load", "Hyper-Top-Main Language"],
  correct: "Hyper-Text Markup Language"
}, {
  question: "What is vanilla java script ?",
  answers: ["original js", "vanilla coffee", "text editor"],
  correct: "original js"
}];



function init() {
  getCorrect();
  getWrong();
}

function startQuiz() {
  startButton.disabled =true;
  let main=document.querySelector("main")
  main.setAttribute("style","display:block;")
  //startTimer()
displayQuestion()

}

function checkQuestion(event){

  let userAnswer =event.target.textContent
  if(userAnswer==allQuestions[counter].correct){
    correct++
  }else{
    wrong++
  }
  counter++
  if (counter==allQuestions.length){
    let main=document.querySelector("main")
    main.innerHTML=`correct:${correct} wrong:${wrong}`
    //make a function that will save the score into the local storage
    //and that you can view the score in the view highscore page
    //saveScore()
  }else{
    displayQuestion()

  }
}


function displayQuestion() {
  let currentQuestion = allQuestions[counter]
  let title=document.querySelector(".question")
  let answer1=document.querySelector(".question1")
  let answer2=document.querySelector(".question2")
  let answer3=document.querySelector(".question3")
 

  title.textContent=currentQuestion.question;
  answer1.textContent=currentQuestion.answers[0];
  answer2.textContent=currentQuestion.answers[1];
  answer3.textContent=currentQuestion.answers[2];
  
  answer1.addEventListener("click",checkQuestion);
  answer2.addEventListener("click",checkQuestion);
  answer3.addEventListener("click",checkQuestion);


}

function saveScore(){
  
 
      let initialsInput = document.getElementById("viewhighscore");
      console.log("initials input", initialsInput)
      localStorage.setItem(initialsInput, JSON.stringify(correct));
      document.getElementById("viewhighscore ").innerHTML = localStorage.getItem(initialsInput)
      window.location.href = "highscore.html";


}




 startButton.addEventListener("click", startQuiz);

