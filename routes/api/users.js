const express = require("express");
const router = express.Router();
const passport = require("passport");

// Controllers
const UserController = require("../../controller/user");

// Load User Model
const models = require("../../models");
const { User } = models;

// @route   Get api/users/test
// @desc    Test users route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    msg: "User API Works"
  });
});

// @route Post api/users/register
// @desc Signup User
// @access Public
router.post("/register", UserController.register_user);

// @route /api/users/login
// @desc Log in User
// @access Public
router.post("/login", UserController.login_user);

// @route /api/users/current
// @desc Logged in User
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  UserController.current_user
);

module.exports = router;
