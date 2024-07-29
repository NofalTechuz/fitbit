const AppError = require("../utils/appError");

const stringifyObject = (obj, indent = 2, depth = 0) => {
  const padding = " ".repeat(indent * depth);
  const entries = Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return `${padding}${key}: ${stringifyObject(value, indent, depth + 1)}`;
      }
      return `${padding}${key}: ${String(value)}`;
    })
    .join(",\n");
  return `{\n${entries}\n${padding}}`;
};

//handling assumed error in production

//cast error
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleSequelizeForeignKeyConstraintError = (err) => {
  const message = `related Id not found for this request on database`;
  console.log(err.message);
  return new AppError(message, 404);
};

const sendErrorDev = (err, req, res) => {
  // A) API (send every error to help in development)

  //console log error
  const errorObj = {
    status: err?.status,
    message: err?.message,
    error: err,
    stack: err?.stack,
  };
  const errorObjString = stringifyObject(errorObj); //stringify the object manually
  // console.log(JSON.stringify(errorObj, null, 2)); // stringified in JSON
  console.error(errorObjString);

  //send error response
  return res.status(err.statusCode).json({
    status: err?.status,
    error: err,
    message: err?.message,
    stack: err?.stack,
  });
};

const sendErrorProd = (err, req, res) => {
  // A) API

  // A) Operational, trusted error: send message to client
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  // B) Programming or other unknown error: don't leak error details
  // 1) Log error
  console.error("ERROR", err);
  // 2) Send generic message
  return res.status(500).json({
    status: "error",
    message: "Something went very wrong!",
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    //in development environment give full details in response including error stack
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    //in production environment dont expose app internal structure so only give error status and message in response
    let error = { ...err };
    error.message = err.message;
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.name === "SequelizeForeignKeyConstraintError")
      error = handleSequelizeForeignKeyConstraintError(error);
    sendErrorProd(error, req, res);

    sendErrorProd(error, req, res);
  }
};
