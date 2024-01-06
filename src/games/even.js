import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const isEven = (num) => {
    return num % 2 === 0 ? "yes" : "no";
};

const generateRound = () => {
    const number = getRandomInRange();

    const question = `${number}`;
    const answer = isEven(number);

    return [question, answer];
};

export default () => { 
    const rules = 'Answer "yes" if the number is even, otherwise answer "no".'; 
    runEngine(rules, generateRound);
};