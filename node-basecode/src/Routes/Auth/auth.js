const express = require("express");
const auth = express.Router();
const authController = require("../../Controllers/Auth/auth");
const rateLimiter = require("../../middlewares/rateLimiter");
const { validateRegistration, validateRequest, validateLogin } = require("../../middlewares/validationMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");



// Auth Routes
auth.post("/register", authController.AdminRegister);
auth.post("/login",  authController.AdminLogin);
auth.post("/google-login",  authController.AdminGoogleLogin);
auth.get("/check-auth", authMiddleware, authController.AdminAuthCheck);

module.exports = auth;