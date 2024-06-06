import React from "react";
// import Box from "./Box";
// import MainLayout from "./MainLayout";
// import { useMediaQuery } from "react-responsive";
import classes from "../Common/Layout.module.css";
import MainBanner from "./MainBanner";
import NewProject from "./NewProject";
import NameCard from "./NameCard";
import NavBar from "../Common/NavBar";

const LandingPage = () => {
  // 추후에 반응형 앱 구현을 위한 useMediaQuery

  // 반응형 웹
  // const isPc = useMediaQuery({
  //   query: "(min-width:768px)",
  // });

  // 반응형 모바일
  // const isMobile = useMediaQuery({
  //   query: "(max-width:767px)",
  // });
  // test1 커밋
  return (
    <>
      <div className={classes.mainLayout}>
        <MainBanner />
        <NewProject />
        <NameCard />
        <NavBar/>
      </div>
    </>
  );
};

export default LandingPage;
