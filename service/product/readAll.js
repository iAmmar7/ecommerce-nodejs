const models = require("../../models");
const { Product } = models;

const isEmpty = require("../../validation/is_empty");

module.exports = function read(req, res) {
  Product.findAll()
    .then(products => {
      if (isEmpty(products)) {
        return res.status(404).json({ msg: "No products found!" });
      }
      res.json(products);
    })
    .catch(err => res.json(err));
};
