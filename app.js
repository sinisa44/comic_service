const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/authRouter");
const apiRouter = require("./routes/apiRouter");

const authMiddleware = require("./middleware/auth.middleware");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRouter);
app.use("/api", authMiddleware, apiRouter);

module.exports = app;
