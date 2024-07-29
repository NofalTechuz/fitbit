"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("exercises", [
      {
        uuid: uuidv4(),
        name: "Push-Up",
        description:
          "A basic upper body exercise that targets the chest, shoulders, and triceps.",
        set_of_exercise: "3 sets of 15 reps",
        exercise_category: 1, // Replace with actual category ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Squat",
        description:
          "A lower body exercise that targets the quadriceps, hamstrings, and glutes.",
        set_of_exercise: "4 sets of 12 reps",
        exercise_category: 2, // Replace with actual category ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Plank",
        description:
          "A core exercise that strengthens the abdominal muscles and improves stability.",
        set_of_exercise: "3 sets of 1 minute hold",
        exercise_category: 3, // Replace with actual category ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        uuid: uuidv4(),
        name: "Burpee",
        description:
          "A full-body exercise that combines a squat, push-up, and jump.",
        set_of_exercise: "5 sets of 10 reps",
        exercise_category: 4, // Replace with actual category ID
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("exercises", null, {});
  },
};
