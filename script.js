// initialise scores
let playerScore;
let computerScore;
// initialise the function
function computerPlay() {
// initialise list of 3 choices
    const choices = ['Rock', 'Paper', 'Scissors']
// from the list choose 1 choice
    let randomNumber = Math.floor(Math.random() * 3)
    let choice = choices[randomNumber]
// return the choice
    return choice
}

// initialise game function
function playRound(playerSelection, computerSelection) {
// normalise the choices
playerSelection = playerSelection.toLowerCase()
computerSelection = computerSelection.toLowerCase()
// compare the choices
    if (playerSelection === computerSelection) {
        return `Tie!`
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')||
              (playerSelection === 'paper' && computerSelection === 'rock')||
              (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`
        } else if ((playerSelection === 'rock' && computerSelection === 'paper')||
              (playerSelection === 'paper' && computerSelection === 'scissors')||
              (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

// create loop for 5 round of game function
function game() {
    computerScore = 0;
    playerScore = 0;
    for (i = 1; i <= 5; i++) {
        // get new choice from computer
        let computerSelection = computerPlay();
        // get new choice from player
        let playerSelection = prompt("Enter your choice!")
        console.log(`Round ${i}`);
        console.log(playRound(playerSelection, computerSelection));
    }
    //print scores
    console.log(`Your score: ${playerScore} Computer Score: ${computerScore}`)
    //compare player score after game
    if (playerScore === computerScore) {
        return 'You Tie!'
    } else if (playerScore > computerScore) {
        return 'You Win!'
    } else {
        return 'You Lose!'
    }
}
