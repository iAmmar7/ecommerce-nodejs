// Load Services
const add = require("../service/category/add");

// Add-Category Controller
exports.add_category = (req, res) => {
  const errors = {};

  add(req, res, errors);
};
