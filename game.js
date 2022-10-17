let computerScore = 0;
let playerScore = 0;
const button = document.querySelectorAll("button");


function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

//compChoice gets randomized and stored into computerSelection
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


//Play the compChoice vs playerChoice through the triangle of RPS
const playRound = (playerSelection, computerSelection) => {
    /* let wins = checkWins(); */
    var computerSelection = getComputerChoice();
    checkWinner();
    displayWinner();
    displayPlayAgain();

    if ((playerScore < 5) || (computerScore < 5)){
        if (playerSelection === computerSelection){
            return "It's a draw!";
        } else if ((playerSelection === "foot" && computerSelection === "nuclear bomb") || (playerSelection === "nuclear bomb" && computerSelection === "cockroach") || (playerSelection === "cockroach" && computerSelection === "foot")){
            computerScore++;
            return "Computer wins!"
        } else {
            playerScore++;
            return "You win!"
        }
    }};

        /* 
    } else if (playerScore === 5){
        document.getElementById("winner").textContent = "You win";
    } else if (computerScore === 5){
        document.getElementById("winner").textContent = "Computer win";

    } */

//Disable buttons after any score reaches 5
const disableButton = () => {
    button.disabled = true;
}; 

const checkWinner = () => {
    if ((playerScore===5) || (computerScore===5)){
        button.addEventListener('click', disableButton());
    }
};


//Check who has a score of 5 and print winner
const displayWinner = () => {

    if (playerScore === 5){
        document.getElementById("winner").textContent = "You win";
        displayPlayAgain();

    } else if (computerScore===5){
        document.getElementById("winner").textContent = "Computer wins";
        displayPlayAgain();
    } else if (playerScore < 5 || computerScore < 5) {
        document.getElementById("winner").textContent = "First to reach 5 wins.";
    }
}


//Display play again button
const displayPlayAgain = () => {
    if ((playerScore ===5) || (computerScore===5) ){
            document.getElementById("play-again").style.display = "inline";
    }
}
   


//Player clicks a button, choice gets propagated into playRound function
addGlobalEventListener("click", "#Foot", e => {
    let roundResult = playRound("foot", ) ; 
        document.getElementById("gameOutcome").textContent = roundResult;
        document.getElementById("pScore").textContent = playerScore;
        document.getElementById("cScore").textContent = computerScore;
});

addGlobalEventListener("click", "#Nuke", e => {
    let roundResult = playRound("nuclear bomb", ) ;
        document.getElementById("gameOutcome").textContent = roundResult;
        document.getElementById("pScore").textContent = playerScore;
        document.getElementById("cScore").textContent = computerScore;
});
addGlobalEventListener("click", "#Cock", e => {
    let roundResult = playRound("cockroach", );
        document.getElementById("gameOutcome").textContent = roundResult;
        document.getElementById("pScore").textContent = playerScore;
        document.getElementById("cScore").textContent = computerScore;
});


/* const winner = () => {
    if (playerScore === "5") {
        return "You have dominated the computational unit! "
    }
    if (computerScore === "5") {
        return "Computerized Annihiliation Achieved"
    }
 };
console.log(winner()); */



//check wins: count and store the total amount of wins  
//(then reference this in the playRound; if higher than 5 stop playing)
/* document.getElementById("#winner").textContent = checkWins; 
const wins = checkWins();
function checkWins = () => {
  //  first score to reach 5 = winner

if (playerScore === "5") {
    return "You have dominated the computational unit! "
}
if (computerScore === "5") {
    return "Computerized Annihiliation Achieved"
}
}
 */




/* 
let startRound = document.createElement('div');
const updatedResult = document.createElement('div');
const updatedScores = document.createElement('div');

let playerScore = 0;
let computerscore = 0;
let drawScore = 0; */ 