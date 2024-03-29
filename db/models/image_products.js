'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Image_Products extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Image_Products.init(
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				autoIncrement: true,
				allowNull: false,
			},
			thumbnail: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			images: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			productsId: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Image_Products',
		}
	);
	return Image_Products;
};
