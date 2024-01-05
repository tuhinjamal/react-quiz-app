import classes from "../styles/Analysis.module.css";
// import Questions from "./Questions";
import Question from "./Questions";
import propTypes from "prop-types";

export default function Analysis({ answers }) {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>

      <Question answers={answers} />
    </div>
  );
}

Analysis.propTypes = {
  answers: propTypes.any,
};
