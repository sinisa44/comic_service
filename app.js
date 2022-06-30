const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/authRouter");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRouter);

module.exports = app;
