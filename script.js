let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (human, computer, secret) => {
  if (human < 0 || human > 9) {
    window.alert("Your number is out of range. The range is 0 - 9.");
    return;
  }
  if (human === secret || human - secret === computer - secret) {
    return true;
  }
  if (Math.abs(human - secret) <= Math.abs(computer - secret)) {
    return true;
  }
  return false;
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
    return;
  }
  if (winner === "computer") {
    computerScore++;
    return;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
