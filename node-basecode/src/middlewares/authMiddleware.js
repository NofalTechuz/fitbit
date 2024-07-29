// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const cookieParser = require("cookie-parser");
const AppError = require("../utils/appError");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("No token provided", 401));
  }

  // Extract the token
  const token = authHeader.split(" ")[1];

  // Verify the token
  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) return next(new AppError("Invalid token", 403));

    req.user = user; // Attach the user info to the request
    next();
  });
};

module.exports = authMiddleware;
