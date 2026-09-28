
import { validateInput, playRound, generateRandomNumber } from './loteriaService.js';

describe('Lottery Logic Tests', () => {

  test('should return "Ganaste" when user number matches the generated number', () => {
    const userNumber = 7;
    const generatedNumber = 7;

    const result = playRound(userNumber, generatedNumber);

    expect(result).toEqual({
      userNumber: 7,
      randomNumber: 7,
      result: 'Ganaste'
    });
  });

  test('should return "Perdiste" when user number does not match the generated number', () => {
    const userNumber = 4;
    const generatedNumber = 8;

    const result = playRound(userNumber, generatedNumber);

    expect(result).toEqual({
      userNumber: 4,
      randomNumber: 8,
      result: 'Perdiste'
    });
  });


});