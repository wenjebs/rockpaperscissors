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
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You Lose! Paper beats Rock`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper'
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
