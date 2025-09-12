function getCompChoice(){
    let choice = ""
    let rand = Math.random()
    if(rand < 0.33){
        choice = "rock"
    } else if(rand >= 0.33 && rand < 0.66){
        choice = "paper"
    } else if(rand >= 0.66){
        choice = "scissors"
    }
    return choice;
}

function getPlayerChoice(){
    let choice = prompt("1.Rock | 2.Paper | 3.Scissors")
    let player = "none"

    if(choice == 1){
        player = "rock"
    } 
    if(choice == 2){
        player = "paper"
    }
    if(choice == 3){
        player = "scissors"
    }

    return player
}

