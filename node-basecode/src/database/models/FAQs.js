'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FAQs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FAQs.init({
    id:{
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid:  {
      type:DataTypes.STRING,
      allowNull: false
    },
    question: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    answer:  {
      type:DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'faqs',
    modelName: 'FAQs',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return FAQs;
};