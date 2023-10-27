/* Rock Paper Scissors (Odin Project)
    console.log() version
    by vfmluis */

function getPlayerChoice() {
    let playerChoice = prompt(`Rock Paper Scissors! Best of 5.\nMake your choice.`,
                                'rock paper scissors');

    if (playerChoice === null) return null;

    // Store choice separately for feedback VS for use in source logic.
    let choice = playerChoice.toLowerCase();

    // Notify if choice was invalid and get a valid input.
    while(!(choice === 'rock' || choice === 'paper' || choice === 'scissors')) { 
        playerChoice = prompt(`Invalid choice.\n\nRock Paper Scissors! Best of 5.\nMake your choice.`,
                                'rock paper scissors');
        if (playerChoice === null) return null;
        choice = playerChoice.toLowerCase();
    }
    console.log ('> ' + playerChoice);
    return choice;
}

function getComputerChoice() {
    const RANDOM = Math.floor(Math.random()*3);
    const COMPUTER_CHOICE = (RANDOM === 0) ? 'rock' :
                        (RANDOM === 1) ? 'paper' :
                        (RANDOM === 2) ? 'scissors':
                        'error';
    return COMPUTER_CHOICE; 
}

function playRound(playerSelection, computerSelection) {
    // Compare selections to determine round outcome.
    let outcome = '';
    switch (playerSelection) {
        case 'error':
            console.error('unexpected computerSelection!');
            break;
        case 'rock':
            if (computerSelection === 'scissors') outcome = 'win'; 
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

    // Declare outcome of round.
    if (outcome === 'win') { 
        console.log(`${playerSelection} beats ${computerSelection}`);
        console.log(`You win!\n`);
    } else if (outcome === 'lose') {
        console.log(`${playerSelection} loses to ${computerSelection}`);
        console.log(`Computer wins.\n`);
    } else if (outcome === 'draw') {
        console.log(`${playerSelection} and ${computerSelection}`);
        console.log(`Draw.\n`);
    }

    return outcome;
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    let gameRunning = true;
    console.log(`Rock Paper Scissors! Best of 5.`);
    // Game loop start.
    while (gameRunning === true) {
        console.log(`Player: ${playerCounter}`);
        console.log(`Computer: ${computerCounter}`);
        console.log(``);
    // End the game if victory condition has been met.
        if (playerCounter >= 3) {
            console.log(`Player Victory!\n\n`)
            gameRunning = false;
            return 0;
        } else if (computerCounter >= 3) {
            console.log(`Computer Victory!\n\n`)
            gameRunning = false;
            return 0;
        }
        
        const PLAYER_CHOICE = getPlayerChoice();
        const COMPUTER_CHOICE = getComputerChoice();
    // If player clicks 'Cancel' when prompted, end the game.
        if (PLAYER_CHOICE === null) {
            console.log(`Canceled - ending game.\n\n`);
            return 0;
        }
    // Tally round results.
        const OUTCOME = playRound(PLAYER_CHOICE, COMPUTER_CHOICE);
        if (OUTCOME === 'win')
            playerCounter += 1;
        else if (OUTCOME === 'lose')
            computerCounter += 1;
    }
}