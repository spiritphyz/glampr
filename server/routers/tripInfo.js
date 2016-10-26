var express = require('express');
var userController = require('../../db/controllers/users.js');
var tripController = require('../../db/controllers/trips.js');
var UserModel = require('../../db/models/index.js').UserModel;
var TripModel = require('../../db/models/index.js').TripModel;

var router = express.Router();

router.route('/')
  .post(function(req, res) {
      tripController.insertOne(req.body.tripInfo.tripData, function(trip) {
        console.log('Added trip');
        userController.insertMembers(req.body.tripInfo.members, trip, function() {
          console.log('Added member')
          res.end();
        })
      });
    });

router.route('/tripsUsers') // this route is to test querying through the join table
  .get(function(req, res) {
    // userController.get
  })

module.exports = router;  