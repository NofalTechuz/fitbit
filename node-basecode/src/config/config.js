module.exports = {
    jwtSecret: process.env.JWT_TOKEN || 'secret key for fitbit', 
    jwtExpiry: process.env.JWT_EXPIRY ||'7d', 
    saltRounds: process.env.JWT_SALT_ROUND || 10,
  };
  



