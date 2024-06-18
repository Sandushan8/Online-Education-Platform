import { Button } from "@mui/material";
import { styles } from "./NothingHerePage.styles";
export const NothingHerePage = ({ buttonText, onClick }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Nothing Here</h1>
      <Button variant="contained" onClick={() => onClick()}>
        {buttonText ? buttonText : "Add"}
      </Button>
    </div>
  );
};
