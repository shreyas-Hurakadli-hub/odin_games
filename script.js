let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let num = Math.floor(Math.random()*10)
    if(num < 3){
        return "rock";
    }else if (num >= 3 && num <6){
        return "paper"
    }else{
        return "scissors"
    }
}
function getHumanChoice(){
    return prompt("enter your choice").toLowerCase();
    
}



function playround(humanAns , computerAns){
    if(humanAns == computerAns){
        return "its a draw!";
    }else if(humanAns=="rock" && computerAns=="paper"){
        computerScore++;
        return "you lose! paper beats rock!"
    }else if(humanAns=="rock" && computerAns=="scissors"){
        humanScore++;
        return "you win! rock beats scissors!"
    }else if(humanAns=="paper" && computerAns=="scissors"){
        computerScore++
        return "you lose! scissors beats paper!"    
    }else if(humanAns=="paper" && computerAns=="rock"){
        humanScore++
        return "you win! paper beats rock!"    
    }else if(humanAns=="scissors" && computerAns=="paper"){
        humanScore++
        return "you win! scissors beats paper!"    
    }else if(humanAns=="scissors" && computerAns=="rock") {
        computerScore++
        return "you lose! rock beats scissors"
    }else{
        return "enter a valid string!"
    }    
}

function playGame(){
    let humanAns = getHumanChoice();
    let computerAns = getComputerChoice();
    return playround(humanAns,computerAns);
}

for(let i = 0 ; i<5 ; i++){
    console.log(playGame());
}
console.log(`humanScore : ${humanScore}`);
console.log(`computerScore : ${computerScore}`);
if(humanScore > computerScore){
    console.log("congraluations You Won!");
}else if(humanScore < computerScore){
    console.log("You Lost, Better luck next time");
}else{
    console.log("its a draw!!")
}