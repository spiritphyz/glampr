var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var User = require('../../db/models/users.js');

var isLoggedIn = function(req) {
  // FIXME: check for email, not user
  return req.session ? !!req.session.user : false;
};

exports.checkAuth = function(req, res, next) {
  if (!isLoggedIn(req)) {
    res.redirect('/#/SignIn');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    req.session.email = newUser.email;
    req.session.password = newUser.password;
    // res.redirect('/');
    res.send('session created');
  });
};