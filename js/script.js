const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const selectionOptions = document.querySelectorAll(".selection-options button");
const playerScorePara = document.querySelector(".scoreboard p:nth-child(1)");
const computerScorePara = document.querySelector(".scoreboard p:nth-child(2)");
const roundResult = document.querySelector(".round-result p");

selectionOptions.forEach((selectionOption) => selectionOption.addEventListener("click", () => playRound(selectionOption.value, getComputerChoice())));

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * choices.length);

    return choices[choiceIndex];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let message;

    if (playerChoice === computerChoice) {
        message = `You both picked ${playerChoice} - It's a tie!`;
        roundResult.textContent = message;
    } else if (playerChoice === "rock") {
        return evaluateRock(computerChoice);
    } else if (playerChoice === "scissors") {
        return evaluateScissors(computerChoice);
    } else if (playerChoice === "paper") {
        return evaluatePaper(computerChoice);
    }
}

function evaluateRock(computerChoice) {
    let message;
    if (computerChoice === "scissors") {
        message = "Rock smashes scissors - you win!";
        playerScore++;
        playerScorePara.textContent = playerScorePara.textContent.replace(/[0-9]$/, playerScore);
    } else {
        message = "Paper covers rock - you lose!";
        computerScore++;
        computerScorePara.textContent = computerScorePara.textContent.replace(/[0-9]$/, computerScore);
    }
    roundResult.textContent = message;
}

function evaluatePaper(computerChoice) {
    let message;
    if (computerChoice === "rock") {
        message = "Paper covers rock - you win!";
        playerScore++;
        playerScorePara.textContent = playerScorePara.textContent.replace(/[0-9]$/, playerScore);
    } else {
        message = "Scissors cut paper - you lose!";
        computerScore++;
        computerScorePara.textContent = computerScorePara.textContent.replace(/[0-9]$/, computerScore);
    }
    roundResult.textContent = message;
}

function evaluateScissors(computerChoice) {
    let message;
    if (computerChoice === "paper") {
        message = "Scissors cut paper - you win!";
        playerScore++;
        playerScorePara.textContent = playerScorePara.textContent.replace(/[0-9]$/, playerScore);
    } else {
        message = "Rock smashes scissors - you lose!";
        computerScore++;
        computerScorePara.textContent = computerScorePara.textContent.replace(/[0-9]$/, computerScore);
    }
    roundResult.textContent = message;
}

function checkWinner(playerWins, computerWins) {
    let message = `Player score: ${playerWins} ----- Computer score: ${computerWins}. `;
    if (playerWins === computerWins) {
        return message + "It's a tie!";
    } else if (playerWins > computerWins) {
        return message + "You won the game!";
    } else {
        return message + "You lose the game!";
    }
}