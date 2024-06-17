const Course = require("../models/course");

const addCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send(course);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getAllCourse = async (req, res) => {
  try {
    const students = await Course.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(400).send(err);
  }
};
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(course);
  } catch (err) {
    res.status(400).send(err);
  }
};
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send(course);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  addCourse,
  getCourse,
  getAllCourse,
  updateCourse,
  deleteCourse,
};
