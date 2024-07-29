const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const AppError = require("../../utils/appError");
const { User } = require("../../database/models/index");
const Email = require("../../utils/email");
const { Op } = require('sequelize');



const AdminRegister = async (req, res, next) => {
  const checkEmailExist = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (checkEmailExist) {
    if (req.file !== undefined) {
      fs.unlinkSync(req.file.path);
    }
    return next(new AppError("Email already exist", 400));
  }

  const lastUser = await User.findOne({
    order: [["id", "DESC"]],
    attributes: ["id"],
  });
  const prevId = lastUser ? lastUser.id + 1 : 0;

  if (req.file !== undefined) {
    const filePath = `USER-${prevId}/${req.file.filename}`;
    const publicUrl = await uploadFileToFirebase(req.file, filePath);
    fs.unlinkSync(req.file.path);
    req.body.profileImage = publicUrl;
  }

  // Hash the password
  const salt_round = parseInt(config.saltRounds);
  const salt = await bcrypt.genSalt(salt_round);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const data = {
    uuid: req.body.uuid,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isdCode: req.body.isdCode,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
    username: req.body.username,
    profileImage: req?.body?.profileImage || null,
    password: hashedPassword,
    gender: req.body.gender,
    role: req.body.role,
    otp: req.body.otp || null,
    otpExpiresAt: req.body.otpExpiresAt || null,
    accessToken: req.body.accessToken || null,
    resetPasswordToken: req.body.resetPasswordToken || null,
    isEmailVerified: req.body.isEmailVerified || false,
    isActive: req.body.isActive || true,
  };

  try {
    const user = await User.create(data);
    res.status(200).json(user);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const AdminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email)

  try {
    // Find user with Email

    
    const userFind = await User.findOne({
      where: {
        [Op.or]: [
          { email: email },
          { username: email }
        ]
      }
    });
    if (!userFind) {
      return next(new AppError("Invalid credentials", 400));
    }
    
    const user = userFind.dataValues;    

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new AppError("Invalid credentials", 400));
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, config.jwtSecret, {
      expiresIn: config.jwtExpiry,
    });

    // Send welcome email
    new Email(user, url).sendWelcome();

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const AdminLogout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ msg: "Logged out successfully" });
};

const AdminAuthCheck = (req, res, next) => {
  res.status(200).json({ msg: "Authenticated" });
};

module.exports = {
  AdminRegister,
  AdminLogin,
  AdminLogout,
  AdminAuthCheck,
};
