var express = require('express');
var gearController = require('../../db/controllers/gear.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
      console.log(req.session);
      gearController.findAll(req.session.tripId, req.session.email, function(gears) {
        res.json(gears)
      })
    })
  .post(function(req, res) {
      gearController.editGearStatus(req.body, req.session.email, req.session.tripId, function() {
        res.send('success');
      })
    })

module.exports = router;  