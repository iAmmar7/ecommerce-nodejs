// Load Services
const add = require("../service/category/add");
const edit = require("../service/category/edit");

// Add-Category Controller
exports.add_category = (req, res) => {
  add(req, res);
};

// Edit-Category Controller
exports.edit_category = (req, res) => {
  edit(req, res);
};
