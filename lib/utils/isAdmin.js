module.exports = (req, res) => {
  if (!req.user.admin) {
    return res.status(401).json({ msg: "You are not an admin" });
  }
};
