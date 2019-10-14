const models = require("../../models");
const { Category } = models;

module.exports = function remove(req, res) {
  Category.findByPk(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(400).json({ msg: "Category not found!" });
      }
      return Category.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(result => res.json(result))
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
};
