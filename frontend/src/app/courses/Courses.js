import { styles } from "./Courses.styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Courses.css";
export const Courses = ({ courses, setOption, deleteCourseData }) => {
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
  );
};
