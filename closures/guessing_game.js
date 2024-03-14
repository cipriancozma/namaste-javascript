function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 100);
  let count = 0;
  let gameOver = false;
  return function (num) {
    count += 1;

    if (gameOver) {
      return "The game is over, you already won!";
    }

    if (randomNumber === num) {
      gameOver = true;
      return `You win! You found ${num} in ${count} ${
        count > 1 ? "guesses" : "guess"
      }.`;
    }

    if (randomNumber > num) {
      return `${num} is too low!`;
    } else if (randomNumber < num) {
      return `${num} is too high!`;
    }
  };
}

let game = guessingGame();
