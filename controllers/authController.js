const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    await bcrypt.compare(
      req.body.password,
      user.password,
      function (err, result) {
        if (err) console.log(err);

        if (!result) {
          res.status(403).json({ message: "invalid password" });
        }

        const { username, password, email, _id } = user;

        const token = jwt.sign(
          {
            username,
            password,
            email,
            _id,
          },
          process.env.TOKEN,
          {
            expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
          }
        );

        res.status(200).json({
          data: {
            token,
          },
        });
      }
    );
  } else {
    res.status(404).json({ message: "not found" });
  }
};

exports.register = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(200).json({ data: { newUser } });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.me = async (req, res) => {
  //   console.log({ req, res });
  const user = await User.findOne({ email: req.body.email });

  res.status(200).json({ user });
};
