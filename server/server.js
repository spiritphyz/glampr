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

app.use('/tripDetailsMaker', util.checkAuth, tripDetailsMakerRouter)
app.use('/gearViewMaker', util.checkAuth, gearViewMakerRouter)
app.use('/termsMaker', util.checkAuth, termsMakerRouter)
app.use('/termsUser', util.checkAuth, termsUserRouter)
app.use('/tripDetailsUser', util.checkAuth, userHomeRouter)
app.use('/shoppingList', util.checkAuth, shoppingListRouter)

app.use('/users', userRouter); // for testing

/* auth routes -------------------------------------------------------------- */
app.post('/SignIn', function(req, res) {
  var email = req.body.username;
  var password = req.body.password;

  userController.findOne({where: {email: email}}, function(user) {
    console.log('*******Recieve signin ', user)
    user.getTrips().then(function(trips) {
      var tripId = false;
      if(trips[0] !== undefined) {
        tripId = trips[0].get('id');
      }

      var response = {};
      response.status = tripId;
      console.log('response: ', response);
      if (!user) {
        response.auth = false;
        res.send(response)
      } else {
        console.log(user.get('first_name'))
        console.log(password)
        userController.comparePassword(user, password, function(match) {
          console.log('match: ', match)
          if (match) {
            console.log('its a match')
            response.auth = true;
            util.createSession(req, res, user, response);
          } else {
            response.auth = false;
            res.send(response)
          }
        });
      }      
    })
  });
});

app.get('/SignIn', util.checkAuth, function(req, res) {
  userController.findOne({where: {email: req.session.email}}, function(user) {
    user.getTrips().then(function(trips) {
      var tripId = false;
      if (trips[0] !== undefined) {
        tripId = trips[0].get('id');
      }
      res.send({status: tripId, auth: true})
    })
  })
});

app.get('/SignUp', util.checkAuth, function(req, res) {
  res.send(true)//*****
});

app.get('/SignOut', function(req, res) {
  req.session.destroy(function() {
    // res.redirect('/');
    res.send('session destroyed');
  });
});

app.post('/SignUp', function(req, res) {

  var email = req.body.email;
  var password = req.body.password;

  userController.findOne({where: {email: email}}, function(user) {

    if (!user) {
      bcrypt.hash(password, null, null, function(err, hash) {
        req.body.password = hash;
        userController.create(req.body, function(user) {
          util.createSession(req, res, user, true);
        });
      });

    } else {  //if user exists

      console.log('Account already exists');
      bcrypt.hash(password, null, null, function(err, hash) {

        req.body.password = hash;

        if (user.get('first_name') === null) {
          userController.update(user, req, function() {
            util.createSession(req, res, user, true);
          });
        }

        else {
          res.send(false);
        }
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