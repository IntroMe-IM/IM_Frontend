// OpenSpaceDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import updateButton from "../Icon/updateButton.png";
import { Link } from "react-router-dom";

const OpenSpaceDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://introme.co.kr/v1/board/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={classes.createChatLayout}>
        <p
          style={{
            marginTop: "5vh",
            margin: "4vh",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          오픈 챗팅
          <p style={{fontSize: "0.8rem",}}>작성자: {post.author}</p>
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
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {post.title}
          </div>
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
          >
            {" "}
            {post.content}
          </div>
        </div>
        <div style={{display:"flex", margin:"0 auto"}}>
          <p>작성일: {post.createAt}&nbsp;&nbsp;</p>
          <p>조회수: {post.hit}&nbsp;&nbsp;</p>
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

export default OpenSpaceDetail;
