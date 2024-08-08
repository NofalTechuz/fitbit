const { Op } = require("sequelize");
const { Chats, ChatFile } = require("../../database/models/index");
const uuid = require("uuid");

const createChats = async (req, res) => {
    const { sender_id, reciver_id, chat_file_id, message } = req.body;
    
    if (!sender_id || !reciver_id || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }
    let file_id = chat_file_id || null;
    const uuidv4 = uuid.v4();
    try {
        const chat = await Chats.create({
            uuid: uuidv4,
            sender_id,
            reciver_id,
            file_id,
            message
        });
        res.status(201).json(chat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getChats = async (req, res) => {
    const { sender_id, reciver_id } = req.params;

    console.log(sender_id, reciver_id);
    if (!sender_id || !reciver_id) {
        return res.status(400).json({ error: "All fields are required" });
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
                    // as: 'chat_files',
                    attributes: ["id", "file", "file_type"],
                },
            ],
        });
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { createChats, getChats }