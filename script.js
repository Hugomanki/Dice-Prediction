const oddRadio = document.getElementById('odd');
const evenRadio = document.getElementById('even');
const rollBtn = document.getElementById('rollBtn');
const diceDiv = document.querySelector('.die');
const resultDiv = document.getElementById('result');

let playerChoice;
let isRolling = false;

function rollDice() {
  if (isRolling) return;
  isRolling = true;

  diceDiv.textContent = ''; // Clear the dice display
  diceDiv.classList.add('blur'); // Add blur effect

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceDiv.textContent = randomNumber;
    diceDiv.classList.remove('blur');
    checkResult(randomNumber);
    isRolling = false;
  }, 1000);
}

function checkResult(diceNumber) {
  const isEven = diceNumber % 2 === 0;
  let result;
  if (playerChoice === 'odd' && !isEven) {
    result = 'You Win!';
  } else if (playerChoice === 'even' && isEven) {
    result = 'You Win!';
  } else {
    result = 'You Lose!';
  }
  resultDiv.textContent = `Result: ${result}`;
}

oddRadio.addEventListener('change', () => {
  playerChoice = 'odd';
  rollBtn.disabled = false;
});

evenRadio.addEventListener('change', () => {
  playerChoice = 'even';
  rollBtn.disabled = false;
});

rollBtn.addEventListener('click', rollDice);