"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("exercise_categories", [
      {
        uuid: uuidv4(),
        name: "Cardio",
        sub_category: null, // No sub-category
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Strength Training",
        sub_category: null, // No sub-category
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Flexibility",
        sub_category: null, // No sub-category
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Balance",
        sub_category: null, // No sub-category
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "High-Intensity Interval Training",
        sub_category: 1, // Example of a sub-category relationship
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("exercise_categories", null, {});
  },
};
