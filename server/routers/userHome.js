var express = require('express');
var tripController = require('../../db/controllers/trips.js');
var userController = require('../../db/controllers/users.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
    userController.findOne({'email': req.session.email}, function(user) {
      console.log('user: ', user)
        user.getTrips().then(function(trip) {
          trip = trip[0];
          console.log(trip)
          req.session.tripId = trip.get('id');
          res.send(trip);
        });
      });
    });

module.exports = router;

// *** user signs up, if they have not been invited then they are a maker
// *** make create trip button if new user is organizer