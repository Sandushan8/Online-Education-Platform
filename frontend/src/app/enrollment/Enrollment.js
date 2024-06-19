import { styles } from "./Enrollment.styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Enrollment.css";
export const Enrollment = ({
  enrollment,
  students,
  courses,
  setOption,
  deleteEnrollmentData,
}) => {
  console.log("enrollment", students, courses);
  return (
    <div style={styles.container}>
      <button
        style={styles.addbutton}
        onClick={() => setOption({ option: "create", value: {} })}
      >
        Add
      </button>
      <table style={styles.table}>
        <tr style={styles.headerRow}>
          <th style={styles.cell}>Student ID</th>
          <th style={styles.cell}>Student Name</th>
          <th style={styles.cell}>Course ID</th>
          <th style={styles.cell}>Course Name</th>
          <th style={styles.cell}>Note</th>
          <th style={styles.editCell}>Edit</th>
          <th style={styles.editCell}>Delete</th>
        </tr>
        {enrollment.map((item) => {
          console.log(
            "hey" + students?.filter((val) => val._id === item.student)
          );
          return (
            <tr style={styles.row}>
              <td style={styles.cell}>{item.student}</td>
              <td style={styles.cell}>
                {students?.find((val) => val._id === item.student)?.name ||
                  "None"}
              </td>
              <td style={styles.cell}>{item.course}</td>
              <td style={styles.cell}>
                {courses?.find((val) => val._id === item.course)?.title ||
                  "None"}
              </td>
              <td style={styles.cell}>{item.note}</td>
              <td
                style={styles.editCell}
                onClick={() => setOption({ option: "edit", value: item })}
              >
                <EditIcon />
              </td>
              <td
                style={styles.deleteCell}
                onClick={() => deleteEnrollmentData(item._id)}
              >
                <DeleteIcon />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
