//noinspection SpellCheckingInspection
/**
 * Created with IntelliJ IDEA.
 * User: reevesd
 * Date: 1/9/13
 * Time: 1:53 PM
 * To change this template use File | Settings | File Templates.
 */

var nconf = require('nconf');

var sio = require('socket.io');
var app = require('express')
    , server = require('http').createServer(app)
    , io = sio.listen(server);

nconf.file({file: './config.json'});
var port = nconf.get('port');
server.listen(port);

server.on('listening',function(){
    console.log('listening on port: '+ port);
});

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});