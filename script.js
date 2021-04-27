/* Your game is going to play against the computer, 
so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play.
Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/


/* Task #1: Create a function which randomly returns one of three random numbers whenever it is called
            Assign each number to a corresponding string
                so if number 1 --> display "rock"
                    else if number 2 --> display "paper"
                        else if number 3 --> return (scissors)

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

/*Task #2: A function which takes the players input, compares it against the computers input and returns the result 
                 The player inputs thier selection which can be only be the strings "rock" "paper" or "scissors" -case innsensitive
                    The players input is compaerd with the result of the computerPlay function
                        if the player selected "rock" and the computer selected "paper" 
                            return "You lose! Paper beats rock"
                                and so on and so on for each possible outcome

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
/*
function game(){
    declare 2 new variables
        one to keep track of your score
        one to keep track of the computers score
    Promt user to enter thier selection for this round
    run the function playRound(players entry into prompt,computerPlay)
    If the return value is any of the 'you won!' results
        then add 1 to yourScore variable
            else if the returned value is 'you lost'
                add 1 to the computerScore variable

    Display both scores to the console

    Run the above four more times

    Display the final scores and declare a winner
}
*/
let yourScore = 0;
let computerScore = 0;


function game() {
    let chooseWeapon = prompt("Choose your weapon");
    let result = playRound(chooseWeapon.toLowerCase(), computerPlay());
    console.log(result);
    if (result == winRockScis || result == winPaperRock || result == winScisPaper) {
        yourScore++;
        console.log(yourScore + " " + computerScore);
    } else if (result == loseRockScis || result == loseScisPaper || result == losePaperRock) {
        computerScore++;
        console.log(yourScore + " " + computerScore);
    } else {
        console.log(yourScore + " " + computerScore)
    }
    chooseWeapon = prompt("Choose your weapon");
    result = playRound(chooseWeapon.toLowerCase(), computerPlay());
    console.log(result);

    if (result == winRockScis || result == winPaperRock || result == winScisPaper) {
        yourScore++;
        console.log(yourScore + " " + computerScore);
    } else if (result == loseRockScis || result == loseScisPaper || result == losePaperRock) {
        computerScore++;
        console.log(yourScore + " " + computerScore);
    } else {
        console.log(yourScore + " " + computerScore)
    }
    chooseWeapon = prompt("Choose your weapon");
    result = playRound(chooseWeapon.toLowerCase(), computerPlay());
    console.log(result);

    if (result == winRockScis || result == winPaperRock || result == winScisPaper) {
        yourScore++;
        console.log(yourScore + " " + computerScore);
    } else if (result == loseRockScis || result == loseScisPaper || result == losePaperRock) {
        computerScore++;
        console.log(yourScore + " " + computerScore);
    } else {
        console.log(yourScore + " " + computerScore)
    }
    chooseWeapon = prompt("Choose your weapon");
    result = playRound(chooseWeapon.toLowerCase(), computerPlay());
    console.log(result);

    if (result == winRockScis || result == winPaperRock || result == winScisPaper) {
        yourScore++;
        console.log(yourScore + " " + computerScore);
    } else if (result == loseRockScis || result == loseScisPaper || result == losePaperRock) {
        computerScore++;
        console.log(yourScore + " " + computerScore);
    } else {
        console.log(yourScore + " " + computerScore)
    }
    chooseWeapon = prompt("Choose your weapon");
    result = playRound(chooseWeapon.toLowerCase(), computerPlay());
    console.log(result);

    if (result == winRockScis || result == winPaperRock || result == winScisPaper) {
        yourScore++;
        console.log(yourScore + " " + computerScore);
    } else if (result == loseRockScis || result == loseScisPaper || result == losePaperRock) {
        computerScore++;
        console.log(yourScore + " " + computerScore);
    } else {
        console.log(yourScore + " " + computerScore)
    }
    if (yourScore > computerScore) {
        console.log("Congratulations! You have won.");
    } else if (computerScore > yourScore) {
        console.log("Sorry. You lost.");
    } else return "Evenly matched! Try again tommorrow";
}