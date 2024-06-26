import { Button, Card, IconButton, Modal, TextField } from "@mui/material";
import { styles } from "./CreateEditStudentModal.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

export const CreateEditStudentModal = ({ option, onSubmit, close }) => {
  const [username, setUsername] = useState(option.value.name || "");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [email, setEmail] = useState(option.value.email || "");

  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  useEffect(() => {
    if (password) {
      if (password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        setPassError(false);
      } else {
        setPassError(true);
      }
    }
    if (password && confpassword && password !== confpassword) {
      setError(true);
    }
    if (password === confpassword) {
      setError(false);
    }
  }, [password, confpassword]);

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
                name: username,
                password: password,
                email: email,
              });
            }}
            style={styles.form}
          >
            <TextField
              name="name"
              label="Username"
              variant="outlined"
              value={username}
              required
              style={styles.textField}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              style={styles.textField}
              required
              error={error || passError}
              helperText={
                passError
                  ? "Password must be longer than 8 characters and contain one number"
                  : ""
              }
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              name="confpassword"
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confpassword}
              error={error}
              helperText={error ? "Passwords do not match" : ""}
              required
              style={styles.textField}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              required
              style={styles.textField}
              onChange={(e) => setEmail(e.target.value)}
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
