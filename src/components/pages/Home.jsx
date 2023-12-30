import { Link } from "react-router-dom";
import classes from "../../styles/Videos.module.css";
import Videos from "../Videos";
export default function Home() {
  return (
    <>
      <div className={classes.videos}>
        <Link to="/quiz">
          <Videos />
        </Link>
        <Link to="/quiz">
          <Videos />
        </Link>
        <Link to="/quiz">
          <Videos />
        </Link>
        <Link to="/quiz">
          <Videos />
        </Link>
        <Link to="/quiz">
          <Videos />
        </Link>
      </div>
    </>
  );
}
