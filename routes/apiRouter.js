const express = require("express");

const characterController = require("../controllers/characterController");

const router = express.Router();

router
  .route("/characters")
  .get(characterController.index)
  .post(characterController.create);

module.exports = router;
