var express = require('express');
var tripController = require('../../db/controllers/trips.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
      tripController.findAll(function(trips) {
        res.send(trips);
      });
    });

module.exports = router;