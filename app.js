/**
 * Created by kumar_000 on 2/21/2017.
 */
var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs');

app.listen(8000);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function (socket) {
    socket.emit('server-event');
    socket.on('client-event', function (data) {
        console.log('Hello, ' + data.name);
    });
});