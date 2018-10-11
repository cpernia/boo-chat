const express = require('express');
const socketIO = require('socket.io');

const app = express();

const server = app.listen(5000, function(){
    console.log('server is running on port 5000')
});

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('connected');
    socket.on('MSG-FROM-USER', function(data){
        console.log(data);
        console.log(socket.id);
        io.emit('MSG-FROM-SERVER', { sender: data.sender, msg: data.msg });
    });
    // io.emit('MSG-FROM-SERVER', { sender: 'rober', msg: 'msg' });
});
