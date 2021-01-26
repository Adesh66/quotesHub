const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const app = express();

// support parsing of application/json type post data
app.use(express.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

//databse connection
require("./dbConnection");

app.use(morgan("combined"));

const userRoute = require("./routes/Quotes");
app.use("/quotes", userRoute);


// error handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((error, req, res, next) => {
  error.status = error.status;
  res.status(error.status || 500);
  res.send(error);
});
const PORT = 9096;
app.listen(PORT, () => {
  console.log(`app is running on port - ${PORT}`);
});
