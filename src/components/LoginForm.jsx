import classes from "../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import { useAuth } from "../contexts/AuhtContexts";
import { useState } from "react";
export default function LoginForm() {
  let navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { login } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigateTo("/home");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login !");
    }
  }
  return (
    <>
      <Form className={`${classes.login}`} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          <span>Submit Now</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </>
  );
}
