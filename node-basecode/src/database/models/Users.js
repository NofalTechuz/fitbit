'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id:{
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid:  {
      type:DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 50],
        min: {
          args: 3,
          msg: 'First name must be at least 3 character long'
        },
        max: {
          args: 50,
          msg: 'First name must be at most 50 characters long'
        },        
      },
      set(value) {
        this.setDataValue('firstName', value.trim());
      },
    },
    lastName:  {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 50],
        min: {
          args: 3,
          msg: 'First name must be at least 3 character long'
        },
        max: {
          args: 50,
          msg: 'First name must be at most 50 characters long'
        },        
      },
      set(value) {
        this.setDataValue('lastName', value.trim());
      },
    },
    isdCode:  {
      type:DataTypes.STRING,
      allowNull: false
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    profileImage: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    gender: {
      type: DataTypes.ENUM('1', '2', '3'), 
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('1', '2'), 
      allowNull: false,
    },
    otp: {
      type: DataTypes.SMALLINT,
    },
    otp_expires_at: {
      type: DataTypes.DATE,
    },
    access_token: {
      type: DataTypes.STRING,
    },
    reset_password_token: {
      type: DataTypes.STRING,
    },
    is_email_verified: {
      type: DataTypes.BOOLEAN,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return User;
};