const models = require("../../models");
const { Product } = models;

module.exports = function read(req, res) {
  Product.findByPk(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ msg: "Product not found!" });
      }
      res.json(product);
    })
    .catch(err => res.json(err));
};
