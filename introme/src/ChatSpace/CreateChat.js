import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import createButton from "../Icon/createButton.png";
import axios from "axios";

const CreateChat = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
  const member = JSON.parse(localStorage.getItem("member")); // 로컬 스토리지에서 토큰 가져오기

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreateClick = async () => {
    if (!member) {
      alert("로그인이 필요합니다.");
      return;
    }

    

    try {
      console.log("Sending data:", {
        author: member.id,
        title,
        content
      });

      const response = await axios.post("https://introme.co.kr/v1/board/", {
        author: member.id, // author를 member의 id로 설정합니다
        title,
        content
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      });

      if (response.status === 200) {
        alert("작성되었습니다!");
        navigate("/OpenSpace");
      } else {
        alert("작성에 실패했습니다.");
        console.error("Response status not 200:", response);
      }
    } catch (error) {
      alert("작성 중 오류가 발생했습니다.");
      console.error("Error occurred:", error.response ? error.response.data : error);
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
              value={title}
              onChange={handleTitleChange}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                padding: "0.5rem",
              }}
            />
          </div>
          <div style={{ margin: "4vh" }}>
            <textarea
              placeholder="내용을 작성해주세요!"
              value={content}
              onChange={handleContentChange}
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
            />
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <button type="button" onClick={handleCreateClick} style={{ background: "none", border: "none", cursor: "pointer" }}>
              <img src={createButton} style={{ margin: "1vh" }} alt="create button" />
            </button>
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
