import { styles } from "./Student.styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Student.css";
export const Student = ({ student, setOption, deleteStudentData }) => {
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
          <th style={styles.cell}>Name</th>
          <th style={styles.cell}>Email</th>
          <th style={styles.editCell}>Edit</th>
          <th style={styles.editCell}>Delete</th>
        </tr>
        {student.map((item) => {
          console.log("item", item);
          return (
            <tr style={styles.row}>
              <td style={styles.cell}>{item._id}</td>
              <td style={styles.cell}>{item.name}</td>
              <td style={styles.cell}>{item.email}</td>
              <td
                style={styles.editCell}
                onClick={() => setOption({ option: "edit", value: item })}
              >
                <EditIcon />
              </td>
              <td
                style={styles.deleteCell}
                onClick={() => deleteStudentData(item._id)}
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
