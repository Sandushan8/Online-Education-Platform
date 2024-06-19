import { styles } from "./Courses.styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Courses.css";
import { useSelector } from "react-redux";
import { Button, Card, IconButton } from "@mui/material";
import { useState } from "react";
import Books from "../../assets/library.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AlertDialog from "../../components/Dialog/Dialog";

export const Courses = ({
  courses,
  setOption,
  deleteCourseData,
  enrollStudent,
}) => {
  const { role } = useSelector((state) => state.auth.user);
  const [current, setCurrent] = useState(0);
  const [confirm, setConfirm] = useState(false);
  return role === "admin" ? (
    <div style={styles.container}>
      <button
        style={styles.addbutton}
        onClick={() => setOption({ option: "create", value: {} })}
      >
        Add
      </button>
      <table style={styles.table}>
        <tr style={styles.headerRow}>
          <th style={styles.cell}>Title</th>
          <th style={styles.cell}>Description</th>
          <th style={styles.cell}>Benefit</th>
          <th style={styles.editCell}>Edit</th>
          <th style={styles.editCell}>Delete</th>
        </tr>
        {courses.map((item) => {
          return (
            <tr style={styles.row}>
              <td style={styles.cell}>{item.title}</td>
              <td style={styles.cell}>{item.description}</td>
              <td style={styles.cell}>{item.benefits}</td>
              <td
                style={styles.editCell}
                onClick={() => setOption({ option: "edit", value: item })}
              >
                <EditIcon />
              </td>
              <td
                style={styles.deleteCell}
                onClick={() => deleteCourseData(item._id)}
              >
                <DeleteIcon />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  ) : (
    <div style={styles.studentContainer}>
      <IconButton
        onClick={() => setCurrent(current - 1)}
        disabled={current === 0}
        style={{ opacity: current === 0 ? 0 : 1 }}
      >
        <ArrowBackIosIcon style={styles.icons} />
      </IconButton>
      <Card style={styles.courseContainer}>
        <div style={styles.courseContainer}>
          <img src={Books} alt="courseImage" style={styles.course} />
          <div style={styles.courseDetails}>
            <h1>{courses[current].title}</h1>
            <p>{courses[current].description}</p>
            <p>{courses[current].benefits}</p>
          </div>
          <Button
            variant="contained"
            style={styles.enrollButton}
            onClick={() => setConfirm(true)}
          >
            Enroll
          </Button>
        </div>
      </Card>
      <IconButton
        onClick={() => setCurrent(current + 1)}
        disabled={current === courses.length - 1}
        style={{ opacity: current === courses.length - 1 ? 0 : 1 }}
      >
        <ArrowForwardIosIcon style={styles.icons} />
      </IconButton>
      <AlertDialog
        handleSubmit={() => {
          enrollStudent(courses[current]._id);
        }}
        title={"Enroll in Course"}
        open={confirm}
        setOpen={setConfirm}
        text={"Are you sure you want to enroll in this course?"}
      />
    </div>
  );
};
