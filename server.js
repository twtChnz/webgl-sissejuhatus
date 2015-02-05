var express = require('express'),
    server = express();

var browserify = require('browserify');

server.use(express.static(__dirname + '/public'));

server.listen(9000);
console.log('Listening on port 9000');