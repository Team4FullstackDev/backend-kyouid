"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Users, { foreignKey: "orderId" });
      Order.belongsTo(models.Shipment, { foreignKey: "shipmentId" });
      Order.belongsTo(models.Payments, { foreignKey: "paymentId" });
    }
  }
  Order.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      orderDate: {
        type: DataTypes.DATE,
      },
      totalPrice: {
        type: DataTypes.DECIMAL,
      },
      userId: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      shipmentId: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      shipmentUsersId: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      paymentId: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      paymentUsersId: {
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
      modelName: "Order",
    }
  );
  return Order;
};
