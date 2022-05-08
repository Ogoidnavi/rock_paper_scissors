"use strict";
//global variables
const arrayPlay = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
let outcome;
let computerScore = 0;
let playerScore = 0;

//functions
function computerPlay() //returns a random play between rock, paper or scissors
{
   return arrayPlay[Math.floor(Math.random()* arrayPlay.length)];
}

function playRound(computerSelection, playerSelection) //returns the outcome of a rock paper scissors round
{
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection ==! null)
    {
        if(playerSelection === computerSelection)
        {
            return ("It's a tie, please keep playing.");
        }
        else if(
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") || 
            (playerSelection === "scissors" && computerSelection === "rock")
        )
        {
            return ("You lose the round!");
        }
        else if(
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        )
        {
            return ("You win the round!");
        }
        else 
        {
            return("Please input Rock, Paper or Scissors.");
        }
    }
    else
    {
        return null;
    }
}

function game()
{
    for(let i = 0; i < 5; i++)
    {
        playerSelection = prompt("Please enter rock, paper or scissors!", "");
        computerSelection = computerPlay();
        outcome = playRound(playerSelection, computerSelection);
        if(outcome === "You lose the round!")
        {
            computerScore++;
            console.log(outcome);
        }
        else if(outcome === "You win the round!")
        {
            playerScore++;
            console.log(outcome);
        }
        else if(outcome === "It's a tie, please keep playing.")
        {
             i--;
        }
        else
        {
            break;
        }
        
    }
    
    if(playerScore > computerScore)
    {
        return("Congratulations! You won the game!");
    }
    else if(playerScore < computerScore)
    {
        return("Too bad, you lost the game");
    }
    else
    {
        return("You canceled the game");
    } 
}

//Main
console.log(game());
