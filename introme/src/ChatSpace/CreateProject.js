import React from "react";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import createButton from "../Icon/createButton.png";
import { Link } from "react-router-dom";

const CreateProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={classes.createChatLayout}>
        <form onSubmit={handleSubmit}>
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
            <input
              placeholder="팀명 입력"
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                padding: "0.5rem",
              }}
            ></input>
          </div>
          <div style={{ margin: "4vh" }}>
            <input
              placeholder="프로젝트명 입력"
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                padding: "0.5rem",
              }}
            ></input>
          </div>

          <div style={{ margin: "4vh" }}>
            <textarea
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
                overflowY: "hidden",
              }}
            ></textarea>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <Link to="TeamSpace">
              <img src={createButton} style={{ margin: "1vh" }} />
            </Link>
            <Link to="TeamSpace">
              <img src={cancleButton} />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
