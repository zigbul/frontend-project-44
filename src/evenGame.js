import readlineSync from 'readline-sync';

//options
let isActive = true;
let userPointsCounter = 0;
const userTargetPoints = 3;
let userName = '';
const maxRandomNumber = 101;
const evenDevider = 2;
const positiveAnswer = 'yes';
const negativeAnswer = 'no';

//intro
export const greeting = () => {
console.log('Welcome to the Brain Games!');
userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log(`Answer "${positiveAnswer}" if the number is even, otherwise answer "${negativeAnswer}"`);
}

//game logic
export default () => {
    while(isActive) {
        const randomNumber = Math.floor(Math.random() * maxRandomNumber);

        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const isEven = randomNumber % evenDevider === 0 && userAnswer === positiveAnswer;
        const isOdd = randomNumber % evenDevider !== 0 && userAnswer === negativeAnswer;
        const isCorrect = isEven || isOdd;
        const isEvenWrong = randomNumber % evenDevider === 0 && userAnswer !== positiveAnswer;
        const isOddWrong = randomNumber % evenDevider !== 0 && userAnswer !== negativeAnswer;
        const isWrong = isEvenWrong || isOddWrong;
        
        if (isCorrect) {
            userPointsCounter += 1;
            console.log('Correct!');
        } else if (isWrong) {
            isActive = false;
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEvenWrong ? positiveAnswer : negativeAnswer}"`);
        }

        if (userPointsCounter === userTargetPoints) {
            isActive = false;
            console.log(`Congratulations, ${userName}!`);
        }
    }
}