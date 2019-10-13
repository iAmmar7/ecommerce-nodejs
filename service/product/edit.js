const models = require("../../models");
const { Product } = models;

module.exports = function edit(req, res) {
  Product.update(
    {
      title: req.body.title,
      description: req.body.description,
      current_price: req.body.current_price,
      has_stock: req.body.has_stock,
      current_quantity: req.body.current_quantity,
      is_active: req.body.is_active,
      category_id: req.body.category_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(product => res.json(product))
    .catch(err => res.json(err));
};
