const min = 1;
const max = 100;
const secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
let numGuesses = 0;
const maxAttempts = 5; // Maximum number of attempts allowed

const guessButton = document.getElementById("guess-button");
const guessInput = document.getElementById("guess-input");
const resultParagraph = document.getElementById("result");
const guessesParagraph = document.getElementById("guesses");

guessButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    resultParagraph.innerText = "Invalid guess. Please enter a number between 1 and 100.";
  } else {
    numGuesses++;
    if (guess === secretNumber) {
      resultParagraph.innerText = `Congratulations! You guessed the secret number (${secretNumber}) in ${numGuesses} guesses.`;
      guessButton.disabled = true;
    } else if (numGuesses === maxAttempts) {
      resultParagraph.innerText = `Sorry, you have exceeded the maximum number of attempts. The secret number was ${secretNumber}.`;
      guessButton.disabled = true;
    } else if (guess < secretNumber) {
      resultParagraph.innerText = "Too low. Try again.";
    } else {
      resultParagraph.innerText = "Too high. Try again.";
    }
    guessesParagraph.innerText = `Guesses: ${numGuesses}`;
  }
});
