var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

var tripInfoRouter = require('./routers/tripInfo.js');
var userRouter = require('./routers/users.js');
var termsRouter = require('./routers/terms.js');
var util = require('./routers/utilities.js');
var userController = require('../db/controllers/users.js');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(session({
  secret: 'yo baby, it\'s a hush puppy',
  resave: false,
  saveUninitialized: true
}));

app.use('/users', userRouter);
// FIXME: check to see if checkAuth can be added here
//app.use('/users', util.checkAuth, userRouter);
app.use('/tripInfo', tripInfoRouter);
app.use('/terms', termsRouter);

/* auth routes -------------------------------------------------------------- */
app.get('/login', function(req, res) {
  res.redirect('/#/SignIn');
});

app.post('/login', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  userController.findOne({'email': email, 'password': password}, function(user) {
    if (!user) {
      res.redirect('/login');
    } else {
      userController.comparePassword(user, password, function(match) {
        if (match) {
          util.createSession(req, res, user);
        } else {
          res.redirect('/login');
        }
      });
    }
  });
});

app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  });
});

app.get('/signup', function(req, res) {
  res.redirect('/signup');
});

app.post('/signup', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  userController.findOne({'email': email, 'password': password}, function(user) {
    if (!user) {
      bcrypt.hash(password, null, null, function(err, hash) {
        userController.create({
          email: email,
          password: hash
        }, function(user) {
          util.createSession(req, res, user);
        });
      });
    } else {
      console.log('Account already exists');
      userController.update(user, function() {
        // res.redirect('/');
        res.send('existing user updated');
      });
    }
  });
});
/* auth routes end ---------------------------------------------------------- */


// wildcard route
app.get('/*', function(req, res) {
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});