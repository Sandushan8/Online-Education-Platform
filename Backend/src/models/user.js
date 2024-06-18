const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    // , unique: true
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "admin"],
    required: false,
    default: "student",
  },
});

module.exports = mongoose.model("User", userSchema);
