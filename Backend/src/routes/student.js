const router = require("express").Router();
const {
  getAllStudent,
  addStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  enrollStudent,
  removeEnrollment,
} = require("../controller/studentController");
const { auth } = require("../middleware/auth/auth");

router.get("/", auth, getAllStudent);
router.post("/", auth, addStudent);
router.put("/:id", auth, enrollStudent);
router.put("/:id", auth, removeEnrollment);
router.get("/:id", auth, getStudent);
router.put("/:id", auth, updateStudent);
router.delete("/:id", auth, deleteStudent);

module.exports = router;
