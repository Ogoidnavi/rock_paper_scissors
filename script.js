"use strict";
//global variables
const arrayPlay = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
let outcome;
let computerScore = 0;
let playerScore = 0;
let i = 0;
let j = 0;
const btn = document.addEventListener("click",btn.innerText);
const final = document.getElementById("Final");
/*const id = btn.forEach(function{
    for(let i = 0; i<=btn.length; i++)
    {
        btn[i].innerText;
    }
});*/

//functions
function computerPlay() //returns a random play between rock, paper or scissors
{
   return arrayPlay[Math.floor(Math.random()* arrayPlay.length)];
}

function playRound(computerSelection, playerSelection) //returns the outcome of a rock paper scissors round
{
    computerSelection = computerPlay().toLowerCase();
    playerSelection = btn.toLowerCase();
    if(playerSelection ==! null)
    {
        if(playerSelection === computerSelection)
        {
            return ("\nIt's a tie, please keep playing.");
        }
        else if(
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") || 
            (playerSelection === "scissors" && computerSelection === "rock")
        )
        {
            j += 1;
            return ("\nYou Lose the round");
        }
        else if(
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        )
        {
            i += 1;
            return ("\nYou win the round!");
        }
        else 
        {
            return("\nPlease input Rock, Paper or Scissors.");
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
        const div = document.getElementById("Score");
        playerSelection = prompt("Please enter rock, paper or scissors!", "");
        computerSelection = computerPlay();
        outcome = playRound(playerSelection, computerSelection);
        if(outcome === "\nYou lose the round!")
        {
            computerScore++;
            const myTxt = document.createTextNode(outcome + "\nPlayer:" + i + "\nComputer:" + j);
            div.appendChild(myTxt);
        }
        else if(outcome === "\nYou win the round!")
        {
            playerScore++;
            const myTxt = document.createTextNode(outcome);
            div.appendChild(myTxt);
        }
        else if(outcome === "\nIt's a tie, please keep playing.")
        {
             i--;
             const myTxt = document.createTextNode(outcome);
             div.appendChild(myTxt);
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
};

//Main
final.innerText = game();