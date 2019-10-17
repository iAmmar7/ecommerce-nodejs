const models = require("../../models");
const { UserAddress } = models;

module.exports = function add(req, res) {
  UserAddress.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    postal: req.body.postal,
    country: req.body.country,
    phone: req.body.phone,
    user_id: req.user.id
  })
    .then(address => res.json(address))
    .catch(err => res.json(err));
};
