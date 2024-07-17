// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const cookieParser = require('cookie-parser');

const authMiddleware = (req, res, next) => {
  cookieParser()(req, res, () => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: 'No token provided' });

    jwt.verify(token, config.jwtSecret, (err, user) => {
      if (err) return res.status(403).json({ msg: 'Invalid token' });
      req.user = user;
      next();
    });
  });
};

module.exports = authMiddleware;
