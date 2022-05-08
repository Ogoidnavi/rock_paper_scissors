"use strict";
//global variables
const arrayPlay = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;

//functions
function computerPlay() //returns a random play between rock, paper or scissors
{
   return arrayPlay[Math.floor(Math.random()* arrayPlay.length)];
}

function playRound(computerSelection, playerSelection)
{
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection)
    {
        return ("It's a tie!");
    }
    else if(
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")
    )
    {
        return ("You lose!");
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )
    {
        return ("You win!");
    }
}

//Main