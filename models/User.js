module.exports = (sequelize, type) => {
  const User = sequelize.define('User', {
    id: {
      type: type.INTEGER(12),
      primaryKey: true,
      autoIncrement: true
    },
    firstname: type.STRING,
    lastname: type.STRING,
    email: type.STRING,
    password: type.STRING,
    admin: type.BOOLEAN,
    dob: type.DATEONLY,
    gender: type.ENUM('male', 'female')
  }, {
    tableName: "users" //optional
  });

  return User;
}