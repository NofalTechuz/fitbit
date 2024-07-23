const fs = require("fs");
const { Console } = require("console");
const path = require("path");

let currentLogFileName = generateLogFileName();
let logDataStream = fs.createWriteStream(currentLogFileName, { flags: "a" });
let newConsole = new Console({
  stdout: logDataStream,
  stderr: logDataStream,
});

function generateLogFileName() {
  const date = new Date();
  const day = date.toISOString().split("T")[0]; // YYYY-MM-DD format
  return path.join(__dirname, `./logs/${day}-combinedLog.log`);
}

function getTimestamp() {
  return new Date().toISOString();
}

function updateLogFile() {
  const newLogFileName = generateLogFileName();
  if (newLogFileName !== currentLogFileName) {
    currentLogFileName = newLogFileName;
    logDataStream.end();
    logDataStream = fs.createWriteStream(currentLogFileName, { flags: "a" });
    newConsole = new Console({
      stdout: logDataStream,
      stderr: logDataStream,
    });
  }
}

function configConsole() {
  console.log = (...args) => {
    updateLogFile();
    const logMessage = args.join(" ");
    const timestampedMessage = `[${getTimestamp()}] ${logMessage}`;
    newConsole.log(timestampedMessage);
    process.stdout.write(`${logMessage}\n`);
  };

  console.error = (...args) => {
    updateLogFile();
    const logMessage = args.join(" ");
    const timestampedMessage = `[${getTimestamp()}] ${logMessage}`;
    newConsole.error(timestampedMessage);
    process.stderr.write(`${logMessage}\n`);
  };
}

module.exports = configConsole;
