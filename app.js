// function sayHello(name) {
//   console.log('Hello, ' + name)
// }

// sayHello('Wayne')

/**
 * In Node, the global execution content is called "global" (not like in Chrome we have "window")
 * Module - Every file in Node.js is considered a Module
 */
// console.log(module) 

// const log = require('./logger');
// log('hi')

const path = require('path');

let pathObj = path.parse(__filename);

console.log(pathObj);