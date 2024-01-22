'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			avatar: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			fullName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			username: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			birthDate: {
				type: Sequelize.TIME,
				allowNull: false,
			},
			phoneNumber: {
				type: Sequelize.BIGINT,
				allowNull: false,
			},
			tokenAccess: {
				type: Sequelize.STRING(5000),
				allowNull: true,
			},
			tokenRefresh: {
				type: Sequelize.STRING(5000),
				allowNull: true,
			},
			isAdmin: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
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
		await queryInterface.dropTable('Users');
	},
};
