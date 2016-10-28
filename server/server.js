var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');

var tripInfoRouter = require('./routers/tripInfo.js');
var userRouter = require('./routers/users.js');
var termsRouter = require('./routers/terms.js');
var util = require('../db/controllers/utilities.js');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/users', userRouter);
app.use('/tripInfo', tripInfoRouter);
app.use('/terms', termsRouter);

// wildcard route
app.get('/*', function(req, res) {
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});