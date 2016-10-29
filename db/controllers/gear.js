var Gear = require('../models/index.js').Required;

var findAll = function(callback) {
  Gear.findAll().then(function(gears) {
    callback(trips)
  }).catch(function(err) {
    console.log(err);
  })
}

var findOne = function(query, callback) {
  Gear.find({where: query}).then(function(err, gear) {
    if(err) {
      callback(err)
    } else {
      callback(gear)        
    }
  });
}

var insertOne = function(gear, callback) {
  Gear.create(gear).then(function(gear) {
    callback(gear);
  });
}

exports.findAll = findAll;
exports.findOne = findOne;
exports.insertOne = insertOne;