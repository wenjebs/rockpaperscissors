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
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
