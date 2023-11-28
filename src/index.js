import readlineSync from 'readline-sync';

//general options
let isActive = true;
let userPointsCounter = 0;
const userMaxPoints = 3;
let userName = '';
let userAnswer = '';

//even game options
const maxRandomNumber = 101;
const evenDevider = 2;
const positiveAnswer = 'yes';
const negativeAnswer = 'no';

//calc game options
const operations = ['+', '-', '*'];

//helpers
const randomizer = (gap = 1) => {
    return Math.floor(Math.random() * gap);
}

const askQuestion = (random) => {
    console.log(`Question: ${random}`);
    userAnswer = readlineSync.question('Your answer: ');
}

const printCorrect = () => {
    console.log('Correct!');
}

const printWrong = (userAnswer, result) => {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}"`);
}

const endGame = () => {
    isActive = false;
    console.log(`Congratulations, ${userName}!`);
}

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
}

//main functions
export const evenGame = () => {
    console.log(`Answer "${positiveAnswer}" if the number is even. otherwise answer "${negativeAnswer}"`);

    while(isActive) {
        const randomNumber = randomizer(maxRandomNumber);
        askQuestion(randomNumber);

        const isEven = randomNumber % evenDevider === 0 && userAnswer === positiveAnswer;
        const isOdd = randomNumber % evenDevider !== 0 && userAnswer === negativeAnswer;
        const isCorrect = isEven || isOdd;
        const isEvenWrong = randomNumber % evenDevider === 0 && userAnswer !== positiveAnswer;
        const isOddWrong = randomNumber % evenDevider !== 0 && userAnswer !== negativeAnswer;
        const isWrong = isEvenWrong || isOddWrong;

        const result = isEvenWrong ? positiveAnswer : negativeAnswer;

        if (isCorrect) {
            userPointsCounter += 1;
            printCorrect();
        } else if (isWrong) {
            isActive = false;
            printWrong(userAnswer, result);
        }

        if (userPointsCounter === userMaxPoints) {
            endGame();
        }
    } 
}

export const calcGame = () => {
    console.log("What is the result of the expression? ");

    while(isActive) {
        const operation = operations[randomizer(3)];
        const firstNumber = randomizer(maxRandomNumber);
        const secondNumber = randomizer(maxRandomNumber);
        let result = 0;

        switch(operation) {
            case '+':
                askQuestion(`${firstNumber} + ${secondNumber}`);
                result = firstNumber + secondNumber;
                break;
            case '-':
                askQuestion(`${firstNumber} - ${secondNumber}`);
                result = firstNumber - secondNumber;
                break;
            case '*':
                askQuestion(`${firstNumber} * ${secondNumber}`);
                result = firstNumber * secondNumber;
                break;
            default:
                break;
        }

        const isCorrect = result.toString() === userAnswer;

        if (isCorrect) {
            userPointsCounter += 1;
            printCorrect();
        }
        else {
            isActive = false;
            printWrong(userAnswer, result);
        }

        if (userPointsCounter === userMaxPoints) {
            endGame();
        }
    }
}