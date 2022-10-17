let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')
const playerOptionBtn = document.querySelector('div.playerOptionBtns');
const computerSelection = getComputerChoice();

// user clicks
// Player clicks a button and selected value is stored for the game
const playerSelection = () => {
    const footButton = document.querySelector('#Foot');
    const nukeButton = document.querySelector('#Nuke');
    const cockButton = document.querySelector('#Cock');

    footButton.addEventListener('click',() =>{
        if (button.id = "F"){ 
        let playerSelection = "foot";
        playRound(playerSelection, computerSelection);
    };
})

// ->game Starts 
    //round plays 
        // it compares playerSelection to computer choice 
            // after 5 rounds in total the game stops and winner is declared 

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
const playRound = (playerSelection, computerSelection) => {
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

function getPlayerChoice(e) {
    let playerSelection=(e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerSelection, getComputerChoice());
}

const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

console.log(computerScore, playerScore) ;




// The Game
const game = () => {
    // Play 5 rounds & stop 
    /* for (let i = 0; i < 5; i++){
        playRound()
    } */
    
    let computerSelection = getComputerChoice();
    let roundResult = playRound (playerSelection, computerSelection);


    if (playerScore === computerScore){
    return "It's a draw!"
    };

    if (playerScore >= 5 && computerScore <5) {
        return "Game over. You win!";
    } else if (playerScore <5 && computerScore >= 5) {
        return "Game over. You lose!"
    };
}



console.log(game);
/* console.log(computerScore, playerScore) */