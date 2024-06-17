const router = require("express").Router();
const User = require("../models/user");
const { register, login } = require("../controller/userController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
