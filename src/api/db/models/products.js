"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.Image_Products, {
        foreignKey: "productsId",
      });
      Products.hasMany(models.Carts, {
        foreignKey: "productId",
      });
      Products.hasMany(models.Whishlist, {
        foreignKey: "productsId",
      });
      Products.hasMany(models.Discounts, {
        foreignKey: "productsId",
      });
      Products.hasMany(models.Friendship_Point, {
        foreignKey: "productsId",
      });
    }
  }

  Products.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      minimumCredits: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      series: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      character: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      manufacture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );

  return Products;
};
