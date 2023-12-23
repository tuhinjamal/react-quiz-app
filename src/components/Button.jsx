import propTypes from "prop-types";
import classes from "../styles/Button.module.css";

export default function Button({ children }) {
  return (
    <>
      <div className={classes.button}>
        <span>{children}</span>
      </div>
    </>
  );
}
Button.propTypes = {
  //   rest: propTypes.object,
  children: propTypes.string,
};
