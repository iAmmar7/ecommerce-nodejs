const models = require("../../models");
const { UserAddress } = models;

module.exports = function edit(req, res) {
  UserAddress.findByPk(req.params.id)
    .then(address => {
      if (!address) {
        return res
          .status(404)
          .json({ msg: "No address has added to this key!" });
      }

      return UserAddress.update(
        {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          postal: req.body.postal,
          country: req.body.country,
          phone: req.body.phone,
          user_id: req.user.id
        },
        {
          where: {
            id: req.params.id,
            user_id: req.user.id
          }
        }
      )
        .then(address => res.json(address))
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
};
