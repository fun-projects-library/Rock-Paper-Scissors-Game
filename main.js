// Setting the scores and selecting our HTML elements.
let computerScore = 0;
let playerScore = 0;


const compScore = document.getElementById("computerScore");
const playScore = document.getElementById("playerScore")


const array = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"]

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors")

const showPlayer = document.querySelector(".player i");
const showComputer = document.querySelector(".computer i");

const result = document.getElementById("result")


const game = (event) => {
    const random = Math.floor(Math.random()*array.length);
    showComputer.className = array[random];
    showPlayer.className = event.target.className;

    if(showPlayer.className === showComputer.className){

        result.innerHTML = "DRAW!!!"

    } else if (showPlayer.className === "fas fa-hand-rock" && showComputer.className==="fas fa-hand-paper" || showPlayer.className === "fas fa-hand-paper" && showComputer.className==="fas fa-hand-scissors" || showPlayer.className === "fas fa-hand-scissors" && showComputer.className==="fas fa-hand-rock"){
        computerScore ++;
        result.innerHTML =`Computer Wins <i class="fas fa-angry"></i>`;
        compScore.innerHTML = computerScore;

    } else if (showPlayer.className === "fas fa-hand-rock" && showComputer.className==="fas fa-hand-scissors" || showPlayer.className === "fas fa-hand-paper" && showComputer.className==="fas fa-hand-rock" || showPlayer.className === "fas fa-hand-scissors" && showComputer.className==="fas fa-hand-paper"){
        playerScore ++;
        result.innerHTML = `Player Wins <i class="far fa-smile"></i> ` ;
        playScore.innerHTML = playerScore ;

    }



}

rockButton.addEventListener("click", game)
paperButton.onclick = game;
scissorsButton.onclick = game;
