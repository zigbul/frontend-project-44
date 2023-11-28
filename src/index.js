import readlineSync from 'readline-sync';

//general options
let userPointsCounter = 0;
const userMaxPoints = 3;
let userName = '';
let userAnswer = '';
const maxRandomNumber = 101;

//even game options
const evenDevider = 2;
const positiveAnswer = 'yes';
const negativeAnswer = 'no';

//calc game options
const operations = ['+', '-', '*'];

//helpers
const randomizer = (gap = 1) => {
    return Math.floor(Math.random() * gap);
}

const askQuestion = (question) => {
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
}

const printCorrect = () => {
    console.log('Correct!');
}

const printWrong = (userAnswer, result) => {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}"`);
}

const compareResult = (userAnswer, result) => {
    if (userAnswer === result) {
        userPointsCounter += 1;
        printCorrect();
    }
    else {
        userPointsCounter = userMaxPoints;
        printWrong(userAnswer, result);
    }
}

const printGameOver = () => {
    console.log(`Congratulations, ${userName}!`);
}

//main functions
export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
}

export const evenGame = () => {
    console.log(`Answer "${positiveAnswer}" if the number is even. otherwise answer "${negativeAnswer}"`);

    while(userPointsCounter < userMaxPoints) {
        const randomNumber = randomizer(maxRandomNumber);
        askQuestion(randomNumber);

        const isEven = randomNumber % evenDevider === 0 
        const result = isEven ? positiveAnswer : negativeAnswer;

        compareResult(userAnswer, result);
    }
    
    printGameOver();
}

export const calcGame = () => {
    console.log("What is the result of the expression? ");

    while(userPointsCounter < userMaxPoints) {
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

        compareResult(userAnswer, result.toString());
    }

    printGameOver();
}