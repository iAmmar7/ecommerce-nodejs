// Load Services
const add = require("../service/category/add");
const read = require("../service/category/read");
const edit = require("../service/category/edit");
const remove = require("../service/category/remove");

// Add-Category Controller
exports.add_category = (req, res) => {
  add(req, res);
};

// Read-Category Controller
exports.read_category = (req, res) => {
  read(req, res);
};

// Edit-Category Controller
exports.edit_category = (req, res) => {
  edit(req, res);
};

// Edit-Category Controller
exports.remove_category = (req, res) => {
  remove(req, res);
};
