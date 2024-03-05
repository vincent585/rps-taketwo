const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const selectionOptions = document.querySelectorAll(".selection-options button");
const playerScorePara = document.querySelector(".scoreboard p:nth-child(1)");
const computerScorePara = document.querySelector(".scoreboard p:nth-child(2)");
const roundResult = document.querySelector(".round-result");
const selectionDiv = document.querySelector(".selection-options");
const gameContainer = document.querySelector(".game-container");

selectionOptions.forEach((selectionOption) => selectionOption.addEventListener("click", roundHandler));

function roundHandler(event) {
    playRound(event.currentTarget.value, getComputerChoice());
}

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
        evaluateRock(computerChoice);
    } else if (playerChoice === "scissors") {
        evaluateScissors(computerChoice);
    } else if (playerChoice === "paper") {
        evaluatePaper(computerChoice);
    }

    checkWinner(playerScore, computerScore);
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
    if (playerWins === 5) {
        roundResult.textContent += " You win the game!";
        endGame();
    } else if (computerWins === 5) {
        roundResult.textContent += " The computer wins the game!";
        endGame();
    }
}

function endGame() {
    selectionOptions.forEach((selectionOption) => selectionDiv.removeChild(selectionOption));
    const replayBtn = document.createElement("button");
    const replayImg = document.createElement("img");
    const playAgain = document.createElement("p");
    playAgain.textContent = "Play again?";
    replayBtn.appendChild(replayImg);
    replayImg.setAttribute("src", "./images/replay.png");
    replayImg.setAttribute("alt", "replay icon");
    selectionDiv.appendChild(replayBtn);
    replayBtn.addEventListener("click", resetGame);
    gameContainer.appendChild(playAgain);
}

function resetGame() {
    location.reload();
}