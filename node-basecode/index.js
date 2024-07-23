const express = require("express");
const app = express();
// donenv config
require("dotenv").config();
const port = process.env.PORT || 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = express.Router();
const routes = require("./src/Routes/index");
const { origin_urls } = require("./src/config/uri");
const fs = require("fs");
const globalErrorHandler = require("./src/middlewares/ErrorMiddleware");
const { scheduledLog } = require("./src/config/scheduledTask");
const AppError = require("./src/utils/appError");
const configConsole = require("./src/config/loggingConfig");

//console configuration for getting logs record in file
configConsole();

//error handling "uncaughtException"
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!  Shutting down...");
  console.log("error :", err.name);
  //give stack and message info only in development environment
  if (process.env.NODE_ENV === "development") {
    console.log("message :", err.message);
    console.log("stack :", err.stack);
  }
  process.exit(1);
});

app.use(
  cors({
    origin: origin_urls,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(globalErrorHandler);

router.use("/", routes);

router.get("/", async (req, res, next) => {
  try {
    res.send("Hello");
  } catch (error) {
    next(error);
  }
});

router.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

scheduledLog();

const server = app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

//error handling "unhandledRejection"
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log("error :", err.name);
  if (process.env.NODE_ENV === "development") {
    console.log("message :", err.message);
    console.log("stack :", err.stack);
  }
  server.close(() => {
    process.exit(1);
  });
});
