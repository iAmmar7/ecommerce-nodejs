const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const models = require("../../models");
const {
  User
} = models;

// @route   Get api/users/test
// @desc    Test users route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    msg: "User API Works",
  });
});

// @route Post api/users/register
// @desc Signup User
// @access Public
router.post("/register", (req, res) => {
  const errors = {};

  // User.create(req.body)
  //   .then(user => res.json(user));

  User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(user => {
      if (user) {
        errors.email = "Email already exist";
        return res.status(400).json(errors);
      } else {
        console.log(user);

        const newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          admin: req.body.admin,
          dob: req.body.dob,
          gender: req.body.gender
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
          });
        });
      }
    })
    .catch(err => console.log(`User registration API error ${err}`));
});

// @route /api/users/login
// @desc Log in User
// @access public
router.post("/login", (req, res) => {
  const errors = {};

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({
      where: {
        email
      }
    })
    .then(user => {
      if (!user) {
        errors.email = "User not found";
        return res.status(400).json(errors);
      }

      // Compare password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              username: user.username,
              email: user.email
            }

            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey, {
                expiresIn: 120
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                })
              }
            )
          } else {
            errors.password = "Password is incorrect!";
            return res.status(400).json(errors);
          }
        })
    })
})

// @route /api/users/current
// @desc Logged in User
// @access private
router.get(
  "/current",
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email
    });
  }
);

module.exports = router;