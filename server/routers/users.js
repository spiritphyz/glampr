var express = require('express');
var userController = require('../../db/controllers/users.js');
var tripController = require('../../db/controllers/trips.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
    userController.findAll(function(users) {
      res.send(users);
    });
  });

// router.route('/:name')
//   .get(function(req, res) {
//     userController.findOne({
//       first_name: req.params.name.split('_')[0],
//       last_name: req.params.name.split('_')[1]
//      }, function(user) {
//       res.send(user);
//     });
//   });

router.route('/trips')
  .get(function(req, res) {
    tripController.findAll(function(trips) {
      res.send(trips);
    });
  });

module.exports = router;  