import React from "react";
import { Link } from "react-router-dom";
import classes from "./Layout.module.css";

const NavBar = () => {
  return (
    <nav className={classes.footerNav}>
      <ul className={classes.navList}>
        <div className={classes.navDiv} >
        <li className={classes.navItem}>
          <Link to="/" className={classes.navLink}>
            홈
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/" className={classes.navLink}>
            명합지갑
          </Link>
        </li>
        </div>
        <div className={` ${classes.circle}`}><div className={classes.text}>🪪</div></div>
        <div className={classes.navDiv}>
        <li className={classes.navItem}>
          <Link to="/TeamSpace" className={classes.navLink}>
            오픈공간
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/LoginPage" className={classes.navLink}>
            내 정보
          </Link>
        </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
