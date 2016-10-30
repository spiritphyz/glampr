var express = require('express');
var userController = require('../../db/controllers/users.js');
var tripController = require('../../db/controllers/trips.js');

var router = express.Router();

router.route('/')
  .post(function(req, res) {
      tripController.insertOne(req.body.tripData, function(trip) {
        console.log('Added trip');
        userController.findOne({where: {email: req.session.email}}, function(user) {

          user.addTrip(trip, {invite_status: 'going', role: 'organizer'}).then(function() {

            userController.inviteMembers(req.body.invitees, trip, function() {
              res.send('Added trip and invited all members');

            })
          });
        })
      });
    });

module.exports = router;