import imgThree from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";
import propTypes from "prop-types";
export default function video({ title, noq, id }) {
  return (
    <>
      <div className={classes.video}>
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total points : {noq * 5}</p>
        </div>
      </div>
    </>
  );
}
video.propTypes = {
  //   rest: propTypes.object,
  title: propTypes.any,
  noq: propTypes.any,
  id: propTypes.any,
};
