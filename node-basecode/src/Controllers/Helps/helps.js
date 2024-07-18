const deleteFileFromFirebase = require('../../config/Firebase/firebase-delete');
const uploadFileToFirebase = require('../../config/Firebase/firebase-upload');
const { Help } = require('../../database/models/index');
const fs = require('fs');
const AppError = require("../../utils/appError");

const GetHelps = async (req, res) => {
  try {
    const data = await Help.findAll();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const GetHelpsById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Help.findOne({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const AddHelps = async (req, res) => {
  if (req.file == undefined) {
    return next(new AppError("Please upload a file", 400));
  }
  const filePath = `ADMIN-1/${req.file.filename}`
  const publicUrl = await uploadFileToFirebase(req.file, filePath);
  fs.unlinkSync(req.file.path);
  const data = {
    uuid: req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    file: publicUrl,
    fileType: req.body.fileType,
  };
  try {
    const response = await Help.create(data);
    res.status(200).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const UpdateHelps = async (req, res) => {
  const id = req.params.id;
  const currentHelp = await Help.findOne({ where: { id } });
  if (!currentHelp) {
    return next(new AppError("Help entry not found", 404));
  }

  if (req.file) {
    const filePath = `ADMIN-1/${req.file.filename}`
    const helpfileUrl = currentHelp.file;
    const oldFilePath = helpfileUrl.replace('https://storage.googleapis.com/fitbit-ca9f5.appspot.com/', '');

    await deleteFileFromFirebase(oldFilePath);
    const publicUrl = await uploadFileToFirebase(req.file, filePath);
    fs.unlinkSync(req.file.path);
    console.log(publicUrl)
    req.body.file = publicUrl;
  }
  const data = {
    uuid: req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    file: req.body.file || currentHelp.file,
    fileType: req.body.fileType,
  };
  try {
    const response = await Help.update(data, {
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const DeleteHelps = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Help.destroy({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  GetHelps,
  GetHelpsById,
  AddHelps,
  UpdateHelps,
  DeleteHelps,
};
