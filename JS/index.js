const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initilaize object
const myEmitter = new MyEmitter();

//
myEmitter.on('log', (msg => logEvents(msg)));