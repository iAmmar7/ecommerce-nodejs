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
// @priv User
router.post(
  "/address/add",
  passport.authenticate("jwt", { session: false }),
  UserController.add_address
);

// @route /api/users/address/read
// @desc Read User Addresses
// @access Private
// @priv User
router.get(
  "/address/read",
  passport.authenticate("jwt", { session: false }),
  UserController.read_address
);

// @route /api/users/address/edit/id
// @desc Edit User Address
// @access Private
// @priv User
router.put(
  "/address/edit/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.edit_address
);

// @route /api/users/address/remove/id
// @desc Remove User Address
// @access Private
// @priv User
router.delete(
  "/address/remove/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.remove_address
);

module.exports = router;
