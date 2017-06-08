var net = require('net');
var socket = new net.Socket();

socket.connect(8080, 'localhost');
socket.on('connect', function() {
    console.log('已连接');
});
socket.on('end', () => console.log('结束'));
socket.write()