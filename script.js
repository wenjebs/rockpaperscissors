
// initialise scores
let playerScore = 0;
let computerScore = 0;
// initialise the function
function computerPlay() {
// initialise list of 3 choices
    const choices = ['Rock', 'Paper', 'Scissors']
// from the list choose 1 choice
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = choices[randomNumber];
// return the choice
    return choice;
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('.results')
rock.addEventListener("click", function (e) {
    let computerSelection = computerPlay();
    playRound(e.target.innerText, computerSelection);
});
paper.addEventListener("click", function (e) {
    let computerSelection = computerPlay();
    playRound(e.target.innerText, computerSelection);
});
scissors.addEventListener("click", function (e) {
    let computerSelection = computerPlay();
    playRound(e.target.innerText, computerSelection);
});


// initialise game function
function playRound(playerSelection, computerSelection) {
// normalise the choices
playerSelection = playerSelection.toLowerCase()
computerSelection = computerSelection.toLowerCase()
// compare the choices
    if (playerSelection === computerSelection) {
        results.textContent = `Tie! Your Score = ${playerScore} Computer Score = ${computerScore}`
        // console.log(`Tie!`);
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')||
              (playerSelection === 'paper' && computerSelection === 'rock')||
              (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore += 1;
        results.textContent = `You win! Your Score = ${playerScore} Computer Score = ${computerScore}`
        if (playerScore == 5) {
            results.textContent = `Youve won! ${playerScore} to ${computerScore}`
            computerScore = 0;
            playerScore = 0; 
            return;
        }
        // console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else if ((playerSelection === 'rock' && computerSelection === 'paper')||
              (playerSelection === 'paper' && computerSelection === 'scissors')||
              (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore += 1;
        results.textContent = `You Lose! Your Score = ${playerScore} Computer Score = ${computerScore}`
        if (computerScore == 5) {
            results.textContent = `Youve lost! ${playerScore} to ${computerScore}`
            computerScore = 0;
            playerScore = 0; 
            return;
        }
        // console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        return ('Invalid choice! Please try again!');
    }
}

function game() {
    computerScore = 0;
    playerScore = 0;
    let computerSelection = computerPlay();
    let playerSelection = prompt("Enter your choice!");
    let outcome = (playRound(playerSelection, computerSelection));
    if (outcome == ('Invalid choice! Please try again')) {
        i--;
    }
}

// create loop for 5 round of game function
// function game() {
//     computerScore = 0;
//     playerScore = 0;
//     for (i = 1; i <= 5; i++) {
//         // get new choice from computer
//         let computerSelection = computerPlay();
//         // get new choice from player
//         let playerSelection = prompt("Enter your choice!");
//         console.log(`Round ${i}`);
//         let outcome = (playRound(playerSelection, computerSelection));
//         if (outcome == ('Invalid choice! Please try again!')) {
//             i--;
//         }
//         console.log(outcome)
//     }
//     //print scores
//     console.log(`Your score: ${playerScore} Computer Score: ${computerScore}`)
//     //compare player score after game
//     if (playerScore === computerScore) {
//         return 'You Tie!';
//     } else if (playerScore > computerScore) {
//         return 'You Win!';
//     } else {
//         return 'You Lose!';
//     }
// }

