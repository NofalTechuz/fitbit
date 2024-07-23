const cron = require("node-cron");
const uploadFileToFirebase = require("./Firebase/firebase-upload");

const scheduledLog = () => {
  cron.schedule("0 0 * * *", () => {
    console.log("console log at midnight");
    console.error(new Error("console Error at midnight"));
    uploadFileToFirebase();
  });
};

module.exports = { scheduledLog };
