var TripModel = require('../models/index.js').Trip;

var findAll = function(callback) {
  TripModel.findAll().then(function(trips) {
    callback(trips)
  }).catch(function(err) {
    console.log(err);
  })
}

var findOne = function(query, callback) {
  TripModel.find({where: query}).then(function(err, trip) {
    if(err) {
      callback(err)
    } else {
      callback(trip)        
    }
  });
}

var insertOne = function(trip, callback) {
  TripModel.create(trip).then(function(trip) {
    callback(trip);
  });
}

exports.findAll = findAll;
exports.findOne = findOne;
exports.insertOne = insertOne;