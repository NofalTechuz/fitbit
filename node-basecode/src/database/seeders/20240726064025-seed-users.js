"use strict";
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const config = require("../../config/config");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt_round = parseInt(config.saltRounds);
    const salt = await bcrypt.genSalt(salt_round);
    const hashedPassword1 = await bcrypt.hash("password1", salt);
    const hashedPassword2 = await bcrypt.hash("password2", salt);
    const hashedPassword3 = await bcrypt.hash("password3", salt);

    await queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: uuidv4(),
          first_name: "John",
          last_name: "Doe",
          isd_code: "+1",
          mobile_number: "1234567890",
          email: "john.doe@example.com",
          username: "johndoe",
          profile_image: null,
          password: hashedPassword1,
          gender: "1", // 1: Male
          role: "2", // 2: User
          otp: null,
          otp_expires_at: null,
          access_token: null,
          reset_password_token: null,
          is_email_verified: true,
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          first_name: "Jane",
          last_name: "Doe",
          isd_code: "+1",
          mobile_number: "0987654321",
          email: "jane.doe@example.com",
          username: "janedoe",
          profile_image: null,
          password: hashedPassword2,
          gender: "2", // 2: Female
          role: "2", // 2: User
          otp: null,
          otp_expires_at: null,
          access_token: null,
          reset_password_token: null,
          is_email_verified: true,
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          first_name: "Alice",
          last_name: "Smith",
          isd_code: "+44",
          mobile_number: "1122334455",
          email: "alice.smith@example.com",
          username: "alicesmith",
          profile_image: null,
          password: hashedPassword3,
          gender: "2", // 2: Female
          role: "1", // 1: Admin
          otp: null,
          otp_expires_at: null,
          access_token: null,
          reset_password_token: null,
          is_email_verified: true,
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
