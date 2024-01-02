import propTypes from "prop-types";
import classes from "../styles/Button.module.css";

export default function Button({ className, children, ...rest }) {
  return (
    <>
      <button className={`${classes.button} ${className}`} {...rest}>
        {children}
      </button>
    </>
  );
}
Button.propTypes = {
  //   rest: propTypes.object,
  children: propTypes.any,
  className: propTypes.any,
};
