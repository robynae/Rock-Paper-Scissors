let playerSelection;
let computerSelection;
let playerScore;
let computerScore;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;

    if (number === 1) {
        return "Rock";
    } else if(number === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
     ) {
        return `Congrats you win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`
     } else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
     ) {
        return `Sorry, you lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.}`
     } else {
        return "I'm not sure what you've entered."
     }
} 
