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

// const path = require('path');
// let pathObj = path.parse(__filename);
// console.log(pathObj);

/**
 * Learn OS module
 */
// const os = require('os');
// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();
// console.log(`Total Memory: ${totalMemory} \nFree Memory: ${freeMemory}`)

/**
 * Learn File System module
 */
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
// fs.readdir('$', (err, files) => {
//   if(err) console.log('Error', err);
//   else console.log('Result', files)
// })

/**
 * Learn event module
 * Event - A signal that something has happened
 */
// const EventEmitter = require('events'); //EventEmitter is a class!!!
// const emitter = new EventEmitter();

// const Logger = require('./logger');
// const logger = new Logger()

// // Register a listener
// logger.on('messageLogged', (eventArg) => {
//   console.log('Listener called', eventArg);
// })

// logger.log('message');



