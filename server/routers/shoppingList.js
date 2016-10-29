var express = require('express');
var gearController = require('../../db/controllers/gear.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
      gearController.findAll(req.session.tripId, function(gears) {
        console.log(gears);
        res.json(gears)
      })
    })
  .post(function(req, res) {
      gearController.editGearStatus(req.session.userId, req.session.tripId, function() {
        res.send('success');
      })
    })


module.exports = router;  