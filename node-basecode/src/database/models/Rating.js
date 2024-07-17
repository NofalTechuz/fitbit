"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rating.init(
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
      senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 4, //if no rating it will add 4 star
        validate: {
          isInt: {
            msg: "Rating must be an integer",
          },
          min: {
            args: [0],
            msg: "Rating must be greater than or equal to 0",
          },
          max: {
            args: [5],
            msg: "Rating must be less than or equal to 5",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "ratings",
      modelName: "Rating",
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return Rating;
};
