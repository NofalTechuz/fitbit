"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init(
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
      review_TEXT: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: false,
        validate: {
          isDecimal: {
            msg: "Rating must be a decimal",
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "reviews",
      modelName: "Review",
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return Review;
};
