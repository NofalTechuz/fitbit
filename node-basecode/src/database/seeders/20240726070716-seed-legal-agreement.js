"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "legal_agreements",
      [
        {
          uuid: uuidv4(),
          title: "Privacy Policy",
          content:
            "This is the privacy policy content. It explains how user data is collected and used.",
          type: "1", // 1: Privacy Policies
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          title: "Terms and Conditions",
          content:
            "These are the terms and conditions. They outline the rules and guidelines for using our service.",
          type: "2", // 2: Terms & Conditions
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          title: "About Us",
          content:
            "This section provides information about our company and team.",
          type: "3", // 3: About Us
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("legal_agreements", null, {});
  },
};
