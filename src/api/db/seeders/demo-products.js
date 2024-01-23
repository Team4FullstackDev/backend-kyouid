'use strict';

const crypto = require('node:crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Products',
			[
				{
					id: '97df1c0c-6cb2-499b-98c7-ee2a238fd85f',
					title:
						'PVC Figure Kamado Nezuko - Kimetsu no Yaiba Kizuna no Sou Vol.45 (18cm)',
					price: 300000,
					description: 'Description for Product 3',
					minimumCredits: 60,
					stock: 100,
					category: 'Prize Figure',
					series: 'Kimetsu no Yaiba',
					status: 'Ready-Stock',
					character: 'Kamado Nezuko',
					manufacture: 'Bandai Spirits',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 'f1baca44-102b-4157-9439-1a249bc3a9fa',
					title: 'Product 4',
					price: 200,
					description: 'Description for Product 4',
					minimumCredits: 100,
					stock: 50,
					category: 'Category 4',
					series: 'Series 4',
					status: 'Ready-Stock',
					character: 'Character 4',
					manufacture: 'Manufacture 34',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: '95522666-bc5f-4a1b-899e-4c236ed74a59',
					title: 'Product 5',
					price: 250,
					description: 'Description for Product 5',
					minimumCredits: 200,
					stock: 55,
					category: 'Category 5',
					series: 'Series 5',
					status: 'Ready-Stock',
					character: 'Character 5',
					manufacture: 'Manufacture 5',
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
