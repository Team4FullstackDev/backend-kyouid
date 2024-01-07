'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Carts extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Carts.init(
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				autoIncrement: true,
				allowNull: false,
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			userId: {
				type: DataTypes.CHAR(50),
			},
			productId: {
				type: DataTypes.CHAR(50),
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
			modelName: 'Carts',
		}
	);
	return Carts;
};
