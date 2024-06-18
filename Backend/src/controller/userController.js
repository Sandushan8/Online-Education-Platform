const jwt = require("jsonwebtoken");
const User = require("../models/user");

const register = async (req, res) => {
  try {
    const userObj = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    };
    if (req.body.role === "admin") {
      return res.status(400).send("You can't register as admin");
    }
    const user = new User(userObj);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) {
      return res.status(404).send("User not found");
    } else {
      const tokenObj = {
        name: user.username,
        role: user.role,
      };
      const token = jwt.sign(tokenObj, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      res.status(200).send({
        token,
        user: { username: user.username, role: user.role, uuid: user._id },
      });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { register, login };
