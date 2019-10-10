const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.admin = !isEmpty(data.admin) ? data.admin : "";

  if (!Validator.isLength(data.firstname, { min: 2, max: 15 })) {
    errors.firstname = "Firstname should be between 2 to 15 characters!";
  }
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Firstname is required!";
  }

  if (!Validator.isLength(data.lastname, { min: 2, max: 15 })) {
    errors.lastname = "Lastname should be between 2 to 15 characters!";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Lastname is required!";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid!";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required!";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 to 30 characters!";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required!";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match!";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required!";
  }

  if (!Validator.isIn(data.gender, ["male", "female", "other"])) {
    errors.gender = "Gender can only be male, female or other!";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required!";
  }

  if (!Validator.isISO8601(data.dob)) {
    errors.dob = "Date of birth format is wrong!";
  }
  if (Validator.isEmpty(data.dob)) {
    errors.dob = "Date of birth field is required!";
  }

  if (!Validator.isBoolean(data.admin)) {
    errors.admin = "Admin field must be boolean!";
  }
  if (Validator.isEmpty(data.admin)) {
    errors.admin = "Admin field is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
