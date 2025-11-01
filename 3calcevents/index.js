import EventEmitter from 'events';
import { add } from './add.js';
import { multiply } from './multiply.js';

let firstNum = Number(process.argv[2]);
let secondNum = Number(process.argv[3]);
let operation = process.argv[4];

const myListener = new EventEmitter();


myListener.addListener('add', () => console.log(add(firstNum, secondNum)));

myListener.addListener('multiply', () => console.log(multiply(firstNum, secondNum)));

myListener.emit(operation);
