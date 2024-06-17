const Student = require("../models/student");

const addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getAllStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(400).send(err);
  }
};
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
};

const enrollStudent = async (req, res) => {
  const { courseId } = req.body;
  try {
    const studentVal = await Student.findById(req.params.id);
    if (!studentVal) {
      return res.status(404).send("Student not found");
    }
    const studentObj = {
      studentId: studentVal.studentId,
      name: studentVal.name,
      email: studentVal.email,
      enrolledCourses: [...studentVal.enrolledCourses, courseId],
    };
    const student = await Student.findByIdAndUpdate(req.params.id, studentObj);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
};

const removeEnrollment = async (req, res) => {
  const { courseId, enrollmentId } = req.body;
  try {
    const studentVal = await Student.findById(req.params.id);
    if (!studentVal) {
      return res.status(404).send("Student not found");
    }
    const updatedEnrolledCourses = studentVal.enrolledCourses.filter(
      (enrollment) => enrollment !== enrollmentId
    );
    const studentObj = {
      studentId: studentVal.studentId,
      name: studentVal.name,
      email: studentVal.email,
      enrolledCourses: updatedEnrolledCourses,
    };
    const student = await Student.findByIdAndUpdate(req.params.id, studentObj);
    if (!student) {
      return res.status(404).send("Student not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  addStudent,
  getStudent,
  getAllStudent,
  updateStudent,
  deleteStudent,
  enrollStudent,
  removeEnrollment,
};
