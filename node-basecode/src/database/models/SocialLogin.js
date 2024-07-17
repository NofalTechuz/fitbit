"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SocialLogin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SocialLogin.init(
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      socialId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      socialType: {
        type: DataTypes.SMALLINT,
      },
    },
    {
      sequelize,
      tableName: "social_logins",
      modelName: "SocialLogin",
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return SocialLogin;
};
