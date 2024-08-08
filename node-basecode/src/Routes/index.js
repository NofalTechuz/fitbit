const express = require("express");

const router = express.Router();
const auth = require("./Auth/auth");
const user = require("./User/user");
const FAQs = require("./FAQs/faqs");
const LegalAgreement = require("./LegalAgreement/legalAgreement");
const Helps = require("./Helps/helps");
const Exercise = require("./Exercise/Exercises");
const ExerciseCategory = require("./Exercise/ExerciseCateogry");
const DietPlan = require("./DietPlan/dietPlan");
const Chats = require("./Chat/Chats");


router.use("/auth", auth);
router.use("/user", user);
router.use("/faqs", FAQs);
router.use("/legalagreement", LegalAgreement);
router.use("/helps", Helps);
router.use("/exercise", Exercise);
router.use("/exercisecategory", ExerciseCategory);
router.use("/dietplan", DietPlan);
router.use("/chats", Chats);

module.exports = router;
