import propTypes from "prop-types";
import classes from "../styles/TextInput.module.css";

export default function TextInput({ icon, ...rest }) {
  return (
    <>
      <div className={classes.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </>
  );
}

TextInput.propTypes = {
  rest: propTypes.object,
  icon: propTypes.string,
};
