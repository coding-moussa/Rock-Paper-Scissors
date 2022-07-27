/* Your game is going to play against the computer, 
so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play.
Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
/*
Write a function that plays a single round of Rock Paper Scissors.The
function should take two parameters - the playerSelection and computerSelection - and then
return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’ s playerSelection parameter
case -insensitive(so users can input rock, ROCK, RocK or any other variation).
*/

let winRockScis = "You Win! Rock breaks Scissors";
let winPaperRock = "You Win! Paper covers Rock";
let winScisPaper = "You Win! Scissors cuts Paper";
let loseRockScis = "You Lose! Rock breaks Scissors";
let loseScisPaper = "You Lose! Scissors cuts Paper";
let losePaperRock = "You Lose! Paper covers Rock";
let tie = "It's a Tie!";

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return losePaperRock;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
        return tie;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        return winRockScis;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        return winPaperRock;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return loseScisPaper;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
        return tie;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
        return tie;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return loseRockScis;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        return winScisPaper;
    }
}


/* 
Task #3: Create a new function called game()

    1. Run the rockPaperScissors func
    2. Ask the player to input thier selection
    3. After each round, add 1 to the winners score in a new score variable, or add  0 if its a tie,
    3. Use console.log to display the score after each round
    4. After the fifth round, announce a winner.

*/

let playerCount = document.querySelector('#yourScore');
playerCount.textContent = 0;

let computerCount = document.querySelector('#computersScore');
computerCount.textContent = 0;

let playersSelection = "";

let selectionOptions = document.querySelectorAll('.selection');

selectionOptions.forEach(button => button.addEventListener('click', hello));

function hello(e) {
    playersSelection = e.target.id;
    game();
}
const scores = document.querySelector('#scores');

const anna = document.createElement('h3');
scores.appendChild(anna);

let finalResult = document.createElement('h3')
scores.insertBefore(finalResult, playerCount);

function win() {
    finalResult.textContent = "Congratulations! You have won.";
    playerCount.textContent = 0;
    computerCount.textContent = 0;
}

function lose() {
    finalResult.textContent = "Sorry. You lost.";
    playerCount.textContent = 0;
    computerCount.textContent = 0;
}

function game() {
    let result = playRound(playersSelection.toLowerCase(), computerPlay());
    anna.textContent = result;

    if (result == winRockScis || result == winPaperRock || result == winScisPaper) {
        playerCount.textContent++;
    } else if (result == loseRockScis || result == loseScisPaper || result == losePaperRock) {
        computerCount.textContent++;
    };

    if (playerCount.textContent == 5) {
        win();
    } else if (computerCount.textContent == 5) {
        lose();
    };
}