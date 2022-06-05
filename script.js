"use strict";
//variables
const arrayPlay = ["Rock", "Paper", "Scissors"];
const final = document.getElementById("Final");
let playerSelection;
let computerSelection;
let outcome;
let clicked;
let computerScore = 0;
let playerScore = 0;
let counter = 0;

//functions
function computerPlay() //returns a random play between rock, paper or scissors
{
   return arrayPlay[Math.floor(Math.random()* arrayPlay.length)].toLowerCase();
}

function playRound(playerSelection, computerSelection) //returns the outcome of a rock paper scissors round
{
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection == computerSelection)
    {
        return ("It's a tie, please keep playing.");
    }
    else if(
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "rock")
    )
    {
        return ("You lose the round!");
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    )
    {
        return ("You win the round!");
    }
    else 
    {
        return("Please click on Rock, Paper or Scissors.");
    }
}

function playerChoice(id)
{
    const div = document.getElementById("Score");
    playerSelection = id;
    computerSelection = computerPlay();
    outcome = playRound(playerSelection, computerSelection);
    if(outcome == "You lose the round!")
    {
        ++computerScore;
        div.innerText = outcome  + "\nPlayer:" + playerScore + "\nComputer:" + computerScore;
    }
    else if(outcome == "You win the round!")
    {
        ++playerScore;
        div.innerText = outcome  + "\nPlayer:" + playerScore + "\nComputer:" + computerScore;
    }
    else if(outcome == "It's a tie, please keep playing.")
    {
        counter--;
        div.innerText = outcome  + "\nPlayer:" + playerScore + "\nComputer:" + computerScore;
    }
    else
    {
        return "You Canceled the game!"
    }
}

function gameOver(playerScore, computerScore)
{
    if(playerScore > computerScore)
    {
        return final.innerText = "Congratulations! You won the game!";
    }
    else if(playerScore < computerScore)
    {
        return final.innerText = "Too bad, you lost the game";
    }
}

function game(btn)
{
    let player = btn.id.toLowerCase();    
    playerChoice(player);
    counter++;
    if(counter == 5)    
    {
        gameOver(playerScore, computerScore);
        end();
    }
}

function end()
{
    setTimeout(() => {document.location.reload(true)}, 1000);
}
