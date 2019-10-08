const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const models = require('../../models');
const {
  User
} = models;

// @route   Get api/users/test
// @desc    Test users route
// @access  Public
router.get('/test', (req, res) => {
  res.json({
    msg: "User API Works"
  })
});

// @route Post api/users/register
// @desc Signup User
// @access Public
router.post('/register', (req, res) => {
  console.log(req.body);
  User
    .create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log("Registration Error " + err))
});



module.exports = router;