const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(bodyParser.json());

module.exports = app;
