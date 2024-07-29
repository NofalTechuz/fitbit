"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cities", [
      {
        name: "New York",
        country_id: 1, // Assuming 1 is the ID for the United States
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: "Toronto",
        country_id: 2, // Assuming 2 is the ID for Canada
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: "Ahmedabad",
        country_id: 3, // Assuming 3 is the ID for the India
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: "Sydney",
        country_id: 4, // Assuming 4 is the ID for Australia
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
