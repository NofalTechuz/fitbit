const { Op } = require('sequelize');
const { Chats, ChatFile } = require('../../database/models/index');
const uuid = require('uuid');
const uploadFileToFirebase = require('../../config/Firebase/firebase-upload');
const fs = require('fs');

function getFileType(mimetype) {
  switch (mimetype) {
    case 'image/png':
    case 'image/jpeg':
    case 'image/jpg':
      return 1;
    case 'video/mp4':
      return 2;
    case 'audio/mpeg':
    case 'audio/wav':
    case 'audio/ogg':
      return 3;
    case 'application/pdf':
      return 4;
    case 'text/plain':
      return 5;
    default:
      return 0;
  }
}

const createChats = async (req, res) => {
  const { sender_id, reciver_id, message } = req.body;
  console.log(sender_id, reciver_id, message);
  const uuidv4 = uuid.v4();

  try {
    const chat = await Chats.create({
      uuid: uuidv4,
      sender_id,
      reciver_id,
      message: message || null,
    });
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const filePath = `CHATS/${sender_id}/${file.filename}`;
        const publicUrl = await uploadFileToFirebase(file, filePath);

        const fileType = getFileType(file.mimetype);
        await ChatFile.create({
          uuid: uuidv4,
          chats_id: chat.id,
          file: publicUrl,
          file_type: fileType,
        });

        fs.unlinkSync(file.path);
      }
    }
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getChats = async (req, res) => {
  const { sender_id, reciver_id } = req.params;

  console.log(sender_id, reciver_id);
  if (!sender_id || !reciver_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const chats = await Chats.findAll({
      where: {
        [Op.or]: [
          { sender_id: sender_id, reciver_id: reciver_id },
          { sender_id: reciver_id, reciver_id: sender_id },
        ],
      },
      include: [
        {
          model: ChatFile,
          as: 'chat_files',
          attributes: ['id', 'file', 'file_type'],
        },
      ],
      order: [['createdAt', 'ASC']],
    });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createChats, getChats };
