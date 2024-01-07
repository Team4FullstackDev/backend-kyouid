'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Status_Transaction extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Status_Transaction.init(
		{
			id: {
				allowNull: false,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			paymentId: {
				type: DataTypes.CHAR(50),
				allowNull: false,
			},
			userId: {
				type: DataTypes.CHAR(50),
				allowNull: false,
			},
			paymentUserId: {
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
			modelName: 'Status_Transaction',
		}
	);
	return Status_Transaction;
};
