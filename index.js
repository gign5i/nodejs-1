import { add } from './add.js';
import { multiply } from './multiply.js';

let firstNum = process.argv[2];
let secondNum = process.argv[3];
let operation = process.argv[4];

if (operation === 'add') console.log(add(firstNum, secondNum));

if (operation === 'multiply') console.log(multiply(firstNum, secondNum))

