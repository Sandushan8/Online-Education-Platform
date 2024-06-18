const Student = require("../models/student");
const User = require("../models/user");
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

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    await User.findByIdAndDelete(student.studentId);
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
};
