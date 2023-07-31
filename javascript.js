

console.log("Hello World! This is a test!");

//function to randomly generate 1 of 3 choices 

/*pseudocode
 No parameters needed, we're just returning a value
 Use a randomizer to generate 1, 2, or 3.
 Then, use a switch to return a value based off the randomizer
 Add console logs to verify the function is working 
*/
function getComputerChoice(){ 

    const randomNumber = Math.floor((Math.random() * 3));
    switch (randomNumber){
        case 0:
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

/*pseudocode
 use toLowerCase() to ensure player can enter anything
 use switch statement with player choice as parameter
 use if statements to compare player and computer choice
 return statement based off of comparison


*/
function playRound(playerSelection, computerSelection){
    
    //let computer = computerSelection = getComputerChoice();
    const playerChoice = playerSelection.toLowerCase();
    const tieMessage = `It's a tie! Both you and the computer chose ${computerSelection}.`;

    switch(playerChoice){

        case "rock":
            if (computerSelection === "Rock"){
                return tieMessage;
            }
            else if (computerSelection === "Paper"){
                return `You lose! Rock loses to Paper.`;
            }
            else if (computerSelection === "Scissors"){
                return `You win! Rock beats Scissors.`
            }
            break;
        
        case "paper":
            if (computerSelection === "Rock"){
                return "You win! Paper beats Rock.";
            }
            else if (computerSelection === "Paper"){
                return tieMessage;
            }
            else if (computerSelection === "Scissors"){
                return `You lose! Paper loses to Scissors.`
            }
            break;

        case "scissors":
            if (computerSelection === "Rock"){
                return `You lose! Scissors loses to Rock.`
            }
            else if (computerSelection === "Paper"){
                return `You win! Scissors beats Paper.`
            }
            else if (computerSelection === "Scissors"){
                return tieMessage;
            }
            break;

        default: 
            return `Please only enter rock, paper, or scissors.`
            break;
    }
}

/*  testing
const playerSelection = "PaPEr";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */

