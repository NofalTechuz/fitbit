'use strict';
const {
  Model
} = require('sequelize');
const { legalAgreementTypeNumberToName } = require('../../config/constant');
module.exports = (sequelize, DataTypes) => {
  class LegalAgreement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LegalAgreement.init({
    id:{
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid:  {
      type:DataTypes.STRING,
      allowNull: false
    },
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 50],
        min: {
          args: 3,
          msg: 'Title must be at least 3 character long'
        },
        max: {
          args: 50,
          msg: 'Title must be at most 50 character long'
        }
      }
    },
    content:  {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type:DataTypes.ENUM(Object.keys(legalAgreementTypeNumberToName)),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'legal_agreements',
    modelName: 'LegalAgreement',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return LegalAgreement;
};