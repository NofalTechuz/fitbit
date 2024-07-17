const express = require("express");
const FAQs = express.Router();
const FAQsController = require("../../Controllers/FAQs/faqs");
const authMiddleware = require("../../middlewares/authMiddleware");



// FAQ Routes
FAQs.get("/", authMiddleware, FAQsController.GetFAQs);
FAQs.get("/:id", authMiddleware, FAQsController.GetFAQsById);
FAQs.post("/", authMiddleware, FAQsController.AddFAQs);
FAQs.delete("/:id", authMiddleware, FAQsController.DeleteFAQs);
FAQs.put("/:id", authMiddleware, FAQsController.UpdateFAQs);

module.exports = FAQs;