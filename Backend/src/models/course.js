const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  benefits: {
    type: String,
    required: false,
    default: "Learning will help anytime",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", courseSchema);
