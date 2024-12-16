'use strict';

// random number between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// score
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   when there is no input
  if (!guess) {
    displayMessage(`⛔ No number!`);

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage(`🥳 Correct Number!`);

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is different from the secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // different message if our guess is higher or lower
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`💥 You lost the game`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

// new game
document.querySelector('.again').addEventListener('click', function () {
  // restore initial values of the score and secretNumber variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);

  // restore the initial conditions of the message, number, score and guess input field
  displayMessage(`Start guessing...`);
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
