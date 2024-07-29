"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "social_logins",
      [
        {
          uuid: uuidv4(),
          user_id: 1, // Assuming the user with ID 1 exists in the users table
          social_id: "google-12345",
          social_type: 2, // 2 for Google
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          user_id: 2, // Assuming the user with ID 2 exists in the users table
          social_id: "google-54321",
          social_type: 2, // 2 for Google
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          user_id: 3, // Assuming the user with ID 3 exists in the users table
          social_id: "google-67890",
          social_type: 2, // 2 for Google
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("social_logins", null, {});
  },
};
