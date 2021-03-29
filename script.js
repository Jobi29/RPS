



function computerPlay(){

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scisors";
    }
}

function checkWinner(computer, player){
    if(computer == player){
        return "No one wins";
    }
    else if(computer == "rock" && player== "paper"){
        return "You win paper beats rock";
    }
    else if(computer == "rock" && player == "scisors"){
        return "You loose rock beats scisors";
    }
    else if(computer == "paper" && player == "rock"){
        return "You loose paper beats rock";
    }
    else if(computer == "paper" && player == "scisors"){
        return "You win scisors beats paper";
    }
    else if(computer == "scisors" && player == "paper"){
        return "You loose scisors beats paper";
    }
    else if(computer == "scisors" && player == "rock"){
        return "You win rock beats scisors";
    }
}


for (i=0; i<5; i++){
    computer = computerPlay();
    player = prompt("What will it be ? (rock / paper / scisors").toLowerCase();
    console.log("Computer played : ", computer);
    console.log("Player played :", player)
    console.log(checkWinner(computer, player));
}

computer = computerPlay();
player = prompt("What will it be ? (rock / paper / scisors").toLowerCase();
console.log("Computer played : ", computer);
console.log("Player played :", player)
console.log(checkWinner(computer, player));



