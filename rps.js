// Rock, Paper, Scissors Game

   let playerChoice = ("Rock", "Paper", "Scissors");
   let computerChoice = Math.random();
        if (computerChoice < .34) {
        computerChoice = "Rock";
        } else if (computerChoice < .67) {
        computerChoice = "Paper";
        } else {
         computerChoice = "Scissors";
    }

   
  let play = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a Draw";
    };

    if (choice1 === "Rock") {
        if (choice2 === "Paper") {
            return "Paper Wins!";
        } else {
            return "Rock Wins!";
        };
    }

    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return "Paper Wins!";
        } else {
            return "Scissors Wins!";
        };
    };

    if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            return "Rock Wins!";
        } else {
            return "Scissors Wins!"
        };
    }
   };


console.log("Player Choice " + playerChoice);
console.log("Computer Choice " + computerChoice);
console.log(play(playerChoice, computerChoice));
