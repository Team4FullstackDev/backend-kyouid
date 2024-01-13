"use strict";
const crypto = require("node:crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: crypto.randomUUID(),
          fullName: "John Doe",
          username: "jane",
          email: "john.doe@example.com",
          password: "123456",
          birthDate: new Date("1990-01-01"),
          phoneNumber: 1234567890,
          tokenAccess: "access_token_value",
          tokenRefresh: "refresh_token_value",
          isAdmin: true,
        },
        {
          id: "05b21974-9093-4d71-aafb-95c23a9fbd6d", // biar bisa nyambung ke seeding lainnya
          fullName: "John Smith",
          username: "john",
          email: "john.smith@example.com",
          password: "123456",
          birthDate: new Date("1980-01-01"),
          phoneNumber: 9876543210,
          tokenAccess: "another_access_token",
          tokenRefresh: "another_refresh_token",
          isAdmin: false,
        },
        {
          id: "7f7cc341-81a2-457a-a9af-dc7d387c3418",
          fullName: "Jane Doe",
          username: "jane",
          email: "jane.doe@example.com",
          password: "123456",
          birthDate: new Date("1995-05-15"),
          phoneNumber: 1234567890,
          tokenAccess: "access_token_value",
          tokenRefresh: "refresh_token_value",
          isAdmin: false,
        },
        {
          id: crypto.randomUUID(),
          fullName: "Jane Smith",
          username: "jane",
          email: "jane.smith@example.com",
          password: "123456",
          birthDate: new Date("1985-05-15"),
          phoneNumber: 9876543210,
          tokenAccess: "another_access_token",
          tokenRefresh: "another_refresh_token",
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
