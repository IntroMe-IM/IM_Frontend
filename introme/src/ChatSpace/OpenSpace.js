import React from "react";
import NavBar from "../Common/NavBar";
import classes from "../Common/Layout.module.css";
import classesOpen from "./OpenSpace.module.css";
import { Link } from "react-router-dom";
import openSpace_B from "../Icon/openSpace_B.png";
import teamSpace from "../Icon/teamSpace.png";
import newproject from "../Icon/newProject.png";

const OpenSpace = () => {
  return (
    <>
      <div className={classes.LoginPageLayout}>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            width: "95%",
            marginTop: "7vh",
          }}
        >
          <Link to="/OpenSpace" className={classesOpen.spaceEnable}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={openSpace_B} alt="openSpace_B" />
              오픈 스페이스
            </div>
          </Link>
          <Link to="/TeamSpace" className={classesOpen.spaceDisable}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={teamSpace} alt="teamSpace" /> 팀 스페이스
            </div>
          </Link>
        </div>
        {/*팀 스페이스 작성글 */}
        <div style={{ marginTop: "1vh" }}>
          {Array.from({ length: 6 }, (_, index) => (
            <div
              style={{
                borderBottom: "1px solid black",
                width: "calc(95% - 30px)",
                margin: "0 auto",
                padding: "7px",
              }}
            >
              <div style={{ fontWeight: "bold" }}> 안녕하세요</div>
              <div style={{ display: "flex" }}>
                <div>brody&emsp; </div>
                <div>14:23&emsp;</div>
                <div>조회수: {}</div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/CreateChat">
        <img src={newproject} className={classesOpen.creatProject} alt="newProject" />
        </Link>
        <NavBar />
      </div>
    </>
  );
};

export default OpenSpace;
