let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let playAgainAsk;

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
        return "It's a tie!";
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
     ) {
        playerScore += 1;
        return `Congrats you win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}! You have ${playerScore} points and the computer has ${computerScore} points.`
    } else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
     ) {
        computerScore += 1;
        return `Sorry, you lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}. You have ${playerScore} points and the computer has ${computerScore} points.`
     } else {
        return "I'm not sure what you've entered."
     }
} 

//use a for loop instead

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Do you choose rock, paper, or scissors?");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
    if (playerScore > computerScore) {
        resetScore();
        return `Hurray! You've won it all!`;
    } else {
        resetScore();
        return `You've lost. Better luck next time.`;
    }
}

function resetScore() {
    playerScore -= playerScore;
    computerScore -= computerScore;
}

