module.exports = (sequelize, type) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: type.INTEGER(12),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Category name is required!"
          }
        }
      },
      position: {
        type: type.INTEGER(12),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Postion of category is required!"
          }
        }
      }
    },
    {
      tableName: "category"
    }
  );

  Category.associate = models => {
    Category.hasMany(models.Product, {
      foreignKey: "category_id",
      as: "products"
    });
  };

  return Category;
};
