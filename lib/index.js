'use strict';

const Stack = require('./stack.js');
const Queue = require('./queue.js');

let myStack = new Stack();
let myQueue = new Queue();

myStack.push(1);
myStack.push(2);
console.log(myStack);
myStack.pop();
console.log(myStack);

myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
