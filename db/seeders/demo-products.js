'use strict';

const crypto = require('node:crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Products',
			[
				{
					id: crypto.randomUUID(),
					title: 'Product 1',
					price: 100,
					description: 'Description for Product 1',
					minimumCredits: 50,
					stock: 10,
					category: 'Category 1',
					series: 'Series 1',
					character: 'Character 1',
					manufacture: 'Manufacture 1',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: crypto.randomUUID(),
					title: 'Product 2',
					price: 150,
					description: 'Description for Product 2',
					minimumCredits: 75,
					stock: 20,
					category: 'Category 2',
					series: 'Series 2',
					character: 'Character 2',
					manufacture: 'Manufacture 2',
					createdAt: new Date(),
					updatedAt: new Date(),
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
