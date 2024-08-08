const express = require("express");
const Chats = express.Router();
const ChatsController = require("../../Controllers/Chats/Chats");
const authMiddleware = require("../../middlewares/authMiddleware");



// Chats Routes
Chats.get("/:sender_id/:reciver_id", authMiddleware, ChatsController.getChats);
Chats.post("/", authMiddleware, ChatsController.createChats);


module.exports = Chats;