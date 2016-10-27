var express = require('express');
var termsController = require('../../db/controllers/terms.js');

var router = express.Router();

router.route('/maker')
  .post(function(req, res) {
    console.log(req.body)
      termsController.insertTerms(req.body.terms, req.body.tripId, function() {
        console.log('Inserted new terms')
        res.send('done')
      })
    })

router.route('/user')
  .post(function(req, res) {
      
    })
  .get(function(req, res) {
      termsController.findAll(req.body.tripId, function(terms) {
        res.json(terms)
      })
    })


module.exports = router;  