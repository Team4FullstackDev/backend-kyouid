'use strict';
const crypto = require('node:crypto');
const { hashPassword } = require('../../util/passwordHash');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					id: '92f4a682-3aab-4b86-9423-67dd0da7fa4b',
					fullName: 'jane Doe',
					username: 'jane',
					email: 'jane@example.com',
					password: await hashPassword('123456'),
					birthDate: new Date('1990-01-01'),
					phoneNumber: 1234567890,
					tokenAccess: 'access_token_value',
					tokenRefresh: 'refresh_token_value',
					isAdmin: true,
				},
				{
					id: '05b21974-9093-4d71-aafb-95c23a9fbd6d', // biar bisa nyambung ke seeding lainnya
					fullName: 'John Smith',
					username: 'john',
					email: 'john.smith@example.com',
					password: await hashPassword('123456'),
					birthDate: new Date('1980-01-01'),
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
