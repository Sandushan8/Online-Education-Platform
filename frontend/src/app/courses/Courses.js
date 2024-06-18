import { Typography } from "@mui/material";
import { styles } from "./Courses.styles";

export const Courses = ({ courses }) => {
  return (
    <div style={styles.container}>
      {courses.map((item) => {
        return (
          <div style={styles.item}>
            <Typography>{item.title}</Typography>
            <div style={styles.action}>
              <Typography>Edit</Typography>
              <Typography>Delete</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};
