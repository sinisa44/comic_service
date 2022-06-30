const Character = require("../models/Character");

exports.index = async (req, res) => {
  try {
    const characters = Character.find();

    res.status(200).json({ characters });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

exports.create = async (req, res) => {
  try {
    const character = await Character.create(req.body);

    res.status(200).json({ data: { character } });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};
