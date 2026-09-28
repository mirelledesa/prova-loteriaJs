export function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function validateInput(inputValue) {
  if (inputValue === null || inputValue === undefined || inputValue.trim() === '') {
    return { isValid: false, message: 'Por favor, introduce un número.' };
  }

  const parsedNumber = Number(inputValue);

  if (Number.isNaN(parsedNumber)) {
    return { isValid: false, message: 'Por favor, introduce un valor numérico válido.' };
  }

  if (!Number.isInteger(parsedNumber) || parsedNumber < 1 || parsedNumber > 10) {
    return { isValid: false, message: 'El número debe estar entre 1 y 10.' };
  }

  return { isValid: true, value: parsedNumber };
}

export function playRound(userNumber, generatedNumber) {
  const isWinner = userNumber === generatedNumber;
  const resultText = isWinner ? 'Ganaste' : 'Perdiste';

  return {
    userNumber,
    randomNumber: generatedNumber,
    result: resultText
  };
}