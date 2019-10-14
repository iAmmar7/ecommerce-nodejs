module.exports = (sequelize, type) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: type.INTEGER(12),
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is required!"
          }
        }
      },
      description: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is required!"
          }
        }
      },
      current_price: {
        type: type.INTEGER(12),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price is required!"
          }
        }
      },
      has_stock: {
        type: type.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Stock boolean value is required!"
          }
        }
      },
      current_quantity: {
        type: type.INTEGER(12),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Current quantity of this product is required!"
          }
        }
      },
      is_active: {
        type: type.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Active field is required!"
          }
        }
      },
      category_id: {
        type: type.INTEGER(12),
        allowNull: false
      }
    },
    {
      tableName: "product"
    }
  );

  Product.associate = models => {
    Product.belongsTo(models.Category, {
      foreignKey: "category_id"
    });
  };

  return Product;
};
