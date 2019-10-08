module.exports = (sequelize, type) => {
  const User = sequelize.define('User', {
    id: {
      type: type.INTEGER(12),
      primaryKey: true,
      autoIncrement: true
    },
    username: type.STRING,
    email: type.STRING,
    password: type.STRING
  }, {
    tableName: "users" //optional
  });

  return User;
}