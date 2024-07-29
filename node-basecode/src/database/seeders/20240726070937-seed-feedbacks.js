"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("feedbacks", [
      {
        uuid: uuidv4(),
        sender_id: 1, // Replace with actual sender user ID
        receiver_id: 2, // Replace with actual receiver user ID
        feedback_text:
          "Great job on the recent project. Your work was outstanding!",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 2, // Replace with actual sender user ID
        receiver_id: 1, // Replace with actual receiver user ID
        feedback_text:
          "Thank you for your support. I really appreciate your guidance.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 3, // Replace with actual sender user ID
        receiver_id: 1, // Replace with actual receiver user ID
        feedback_text:
          "Your presentation was very informative and well-organized.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 1, // Replace with actual sender user ID
        receiver_id: 3, // Replace with actual receiver user ID
        feedback_text:
          "I found your report very detailed and helpful for our meeting.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("feedbacks", null, {});
  },
};
