'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Whishlist extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Whishlist.init(
		{
			id: {
				allowNull: false,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			userId: {
				type: DataTypes.CHAR(50),
				allowNull: false,
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
			modelName: 'Whishlist',
		}
	);
	return Whishlist;
};
