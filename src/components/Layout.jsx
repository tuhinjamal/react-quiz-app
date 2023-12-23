import propTypes from "prop-types";
import classes from "../styles/Layout.module.css";
import Nav from "./nav/index";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}

Layout.propTypes = {
  children: propTypes.object,
};
