var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var User = require('../../db/models/users.js');

var isLoggedIn = function(req) {
  return req.session ? !!req.session.email : false;
};

exports.checkAuth = function(req, res, next) {
  if (!isLoggedIn(req)) {
    res.send(false);
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser, response) {
  return req.session.regenerate(function() {
    req.session.email = newUser.email;
    req.session.password = newUser.password;
    res.send(response);
  });
};