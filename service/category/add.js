const models = require("../../models");
const { Category } = models;

module.exports = function add(req, res) {
  Category.create({
    name: req.body.name,
    position: req.body.position
  })
    .then(category => res.json(category))
    .catch(err => console.log(`Add category API error ${err}`));
};
