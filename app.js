const choices = ['rock', 'paper', 'scissors'];
const playerChoice=document.getElementById("playerschoice");
const computerChoice =document.getElementById("ComputersChoice");
const resultDisplay = document.getElementById("Result");
const Rockpaperscissorsgame = document.getElementById("RPSgame");

let palyerch;
let computerch;
const click= (e) =>  {
    palyerch = e.target.id;
    innerHTML = 'User choice: ' +palyerch;
    generateComputerChoice();
    thewinner();
  }
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');

    button.id = choices[i] ;
    button.innerHTML = choices[i]
    button.addEventListener('click', click)
    Rockpaperscissorsgame .appendChild(button)
   
  }
  function generateComputerChoice(){
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerch= randomChoice;
    computerChoice .innerHTML = 'Computer choice: ' + computerch;
  }
  function thewinner(){
    if (palyerch + computerch==="scissorspaper")
    resultDisplay.innerHTML = "YOU WIN!";
    else if (palyerch + computerch==="paperrock")
    resultDisplay.innerHTML = "YOU WIN!";
    else if (palyerch + computerch==="rockscissors")
    resultDisplay.innerHTML = "YOU WIN!";
    else if (palyerch+computerch==="paperscissors")
    resultDisplay.innerHTML =  "YOU LOSE!";
    else if (palyerch + computerch==="scissorsrock")
    resultDisplay.innerHTML =  "YOU LOSE!";
    else if (palyerch + computerch==="rockpaper")
    resultDisplay.innerHTML =  "YOU LOSE!";
    else if (palyerch + computerch==="rockrock")
    resultDisplay.innerHTML =  "YOU LOSE!";
    else if (palyerch + computerch==="paperpaper")
    resultDisplay.innerHTML =  "YOU LOSE!";
    else if (palyerch+ computerch==="scissorsscissors")
    resultDisplay.innerHTML =  "YOU LOSE!";
  
    }
    