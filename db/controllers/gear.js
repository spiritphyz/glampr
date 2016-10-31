var Trip = require('../models/index.js').Trip;
var Gear = require('../models/index.js').Gear;
var User = require('../models/index.js').User;
var GearUsers = require('../models/index.js').GearUsers;
// update directly inside of join table (GearUsers)

var findAll = function(tripId, userEmail, callback) {
  User.find({where: {email: userEmail}}).then(function(user) {
    GearUsers.findAll({where: {user_id: user.get('id'), status: 'i will buy it'}}).then(function(gearUsers) {
      var gears = [];
      var findGear = function(gearIndex) {
        if(gearIndex === gearUsers.length) {
          console.log(gears)
          callback(gears);
          return;
        }
        Gear.find({where: {id: gearUsers[gearIndex].get('gear_id'), trip_id: tripId}}).then(function(gear) {
          console.log(gear.get('name'))
          gears.push(gear);
          findGear(gearIndex + 1);
        })
      }
      findGear(0)
    })
  })
}


var parseGearData = function(gearData) {
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
  var gearArr = parseGearData(gear);

  Trip.find({where: {id: tripId}}).then(function(trip) {
    var insertOne = function(gearIndex) {
      if(gearIndex === gearArr.length) {
        callback(gear);
        return;
      }
      Gear.create(gearArr[gearIndex]).then(function(gear) {
        gear.setTrip(trip).then(function() {
          trip.getUsers().then(function(users) {

            users.forEach(function(user) {
              gear.addUser(user, {status: 'i will buy it'})
            })
            insertOne(gearIndex + 1);
          })
        });
      });
    }
    insertOne(0);
  })
}

var editGearStatus = function(boughtGear, userEmail, tripId, callback) {
  User.find({where: {email: userEmail}}).then(function(user) {
    boughtGear.forEach(function(gearId) {
      GearUsers.find({where: {gear_id: parseInt(gearId), user_id: user.get('id')}})
      .then(function(gearUser) {
        gearUser.updateAttributes({
          status: 'i own it'
        })
      })
    })
  })
}

exports.findAll = findAll;
exports.insertGear = insertGear;
exports.editGearStatus = editGearStatus;


