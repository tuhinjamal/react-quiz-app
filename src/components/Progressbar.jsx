import propTypes from "prop-types";

import classes from "../styles/Progressbar.module.css";
import Button from "./Button";
import { useState, useRef } from "react";

export default function Progessbar({ next, prev, submit, progress }) {
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState(false);
  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `calc(${progress}% -65px)`;
    }
  }
  return (
    <>
      <div className={classes.progressBar}>
        <div className={classes.backButton} onClick={prev}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
          <div className={classes.tooltip} ref={tooltipRef}>
            {progress}% Complete!
          </div>
          <div className={classes.rangeBody}>
            <div
              className={classes.progress}
              style={{ width: `${progress}%` }}
              onMouseOver={toggleTooltip}
              onMouseOut={toggleTooltip}
            ></div>
          </div>
        </div>

        <Button
          className={classes.next}
          onClick={progress === 100 ? submit : next}
        >
          <span> {progress === 100 ? "submit Quiz" : "Next Question"}</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </div>
    </>
  );
}
Progessbar.propTypes = {
  next: propTypes.any,
  prev: propTypes.any,
  submit: propTypes.any,
  progress: propTypes.any,
};
