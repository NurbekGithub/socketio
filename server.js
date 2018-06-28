const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(__dirname + '/client'));

io.on('connection', (sock) => sock.emit('msg', 'Hello'));

const port = 8383;
server.listen(port, () => console.log(`Your app is running on port ${port}`))