var express = require('express');
var userController = require('../../db/controllers/users.js');
var tripController = require('../../db/controllers/trips.js');

var router = express.Router();

router.route('/maker')
  .post(function(req, res) {
      tripController.insertOne(req.body.tripData, function(trip) {
        console.log('Added trip');
        userController.inviteMembers(req.body.invitees, trip, function() {
          console.log('Invited member')
          res.end();
        })
      });
    });

router.route('/user')
  .get(function(req, res) {
    // userController.get
  })

module.exports = router;  