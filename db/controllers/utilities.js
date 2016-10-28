var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var User = require('../models/users.js');

var isLoggedIn = function(req) {
  // FIXME: check for email, not user
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next) {
  if (!isLoggedIn(req)) {
    res.redirect('/#/SignIn');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    // FIXME: new session should include
    // tripId
    // email
    req.session.user = newUser;
    res.redirect('/');
  });
};