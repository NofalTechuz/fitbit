const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const AppError = require("../../utils/appError");
const { User } = require("../../database/models/index");

// Dummy user store (replace with database calls)
let users = [];

const AdminRegister = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      return next(new AppError("User already exists", 400));
    }

    // Hash the password
    const salt_round = parseInt(config.saltRounds);
    const salt = await bcrypt.genSalt(salt_round);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user
    const newUser = { email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};

const AdminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(new AppError("Invalid credentials", 400));
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new AppError("Invalid credentials", 400));
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, config.jwtSecret, {
      expiresIn: config.jwtExpiry,
    });

    res.cookie("token", token, {
      // httpOnly: true,  // if this option enable then can not access cookie directly by browser using javascript such as document.cookie
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

const AdminAuthCheck = (req, res, next) => {
  res.status(200).json({ msg: "Authenticated" });
};

module.exports = {
  AdminRegister,
  AdminLogin,
  AdminAuthCheck,
};
