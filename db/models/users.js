"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Shipment, {
        foreignKey: "usersId",
        as: "shipments",
      });
      Users.hasMany(models.Payments, { foreignKey: "usersId" });
      Users.hasMany(models.Order, { foreignKey: "userId" });
      Users.hasMany(models.Carts, { foreignKey: "userId" });
      Users.hasMany(models.Whishlist, { foreignKey: "userId" });

      Users.hasMany(models.Status_Transaction, { foreignKey: "userId" });
    }
  }
  Users.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      tokenAccess: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tokenRefresh: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
