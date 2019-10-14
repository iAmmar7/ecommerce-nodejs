const models = require("../../models");
const { Category } = models;

module.exports = function edit(req, res) {
  Category.update(
    {
      name: req.body.name,
      position: req.body.position
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(category => res.json(category))
    .catch(err => res.json(err));
};
