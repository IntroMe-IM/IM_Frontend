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
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const memberData = JSON.parse(localStorage.getItem("member"));

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://introme.co.kr/v1/board/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("게시글을 가져오는 중 오류 발생:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://introme.co.kr/v1/comment/${id}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("댓글 불러오기 중 오류 발생:", error);
      }
    };

    fetchPost();
    fetchComments();

  }, [id, newComment]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://introme.co.kr/v1/comment/", {
        board: id,
        author: memberData.id,
        content: newComment,
      });
      console.log(response.data);

      setComments([...comments, response.data]);
      setNewComment("");

    } catch (error) {
      console.error("댓글 작성 중 오류 발생:", error);
    }
  };

  if (!post) {
    return <div>로딩 중...</div>;
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
          <p style={{ fontSize: "0.8rem" }}>작성자: {post.author}</p>
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
            {post.content}
          </div>
        </div>
        <div style={{ display: "flex", margin: "0 auto" }}>
          <p>작성일: {post.createAt}&nbsp;&nbsp;</p>
          <p>조회수: {post.hit}&nbsp;&nbsp;</p>
        </div>
        {/* 댓글 */}
        <div style={{ margin: "0 auto", width: "90%" }}>
          <h3>Comment</h3>
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
            >
              <p>{comment.content}</p>
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "0.8rem" }}>작성자: {memberData.name}&nbsp;/&nbsp;</p>
                <p style={{ fontSize: "0.8rem" }}>작성일: {comment.createAt}</p>
              </div>
            </div>
          ))}
          <form style={{ marginTop: "2rem", marginLeft: "10px" }}>
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              placeholder="댓글을 입력하세요"
              style={{ width: "90%", padding: "5px", resize: "none", alignContent: "center" }}
              required
            />
            <button
              type="submit"
              style={{ marginTop: "5px" }}
              onClick={handleCommentSubmit}
            >
              댓글 작성
            </button>
          </form>
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
