'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Orders', {
			id: {
				allowNull: false,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			orderDate: {
				type: Sequelize.DATE,
			},
			totalPrice: {
				type: Sequelize.DECIMAL,
			},
			userId: {
				type: Sequelize.CHAR(50),
				allowNull: false,
			},
			shipmentId: {
				type: Sequelize.CHAR(50),
				allowNull: false,
			},
			shipmentUsersId: {
				type: Sequelize.CHAR(50),
				allowNull: false,
			},
			paymentId: {
				type: Sequelize.CHAR(50),
				allowNull: false,
			},
			paymentUsersId: {
				type: Sequelize.CHAR(50),
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Orders');
	},
};
