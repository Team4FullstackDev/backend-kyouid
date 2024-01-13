"use strict";
const crypto = require("node:crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Shipments",
      [
        {
          id: "334d71de-9cc8-4529-a4ce-ea97c9275176",
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
          id: "4345ff2c-310e-48a4-9899-fb2ae1a12ab9",
          shipmentDate: new Date(),
          address: "Jl. Banda Neira No. 12",
          city: "Badung",
          province: "Bali",
          regency: "contoh regency 2",
          postalCode: 86729,
          usersId: "7f7cc341-81a2-457a-a9af-dc7d387c3418",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "8546f999-ade9-4583-8f98-2ef280402f63",
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
