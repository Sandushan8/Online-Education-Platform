const Enrollment = require("../models/enrollment");

const addEnrollment = async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
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
