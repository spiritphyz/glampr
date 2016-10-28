var UserModel = require('../models/index.js').User;
var TripModel = require('../models/index.js').Trip;

console.log(Object.keys(TripModel.associations.users));
console.log(Object.keys(TripModel.associations.users.target));

var findAll = function(callback) {
  UserModel.findAll().then(function(users) {
    callback(users);
  }).catch(function(err) {
    console.log(err);
  });
};

var findOne = function(query, callback) {
  UserModel.find({where: query}).then(function(err, user) {
    if (err) {
      callback(err);
    } else {
      callback(user);        
    }
  });
};

var insertMembers = function(users, trip, callback) {
  var insertOne = function(userIndex) {
    if (userIndex === users.length) {
      callback();
      return;
    }
    UserModel.create(users[userIndex]).then(function(user) {
      user.addTrip(trip).then(function() {
        insertOne(userIndex + 1);
      });
    });
  };
  insertOne(0);
};


exports.findAll = findAll;
exports.findOne = findOne;
exports.insertMembers = insertMembers;


















