const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
    log(signal) {
        console.log(`MyEmitter log function is invoked with the message ${signal}`)
        this.emit(signal,{sigId : 1, name : 'Sree'})
    }  

}
module.exports = MyEmitter