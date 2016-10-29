var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

var tripDetailsMakerRouter = require('./routers/tripDetailsMaker.js');
var gearViewMakerRouter = require('./routers/gearViewMaker.js');
var termsMakerRouter = require('./routers/termsMaker.js');
var termsUserRouter = require('./routers/termsUser.js');
var userHomeRouter = require('./routers/userHome.js');
var shoppingListRouter = require('./routers/shoppingList.js');

var userRouter = require('./routers/users.js');

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

app.use('/tripDetailsMaker', tripDetailsMakerRouter)
app.use('/gearViewMaker', gearViewMakerRouter)
app.use('/termsMaker', termsMakerRouter)
app.use('/termsUser', termsUserRouter)
app.use('/userHome', userHomeRouter)
app.use('/shoppingList', shoppingListRouter)

app.use('/users', userRouter); // for testing

/* auth routes -------------------------------------------------------------- */
app.post('/SignIn', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  userController.findOne({'email': email}, function(user) {
    if (!user) {
      res.redirect('/SignIn');
      // res.send('user doesn\'t exist, redirect to login');
    } else {
      userController.comparePassword(user, password, function(match) {
        if (match) {
          util.createSession(req, res, user);
        } else {
          res.redirect('/SignIn');
          // res.send('passwords don\'t match');
        }
      });
    }
  });
});

app.get('/SignOut', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/');
    // res.send('session destroyed');
  });
});

app.post('/SignUp', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  userController.findOne({'email': email}, function(user) {
    if (!user) {
      bcrypt.hash(password, null, null, function(err, hash) {
        req.body.password = hash;
        userController.create(req.body, function(user) {
          util.createSession(req, res, user);
        });
      });
    } else {
      console.log('Account already exists');
      bcrypt.hash(password, null, null, function(err, hash) {
        req.body.password = hash;
        userController.update(user, req, function() {
          res.redirect('/');
          // res.send('existing user updated');
        });
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