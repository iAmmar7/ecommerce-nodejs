const models = require("../../models");
const { UserAddress } = models;

module.exports = function remove(req, res) {
  UserAddress.findByPk(req.params.id)
    .then(address => {
      if (!address) {
        return res.status(400).json({ msg: "User Address not found!" });
      }

      return UserAddress.destroy({
        where: {
          id: req.params.id,
          user_id: req.user.id
        }
      })
        .then(result => res.json(result))
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
};
