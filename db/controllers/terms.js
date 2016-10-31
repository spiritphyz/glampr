var Trip = require('../models/index.js').Trip;
var Term = require('../models/index.js').Term;
var User = require('../models/index.js').User;
var TripsUsers = require('../models/index.js').TripsUsers;

var findAll = function(tripId, callback) {
  Term.findAll({where: {trip_id: tripId}}).then(function(terms) {
    callback(terms);
  })
}

var parseTermData = function(termData) {

  var termCategory = [];

  for (var category in termData) {
    termCategory[category.slice('category'.length)] = termData[category]
  }

  var termContent = [];

  termCategory.forEach(function(category) {
    var l = (Object.keys(category).length - 1) / 2;
    for (var  i = 0; i < l; i++) {
      termContent.push({
        'category': category.title,
        'description': category['description' + i]
      })
    }
  })
  return termContent;
}

var insertTerms = function(terms, tripId, callback) {

  var termsArr = parseTermData(terms)

  Trip.find({where: {id: tripId}}).then(function(trip) {
    var insertOne = function(termIndex) {
      if(termIndex === termsArr.length) {
        callback(terms);
        return;
      }
      Term.create(termsArr[termIndex]).then(function(term) {
        term.setTrip(trip).then(function() {
          insertOne(termIndex + 1);
        });
      });
    }
    insertOne(0);
  })
}

var acceptTerms = function(decision, userEmail, tripId, callback) {
  User.find({where: {email: userEmail}}).then(function(user) {
    
    TripsUsers.find({where: {id: user.get('id'), trip_id: tripId}}).then(function(tripUser) {
      if (decision) {
        tripUser.updateAttributes({
          invite_status: 'accepted'
        })
      } else {
        tripUser.updateAttributes({
          invite_status: 'rejected'
        })
      }
    })

  })
}

exports.findAll = findAll;
exports.insertTerms = insertTerms;
exports.acceptTerms = acceptTerms;










