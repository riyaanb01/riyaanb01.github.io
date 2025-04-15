let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resetButton = document.getElementById("reset-button");
const message = document.getElementById("message");

// Check Guess Function
function checkGuess() {
    const userGuess = Number(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please Enter a Vaid Number Between 1 and 100.'
        return;
    } 
    attempts++;
    if (userGuess === secretNumber) {
        message.textContent = `Congratultions! You Guessed the Number in ${attempts} attempts`;
        guessButton.style.display = 'none'
        resetButton.style.display = 'inline-block';
    } else if (userGuess < secretNumber) {
        message.textContent = 'Too Low! Try Again.'
    } else {
        message.textContent = 'Too High! Try Again.'
    }
};

// Reset Game Function
function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    guessInput.value = '';
    guessButton.style.display = 'inline-block';
    resetButton.style.display = 'none';
}

// Add Event Listener
guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);