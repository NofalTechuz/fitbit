"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("reviews", [
      {
        uuid: uuidv4(),
        review_TEXT:
          "Great product! Really helped me achieve my fitness goals.",
        rating: 4.5,
        user_id: 1, // Replace with an actual user ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        review_TEXT:
          "Good service, but the delivery took longer than expected.",
        rating: 3.0,
        user_id: 2, // Replace with an actual user ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        review_TEXT:
          "I am very satisfied with the product quality and customer support.",
        rating: 5.0,
        user_id: 3, // Replace with an actual user ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        review_TEXT: "The product was okay, but I expected more features.",
        rating: 2.5,
        user_id: 4, // Replace with an actual user ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
