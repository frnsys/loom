var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

(function() {

  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);

  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

})();

////////////////////////////////
///////// ROUTES HERE //////////
////////////////////////////////

app.get('/', function(req, res){
    res.sendFile(__dirname + '/sim/main/index.html');
});

app.get('/quiz', function(req, res){
    res.sendFile(__dirname + '/sim/quiz/index.html');
});


if (require.main === module) {
  var stream = fs.createWriteStream("simulation.log");
  stream.once('open', function(fd) {
    var server = http.createServer(app);

    server.listen(process.env.PORT || 8081, function() {
      console.log("Listening on %j", server.address());
    });

    process.on('exit', function() {
      // Add shutdown logic here.
      stream.end();
    });

    var io = require('socket.io')(server);

    io.on('connection', (socket) => {
      console.log('connect ' + socket.id);

      socket.on('echo', function (data) {
        console.log("echoing back data!");
        socket.emit('message', data);
      });

      socket.on('broadcast', function (data) {
        // broadcasting data
        socket.broadcast.emit('message', data);
        stream.write(`${JSON.stringify(data)}\n`);
      });


      socket.on('disconnect', () => console.log('disconnect ' + socket.id));

    });
  });

}


///////// express server a


