'use strict';

let score = 20;

const scoreDisplay = document.querySelector('.score');

scoreDisplay.textContent = score;

// setting game random number

const secretNumber = Math.trunc(Math.random() * 20 + 1);

// correct answer display
const correctAnswerDisplay = document.querySelector('.number');
const messageDisplay = document.querySelector('.message');
const body = document.querySelector('body');

// getting user guess

const guessInput = document.querySelector('.guess');

const checkButton = document.querySelector('.check');

checkButton.addEventListener('click', function () {
  let userGuess = Number(guessInput.value);

  // checking if score = 0
  if (score === 0) {
    messageDisplay.textContent = '💥 You lost the game!';
    return;
  } else {
    // check if number is equal to the secret number
    if (userGuess === secretNumber) {
      correctAnswerDisplay.textContent = secretNumber;
      messageDisplay.textContent = '🎉 Correct number!';
      body.style.backgroundColor = '#60b347';
    }

    // check if number is higher than the secret number
    else if (userGuess > secretNumber) {
      messageDisplay.textContent = '📈 Too high!';
      score = score - 1;
      scoreDisplay.textContent = score;
    }
    // check if number is smaller than the secret number
    else {
      messageDisplay.textContent = '📉 Too low!';
      score = score - 1;
      scoreDisplay.textContent = score;
    }
  }
});

// reset button

const playAgainButton = document.querySelector('.again');

playAgainButton.addEventListener('click', function () {
  // reset score
  score = 20;
  scoreDisplay.textContent = score;
  messageDisplay.textContent = 'Start guessing...';

  // clearing user input
  guessInput.value = '';
});
