var Trip = require('../models/index.js').Trip;
var Gear = require('../models/index.js').Gear;

var findAll = function(tripId, callback) {
  Gear.findAll({where: {trip_id: tripId}}).then(function(gear) {
    callback(gear);
  })
}


var parseGearData = function(gearData) {
  gearData = gearData[0];
  var gearCategory = [];

  for (var category in gearData) {
    gearCategory[category.slice('category'.length)] = gearData[category]
  }

  var gearContent = [];

  gearCategory.forEach(function(category) {
    var l = (Object.keys(category).length - 1) / 2;
    for (var  i = 0; i < l; i++) {
      gearContent.push({
        'category': category.title,
        'name': category['content' + i],
        'description': category['description' + i]
      })
    }
  })
  return gearContent;
}

var insertGear = function(gear, tripId, callback) {

  gearArr = parseGearData(gear);

  Trip.find({where: {id: tripId}}).then(function(trip) {
    var insertOne = function(gearIndex) {
      if(gearIndex === gearArr.length) {
        callback(gear);
        return;
      }
      Gear.create(gearArr[gearIndex]).then(function(gear) {
        gear.setTrip(trip).then(function() {
          insertOne(gearIndex + 1);
        });
      });
    }
    insertOne(0);
  })
}


exports.findAll = findAll;
exports.insertGear = insertGear;



