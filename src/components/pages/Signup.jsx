import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import Form from "../Form";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup} form`}>
          <TextInput type="text" placeholder="enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="confirm password"
            icon="lock_clock"
          />
          <CheckBox type="checkbox" text="I agree to the Terms & Conditions" />
          <Button> Submit Now </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
