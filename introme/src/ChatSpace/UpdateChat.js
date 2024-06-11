import React from "react";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import updateButton from "../Icon/updateButton.png";
import { Link } from "react-router-dom";

const UpdateChat = () => {
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
          오픈 스페이스
        </p>
        <div style={{ margin: "4vh" }}>
          <div
            style={{
              border: "none",
              borderBottom: "1px solid black",
              background: "none",
              boxShadow: "none",
              outline: "none",
              width: "calc(100% - 30px)",
              padding: "0.5rem",
              marginTop: "-3rem",
            }}
          >제목</div>
        </div>
        <div style={{ margin: "4vh" }}>
          <div
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
              marginTop: "-3rem",
              resize: "none",
              overflowY: "hidden",
            }}
          > 내용!</div>
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <Link to="/OpenSpace">
            <img src={updateButton} style={{ margin: "1vh" }} />
          </Link>
          <Link to="/OpenSpace">
            <img src={cancleButton} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpdateChat;
