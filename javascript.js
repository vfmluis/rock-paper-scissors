// Rock Paper Scissors (Odin Project)
// console.log() version
// by Luis Vilchez

function getComputerChoice() {  // FUNCTION getComputerchoice()
    const choice = Math.floor(Math.random()*3); // R=0, P=1, S=2
    const computerChoice = (choice === 0) ? 'rock' :
                        (choice === 1) ? 'paper' :
                        (choice === 2) ? 'scissors':
                        'error';
    return computerChoice;  // return computer choice
}

/* 
    FUNCTION playRound():
    Rock beats Scissors
    Paper beats Rock
    Scissors beats Paper 

    playerSelection is caps insensitive

    switch playerSelection
        case rock:
            check computer choice
                outcome = win/lose/tie
        case paper/scissors: ...
    return outcome
*/
function playRound(playerSelection, computerSelection) {
    let outcome = '';
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection) {  // check player choice
        case 'error':
            console.error('unexpected computerChoice!');
            break;
        case 'rock':
            if (computerSelection === 'paper') outcome = 'win'; // compare to computer choice and store outcome
            else if (computerSelection === 'scissors') outcome = 'lose';
            else outcome = 'draw';
            break;
        case 'paper':
            if (computerSelection === 'paper') outcome = 'win';
            else if (computerSelection === 'scissors') outcome = 'lose';
            else outcome = 'draw';
            break;
        case 'scissors':
            if (computerSelection === 'paper') outcome = 'win';
            else if (computerSelection === 'scissors') outcome = 'lose';
            else outcome = 'draw';
            break;
        default:
            console.error('unexpected playerSelection!')
            break;
    }   

    if (outcome === 'win')  // declare round outcome
        console.log(`${playerSelection} beats ${computerSelection}. You win!\n`);
    else if (outcome === 'lose')
        console.log(`${playerSelection} is beaten by ${computerSelection}. Computer wins.\n`);
    else if (outcome === 'draw')
        console.log(`${playerSelection} and ${computerSelection}. Draw.\n`);

    return outcome; // return outcome
}

function getPlayerChoice() {    // FUNCTION getPlayerChoice() 
    let playerChoice = '';
        while( ! (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors')) { // loop until get choice
            playerChoice = prompt('Make your choice.', 'rock paper scissors');
            playerChoice = playerChoice.toLowerCase();
        }
    return playerChoice;    // return playerchoice
}

/*
    FUNCTION game() loop:
    let player counter = 0
    let computer counter = 0 
    while game is running:
        "Rock Paper Scissors! Best of 5.
        Player: x
        Computer: y"

        get player choice
        get computer choice
        play round

        if win, player counter++
        if lose, computer counter++
        if player or computer counter more than 3
            end game
*/
function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    let gameRunning = true;

    while (gameRunning === true) {  // game loop
        console.log(`Rock Paper Scissors! Best of 5.`);
        console.log(`Player: ${playerCounter}`);
        console.log(`Computer: ${computerCounter}`);
        console.log(``);
        
        const playerSelection = getPlayerChoice();  // get player and computer choice
        const computerSelection = getComputerChoice();

        const outcome = playRound(playerSelection, computerSelection);  // play the round and get outcome

        if (outcome === 'win')  // iterate win counters
            playerCounter += 1;
        else if (outcome === 'lose')
            computerCounter += 1;

        if (playerCounter >= 3) {   // check for victory condition, finish game
            console.log('Player Victory!')
            gameRunning = false;
        } else if (computerCounter >= 3) {
            console.log('Computer Victory!')
            gameRunning = false;
        }
    }
}