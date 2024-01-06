import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const makeProgression = (firstNumber = 1, step = 1) => {
    const arr = [];
    const length = getRandomInRange(5, 10);
    
    for (let i = 0; i < length; i++) {
        arr.push(firstNumber + (step * i));
    }
    
    return arr;
};

const generateRound = () => {
    const firstNumber = getRandomInRange(0, 4);
    const step = getRandomInRange(2, 10);

    const progression = makeProgression(firstNumber, step);

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