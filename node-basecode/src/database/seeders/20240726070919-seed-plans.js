"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("plans", [
      {
        uuid: uuidv4(),
        name: "Basic Plan",
        type: "1", // e.g., 1: Monthly
        interval: 1, // e.g., 1 month
        interval_count: 1,
        price: 10,
        currency: "USD",
        tax_percentage: "5%",
        features: "Access to basic features",
        status: "1", // e.g., 1: Active
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Standard Plan",
        type: "2", // e.g., 2: Yearly
        interval: 12, // e.g., 12 months
        interval_count: 1,
        price: 100,
        currency: "USD",
        tax_percentage: "5%",
        features: "Access to standard features and support",
        status: "1", // e.g., 1: Active
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Premium Plan",
        type: "3", // e.g., 3: Lifetime
        interval: 0, // e.g., 0 for lifetime
        interval_count: 0,
        price: 500,
        currency: "USD",
        tax_percentage: "5%",
        features: "All features, priority support, and lifetime access",
        status: "1", // e.g., 1: Active
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Enterprise Plan",
        type: "4", // e.g., 4: Custom
        interval: 0, // Custom interval
        interval_count: 0,
        price: 1000,
        currency: "USD",
        tax_percentage: "5%",
        features: "Custom features, dedicated support",
        status: "1", // e.g., 1: Active
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("plans", null, {});
  },
};
