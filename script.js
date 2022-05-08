//global variables
const arrayPlay = ["Rock", "Paper", "Scissors"];

//functions
function computerPlay() //returns a random play between rock, paper or scissors
{
   return arrayPlay[Math.floor(Math.random()* arrayPlay.length)];
}

//Main