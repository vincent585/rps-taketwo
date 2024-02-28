const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * choices.length);

    return choices[choiceIndex];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
        return `You both picked ${playerChoice} - It's a tie!`;
    } else if (playerChoice === "rock") {
        return computerChoice === "scissors" ? "Rock smashes scissors - you win!" : "Paper covers rock - you lose!";
    } else if (playerChoice === "scissors") {
        return computerChoice === "paper" ? "Scissors cut paper - you win!" : "Rock smashes scissors - you lose!";
    } else if (playerChoice === "paper") {
        return computerChoice === "rock" ? "Paper covers rock - you win!" : "Scissors cut paper - you lose!";
    }
}