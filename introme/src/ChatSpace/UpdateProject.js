import React from "react";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import updateButton from "../Icon/updateButton.png";
import { Link } from "react-router-dom";

const CreateProject = () => {

  return (
    <>
      <div className={classes.createChatLayout}>
          <p
            style={{
              marginTop: "5vh",
              margin: "5vh",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            새 프로젝트
          </p>
          <div style={{ margin: "4vh" }}>
            <div
              placeholder="팀명 입력"
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                marginTop:"-3rem",
                padding: "0.5rem",
              }}
            > 제목 입력 칸</div>
          </div>
          <div style={{ margin: "4vh" }}>
            <div
              placeholder="프로젝트명 입력"
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                marginTop:"-3rem",
                padding: "0.5rem",
              }}
            >프로젝트 내용 칸</div>
          </div>

          <div style={{ margin: "4vh" }}>
            <div
              placeholder="프로젝트를 설명해주세요!"
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                padding: "0.5rem",
                minHeight: "30vh",
                maxHeight: "30vh",
                resize: "none",
                marginTop:"-3rem",
                overflowY: "hidden",
              }}
            >프로젝트 설명 내용</div>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <Link to="/TeamSpace">
              <img src={updateButton} style={{ margin: "1vh" }} />
            </Link>
            <Link to="/TeamSpace">
              <img src={cancleButton} />
            </Link>
          </div>
      </div>
    </>
  );
};

export default CreateProject;
