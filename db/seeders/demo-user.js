'use strict';
const crypto = require('node:crypto');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					id: crypto.randomUUID(),
					fullName: 'John Doe',
					username: 'jane',
					email: 'john.doe@example.com',
					password: '123456',
					birthDate: new Date('1990-01-01'),
					phoneNumber: 1234567890,
					tokenAccess: 'access_token_value',
					tokenRefresh: 'refresh_token_value',
					isAdmin: true,
				},
				{
					id: crypto.randomUUID(),
					fullName: 'Jane Smith',
					username: 'jane',
					email: 'jane.smith@example.com',
					password: '123456',
					birthDate: new Date('1985-05-15'),
					phoneNumber: 9876543210,
					tokenAccess: 'another_access_token',
					tokenRefresh: 'another_refresh_token',
					isAdmin: false,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
