'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A chat file belongs to a specific chat
      this.belongsTo(models.Chats, {
        foreignKey: 'chats_id',
        as: 'chat',
      });
    }
    
  }
  ChatFile.init({
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
    chats_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING,
    },
    file_type: {
      type: DataTypes.TINYINT
    },
  }, {
    sequelize,
    modelName: 'ChatFile',
    tableName: 'chat_files',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return ChatFile;
};