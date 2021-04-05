//Game of rock paper scissors
    let playerScore = 0;
    let computerScore = 0;

function computerPlay(){

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
    }
}

function addScore(result){
    let player = document.querySelector('#player');
    let computer = document.querySelector('#computer');
    switch(result){
        case 1:
            computerScore++;
            player.textContent = playerScore;
            computer.textContent = computerScore;
            break;
        case 2:
            playerScore++
            player.textContent = playerScore;
            computer.textContent = computerScore;
            break;
    }
}
function checkWinner(computer, player){
    // 0 = No winner 1 = Computer 2 = Player
    if(computer == player){
        return 0;
    }
    else if(computer == "rock" && player== "paper"){
        return 2;
    }
    else if(computer == "rock" && player == "scissors"){
        return 1;
    }
    else if(computer == "paper" && player == "rock"){
        return 1;
    }
    else if(computer == "paper" && player == "scissors"){
        return 2;
    }
    else if(computer == "scissors" && player == "paper"){
        return 1;
    }
    else if(computer == "scissors" && player == "rock"){
        return 2;
    }
}


function tellWinner(computerChoice, playerChoice){
    switch (checkWinner(computerChoice, playerChoice)) {
        case 0:
            return "No one wins.";
        case 1:
            addScore(1);
            return "Computer wins, "+computerChoice+" beats "+playerChoice+".";
        case 2:
            addScore(2);
            return "You win, "+playerChoice+" beats "+computerChoice+".";
    }
}

function game(){
    playerScore = 0;
    computerScore = 0;

for (i=0; i<5; i++){
    computer = computerPlay();
    player = prompt("What will it be ? (rock / paper / scisors").toLowerCase();
    console.log("Computer played : ", computer);
    console.log("Player played :", player)
    console.log(tellWinner(computer, player));
    console.log("Computer : "+computerScore+" to "+playerScore+" for player.")
}
}

//game();

const playerChoice = document.querySelector('#choices');
const computerChoice = document.querySelector('#computerChoices');
const result = document.querySelector('#result');
const childrens = document.querySelectorAll(".child");

console.log(childrens);
function addSelected(element) {

    childrens.forEach(function(elem) {
      elem.classList.remove("selected");
    });
    
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    } else {
      element.classList.add("selected");
    }
  }

playerChoice.addEventListener('click', function (e) {
    player = e.target.id;
    computer = computerPlay();
    result.textContent=(tellWinner(computer, player));
    addSelected(e.target);
    (computerChoice.querySelector('#'+computer)).classList.add("selected");
    if(computerScore == 3){
        result.textContent='You lost, select an icon to play another game !';
        playerScore=0;
        computerScore=0;
        player.textContent = playerScore;
        computer.textContent = computerScore;
    }else if(playerScore == 3){
        result.textContent='You won, select an icon to play another game !';
        playerScore=0;
        computerScore=0;
        player.textContent = playerScore;
        computer.textContent = computerScore;
    }
  });