var User = require('../models/index.js').User;
var Trip = require('../models/index.js').Trip;

var findAll = function(callback) {
  User.findAll().then(function(users) {
    callback(users)
  }).catch(function(err) {
    console.log(err);
  })
}

var findOne = function(query, callback) {
  User.find({where: query}).then(function(err, user) {
    if(err) {
      callback(err)
    } else {
      callback(user)        
    }
  });
}

var inviteMembers = function(users, trip, callback) {
  var inviteOne = function(userIndex) {
    if(userIndex === users.length) {
      callback();
      return;
    }
    User.find({where: {email: users[userIndex]}}).then(function(user) {
      if (!user) {
        //send invite to user via their email e.g: sendInvite(users[userIndex])
        User.create({email: users[userIndex]}).then(function(user) {
          user.addTrip(trip, {invite_status: 'invited'}).then(function() {
            inviteOne(userIndex + 1);
          });
        })
      } else {
        user.addTrip(trip, {invite_status: 'invited'}).then(function() {
          inviteOne(userIndex + 1);
        });
      }
    });
  }
  inviteOne(0);
}


exports.findAll = findAll;
exports.findOne = findOne;
exports.inviteMembers = inviteMembers;


















