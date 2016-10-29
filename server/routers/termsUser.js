// ***Needs Work****
// Need get tripId from session for get and post
// Need to get tripId and userId from session for post only
var express = require('express');
var termsController = require('../../db/controllers/terms.js');

var router = express.Router();

router.route('/:tripId')
  .get(function(req, res) {
      termsController.findAll(req.params.tripId, function(terms) {
        console.log(terms);
        res.json(terms)
      })
    })
  .post(function(req, res) {
      termsController.acceptTerms(req.session.userId, req.params.tripId, function() {
        res.send({redirect: '/shoppingList'})
      })
    })


module.exports = router;  