const bcrypt = require("bcryptjs");

const models = require("../../models");
const { User } = models;

module.exports = function register(req, res, err) {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        err.email = "Email already exist!";
        return res.status(400).json(err);
      } else {
        const newUser = new User({
          firstname:
            req.body.firstname
              .trim()
              .charAt(0)
              .toUpperCase() + req.body.firstname.trim().slice(1),
          lastname:
            req.body.lastname
              .trim()
              .charAt(0)
              .toUpperCase() + req.body.firstname.trim().slice(1),
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
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(`User registration API error ${err}`));
};
