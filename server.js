const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

let waitingPlayer;

app.use(express.static(__dirname + '/client'));

io.on('connection', onConnection);

const port = 8383;
server.listen(port, () => console.log(`Your app is running on port ${port}`));

function onConnection(sock) {
    sock.emit('msg', 'Hello');

    if(waitingPlayer) {
        //Match starts;
        io.emit('msg', 'Match starts');
        waitingPlayer = null;
    } else {
        waitingPlayer = sock;
        sock.emit('msg', 'Your are waiting for second player')
    }

    sock.on('msg', (text) => io.emit("msg", text))
}