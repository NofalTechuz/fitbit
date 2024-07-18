const express = require('express');
const app = express();
// donenv config
require('dotenv').config();
const port = process.env.PORT || 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const routes = require('./src/Routes/index')
const { origin_urls } = require('./src/config/uri');
const fs = require('fs');
const globalErrorHandler = require("./src/middlewares/ErrorMiddleware");


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



router.use('/', routes)

router.get('/', async (req, res) => {
  try {
    res.send("Hello");
    
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});


router.use('*', (req, res) => {
  res.status(404).send('Not Found');
});



app.listen(port, () => {
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