import { Button, Card, TextField, Typography } from "@mui/material";
import { styles } from "./Register.styles";
import { useState } from "react";

export const Register = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div style={styles.register}>
      <Card>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h1>Register</h1>
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
              <TextField
                name="confpassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confpassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="contained">
                Register
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};
