var express = require('express');
var app = express();
var tripInfoRouter = require('./routers/tripInfo.js')
var userRouter = require('./routers/users.js')

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/users', userRouter);
app.use('/tripInfo', tripInfoRouter);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});