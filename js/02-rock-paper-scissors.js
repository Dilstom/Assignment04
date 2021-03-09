// prompt the user for their choice

let userChoice;
do {
    userChoice  = prompt('Choose rock, paper or scissors: r/p/s').toLowerCase();
} while(userChoice != 'r' && userChoice != 'p' && userChoice != 's');

// computer makes a choice, 0 = 'r', 1 = 'p', 2 = 's';

let computerChoice = Math.floor(Math.random() * 3);
// console.log(computerChoice)

switch(userChoice){
    case 'r':
        computerChoice === 0 ? console.log('Computer chose Rock too. It is Draw.') : computerChoice === 1 ? console.log(`You lose! Computer chose Paper. Paper covers rock`) : console.log('You Won! Computer chose scissors. Rock destroys scissors');
        break;
    case 'p':
        computerChoice === 1 ? console.log('Computer chose Paper too. It is Draw.') : computerChoice === 0 ? console.log(`You Won! Computer chose rock. Paper covers rock`) : console.log('You lose! Computer chose scissors. Scissors cut paper');
        break;
    case 's':
        computerChoice === 2 ? console.log('Computer chose Scissors too. It is Draw.') : computerChoice === 0 ? console.log(`You lose! Computer chose rock. Rock destroys scissors`) : console.log('You won! Computer chose paper. Scissors cut paper');
        break;
    default:
        console.log('Ops, something went wrong!')
}
