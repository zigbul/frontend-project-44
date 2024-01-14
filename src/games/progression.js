import { getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const makeProgression = (firstNumber = 0, step = 2, length = 5) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + (step * i));
  }

  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 4);
  const step = getRandomInRange(2, 10);
  const length = getRandomInRange(5, 10);

  const progression = makeProgression(firstNumber, step, length);

  const swapSymbol = '..';
  const randomIndex = getRandomInRange(0, progression.length - 1);
  const answer = progression[randomIndex];
  progression[randomIndex] = swapSymbol;

  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
    const rules = 'What number is missing in the progression?';
    runEngine(rules, generateRound);
};
