const express = require("express");
const router = express.Router();
const passport = require("passport");

// User Controllers
const UserController = require("../../controller/user");

// @route Post api/users/register
// @desc Signup User
// @access Public
router.post("/register", UserController.register_user);

// @route /api/users/login
// @desc Log in User
// @access Public
router.post("/login", UserController.login_user);

// @route /api/users/current
// @desc Current Logged in User
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  UserController.current_user
);

// @route /api/users/address/add
// @desc Add User Address
// @access Private
router.post(
  "/address/add",
  passport.authenticate("jwt", { session: false }),
  UserController.add_address
);

module.exports = router;
