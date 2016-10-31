var express = require('express');
var tripController = require('../../db/controllers/trips.js');
var userController = require('../../db/controllers/users.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
    userController.findOne({where: {'email': req.session.email}}, function(user) {
        user.getTrips().then(function(trips) {
          trip = trips[0];
          req.session.tripId = trip.get('id');
          res.send(trip);
        });
      });
    });

module.exports = router;