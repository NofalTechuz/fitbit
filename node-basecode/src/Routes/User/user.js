const express = require("express");
const user = express.Router();
const userController = require("../../Controllers/User/user");
const rateLimiter = require("../../middlewares/rateLimiter");
const authMiddleware = require("../../middlewares/authMiddleware");
const upload = require("../../config/upload");



// Auth Routes
user.post("/", authMiddleware, upload.single('profileImage'), userController.AddUser);
user.delete("/:id", authMiddleware, userController.DeleteUser);
user.get("/", authMiddleware, userController.Getusers);
user.put("/:id", authMiddleware, upload.single('profileImage'), userController.UpdateUser);
user.get("/:id", authMiddleware, userController.GetUserById);

module.exports = user;