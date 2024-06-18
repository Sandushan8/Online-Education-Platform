import { Button, Card, TextField, Typography } from "@mui/material";
import { styles } from "./Register.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
export const Register = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div style={styles.register}>
      <Card>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h1 style={styles.topic}>Register</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit({
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                name="confpassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confpassword}
                style={styles.textField}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                style={styles.textField}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                style={styles.registerButton}
              >
                Register
              </Button>
              <Typography>
                Already have an account?{" "}
                <b className="register" onClick={() => navigate("/login")}>
                  Login
                </b>
              </Typography>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};
