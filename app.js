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

