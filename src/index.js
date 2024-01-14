import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');

    if (answer.toString() === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
