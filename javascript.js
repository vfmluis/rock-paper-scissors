// Rock Paper Scissors (Odin Project)
// console.log() version
// by Luis Vilchez

function getComputerChoice() {  // FUNCTION getComputerchoice
    const choice = Math.floor(Math.random()*3); // R=0, P=1, S=2
    const computerChoice = (choice === 0) ? 'rock' :
                        (choice === 1) ? 'paper' :
                        (choice === 2) ? 'scissors':
                        'error';
    return computerChoice;  // return computer choice
}

/* 
    pseudocode for playRound

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

function playRound(playerSelection, computerSelection) {    // FUNCTION playRound
    let outcome = '';

    switch (playerSelection) {  // check player choice
        case 'error':
            console.error('unexpected computerChoice!');
            break;
        case 'rock':
            if (computerSelection === 'scissors') outcome = 'win'; // compare to computer choice and store outcome
            else if (computerSelection === 'paper') outcome = 'lose';
            else outcome = 'draw';
            break;
        case 'paper':
            if (computerSelection === 'rock') outcome = 'win';
            else if (computerSelection === 'scissors') outcome = 'lose';
            else outcome = 'draw';
            break;
        case 'scissors':
            if (computerSelection === 'paper') outcome = 'win';
            else if (computerSelection === 'rock') outcome = 'lose';
            else outcome = 'draw';
            break;
        default:
            console.error('unexpected playerSelection!');
            break;
    }   

    if (outcome === 'win') {  // declare round outcome
        console.log(`${playerSelection} beats ${computerSelection}`);
        console.log(`You win!\n`);
    } else if (outcome === 'lose') {
        console.log(`${playerSelection} loses to ${computerSelection}`);
        console.log(`Computer wins.\n`);
    } else if (outcome === 'draw') {
        console.log(`${playerSelection} and ${computerSelection}`);
        console.log(`Draw.\n`);
    }

    return outcome; // return round's outcome
}

function getPlayerChoice() {    // FUNCTION getPlayerChoice() 
    let playerChoice = prompt(`Rock Paper Scissors! Best of 5.\nMake your choice.`, 'rock paper scissors');     // ask for choice

    if (playerChoice === null) // if player cancels prompt, return null and end game
        return null; 
    
    let choice = playerChoice.toLowerCase();
    while( ! (choice === 'rock' || choice === 'paper' || choice === 'scissors')) { // if choice invalid, loop until valid
        playerChoice = prompt(`Invalid choice.\n\nRock Paper Scissors! Best of 5.\nMake your choice.`, 'rock paper scissors');
        if (playerChoice === null)
            return null;
        choice = playerChoice.toLowerCase();
    }

    console.log ('> ' + playerChoice); // print out input as it was typed
    return choice;                      // and then return player choice in lowercase
}

/*
    pseudocode for game

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

function game() {   // FUNCTION game
    let playerCounter = 0;
    let computerCounter = 0;
    let gameRunning = true;
    console.log(`Rock Paper Scissors! Best of 5.`);

    while (gameRunning === true) {  // game loop
        console.log(`Player: ${playerCounter}`);
        console.log(`Computer: ${computerCounter}`);
        console.log(``);

        if (playerCounter >= 3) {   // check for victory condition, finish game
            console.log(`Player Victory!`)
            gameRunning = false;
            return 0;
        } else if (computerCounter >= 3) {
            console.log(`Computer Victory!`)
            gameRunning = false;
            return 0;
        }
        
        const playerSelection = getPlayerChoice();  // get player and computer choice
        const computerSelection = getComputerChoice();

        if (playerSelection === null) { // if player cancels prompt, end game
            console.log('Canceled - ending game.');
            return 0;
        }

        const outcome = playRound(playerSelection, computerSelection);  // play the round and get outcome

        if (outcome === 'win')  // iterate win counters
            playerCounter += 1;
        else if (outcome === 'lose')
            computerCounter += 1;
    }
}