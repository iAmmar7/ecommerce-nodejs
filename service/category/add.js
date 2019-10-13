const models = require("../../models");
const { Category } = models;

module.exports = function add(req, res, err) {
  Category.create({
    name: req.body.name
  })
    .then(category => res.json(category))
    .catch(err => console.log(`Add category API error ${err}`));
};
