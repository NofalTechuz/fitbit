"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("countries", [
      {
        name: "United States",
        emoji: "🇺🇸",
        country_code: "+1",
        iso_code: "US",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: "Canada",
        emoji: "🇨🇦",
        country_code: "+1",
        iso_code: "CA",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: "India",
        emoji: "🇮🇳",
        country_code: "+91",
        iso_code: "IN",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: "Australia",
        emoji: "🇦🇺",
        country_code: "+61",
        iso_code: "AU",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("countries", null, {});
  },
};
