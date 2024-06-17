const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  enrolledCourses: [
    { type: Schema.Types.ObjectId, ref: "Course", required: false },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
