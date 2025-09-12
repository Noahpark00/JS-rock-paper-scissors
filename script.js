let playerScore = 0
let compScore = 0

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

 function playRound(playerChoice, compChoice){
    if(playerChoice == 'rock'){
        if(compChoice == 'rock'){
            console.log("You both chose rock and the round is a tie... BORING!")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
        if(compChoice == 'paper'){
            compScore += 1
            console.log("Computer chose paper, YOU LOSE!")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
        if(compChoice == 'scissors'){
            playerScore += 1
            console.log("Computer chose scissors, YOU WIN!")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
    }
    if(playerChoice == 'paper'){
        if(compChoice == 'rock'){
            playerScore += 1
            console.log("Computer chose rock, YOU WIN!")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
        if(compChoice == 'paper'){
            console.log("You both chose paper and the round is a tie... BORING")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
        if(compChoice == 'scissors'){
            compScore += 1
            console.log("Computer chose scissors, YOU LOSE!")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
    }
    if(playerChoice == 'scissors'){
        if(compChoice == 'rock'){
            compScore += 1
            console.log("Computer chose rock, YOU LOSE!")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
        if(compChoice == 'paper'){
            playerScore += 1
            console.log("Computer chose paper, YOU WIN!")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
        if(compChoice == 'scissors'){
            console.log("You both chose scissors and the round is a tie... BORING")
            console.log("Player score: ", playerScore, "| Computer score: ", compScore)
        }
    }
    if(playerChoice == 'none'){
        compScore += 1
        console.log("You didn't even choose one, YOU LOSE!")
        console.log("Player score: ", playerScore, "| Computer score: ", compScore)
    }
 }

 function playGame(){
    for(i = 0; i < 5; i++){
        let humanChoice = getPlayerChoice()
        let cpuChoice = getCompChoice()
        playRound(humanChoice, cpuChoice)
    }
    if(playerScore > compScore){
        console.log("You won all the marbles... what do you want a prize or something?")
    } else if(compScore > playerScore){
        console.log("Dang, you really lost to a computer...")
    } else{
        console.log("A dead tie, the worst outcome... you basically lost")
    }
 }

 playGame()

