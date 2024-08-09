const express = require("express");
const Chats = express.Router();
const ChatsController = require("../../Controllers/Chats/Chats");
const authMiddleware = require("../../middlewares/authMiddleware");
const upload = require("../../config/upload");


// Chats Routes
Chats.get("/:sender_id/:reciver_id", authMiddleware, ChatsController.getChats);
Chats.post("/", authMiddleware, upload.array('files', 5), ChatsController.createChats);


module.exports = Chats;