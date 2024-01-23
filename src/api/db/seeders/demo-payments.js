"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Payments",
      [
        {
          id: "38ed0c92-f60c-40d0-80da-35b8ea3a4fc8",
          paymentDate: new Date(),
          paymentMethod: "Credit Card",
          amount: 100,
          usersId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "8f30b69b-33d1-4892-a5dd-955e62c48cbf",
          paymentDate: new Date(),
          paymentMethod: "Credit Card",
          amount: 100,
          usersId: "7f7cc341-81a2-457a-a9af-dc7d387c3418",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d2de7985-50b6-48eb-84ad-7447a7b0da19",
          paymentDate: new Date(),
          paymentMethod: "Credit Card",
          amount: 100,
          usersId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "0b0468ae-2acb-461d-94a8-cd527fee0cb3",
          paymentDate: new Date(),
          paymentMethod: "Credit Card",
          amount: 100,
          usersId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
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
