import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomInRange();

  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
    const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    runEngine(rules, generateRound);
};
