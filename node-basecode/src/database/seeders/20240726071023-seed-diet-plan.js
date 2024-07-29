"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("diet_plans", [
      {
        uuid: uuidv4(),
        diet_name: "Keto Diet",
        diet_description:
          "A high-fat, low-carb diet that helps the body enter a state of ketosis.",
        nutrition: "High in fats, moderate in proteins, low in carbs",
        user_id: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        diet_name: "Mediterranean Diet",
        diet_description:
          "A diet inspired by the traditional eating habits of countries bordering the Mediterranean Sea.",
        nutrition: "Rich in fruits, vegetables, nuts, and olive oil",
        user_id: 2, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        diet_name: "Paleo Diet",
        diet_description:
          "A diet based on the types of foods presumed to have been eaten by early humans.",
        nutrition: "Lean meats, fish, fruits, vegetables, nuts, and seeds",
        user_id: 3, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        diet_name: "Vegan Diet",
        diet_description:
          "A diet that excludes all animal products and focuses on plant-based foods.",
        nutrition: "Fruits, vegetables, legumes, nuts, and seeds",
        user_id: 1, // Replace with actual user ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("diet_plans", null, {});
  },
};
