var express = require('express');
var tripController = require('../../db/controllers/trips.js');
var userController = require('../../db/controllers/users.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
    userController.findOne({'email': req.session.email}).success(function(user) {
        tripController.findOne({'user_id': user.get('id')}, function(trip) {
          req.session.tripId = trip.get('id');
          res.send(trips);
        });
      });
    });

module.exports = router;

// *** user signs up, if they have not been invited then they are a maker
// *** make create trip button if new user is organizer