// Load Services
const add = require("../service/product/add");

// Add-Post Controller
exports.add_product = (req, res) => {
  add(req, res);
};
