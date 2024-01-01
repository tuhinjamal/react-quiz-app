import classes from "../styles/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";
import { useState } from "react";
import { useAuth } from "../contexts/AuhtContexts";
export default function SignUpForm() {
  let navigateTo = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== ConfirmPassword) {
      return setError("passwords don't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigateTo("/home");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account !");
    }
  }
  return (
    <>
      <Form className={`${classes.signup} form`} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="enter name"
          icon="person"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="confirm password"
          icon="lock_clock"
          required
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CheckBox
          type="checkbox"
          text="I agree to the Terms & Conditions"
          required
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          <span>Submit Now</span>{" "}
        </Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Already have an account? <Link to="/">Login</Link> instead.
        </div>
      </Form>
      ;
    </>
  );
}
