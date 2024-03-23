function game(){
	let ask = prompt("rock, paper or scissors?.. CHOOSE ONE!!")
	let choice = ["rock","paper","scissors"]
	let computerc = Math.floor(Math.random()* choice.length)
	let genr = choice[computerc]

	if(ask === "rock" && genr === "rock"){
		return "DRAW !!, Both choose rock"
	}
	else if(ask === "rock" && genr === "paper"){
		return "Computer Wins !!, paper wraps rock"
	}
	else if(ask === "rock" && genr === "scissors"){
		return "You Win !!, rock breaks scissors"
	}
	else if(ask === "paper" && genr === "rock"){
		return "You Win !!, paper wraps rock "
	}
	else if(ask === "paper" && genr === "scissors"){
		return "Computer Wins !!, scissors cut paper"
	}
	else if(ask === "paper" && genr === "paper"){
		return "DRAWW !!, Both choose paper"
	}
	else if(ask === "scissors" && genr === "rock"){
		return "Computer Wins !!, rock breaks scissors"
	}
	else if(ask === "scissors" && genr === "paper"){
		return "You Win !!, scissors cut paper"
	}
	else if(ask === "scissors" && genr === "scissors"){
		return "DRAW !!, Both choose scissors"
	}
}


console.log(game())


