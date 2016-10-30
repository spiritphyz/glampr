var express = require('express');
var gearController = require('../../db/controllers/gear.js');

var router = express.Router();

router.route('/')
  .post(function(req, res) {
    console.log(req.session)
      gearController.insertGear(req.body, req.session.tripId, function(data) {
        console.log('Inserted new gear')
        res.send('done')
      })
    })

module.exports = router;  