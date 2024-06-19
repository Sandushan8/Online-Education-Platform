import { height, width } from "@mui/system";

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  table: {
    width: "100%",
  },
  headerRow: {
    textAlign: "center",
    height: 50,
    backgroundColor: "lightblue",
  },
  row: {
    textAlign: "center",
    height: 50,
  },
  cell: {
    textAlign: "center",
    height: 50,
  },
  editCell: {
    width: 100,
  },
  deleteCell: {
    width: 100,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  addbutton: {
    width: 100,
    height: 50,
    backgroundColor: "lightgray",
    borderRadius: "8px",
    cursor: "pointer",
    alignSelf: "flex-end",
  },
  studentContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "90%",
    backgroundColor: "lightgray",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  course: {
    height: 500,
    width: 700,
  },
  courseContainer: {
    width: 700,
    height: 700,
    display: "flex",
    flexDirection: "column",
  },
  icons: {
    height: 30,
    width: 30,
  },
  enrollButton: {
    alignSelf: "center",
  },
  courseDetails: {
    paddingLeft: 20,
  },
};
