// middlewares/rateLimiter.js
const rateLimit = require('express-rate-limit');


// if we want to apply rate limiter on login and register routes, it means we give access to 5 requests per 15 minutes. if user try to more than 5 times in 15 minutes, it will be block for 15 minutes.

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

module.exports = rateLimiter;
