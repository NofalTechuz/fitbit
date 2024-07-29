"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const jsonStringifyData = (obj) => JSON.stringify(obj);

    await queryInterface.bulkInsert("notifications", [
      {
        uuid: uuidv4(),
        sender_id: 1, // Replace with actual sender user ID
        receiver_id: 2, // Replace with actual receiver user ID
        data: jsonStringifyData({
          type: "alert",
          content: "User 2 has tagged you in a post.",
        }),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 2, // Replace with actual sender user ID
        receiver_id: 1, // Replace with actual receiver user ID
        data: jsonStringifyData({
          type: "alert",
          content: "User 2 has tagged you in a post.",
        }),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 3, // Replace with actual sender user ID
        receiver_id: 1, // Replace with actual receiver user ID
        data: jsonStringifyData({
          type: "reminder",
          content: "Reminder: Your subscription is about to expire.",
        }),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        sender_id: 1, // Replace with actual sender user ID
        receiver_id: 3, // Replace with actual receiver user ID
        data: jsonStringifyData({
          type: "invite",
          content: "You have been invited to join the new group.",
        }),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("notifications", null, {});
  },
};
