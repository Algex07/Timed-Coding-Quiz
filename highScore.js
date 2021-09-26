function printScores(){

let localStorageScores = JSON.parse(localStorage.getItem("highscores")) || [];

localStorageScores.forEach(function(highScore){
    let listTag = document.createElement("li")
    listTag.textContent = highScore.initials + ": " + highScore.score;

    let UnorderedList = document.getElementById('highScores');
    UnorderedList.appendChild(listTag)
});

let ClearBtn = document.getElementById("clearBtn");
ClearBtn.addEventListener('click', function(){
    localStorage.removeItem('highscores');
    window.location.href = "index.html"
})

let playAgainBtn = document.getElementById('playAgainBtn')
playAgainBtn.addEventListener("click", function(){
    window.location.href = "index.html";
})

}

printScores();