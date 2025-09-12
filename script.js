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

console.log(getCompChoice())