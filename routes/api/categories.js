const express = require("express");
const router = express.Router();
const passport = require("passport");

// Category Controller
const CategoryController = require("../../controller/category");

// @route api/categories/add
// @desc Add Category
// @access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  CategoryController.add_category
);

module.exports = router;
