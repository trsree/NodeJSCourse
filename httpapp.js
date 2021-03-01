const http = require('http')

const httpServer = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello Sree')
        res.end()
    }

    if(req.url === '/apis') {
        res.write(JSON.stringify([{id : 1, name: 'Sree', role: 'Staff'}, {id:2, name:'BM', role:'Staff'}]))
        res.end();
    }
})

// This httpServer.on() listener is for low level socket conections 
/*
httpServer.on('connection', (socket) => {
    console.log("New Connection on port 3000")
});

*/
httpServer.listen(3000)
console.log('Listening on port 3000')
