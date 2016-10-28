var express = require('express');
var termsController = require('../../db/controllers/terms.js');

var router = express.Router();

router.route('/maker/:tripId')
  .post(function(req, res) {
      termsController.insertTerms(req.body, req.params.tripId, function(data) {
        console.log('Inserted new terms')
        res.send('done')
      })
    })

router.route('/user/:tripId')
  .post(function(req, res) {
      
    })
  .get(function(req, res) {
      termsController.findAll(req.params.tripId, function(terms) {
        console.log(terms);
        res.json(terms)
      })
    })


module.exports = router;  