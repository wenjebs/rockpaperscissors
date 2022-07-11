// initialise the function
function computerPlay() {
// initialise list of 3 choices
    const choices = ['Rock', 'Paper', 'Scissors']
// from the list choose 1 choice
    let randomNumber = Math.floor(Math.random() * 3)
    let choice = choices[randomNumber]
// output the choice
    console.log(choice)
}
