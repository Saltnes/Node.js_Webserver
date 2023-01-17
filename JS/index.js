const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initilaize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg => logEvents(msg)));