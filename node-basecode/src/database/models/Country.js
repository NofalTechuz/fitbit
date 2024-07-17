"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Country.init(
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
            args: [3, 100],
            msg: "Country name must be between 3 and 100 characters",
          },
        },
      },
      emoji: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
            msg: "Url problem",
          },
        },
      },
      countryCode: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            msg: "County Code must have to be an integer",
          },
        },
      },
      isoCode: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            msg: "iso Code must have to be an integer",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "countries",
      modelName: "Country",
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return Country;
};
