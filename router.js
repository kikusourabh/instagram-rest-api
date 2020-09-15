const express = require("express");
const router = express.Router();
const user = require("./Models/user");
const jwt = require("jsonwebtoken");
router.get("/", (req, res) => {
  res.send("Wellcome to instagram rest api");
});

router.post("/register_user", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {

      res.send({
        error: "bad request",
      });
    } else {
      const userExist = await user.findOne({ username: username, email: email });
      if (userExist) {

        res.send({
          error: "user already exist",
        });
      } else {
        jwt.sign(username, password, async (error, token) => {
          if (error) {
            res.send({
              error: "token generation error : " + error,
            });
          } else {
            const User = new user({
              username: username,
              email: email,
              password: password,
              token: token
            });
            const savedUser = await User.save();
            res.send({
              msg: "user register successfully",
              token: token,
            });
          }
        })
      }
    }
  } catch (error) {


    res.send({
      error: "some thing went wrong",
    });
  }
});
module.exports = router;
