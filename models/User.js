module.exports = (sequelize, type) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: type.INTEGER(12),
        primaryKey: true,
        autoIncrement: true
      },
      firstname: {
        type: type.STRING,
        allowNull: false
      },
      lastname: {
        type: type.STRING,
        allowNull: false
      },
      email: {
        type: type.STRING,
        allowNull: false
      },
      password: {
        type: type.STRING,
        allowNull: false
      },
      admin: {
        type: type.BOOLEAN,
        allowNull: false
      },
      dob: {
        type: type.DATEONLY,
        allowNull: false
      },
      gender: {
        type: type.ENUM("male", "female"),
        allowNull: false
      }
    },
    {
      tableName: "user" //optional
    }
  );

  User.associate = models => {
    User.hasMany(models.UserAddress, {
      foreignKey: "user_id",
      as: "users"
    });
  };

  return User;
};
