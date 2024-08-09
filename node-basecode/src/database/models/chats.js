'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A chat may have many chat files
      this.hasMany(models.ChatFile, {
        foreignKey: 'chats_id',
        as: 'chat_files',
      });
    }
  }
  chats.init({
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
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reciver_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chat_file_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Chats',
    tableName: 'chats',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return chats;
};