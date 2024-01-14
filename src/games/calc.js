import { getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  return operators[getRandomInRange(0, operators.length - 1)]
};

const calculation = (num1, num2, operator) => { 
  switch (operator) { 
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomInRange();
  const secondNumber = getRandomInRange();
  const operator = getRandomOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculation(firstNumber, secondNumber, operator);

  return [question, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};
