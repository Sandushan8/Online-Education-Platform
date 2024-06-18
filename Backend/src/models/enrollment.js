const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  note: { type: String, required: false },
  enrolledAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
