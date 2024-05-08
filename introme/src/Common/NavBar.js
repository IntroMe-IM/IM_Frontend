import React from "react";
import classes from "./Layout.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className={classes.footerNav}>
        <ul>
          <li>
            <a href="#">홈</a>
          </li>
          <li>
            <a href="#">명합지갑</a>
          </li>
          <li>
            <a href="#">오픈공간</a>
          </li>
          <li>
            <a href="#">내 정보</a>
          </li>
          <Link to="/LoginPage" style={{textDecoration: "none", color: "inherit" }}>
            로그인
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
