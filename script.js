'use strict';

let score = 20;
const scoreBox = document.querySelector('.score');
scoreBox.textContent = score;

const secretNumber = Math.trunc(Math.random() * 20 + 1);

console.log(secretNumber);

const userInput = document.querySelector('.guess');

const checkButton = document.querySelector('.check');
const messageDisplay = document.querySelector('.message');

checkButton.addEventListener('click', function () {
  const userGuess = Number(userInput.value);
  if (score === 0) {
    return;
  } else {
    if (userGuess === secretNumber) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      messageDisplay.textContent = '🎉 Correct Number';
    } else if (userGuess > secretNumber) {
      messageDisplay.textContent = 'Too High';
      score = score - 1;
      scoreBox.textContent = score;
    } else {
      messageDisplay.textContent = 'Too low';
      score = score - 1;
      scoreBox.textContent = score;
    }
  }
});

// console.log(Math.trunc((Math.random() * 20)+1));
