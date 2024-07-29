"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ratings", [
      {
        uuid: uuidv4(),
        sender_id: 1, // Replace with actual sender user ID
        receiver_id: 2, // Replace with actual receiver user ID
        rating: 5, // Example rating value
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 2, // Replace with actual sender user ID
        receiver_id: 1, // Replace with actual receiver user ID
        rating: 4, // Example rating value
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 3, // Replace with actual sender user ID
        receiver_id: 1, // Replace with actual receiver user ID
        rating: 3, // Example rating value
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 1, // Replace with actual sender user ID
        receiver_id: 3, // Replace with actual receiver user ID
        rating: 4, // Example rating value
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ratings", null, {});
  },
};
