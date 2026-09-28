import { validateInput, generateRandomNumber, playRound } from './loteriaService.js';

const history = [];

const lotteryForm = document.getElementById('lotteryForm');
const userNumberInput = document.getElementById('userNumberInput');
const messageSection = document.getElementById('messageSection');
const historyList = document.getElementById('historyList');

function renderMessage(text, type) {
  messageSection.textContent = text;
  messageSection.className = `message-section ${type}`;
}

function renderHistory() {
  historyList.innerHTML = '';

  history.forEach((play) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Tu número: ${play.userNumber} | Número generado: ${play.randomNumber} | Resultado: ${play.result}`;
    historyList.appendChild(listItem);
  });
}

lotteryForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const rawInput = userNumberInput.value;
  const validation = validateInput(rawInput);

  if (!validation.isValid) {
    renderMessage(validation.message, 'error');
    return;
  }

  const userNumber = validation.value;
  const randomNumber = generateRandomNumber();
  const resultObject = playRound(userNumber, randomNumber);

  history.push(resultObject);

  const statusClass = resultObject.result === 'Ganaste' ? 'win' : 'lose';
  const displayMessage = `${resultObject.result}. El número generado fue ${randomNumber}.`;

  renderMessage(displayMessage, statusClass);
  renderHistory();

  userNumberInput.value = ''; 
});