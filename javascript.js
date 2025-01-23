//Tik-Tak-Toe

const choice = ['Rock', 'Paper', 'Scissors'];

//Computer random selection
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
} 

function getHumanChoice(){
    let userSelection = prompt("Please select 0 for Rock, 1 for Paper, or 2 for Scissors");
    return choice[userSelection];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log(`You both selected ${humanChoice}. Tie!`);
    } else if (humanChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            console.log('Rock beats Scissors. You won!');
            humanScore ++;
        } else {
        console.log('Paper beats Rock. You lose');
        computerScore ++;
        }
    } else if (humanChoice === 'Scissors'){
        if (computerChoice === 'Paper') {
            console.log('Scissors beat Paper. You won!');
            humanScore ++;
        } else {
        console.log('Rock beats Scissors. You lose');
        computerScore ++;
        }
    } else if (humanChoice == 'Paper'){
        if (computerChoice === 'Rock') {
            console.log('Paper beats Rock. You won!');
            humanScore ++;
        } else {
        console.log('Scissors beat Paper. You lose');
        computerScore ++;
        }
    }
    console.log(`Current Score is. Human: ${humanScore} - Computer: ${computerScore}`)
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore === 5) {
        console.log('Human wins!');
    } else {
        console.log('Computer wins!');
    }
}

playGame();




