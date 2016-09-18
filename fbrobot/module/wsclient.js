var Promise = require('promise')
var WebSocketClient = require('websocket').client

var client = new WebSocketClient()

var WS_SERVER = 'ws://localhost:8888/chat/delicate-rice-2207/'

var WSClient = function () {
  return new Promise(function (resolve, reject) {

    var client = new WebSocketClient()

    client.on('connectFailed', function (error) {
      console.log('Connect Error: ' + error.toString())
      reject(error)
    })

    client.on('connect', function (connection) {
      console.log('WebSocket Client Connected')

      connection.on('error', function (error) {
        console.log('Connection Error: ' + error.toString())
      })
      connection.on('close', function () {
        console.log('Connection Closed')
      })
      connection.on('message', function (message) {
        if (message.type === 'utf8') {
          console.log("Received: '" + message.utf8Data + "'")
        }
      })

      resolve(connection)
    })

    // TODO: shoule be refactor here
    client.connect(WS_SERVER)
  })
}

WSClient.prototype.sendMessage = function (message) {
}

var ClientModule = function () {
}

ClientModule.getInstance = function () {
  // TODO:
  // create connection once for different room?
  if (this.instance === undefined) {
    this.instance = new WSClient()
  }
  return this.instance
}

module.exports = ClientModule
