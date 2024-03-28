document.addEventListener("DOMContentLoaded",function(){
    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    rock.addEventListener("click", inputRock);
    paper.addEventListener("click", inputPaper);
    scissors.addEventListener("click", inputScissors);
})

let random = function(){
    list = ["rock", "paper", "scissors"];
    let genr = Math.floor(Math.random()*list.length);
    return list[genr];
}

function inputRock(){
    let userChoice = "rock";
    let compareChoice = random();

    if(userChoice === compareChoice){
		result = "DRAW !!, Both choose rock" 
	}
    else if(compareChoice === "paper"){
		result = "You Loose !!, Computer choose paper"
	}
    else if(compareChoice === "scissors"){
		result = "You Win !!, Computer choose scissors"
	}

    let ulist = document.querySelector("#ulist");
    ulist.innerHTML += "<li>" + result + "</li>"
     
}

function inputPaper(){
    let userChoice = "paper";
    let compareChoice = random();

    if(userChoice === compareChoice){
        result = "DRAW !!, Both choose paper"
    }
    else if(compareChoice === "rock"){
        result = "You Win !!, Computer choose rock";
    }
    else if(compareChoice === "scissors"){
        result = "You Loose !!, Computer choose scissors";
    }

    let ulist = document.querySelector("#ulist");
    ulist.innerHTML += "<li>" + result + "</li>"
}

function inputScissors(){
    let userChoice = "scissors";
    let compareChoice = random();

    if(userChoice === compareChoice){
        result = "DRAW !!, Both choose paper"
    }
    else if(compareChoice === "rock"){
        result = "You Loose !!, Computer choose rock";
    }
    else if(compareChoice === "paper"){
        result = "You Win !!, Scissors cut paper";
    }

    let ulist = document.querySelector("#ulist");
    ulist.innerHTML += "<li>" + result + "</li>"
}
