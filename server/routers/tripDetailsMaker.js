var express = require('express');
var userController = require('../../db/controllers/users.js');
var tripController = require('../../db/controllers/trips.js');

var router = express.Router();

router.route('/')
  .post(function(req, res) {
      tripController.insertOne(req.body.tripData, function(trip) {
        console.log('Added trip');
        userController.inviteMembers(req.body.invitees, trip, function() {
          console.log('Invited member')
          res.end();
        })
      });
    });

module.exports = router;