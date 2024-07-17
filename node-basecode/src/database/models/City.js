"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: {
            args: [1, 100],
            msg: "City name must be between 1 and 100 characters",
          },
        },
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "Country Id must have to be an integer",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "cities",
      modelName: "City",
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return City;
};
