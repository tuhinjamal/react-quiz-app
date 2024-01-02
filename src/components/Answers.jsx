import classes from "../styles/Answers.module.css";
import Checkbox from "./CheckBox";
import propTypes from "prop-types";
export default function Answers({ options = [], handleChange }) {
  return (
    <>
      <div className={classes.answers}>
        {options.map((option, index) => (
          <Checkbox
            key={index}
            className={classes.answer}
            text={option.title}
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
    </>
  );
}
Answers.propTypes = {
  options: propTypes.any,
  handleChange: propTypes.any,
};
