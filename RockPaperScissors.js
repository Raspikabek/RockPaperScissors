var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
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
var compare = function(choice1, choice2){
    if (choice1 === choice2){
        return "The result is a tie!";
    }
    if (choice1 === "rock"){
    if (choice2 === "scissors"){
        return "Rock wins";
    }else 
    {
        return "Paper wins";
    }
}
    if (choice1 === "paper"){
        if(choice2 === "rock"){
            return "Paper wins";
        }else
        {
            return "Scissors wins";
        }
    }
    if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "Rock wins";
        }else
        {
            return "Scissors wins";
        }
    }
};
console.log(compare(userChoice, computerChoice));