'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Helps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Helps.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    file: {
      type: DataTypes.STRING,
    },
    fileType: {
      type: DataTypes.ENUM('1', '2'),
    },
  }, {
    sequelize,
    tableName: 'helps',
    modelName: 'Help',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return Helps;
};