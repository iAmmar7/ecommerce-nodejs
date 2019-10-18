const { Category, Product } = require("../../models");

const isEmpty = require("../../validation/is_empty");

module.exports = function read(req, res) {
  Category.findAll({
    include: [Product],
    order: [["position", "ASC"]]
  })
    .then(category => {
      if (isEmpty(category)) {
        return res.status(404).json({ msg: "No category found!" });
      }
      res.json(category);
    })
    .catch(err => res.json(err));
};
