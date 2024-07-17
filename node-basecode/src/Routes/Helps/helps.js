const express = require("express");
const Helps = express.Router();
const HelpController = require("../../Controllers/Helps/helps");
const authMiddleware = require("../../middlewares/authMiddleware");
const upload = require("../../config/upload");



// Helps Routes
Helps.get("/", authMiddleware, HelpController.GetHelps);
Helps.get("/:id", authMiddleware, HelpController.GetHelpsById);
Helps.post("/", authMiddleware, upload.single('file'), HelpController.AddHelps);
Helps.delete("/:id", authMiddleware, HelpController.DeleteHelps);
Helps.put("/:id", authMiddleware, upload.single('file'), HelpController.UpdateHelps);

module.exports = Helps;