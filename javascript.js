//Tik-Tak-Toe
let humanScore = 0;
let computerScore = 0;

const choice = ['Rock', 'Paper', 'Scissors'];

function playRound() {
    //Get random choice for computer and have human based on button pushed
    computerChoice = choice[Math.floor(Math.random() * 3)];
    humanChoice = event.target.textContent;

    let outcome = '';
    const div = document.querySelector('div');

    if (humanChoice === computerChoice){
        outcome = `You both selected ${humanChoice}. Tie!`;
    } else if (humanChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            outcome = 'Rock beats Scissors. You won!';
            humanScore ++;
        } else {
        outcome = 'Paper beats Rock. You lose';
        computerScore ++;
        }
    } else if (humanChoice === 'Scissors'){
        if (computerChoice === 'Paper') {
            outcome = 'Scissors beat Paper. You won!';
            humanScore ++;
        } else {
        outcome = 'Rock beats Scissors. You lose';
        computerScore ++;
        }
    } else if (humanChoice == 'Paper'){
        if (computerChoice === 'Rock') {
            outcome = 'Paper beats Rock. You won!';
            humanScore ++;
        } else {
        outcome = 'Scissors beat Paper. You lose';
        computerScore ++;
        }
    }
    outcome += ` The current score is - Human: ${humanScore}, Computer: ${computerScore}\n`
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5){
            outcome += 'Human wins!';
        } else {
            outcome += "Computer Wins"
        }
    }
    div.textContent = div.textContent + outcome;
}




