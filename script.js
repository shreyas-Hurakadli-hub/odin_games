

const resultDiv = document.createElement("div");
const humanScoreDiv = document.createElement("div");
const computerScoreDiv = document.createElement("div");

parent.appendChild(resultDiv);
parent.appendChild(humanScoreDiv);
parent.appendChild(computerScoreDiv);

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");



rock.addEventListener("click", () => {
    playround("rock", getComputerChoice());
    score();
    
});
paper.addEventListener("click", () => {
    playround("paper", getComputerChoice());
    score();
    
});
scissor.addEventListener("click", () => {
    playround("scissors", getComputerChoice());
    score();
    
});

let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function score() {
    if(humanScore == 5){
        resultDiv.textContent = "You won the over all game!";
        humanScore = 0;
        humanScoreDiv.textContent = `Human Score: ${humanScore}`;
        computerScore = 0;
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    }else if(computerScore == 5){
        resultDiv.textContent = "You lost the over all game , better luck next time!";
        humanScore = 0;
        humanScoreDiv.textContent = `Human Score: ${humanScore}`;
        computerScore = 0;
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    }
}
function playround(humanAns , computerAns){
    let result = "";
    if(humanAns == computerAns){
        result = "its a draw!";
    }else if(humanAns=="rock" && computerAns=="paper"){
        computerScore++;
        result = "you lose! paper beats rock!";
    }else if(humanAns=="rock" && computerAns=="scissors"){
        humanScore++;
        result = "you win! rock beats scissors!";
    }else if(humanAns=="paper" && computerAns=="scissors"){
        computerScore++
        result = "you lose! scissors beats paper!";   
    }else if(humanAns=="paper" && computerAns=="rock"){
        humanScore++
        result = "you win! paper beats rock!";    
    }else if(humanAns=="scissors" && computerAns=="paper"){
        humanScore++
        result = "you win! scissors beats paper!";    
    }else if(humanAns=="scissors" && computerAns=="rock") {
        computerScore++
        result = "you lose! rock beats scissors";
    }else{
        result = "enter a valid string!";
    }
   
    resultDiv.textContent = result;
    humanScoreDiv.textContent = `Human Score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
     
    
}





