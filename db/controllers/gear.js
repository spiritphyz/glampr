var Trip = require('../models/index.js').Trip;
var Gear = require('../models/index.js').Gear;

var findAll = function(tripId, callback) {
  Gear.findAll({where: {trip_id: tripId}}).then(function(terms) {
    callback(terms);
  })
}

var insertTerms = function(terms, tripId, callback) {
  console.log(terms);
  var termsArr = [];
  for (var category in terms) {
    for (var content in terms[category]) {
      if(content !== 'title') {
        termsArr.push({category: terms[category].title, description: terms[category][content]});        
      }
    }
  }
  console.log(termsArr)
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

var acceptTerms = function(userId, tripId, callback) {
  
}


exports.findAll = findAll;
exports.insertTerms = insertTerms;



