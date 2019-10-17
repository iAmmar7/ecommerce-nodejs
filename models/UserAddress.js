module.exports = (sequelize, type) => {
  const UserAddress = sequelize.define(
    "UserAddress",
    {
      id: {
        type: type.INTEGER(12),
        primaryKey: true,
        autoIncrement: true
      },
      firstname: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "First name is required!"
          }
        }
      },
      lastname: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: "Last name is required!"
        }
      },
      address: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: "Address is required!"
        }
      },
      city: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: "City is required!"
        }
      },
      state: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: "State is required!"
        }
      },
      postal: {
        type: type.INTEGER(12),
        allowNull: false,
        validate: {
          notNull: "Postal is required!"
        }
      },
      country: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: "Country is required!"
        }
      },
      phone: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: "Phone is required!"
        }
      }
    },
    {
      tableName: "user_address" //optional
    }
  );

  UserAddress.associate = models => {
    UserAddress.belongsTo(models.User, {
      foreignKey: "user_id"
    });
  };

  return UserAddress;
};
