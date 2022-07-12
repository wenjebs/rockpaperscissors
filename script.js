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
        return 'You win!'
    } else if ((playerSelection === 'rock' && computerSelection === 'paper')||
              (playerSelection === 'paper' && computerSelection === 'scissors')||
              (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return `You Lose!`
    }
}
