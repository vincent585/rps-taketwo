const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * choices.length);

    return choices[choiceIndex];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let message;

    if (playerChoice === computerChoice) {
        message = `You both picked ${playerChoice} - It's a tie!`;
        console.log(message);
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
    console.log(message);
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
    console.log(message);
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
    console.log(message);
    return result;
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    for (let round = 0; round < 5; round++) {
        let playerSelection = getUserChoice();
        let result = playRound(playerSelection, getComputerChoice());

        result < 0 ? computerWins += 1 : playerWins += result;
    }

    return checkWinner(playerWins, computerWins);
}

function getUserChoice() {
    let playerSelection = "";
    while (!choices.includes(playerSelection.toLowerCase())) {
        playerSelection = prompt("Choose one: Rock, Paper, or Scissors?", "");
        if (playerSelection === "" || playerSelection === null) {
            alert("You can't pick nothing!");
        } else if (!choices.includes(playerSelection.toLowerCase())) {
            alert("Only Rock, Paper, or Scissors will work here.");
        } else {
            break;
        }
    }

    return playerSelection.toLowerCase();
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