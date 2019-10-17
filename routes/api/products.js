const express = require("express");
const router = express.Router();
const passport = require("passport");

// Product Controller
const ProductController = require("../../controller/product");

// @route api/products/add
// @desc Add Product
// @access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  ProductController.add_product
);

// @route api/products/read/:id
// @desc Read Product
// @access Private
router.get("/read/:id", ProductController.read_product);

// @route api/products/read-all
// @desc Read Product
// @access Private
router.get("/read-all", ProductController.readAll_product);

// @route api/products/edit/:id
// @desc Edit Product
// @access Private
router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  ProductController.edit_product
);

// @route api/products/remove/:id
// @desc Delete Product
// @access Private
router.delete(
  "/remove/:id",
  passport.authenticate("jwt", { session: false }),
  ProductController.remove_product
);

module.exports = router;
