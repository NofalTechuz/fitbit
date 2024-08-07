const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const AppError = require('../../utils/appError');
const { User, SocialLogin } = require('../../database/models/index');
const Email = require('../../utils/email');
const { Op } = require('sequelize');
const { OAuth2Client } = require('google-auth-library');
const { v4: uuidv4 } = require('uuid');

const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);

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
    return next(new AppError('Email already exist', 400));
  }

  const lastUser = await User.findOne({
    order: [['id', 'DESC']],
    attributes: ['id'],
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

  try {
    // Find user with Email

    const userFind = await User.findOne({
      where: {
        [Op.or]: [{ email: email }, { username: email }],
      },
    });
    if (!userFind) {
      return next(new AppError('Invalid credentials', 400));
    }

    const user = userFind.dataValues;

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new AppError('Invalid credentials', 400));
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
      expiresIn: config.jwtExpiry,
    });

    // Send welcome email
    // new Email(user).sendWelcome();

    res.status(200).json({ token, user });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const AdminLogout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({ msg: 'Logged out successfully' });
};

const AdminAuthCheck = (req, res, next) => {
  res.status(200).json({ msg: 'Authenticated' });
};

const AdminGoogleLogin = async (req, res, next) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_AUTH_CLIENT_ID,
    });
    console.log(ticket.getPayload());
    const { sub, name, email, picture } = ticket.getPayload();
    let user = await User.findOne({
      where: {
        email,
      },
      cascade: false,
    });

    if (!user) {
      let randomUsername = name.toLowerCase().replace(/\s+/g, '');
      let count = 0;

      while (true) {
        const checkUsernameExist = await User.findOne({
          where: {
            username: randomUsername,
          },
        });
        if (!checkUsernameExist) {
          break;
        }
        count++;
        randomUsername += Math.floor(Math.random() * 1000);
        if (count > 10) {
          return next(new AppError('Username already exist', 400));
        }
      }

      // random password for google login
      const randomPassword = Math.random().toString(36).slice(-8);
      const salt_round = parseInt(config.saltRounds);
      const salt = await bcrypt.genSalt(salt_round);
      const hashedPassword = await bcrypt.hash(randomPassword, salt);

      const uuid = uuidv4();
      user = {
        uuid,
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1],
        profileImage: picture,
        email,
        username: randomUsername,
        password: hashedPassword,
        role: '2',
      };
      const userCreated = await User.create(user);
      user = userCreated.dataValues;

      const socialData = {
        uuid,
        userId: userCreated.dataValues.id,
        socialId: sub,
        socialType: 1,
      };

      await SocialLogin.create(socialData);
    }

    // Generate a JWT token
    const jwtToken = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_TOKEN, {
      expiresIn: '7d',
    });

    res.status(200).json({ token: jwtToken });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Invalid Google token' });
  }
};

module.exports = {
  AdminRegister,
  AdminLogin,
  AdminLogout,
  AdminAuthCheck,
  AdminGoogleLogin,
};
