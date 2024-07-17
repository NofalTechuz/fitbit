"use strict";
const { Model } = require("sequelize");
const {
  userDetailsdietaryPreferenceNumberToName,
} = require("../../config/constant");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDetail.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
          isUUID: {
            args: 4,
            msg: "UUID must be version 4",
          },
        },
      },
      countryId: {
        type: DataTypes.INTEGER,
      },
      cityId: {
        type: DataTypes.INTEGER,
      },
      birthDate: {
        type: DataTypes.DATE,
        validate: {
          isDate: {
            msg: "Must be a valid date",
          },
        },
      },
      weight: {
        type: DataTypes.FLOAT,
        validate: {
          isFloat: {
            msg: "Weight must be a float",
          },
          min: {
            args: [0],
            msg: "Weight must be greater than zero",
          },
        },
      },
      height: {
        type: DataTypes.STRING,
        validate: {
          isNumeric: {
            msg: "Height must be numeric",
          },
        },
      },
      dietaryPreference: {
        type: DataTypes.ENUM(
          Object.keys(userDetailsdietaryPreferenceNumberToName)
        ),
        allowNull: true,
      },
      joiningDatetime: {
        type: DataTypes.DATE,
        validate: {
          isDate: {
            msg: "Must be a valid date",
          },
        },
      },
      endingDatetime: {
        type: DataTypes.DATE,
        validate: {
          isDate: {
            msg: "Must be a valid date",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "user_details",
      modelName: "UserDetail",
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return UserDetail;
};
