function getComputerChoice() {
    const choice = Math.floor(Math.random()*3); // R=0, P=1, S=2
    const computerChoice = (choice === 0) ? "rock" :
                        (choice === 1) ? "paper" :
                        (choice === 2) ? "scissors":
                        "ERROR: computer choice outside bounds";
    return computerChoice;
}

