var userChoice = prompt("Do you choose rock, paper or scissors?"); //The Player must input rock, paper or scissors
var computerChoice = Math.random(); //Random between 0 and 1. This is the Random selection of the Computer.

	if (computerChoice < 0.34) {
		computerChoice = "rock";
	    console.log("The computer choose Rock!");
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	    console.log("The computer choose Paper!");
	} else {
		computerChoice = "scissors";
	    console.log("The computer choose Scissors!");
	}
	
var compare = function(choice1, choice2){ //This function compare the results between the Player versus the Computer Random choice.
    if (choice1 === choice2){
        return "The result is a tie!";
    }
    if (choice1 === "rock"){
    if (choice2 === "scissors"){
        return "You Win!";
    }else 
    {	
        return "Computer Wins";
    }
}
    if (choice1 === "paper"){
        if(choice2 === "rock"){
            return "You Win!";
        }else
        {
            return "Computer Wins";
        }
    }
    if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "Computer Wins";
        }else
        {
            return "You Win!";
        }
    }
};
alert("The computer choose " + computerChoice + "\n" + compare(userChoice, computerChoice)); //Result.