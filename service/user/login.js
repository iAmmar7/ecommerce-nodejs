const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load User Model
const models = require("../../models");
const { User } = models;

module.exports = function login(req, res, err) {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ where: { email } })
    .then(user => {
      if (!user) {
        err.email = "User not found";
        return res.status(400).json(err);
      }

      // Compare password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            email: user.email
          };

          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 120
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          err.password = "Password is incorrect!";
          return res.status(400).json(err);
        }
      });
    })
    .catch(err => console.log(`Login API error ${err}`));
};
