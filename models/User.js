const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Email format is invalid"],
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  console.log({ hash });
  this.password = hash;

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
