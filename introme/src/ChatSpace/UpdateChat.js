import React, { useState } from "react";
import axios from "axios";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import updateButton from "../Icon/updateButton.png";
import { Link, useParams,useNavigate } from "react-router-dom";

const UpdateChat = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { id, memberId } = useParams();
  const navigate = useNavigate();

  console.log(id, memberId);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updateData = {
      title: title,
      content: content,
      updatedAt: new Date().toISOString(),
      imgUrl: "string",
      authorId: memberId,
    };

    try {
      const response = await axios.put(
        `https://introme.co.kr/v1/board/${id}`,
        updateData
      );

      if (response.status === 200) {
        alert("수정 완료!");
        navigate("/OpenSpace");
        console.log(response);
        console.log("게시글 업데이트 완료:", response.data);
      }
    } catch (error) {
      console.error("게시글 업데이트 에러:", error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "4vh" }}>
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            ></input>
          </div>
          <div style={{ margin: "4vh", marginTop: "8vh" }}>
            <textarea
              placeholder="내용을 작성해주세요!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
            ></textarea>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <Link to="/OpenSpace">
              <img
                src={updateButton}
                style={{ margin: "1vh" }}
                onClick={handleSubmit}
              />
            </Link>
            <Link to="/OpenSpace">
              <img src={cancleButton} />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateChat;
