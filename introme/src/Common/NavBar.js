import React from "react";
import { Link } from "react-router-dom";
import classes from "./Layout.module.css";
import mainIcon from "../Icon/mainIcon.png";
import homeIcon from "../Icon/homeIcon.png";
import nameCard from "../Icon/nameCard.png";
import openChat from "../Icon/openChat.png";
import myInfo from "../Icon/myInfo.png";

const NavBar = () => {
  return (
    <nav className={classes.footerNav}>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <Link to="/" className={classes.navLink}>
            <img src={homeIcon} alt="homeIcon" style={{ width: '75%', height: 'auto' }} />
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/Wallet" className={classes.navLink}>
            <img src={nameCard} alt="nameCard" style={{ width: '63%', height: 'auto' }} />
          </Link>
        </li>
        <li className={classes.navItem}>
          <img src={mainIcon} className={` ${classes.circle}`} alt="메인 아이콘" />
        </li>
        <li className={classes.navItem}>
          <Link to="/OpenSpace" className={classes.navLink}>
            <img src={openChat} alt="openChat" style={{ width: '65%', height: 'auto' }} />
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/LoginPage" className={classes.navLink}>
            <img src={myInfo} alt="myInfo" style={{ width: '55%', height: 'auto' }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
