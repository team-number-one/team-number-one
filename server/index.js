var express = require('express');
var db = require('../database-mysql');

// middleware
var bodyParser = require('body-parser');

var app = express();

// set what we are listening on
app.set('port', process.env.PORT || 3000);

// parsing
app.use(bodyParser.json());

// routes
app.get('/', function (req, res) {
  res.send('Hello, World!');
});

// server client files
app.use(express.static(__dirname + '/../react-client/dist'));

// If we are being run directly, run the server
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
};
