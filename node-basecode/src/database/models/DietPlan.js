'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DietPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DietPlan.init(
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
            msg: 'UUID must be version 4',
          },
        },
      },
      dietName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: {
            args: [3, 100],
            msg: 'Diet name must be between 3 and 100 characters',
          },
        },
      },
      dietDescription: {
        type: DataTypes.TEXT,
      },
      nutrition: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            args: true,
            msg: 'User id must have to be an integer',
          },
        },
      },
    },
    {
      sequelize,
      tableName: 'diet_plan',
      modelName: 'DietPlan',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return DietPlan;
};
