"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_details",
      [
        {
          uuid: uuidv4(),
          country_id: 1, // Assuming a country with ID 1 exists
          city_id: 1, // Assuming a city with ID 1 exists
          birth_date: new Date("1990-01-01"),
          weight: 70.5,
          height: "180cm",
          dietary_preference: "1", // 1: Vegetarian
          joining_DATETIME: new Date("2020-01-01"),
          ending_DATETIME: new Date("2023-01-01"),
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          country_id: 2, // Assuming a country with ID 2 exists
          city_id: 2, // Assuming a city with ID 2 exists
          birth_date: new Date("1985-05-15"),
          weight: 65.3,
          height: "170cm",
          dietary_preference: "2", // 2: Non-Vegetarian
          joining_DATETIME: new Date("2019-05-15"),
          ending_DATETIME: new Date("2022-05-15"),
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          uuid: uuidv4(),
          country_id: 3, // Assuming a country with ID 3 exists
          city_id: 3, // Assuming a city with ID 3 exists
          birth_date: new Date("1995-07-20"),
          weight: 80.0,
          height: "175cm",
          dietary_preference: "1", // 1: Vegetarian
          joining_DATETIME: new Date("2021-07-20"),
          ending_DATETIME: new Date("2024-07-20"),
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_details", null, {});
  },
};
