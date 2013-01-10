//noinspection SpellCheckingInspection
/**
 * Created with IntelliJ IDEA.
 * User: reevesd
 * Date: 1/9/13
 * Time: 1:53 PM
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs')
    , nconf = require('nconf')
    , sio = require('socket.io')
    , express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = sio.listen(server);

// setup nconf to look at comandline, environment variables, then config.json
nconf.argv()
     .env()
     .file({file: './config.json'});

app.configure(function(){
    var port = nconf.get('port');
    app.set('port', port);
    app.set('views', __dirname + '/views');
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

//app.get('/', routes.index);

server.on('listening',function(){
    console.log('listening on port: '+ app.get('port'));
});

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

server.listen(app.get('port'));