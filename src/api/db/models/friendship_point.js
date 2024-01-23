"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Friendship_Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Friendship_Point.belongsTo(models.Products, { foreignKey: "productsId" });
    }
  }
  Friendship_Point.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      totalPoints: {
        type: DataTypes.INTEGER,
      },
      productsId: {
        type: DataTypes.CHAR(50),
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
      modelName: "Friendship_Point",
    }
  );
  return Friendship_Point;
};
