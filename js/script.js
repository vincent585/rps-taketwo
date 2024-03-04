const choices = ["rock", "paper", "scissors"];

const selectionOptions = document.querySelectorAll(".selection-options button");
const playerScore = document.querySelector(".scoreboard p:nth-child(1)");
const computerScore = document.querySelector(".scoreboard p:nth-child(2)");
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
        return 0;
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
    let result;
    if (computerChoice === "scissors") {
        message = "Rock smashes scissors - you win!";
        result = 1;
    } else {
        message = "Paper covers rock - you lose!";
        result = -1;
    }
    roundResult.textContent = message;
    return result;
}

function evaluatePaper(computerChoice) {
    let message;
    let result;
    if (computerChoice === "rock") {
        message = "Paper covers rock - you win!";
        result = 1;
    } else {
        message = "Scissors cut paper - you lose!";
        result = -1;
    }
    roundResult.textContent = message;
    return result;
}

function evaluateScissors(computerChoice) {
    let message;
    let result;
    if (computerChoice === "paper") {
        message = "Scissors cut paper - you win!";
        result = 1;
    } else {
        message = "Rock smashes scissors - you lose!";
        result = -1;
    }
    roundResult.textContent = message;
    return result;
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