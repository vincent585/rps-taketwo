const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * choices.length)

    return choices[choiceIndex]
}