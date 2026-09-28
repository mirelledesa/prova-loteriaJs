export function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function validateInput(inputValue) {
  if (inputValue === null || inputValue === undefined || inputValue.trim() === '') {
    return { isValid: false, message: 'Por favor, introduce un número.' };
  }

