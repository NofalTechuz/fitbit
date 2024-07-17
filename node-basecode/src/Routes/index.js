const express = require("express");

const router = express.Router();
const auth = require("./Auth/auth");
const user = require("./User/user");
const FAQs = require("./FAQs/faqs");
const LegalAgreement = require("./LegalAgreement/legalAgreement");
const Helps = require("./Helps/helps");



router.use('/auth', auth);
router.use('/user', user);
router.use('/faqs', FAQs);
router.use('/legalagreement', LegalAgreement);
router.use('/helps', Helps);



module.exports = router