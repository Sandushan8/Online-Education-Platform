import {
  Button,
  Card,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { styles } from "./CreateEditEnrollmentModal.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const CreateEditEnrollmentModal = ({
  option,
  onSubmit,
  close,
  students,
  courses,
}) => {
  const [student, setStudent] = useState(option.value.student || "");
  const [course, setCourse] = useState(option.value.course || "");
  const [note, setNote] = useState(option.value.note || "");

  return (
    <Modal open={!!option} style={styles.modal}>
      <>
        <Card style={styles.card}>
          <IconButton style={styles.closeIcon} onClick={() => close()}>
            <CloseIcon />
          </IconButton>
          <h1 style={styles.topic}>
            {option.option === "create" ? "Create" : "Edit"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit({
                id: option.option === "edit" ? option.value._id : null,
                student: student,
                course: course,
                note: note,
              });
            }}
            style={styles.form}
          >
            <Select
              name="student"
              options={[{ label: "Select Course", value: "Select Course" }]}
              value={student}
              required
              onChange={(e) => setStudent(e.target.value)}
            >
              <MenuItem value="">Select Student</MenuItem>
              {students.map((item) => (
                <MenuItem value={item._id}>{item.name}</MenuItem>
              ))}
            </Select>
            <Select
              name="course"
              options={[{ label: "Select Course", value: "Select Course" }]}
              value={course}
              required
              onChange={(e) => setCourse(e.target.value)}
            >
              <MenuItem value="">Select Course</MenuItem>
              {courses.map((item) => (
                <MenuItem value={item._id}>{item.title}</MenuItem>
              ))}
            </Select>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              style={styles.textField}
              value={note}
              required
              onChange={(e) => setNote(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              style={styles.loginButton}
            >
              Submit
            </Button>
          </form>
        </Card>
      </>
    </Modal>
  );
};
