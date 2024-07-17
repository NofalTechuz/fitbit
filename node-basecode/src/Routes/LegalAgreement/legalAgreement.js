const express = require("express");
const legalAgreement = express.Router();
const legalAgreementController = require("../../Controllers/LegalAgreement/legalAgreement");
const authMiddleware = require("../../middlewares/authMiddleware");



// LegalAgreement Routes
legalAgreement.get("/", authMiddleware, legalAgreementController.GetLegalAgreement);
legalAgreement.get("/:id", authMiddleware, legalAgreementController.GetLegalAgreementById);
legalAgreement.post("/", authMiddleware, legalAgreementController.AddLegalAgreement);
legalAgreement.delete("/:id", authMiddleware, legalAgreementController.DeleteLegalAgreement);
legalAgreement.put("/:id", authMiddleware, legalAgreementController.UpdateLegalAgreement);


module.exports = legalAgreement;