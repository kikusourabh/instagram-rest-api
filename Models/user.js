const mongoose = require("mongoose");

const user = new mongoose.Schema({
  uname: String,
  fullname: String,
  profile: String,
  dateofbirth: String,
  bio: String,
  email: String,
  password: String,
  token: String,
});

module.exports = mongoose.model("user", user);
