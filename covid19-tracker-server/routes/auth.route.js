var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../util/config');

var User = require('../models/user.model');

// Login Route
router.post('/login', function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({ 'email': email }, function (err, profile) {

    if (err) return res.status(500).json(err);

    if (!profile) {
      res.status(400).json({ msg: 'user doesn\'t exist' });
    } else if (!profile.validPassword(password)) {
      res.status(400).json({ msg: 'Incorrect Password' });

    } else {
      const payload = {
        name: profile.name,
        email: profile.email,
        accessLvl: profile.accessLevel
      };
      var token = jwt.sign(payload, config.secret, {
        expiresIn: '1d' // expires in 24 hours
      });
      res.status(200).json({ profile: payload, token: token });
    }
  });
});

router.get('/validate', function (req, res, next) {
  var token = req.get('Authorization');;
  console.log(token);
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        return res.status(401).json({ message: 'INVALID_TOKEN' });
      } else {
        return res.status(200).json({ message: decoded });
      }
    });

  } else {
    // if there is no token
    // return an error
    return res.status(500).json({ status: 500, message: 'NO_TOKEN' });
  }
});
// Add user route
module.exports = router;