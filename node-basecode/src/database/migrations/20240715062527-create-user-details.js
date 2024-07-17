'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING,
        unique: false,
      },
      country_id: {
        type: Sequelize.INTEGER,
      },
      city_id: {
        type: Sequelize.INTEGER,
      },
      birth_date: {
        type: Sequelize.DATE,
      },
      weight: {
        type: Sequelize.FLOAT,
      },
      height: {
        type: Sequelize.STRING,
      },
      dietary_preference: {
        type: Sequelize.ENUM('1', '2'),  // 1: Vegetarian, 2: Non-Vegetarian
        allowNull: true,
      },
      joining_DATETIME: {
        type: Sequelize.DATE,
      },
      ending_DATETIME: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_details');
  }
};