import { Button, Card, IconButton, Modal, TextField } from "@mui/material";
import { styles } from "./CreateEditCourseModal.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const CreateEditCourseModal = ({ option, onSubmit, close }) => {
  const [title, setTitle] = useState(option.value.title || "");
  const [description, setDescription] = useState(
    option.value.description || ""
  );
  const [benefits, setBenefits] = useState(option.value.benefits || "");
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
                title: title,
                description: description,
                benefits: benefits,
              });
            }}
            style={styles.form}
          >
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              value={title}
              style={styles.textField}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              style={styles.textField}
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              name="benefits"
              label="Benefits"
              variant="outlined"
              style={styles.textField}
              value={benefits}
              required
              onChange={(e) => setBenefits(e.target.value)}
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
