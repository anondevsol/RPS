// Rock, Paper, Scissors Game

let playerChoice = ("Rock", "Paper", "Scissors"); // How do I select a choice? Why is it a let? What are three strings wrapped in ()?

let computerChoice = Math.random(); // Why assign the number to computer choice then mutate the variable?
if (computerChoice < 0.34) {
  // Probably best to just make them seperate variables. And why Let?
  computerChoice = "Rock";
} else if (computerChoice < 0.67) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}

let play = function (choice1, choice2) {
  // what is chioce 1 and choice 2? Which is player and which is computer? Should rename
  if (choice1 === choice2) {
    return "It's a Draw";
  }

  if (choice1 === "Rock") {
    // Are you familiar with a swtich statement?
    if (choice2 === "Paper") {
      return "Paper Wins!";
    } else {
      return "Rock Wins!"; // Instead. Lets say WHO won. Not WHAT won.
    }
  }

  if (choice1 === "Paper") {
    if (choice2 === "Rock") {
      return "Paper Wins!";
    } else {
      return "Scissors Wins!";
    }
  }

  if (choice1 === "Scissors") {
    if (choice2 === "Rock") {
      return "Rock Wins!";
    } else {
      return "Scissors Wins!";
    }
  }
};

console.log("Player Choice " + playerChoice); // Will always be scissors
console.log("Computer Choice " + computerChoice);
console.log(play(playerChoice, computerChoice));
