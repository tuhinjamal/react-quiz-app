import logo from "../../assets/images/logo-bg.png";
import classes from "../../styles/Nav.module.css";
import AccountComponent from "./account";
export default function nav() {
  return (
    <>
      {" "}
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
        <AccountComponent />
      </nav>
    </>
  );
}
