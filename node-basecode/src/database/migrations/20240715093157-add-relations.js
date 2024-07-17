'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('user_details', {
      fields: ['country_id'],
      type: 'foreign key',
      name: 'fk_user_details_country_id', // Custom name for the constraint
      references: {
        table: 'countries',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('user_details', {
      fields: ['city_id'],
      type: 'foreign key',
      name: 'fk_user_details_city_id',
      references: {
        table: 'cities',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('social_logins', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_social_logins_user_id',
      references: {
        table: 'users',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('cities', {
      fields: ['country_id'],
      type: 'foreign key',
      name: 'fk_cities_country_id',
      references: {
        table: 'countries',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('diet_plans', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_diet_plans_user_id',
      references: {
        table: 'users',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('exercise_categories', {
      fields: ['sub_category'],
      type: 'foreign key',
      name: 'fk_exercise_categories_sub_category',
      references: {
        table: 'exercise_categories',
        field: 'id',
      },
      allowNull: true,
    });

    await queryInterface.addConstraint('exercises', {
      fields: ['exercise_category'],
      type: 'foreign key',
      name: 'fk_exercises_exercise_category',
      references: {
        table: 'exercise_categories',
        field: 'id',
      },
      allowNull: true,
    });

    // Add any other constraints for the review table if needed
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('user_details', 'fk_user_details_country_id');
    await queryInterface.removeConstraint('user_details', 'fk_user_details_city_id');
    await queryInterface.removeConstraint('social_logins', 'fk_social_logins_user_id');
    await queryInterface.removeConstraint('cities', 'fk_cities_country_id');
    await queryInterface.removeConstraint('diet_plans', 'fk_diet_plans_user_id');
    await queryInterface.removeConstraint('exercise_categories', 'fk_exercise_categories_sub_category');
    await queryInterface.removeConstraint('exercises', 'fk_exercises_exercise_category');

    // Remove constraints from the review table if added
  }
};
