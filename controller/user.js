// Load Input Validation for Error
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load Services
const register = require("../service/user/register");
const login = require("../service/user/login");

const add = require("../service/user/add");

const isAdmin = require("../lib/utils/isAdmin");

// Register Controller
exports.register_user = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  register(req, res, errors);
};

// Login Controller
exports.login_user = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  login(req, res, errors);
};

// Current User Controller
exports.current_user = (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email
  });
};

// Add User Address
exports.add_address = (req, res) => {
  isAdmin(req, res);
  add(req, res);
};
