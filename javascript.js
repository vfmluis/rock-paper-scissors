function getComputerChoice() {
    const choice = Math.floor(Math.random()*3); // R=0, P=1, S=2
    const computerChoice = (choice === 0) ? 'rock' :
                        (choice === 1) ? 'paper' :
                        (choice === 2) ? 'scissors':
                        'error';
    return computerChoice;
}

/* 
    playRound():
    Rock beats Scissors
    Paper beats Rock
    Scissors beats Paper 

    playerchoice is caps insensitive

    switch playerchoice
        case rock:
            check computer choice
                outcome = win/lose/tie
        case paper/scissors: ...
    return outcome
*/
function playRound(playerSelection, computerSelection) {
    let outcome = '';
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection) {
        case 'error':
            console.error('unexpected computerChoice!');
            break;
        case 'rock':
            if (computerSelection === 'paper') outcome = 'win';
            else if (computerSelection === 'scissors') outcome = 'lose';
            else outcome = 'tie';
            break;
        case 'paper':
            if (computerSelection === 'paper') outcome = 'win';
            else if (computerSelection === 'scissors') outcome = 'lose';
            else outcome = 'tie';
            break;
        case 'scissors':
            if (computerSelection === 'paper') outcome = 'win';
            else if (computerSelection === 'scissors') outcome = 'lose';
            else outcome = 'tie';
            break;
        default:
            console.error('unexpected playerSelection!')
            break;
    }   

    return outcome;
}