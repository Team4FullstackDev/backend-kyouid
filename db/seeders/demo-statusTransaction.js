"use strict";
const crypto = require("node:crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Status_Transactions",
      [
        {
          id: "fa5e62df-0e3c-492d-96ff-9d3430b9974e",
          status: "Pending",
          paymentId: "38ed0c92-f60c-40d0-80da-35b8ea3a4fc8",
          userId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          paymentUserId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ee477579-7da7-4049-8937-ed418b912e58",
          status: "Pending",
          paymentId: "38ed0c92-f60c-40d0-80da-35b8ea3a4fc8",
          userId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          paymentUserId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3639cf4e-3c7f-47e0-a249-0fe79f5cac40",
          status: "Pending",
          paymentId: "d2de7985-50b6-48eb-84ad-7447a7b0da19",
          userId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          paymentUserId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fdda735a-99f5-4547-bbd1-fdc8cb511f26",
          status: "Completed",
          paymentId: "0b0468ae-2acb-461d-94a8-cd527fee0cb3",
          userId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          paymentUserId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
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
