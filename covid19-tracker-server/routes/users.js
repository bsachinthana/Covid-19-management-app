var express = require('express');
var router = express.Router();
var jwtValidator = require("../util/jwt-validator");

var User = require('../models/user.model');

router.use(jwtValidator);

router.post('/add', function (req, res, next) {
  if (req.body.name == "" || req.body.email == "") {
    res.status(400).json({ message: 'INSUFFICIENT_DATA' });
  }
  var user = new User(req.body);
  user.setPassword(req.body.password);
  user.password = password;
  user.salt = salt;
  user.save(function (err, result) {
    if (err) return res.status(500).json({ msg: 'Error adding user', data: err });
    return res.status(200).json(result);
  });
});
module.exports = router;
