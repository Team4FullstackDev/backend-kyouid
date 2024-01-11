"use strict";

const crypto = require("node:crypto");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          id: crypto.randomUUID(),
          title: "Product 1",
          price: 100,
          description: "Description for Product 1",
          minimumCredits: 50,
          stock: 10,
          category: "Category 1",
          series: "Series 1",
          status: "Ready-Stock",
          character: "Character 1",
          manufacture: "Manufacture 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          title: "Product 2",
          price: 150,
          description: "Description for Product 2",
          minimumCredits: 75,
          stock: 20,
          category: "Category 2",
          series: "Series 2",
          status: "Ready-Stock",
          character: "Character 2",
          manufacture: "Manufacture 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "97df1c0c-6cb2-499b-98c7-ee2a238fd85f",
          title: "Product 3",
          price: 170,
          description: "Description for Product 3",
          minimumCredits: 60,
          stock: 100,
          category: "Category 3",
          series: "Series 3",
          status: "Ready-Stock",
          character: "Character 3",
          manufacture: "Manufacture 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f1baca44-102b-4157-9439-1a249bc3a9fa",
          title: "Product 4",
          price: 200,
          description: "Description for Product 4",
          minimumCredits: 100,
          stock: 50,
          category: "Category 4",
          series: "Series 4",
          status: "Ready-Stock",
          character: "Character 4",
          manufacture: "Manufacture 34",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "95522666-bc5f-4a1b-899e-4c236ed74a59",
          title: "Product 5",
          price: 250,
          description: "Description for Product 5",
          minimumCredits: 200,
          stock: 55,
          category: "Category 5",
          series: "Series 5",
          status: "Ready-Stock",
          character: "Character 5",
          manufacture: "Manufacture 5",
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
