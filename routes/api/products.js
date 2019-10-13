const express = require("express");
const router = express.Router();
const passport = require("passport");

// Product Controller
const ProductController = require("../../controller/product");

// @route api/products/add-product
// @desc Add Product
// @access Private
router.post(
  "/add-product",
  passport.authenticate("jwt", { session: false }),
  ProductController.add_product
);

module.exports = router;
