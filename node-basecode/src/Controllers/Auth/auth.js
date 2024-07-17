const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

// Dummy user store (replace with database calls)
let users = [];

const AdminRegister = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  try {
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const salt_round = parseInt(config.saltRounds);
    const salt = await bcrypt.genSalt(salt_round);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user
    const newUser = { email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const AdminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    } 

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, config.jwtSecret, { expiresIn: config.jwtExpiry });

    res.cookie('token', token, {
      // httpOnly: true,  // if this option enable then can not access cookie directly by browser using javascript such as document.cookie
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict', 
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) 
    });
    
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};


const AdminAuthCheck = (req, res) => {
  
  res.status(200).json({ msg :"Authenticated" });
};

module.exports = {
  AdminRegister,
  AdminLogin,
  AdminAuthCheck
};
