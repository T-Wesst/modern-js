/*
Game Function:
player must guess a number between a min and max
play gets a certain amount of guesses
Notify player of guesses remaining
Notify player of the correct answer if guesses remaining is zero
let player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN`);
  } else {
    // wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // game over - lost
      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // change border green
      guessInput.style.borderColor = "red";
      // clear input
      guessInput.value = "";
      // tell user guess is incorrect
      setMessage(
        `${guess} is not correct, ${guessesLeft} guessesLeft left`,
        "red"
      );
    }
  }
});

// game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // disable input
  guessInput.disable = true;
  // change border green
  guessInput.style.borderColor = color;
  // set text color
  message.style.color = color;
  // set message
  setMessage(msg);
  // play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// get winning num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
