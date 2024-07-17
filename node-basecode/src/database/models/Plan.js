"use strict";
const { Model } = require("sequelize");
const {
  planTypeNumberToName,
  planStatusNumberToName,
} = require("../../config/constant");
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plan.init(
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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM(Object.keys(planTypeNumberToName)),
        allowNull: false,
      },
      interval: {
        type: DataTypes.INTEGER,
      },
      intervalCount: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "The price must be an integer",
          },
          min: {
            args: [0],
            msg: "Price must be greater than 0 or equal to 0",
          },
        },
      },
      currency: {
        type: DataTypes.TEXT,
      },
      taxPercentage: {
        type: DataTypes.TEXT,
      },
      features: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.ENUM(Object.keys(planStatusNumberToName)),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "plans",
      modelName: "Plan",
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return Plan;
};
