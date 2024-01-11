"use strict";
const crypto = require("node:crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Shipments",
      [
        {
          id: crypto.randomUUID(),
          shipmentDate: new Date(),
          address: "Jl. Sultan hasanudin No. 11",
          city: "Mataram",
          province: "Nusa Tenggara Barat",
          regency: "contoh regency 1",
          postalCode: 86721,
          usersId: "05b21974-9093-4d71-aafb-95c23a9fbd6d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          shipmentDate: new Date(),
          address: "Jl. Banda Neira No. 12",
          city: "Badung",
          province: "Bali",
          regency: "contoh regency 2",
          postalCode: 86729,
          usersId: "9b88eefc-90f7-4aa7-ace0-4df2881c6b0e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: crypto.randomUUID(),
          shipmentDate: new Date(),
          address: "Jl. Cinta Damai No. 21",
          city: "Mataram",
          province: "Nusa Tenggara Barat",
          regency: "contoh regency 1",
          postalCode: 86721,
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
