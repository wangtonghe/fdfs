var net = require('net');
var server = net.createServer(function(conn) {
    console.log('client conn');
    conn.on('end', () => console.log('客户端关闭'));
    conn.write('hello world\r\n');
    conn.pipe(conn);
});
server.listen(8080, () => console.log('server is listening'));