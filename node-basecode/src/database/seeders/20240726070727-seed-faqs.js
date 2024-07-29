"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("faqs", [
      {
        uuid: uuidv4(),
        question: "What is the purpose of this application?",
        answer:
          "This application is designed to help users track their fitness activities and manage their health data.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        question: "How do I reset my password?",
        answer:
          'To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions to reset your password.',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        question:
          "Can I integrate this application with other fitness devices?",
        answer:
          "Yes, the application supports integration with various fitness devices. Check the settings for available integrations.",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("faqs", null, {});
  },
};
