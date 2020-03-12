/**
 * Provide logging as a service
 */

const EventEmitter = require('events'); //EventEmitter is a class!!!

let url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send a HTTP request
    console.log(message)
    //Raise an event - we need a listener
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}



module.exports = Logger;