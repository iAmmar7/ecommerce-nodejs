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

// @route api/categories/read
// @desc Read Category
// @access Private
router.get(
  "/read",
  passport.authenticate("jwt", { session: false }),
  CategoryController.read_category
);

// @route api/categories/edit/:id
// @desc Edit Category
// @access Private
router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  CategoryController.edit_category
);

// @route api/categories/remove/:id
// @desc Delete Category
// @access Private
router.delete(
  "/remove/:id",
  passport.authenticate("jwt", { session: false }),
  CategoryController.remove_category
);

module.exports = router;
