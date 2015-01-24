// Declare the cozy app handler
'use strict';

var pathExtra = require('path-extra');
var express = require('express');
var http = require('http');


var cozyHandler = {
  // put your own properties there
  start: function(options, done) {

    var hostname = options.hostname || '127.0.0.1';

    // var anotherPort = options.getPort(); // Get another port if needed

    var app = express();
    app.use(express.static(pathExtra.join(__dirname, '/public') ) );
    app.get('/some', function(req, res){
      // put app logic
    });

    var server = http.createServer(app);
    server.listen(options.port, hostname);

    done(null, app, server);

  },
  stop: function(done) {
    // put stop logic here
    done();
  }
};

module.exports = cozyHandler;
