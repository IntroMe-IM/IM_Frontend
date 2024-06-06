import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "../Common/Layout.module.css"
import cancleButton from "../Icon/cancleButton.png";
import createButton from "../Icon/createButton.png";
import { MemberContext } from "./MemberContext";

const CreateChat = () => {
  const { member } = useContext(MemberContext);

  const handleCreateClick = () => {
    if (member) {
      console.log('Member in CreateChat:', member) //member확인코드
      alert(member);
    } else {
      alert("로그인 정보가 없습니다.");
    }
  };

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
            오픈 채팅
          </p>
          <div style={{ margin: "4vh" }}>
            <input
              placeholder="제목"
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
              placeholder="내용을 작성해주세요!"
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
            <Link to="/OpenSpace" onClick={handleCreateClick}>
              <img src={createButton} style={{ margin: "1vh" }} alt="create button" />
            </Link>
            <Link to="/OpenSpace">
              <img src={cancleButton} alt="cancel button" />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateChat;
