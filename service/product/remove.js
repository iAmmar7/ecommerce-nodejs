const models = require("../../models");
const { Product } = models;

module.exports = function remove(req, res) {
  Product.findByPk(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(400).json({ msg: "Product not found!" });
      }
      return Product.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(() => res.status(204).json())
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
};
