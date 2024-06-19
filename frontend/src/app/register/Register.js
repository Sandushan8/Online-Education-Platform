import { Button, Card, TextField, Typography } from "@mui/material";
import { styles } from "./Register.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
export const Register = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const navigate = useNavigate();

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
                required
                error={error || passError}
                helperText={
                  passError
                    ? "Password must be longer than 8 characters and contain one number"
                    : ""
                }
                style={styles.textField}
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
