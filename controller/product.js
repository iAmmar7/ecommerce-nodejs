// Load Services
const add = require("../service/product/add");
const read = require("../service/product/read");
const readAll = require("../service/product/readAll");
const edit = require("../service/product/edit");
const remove = require("../service/product/remove");
const isAdmin = require("../lib/utils/isAdmin");

// Add-Product Controller
exports.add_product = (req, res) => {
  isAdmin(req, res);
  add(req, res);
};

// Read-Product Controller
exports.read_product = (req, res) => {
  read(req, res);
};

// Read All Products Controller
exports.readAll_product = (req, res) => {
  readAll(req, res);
};

// Edit-Product Controller
exports.edit_product = (req, res) => {
  isAdmin(req, res);
  edit(req, res);
};

// Delete-Product Controller
exports.remove_product = (req, res) => {
  isAdmin(req, res);
  remove(req, res);
};
