import { getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 50);
  const secondNumber = getRandomInRange(0, 50);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);

  return [question, answer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};
