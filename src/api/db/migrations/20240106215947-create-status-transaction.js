'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Status_Transactions', {
			id: {
				allowNull: false,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			paymentId: {
				type: Sequelize.CHAR(50),
				allowNull: false,
			},
			userId: {
				type: Sequelize.CHAR(50),
				allowNull: false,
			},
			paymentUserId: {
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
		await queryInterface.dropTable('Status_Transactions');
	},
};
