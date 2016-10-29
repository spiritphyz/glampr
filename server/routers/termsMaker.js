var express = require('express');
var termsController = require('../../db/controllers/terms.js');

var router = express.Router();

router.route('/:tripId')
  .post(function(req, res) {
      termsController.insertTerms(req.body, req.params.tripId, function(data) {
        console.log('Inserted new terms')
        res.send('done')
      })
    })

module.exports = router;  