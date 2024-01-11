"use strict";
const crypto = require("node:crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Carts",
      [
        {
          id: crypto.randomUUID(),
          userId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          productId: "97df1c0c-6cb2-499b-98c7-ee2a238fd85f",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          userId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          productId: "f1baca44-102b-4157-9439-1a249bc3a9fa",
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          userId: "7f7cc341-81a2-457a-a9af-dc7d387c3418",
          productId: "97df1c0c-6cb2-499b-98c7-ee2a238fd85f",
          quantity: 3,
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
