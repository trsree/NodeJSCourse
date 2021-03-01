// To create package.json file directly overriding the default nature of answering the questions use
// npm init --yes
const logger = require('./logger')
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const MyEmitter = require('./EventEmitterDemo')

const signal = 'newSignal'
const myEventEmitter = new MyEmitter()

myEventEmitter.on(signal,function(arg) {
    console.log('New signal is received by the event',arg)
})

myEventEmitter.log(signal)

// Call the logMessage function usin the logger object
logger.logMessage('Hello')

// Register an event
eventEmitter.on('raiseEvent',function(arg) {
    console.log('raiseEvent invoked ',arg.id, arg.message)
})

logger.anotherFunc(eventEmitter)
function sayHello() {
    console.log('Hello World')
    msg = "hello"
    console.log(`Printing Global Module ${msg}`)
    console.log(module)
    console.log('Function End')
}
sayHello()
module.exports = sayHello