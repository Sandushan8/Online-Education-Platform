const Enrollment = require("../models/enrollment");
const Student = require("../models/student");

const addEnrollment = async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    const student = await Student.findById(req.body.student);
    if (!student) {
      return res.status(404).send("Student not found");
    } else {
      const studentObj = {
        studentId: student.studentId,
        name: student.name,
        email: student.email,
        enrolledCourses: [...student.enrolledCourses, req.body.course],
      };
      await Student.findByIdAndUpdate(req.body.student, studentObj);
    }

    await enrollment.save();
    res.status(201).send(enrollment);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (!enrollment) {
      return res.status(404).send("Enrollment not found");
    }
    res.status(200).send(enrollment);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getAllEnrollment = async (req, res) => {
  try {
    const students = await Enrollment.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(400).send(err);
  }
};
const updateEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).send(enrollment);
  } catch (err) {
    res.status(400).send(err);
  }
};
const deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    const student = await Student.findById(enrollment.student);
    if (!student) {
      return res.status(404).send("Student not found");
    } else {
      const studentObj = {
        studentId: student.studentId,
        name: student.name,
        email: student.email,
        enrolledCourses: student.enrolledCourses.filter(
          (item) => item !== enrollment.course
        ),
      };
      await Student.findByIdAndUpdate(enrollment.student, studentObj);
    }
    if (!enrollment) {
      return res.status(404).send("Enrollment not found");
    }
    res.status(200).send(enrollment);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  addEnrollment,
  getEnrollment,
  getAllEnrollment,
  updateEnrollment,
  deleteEnrollment,
};
