"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exercise.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUUID: {
            args: 4,
            msg: "UUID must be version 4",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: {
            args: [3, 100],
            msg: "Exercise name must be between 3 and 100 characters",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
      },
      setOfExercise: {
        type: DataTypes.STRING,
      },
      exerciseCategory: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "exercises",
      modelName: "Exercise",
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return Exercise;
};
