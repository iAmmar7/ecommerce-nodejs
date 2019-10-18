const models = require("../../models");
const { UserAddress, User } = models;

module.exports = function read(req, res) {
  UserAddress.findAll({
    where: {
      user_id: req.user.id
    },
    include: [User]
  })
    .then(address => {
      if (!address) {
        return res.status(404).json({ msg: "User Address not found!" });
      }
      res.json(address);
    })
    .catch(err => res.json(err));
};
