const router = require("express").Router();
const {
  getAllCourse,
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controller/courseController");
const { auth } = require("../middleware/auth/auth");

router.get("/", auth, getAllCourse);
router.post("/", auth, addCourse);
router.get("/:id", auth, getCourse);
router.put("/:id", auth, updateCourse);
router.delete("/:id", auth, deleteCourse);

module.exports = router;
