const proto = require('protoo-server')
const http = require('http')


const httpServer = http.createServer()
httpServer.listen(5000, () => {
    console.log('start server at port 5000')
})


const server = new proto.WebSocketServer(httpServer)

server.on('connectionrequest', () => {
    console.log('new connection')
})