const express = require("express");
const auth = express.Router();
const authController = require("../../Controllers/Auth/auth");
const rateLimiter = require("../../middlewares/rateLimiter");
const { validateRegistration, validateRequest, validateLogin } = require("../../middlewares/validationMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");



// Auth Routes
auth.post("/register",  validateRegistration, validateRequest, authController.AdminRegister);
auth.post("/login", rateLimiter, validateLogin, validateRequest, authController.AdminLogin);
auth.get("/check-auth", authMiddleware, authController.AdminAuthCheck);

module.exports = auth;