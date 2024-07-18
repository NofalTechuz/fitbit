const deleteFileFromFirebase = require("../../config/Firebase/firebase-delete");
const uploadFileToFirebase = require("../../config/Firebase/firebase-upload");
const { User } = require("../../database/models/index");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const AppError = require("../../utils/appError");

const AddUser = async (req, res) => {
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

const Getusers = async (req, res) => {
  try {
    const data = await User.findAll();
    res.status(200).json(data);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const GetUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const DeleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.destroy({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const currentUser = await User.findOne({ where: { id } });
  if (!currentUser) {
    return next(new AppError("User not found", 404));
  }

  if (req.file) {
    const filePath = `USER-${id}/${req.file.filename}`;
    const profileImageUrl = currentUser.profileImage;
    const oldFilePath = profileImageUrl.replace(
      "https://storage.googleapis.com/fitbit-ca9f5.appspot.com/",
      ""
    );

    await deleteFileFromFirebase(oldFilePath);
    const publicUrl = await uploadFileToFirebase(req.file, filePath);
    fs.unlinkSync(req.file.path);
    req.body.profileImage = publicUrl;
  }

  const data = {
    uuid: req.body.uuid,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isdCode: req.body.isdCode,
    mobileNumber: req.body.mobileNumber,
    email: req.body.email,
    username: req.body.username,
    profileImage: req?.body?.profileImage || currentUser.profileImage,
    password: req.body.password,
    gender: req.body.gender,
    role: req.body.role,
    otp: req.body.otp,
    otpExpiresAt: req.body.otpExpiresAt,
    accessToken: req.body.accessToken,
    resetPasswordToken: req.body.resetPasswordToken,
    isEmailVerified: req.body.isEmailVerified,
    isActive: req.body.isActive,
  };

  try {
    const user = await User.update(data, {
      where: {
        id: id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  AddUser,
  Getusers,
  DeleteUser,
  UpdateUser,
  GetUserById,
};
