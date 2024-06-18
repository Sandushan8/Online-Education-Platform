import { Button, Card, TextField, Typography } from "@mui/material";
import { styles } from "./Login.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div style={styles.login}>
      <Card>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h1>Login</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit({ name: username, password: password });
              }}
              style={styles.form}
            >
              <TextField
                name="name"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
              <Typography>
                Don't have an account?{" "}
                <b onClick={() => navigate("/register")}>Register</b>
              </Typography>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};
