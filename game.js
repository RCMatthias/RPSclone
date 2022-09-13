let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
        case 0: 
            return "foot";
            break;
        case 1:
            return "nuclear bomb";
            break;
        case 2: 
            return "cockroach";
            break;
    } 
}
console.log(getComputerChoice())


//Play the compChoice vs playerChoice through the triangle of RPS
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a draw!";
    } else if ((playerSelection === "foot" && computerSelection === "nuclear bomb") || (playerSelection === "nuclear bomb" && computerSelection === "cockroach") || (playerSelection === "cockroach" && computerSelection === "foot")){
        computerScore++;
        return "Computer wins!"
    } else {
        playerScore++;
        return "You win!"
    }
}
const playerSelection = () => {
    let playerNumber = prompt ("foot, nuclear bomb or cockroach?");
};
let playerNumber = prompt ("foot, nuclear bomb or cockroach?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

const game = () => {
    for (let i = 0; i < 5; i++){
        playRound()
    }
    let computerSelection = getComputerChoice();
    let roundResult = playRound (playerSelection, computerSelection);


    if (playerScore === computerScore){
    return "It's a draw!"
    }

    if (playerScore >= 5 && computerScore <5) {
        return "Game over. You win!";
    } else if (playerScore <5 && computerScore >= 5) {
        return "Game over. You lose!"
    }
}
console.log(computerScore, playerScore)

