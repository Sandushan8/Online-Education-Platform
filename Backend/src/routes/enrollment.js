const router = require("express").Router();
const {
  getAllEnrollment,
  addEnrollment,
  getEnrollment,
  updateEnrollment,
  deleteEnrollment,
} = require("../controller/enrollmentController");
const { auth } = require("../middleware/auth/auth");

router.get("/", auth, getAllEnrollment);
router.post("/", auth, addEnrollment);
router.get("/:id", auth, getEnrollment);
router.put("/:id", auth, updateEnrollment);
router.delete("/:id", auth, deleteEnrollment);

module.exports = router;
