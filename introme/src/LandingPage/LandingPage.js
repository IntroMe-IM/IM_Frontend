import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import classes from "../Common/Layout.module.css";
import MainBanner from "./MainBanner";
import NewProject from "./NewProject";
import NameCard from "./NameCard";
import NavBar from "../Common/NavBar";

const LandingPage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!isMobile) {
      navigate("/mobileOnly");
    }
  }, [isMobile]);

  if (!isMobile) {
    return null; 
  }

  return (
    <>
      <div className={classes.mainLayout}>
        <MainBanner />
        <NewProject />
        <NameCard />
        <NavBar />
      </div>
    </>
  );
};

export default LandingPage;
