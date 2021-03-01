//Module Demo
// Exporting module functions, or export the entire module as an object
const EventEmitter = require('events')
const events = require('events')


var url = 'http://entryplus.net'

function logMessage(message) {
    console.log(message)
}

function anotherFunc(eventEmitter) {
    console.log(`Another function called with the message ${eventEmitter}`)
    eventEmitter.emit('raiseEvent',{id : 1, message : 'Hello'})

}



module.exports.anotherFunc = anotherFunc
module.exports.logMessage = logMessage
