const express = require("express");
const router = express.Router();
const user = require("./Models/user");

router.get("/", (req, res) => {
  res.send("Wellcome to instagram rest api");
});

router.post("/register_user", async (req, res) => {
  try {
    const { uname, email, password } = req.body;
    if (!uname || !email || !password) {
      res.send({
        error: "bad request",
      });
    } else {
      const userExist = await user.findOne({ uname: uname, email: email });
      if (userExist) {
        res.send({
          error: "user already exist",
        });
      } else {
        const User = new user({
          uname: uname,
          email: email,
          password: password,
        });
        const savedUser = await User.save();
        res.send({
          msg: "user register successfully",
          user: savedUser,
        });
      }
    }
  } catch (error) {
    res.send({
      error: "some thing went wrong",
    });
  }
});
module.exports = router;
