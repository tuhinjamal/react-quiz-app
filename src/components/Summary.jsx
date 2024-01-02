import propTypes from "prop-types";
import SuccessImage from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";
export default function Summary({ score, noq }) {
  return (
    <>
      <div className={classes.summary}>
        <div className="point">
          {/* <!-- progress bar will be placed here --> */}
          <p className={classes.score}>
            Your score is <br />
            {score} out of {noq * 5}
          </p>
        </div>

        <div className={classes.badge}>
          <img src={SuccessImage} alt="Success" />
        </div>
      </div>
    </>
  );
}

Summary.propTypes = {
  //   rest: propTypes.object,
  score: propTypes.any,
  noq: propTypes.any,
};
