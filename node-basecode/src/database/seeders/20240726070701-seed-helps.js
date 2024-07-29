"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "helps",
      [
        {
          uuid: uuidv4(),
          title: "Getting Started",
          description: "This guide helps you get started with the application.",
          file: "path/to/getting-started.pdf",
          file_type: 1, // e.g., 1 for PDF
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          title: "Frequently Asked Questions",
          description: "Find answers to the most common questions here.",
          file: "path/to/faq.pdf",
          file_type: 1, // e.g., 1 for PDF
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          title: "Troubleshooting",
          description: "Solutions for common issues you might encounter.",
          file: "path/to/troubleshooting.pdf",
          file_type: 1, // e.g., 1 for PDF
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("helps", null, {});
  },
};
