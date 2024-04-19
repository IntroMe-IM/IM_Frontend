import React from "react";
// import Box from "./Box";
// import MainLayout from "./MainLayout";
// import { useMediaQuery } from "react-responsive";
import classes from "./LandingPage.module.css";
import MainBanner from "./MainBanner";
import NewProject from "./NewProject";
import NameCard from "./NameCard";

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

  return (
    <>
      <div className={classes.mainLayout}>
        <MainBanner />
        <NewProject />
        <NameCard />
      </div>
    </>
  );
};

export default LandingPage;
