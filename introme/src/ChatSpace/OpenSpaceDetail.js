import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "../Common/Layout.module.css";
import { Link, useNavigate  } from "react-router-dom";

const OpenSpaceDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const memberData = JSON.parse(localStorage.getItem("member"));
  const navigate = useNavigate();

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

        // 댓글 데이터를 상태에 저장하기 전에 각 댓글의 author 값을 콘솔에 출력
        response.data.forEach((comment) => {
          console.log(comment.author);
        });

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

  const handleUpdate = (postId) => {
    console.log("업뎃 아이디", postId);
    navigate(`/UpdateChat/${id}/${memberData.id}`);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://introme.co.kr/v1/board/${id}/{member_id}?member_id=${memberData.id}`);
      // console.log(response.data);
      // console.log("아이디"+id);
      // console.log("멤버아이디"+memberData.id);
      if (response.status === 200) {
        alert("삭제되었습니다!");
        navigate("/OpenSpace");
        // console.log(response);
        // console.log(response.status);
      } else {
        alert("삭제에 실패했습니다.");
        console.error("Response status not 200:", response);
      }
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "4vh",
          }}
        >
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>오픈 챗팅</p>
          {post.authorId === memberData.id && (
            <div>
              <button
                onClick={() => handleUpdate(post.id)}
                style={{
                  padding: "8px 16px",
                  margin: "0 5px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                수정
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                style={{
                  padding: "8px 16px",
                  margin: "0 5px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "grey",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                삭제
              </button>
            </div>
          )}
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
            {console.log(post)}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto",
            width: "60%",
          }}
        >
          <p style={{ fontSize: "0.6rem", margin: "0" }}>작성자: {post.author}</p>
          <p style={{ fontSize: "0.6rem", margin: "0" }}>작성일: {post.createAt}</p>
          <p style={{ fontSize: "0.6rem", margin: "0" }}>조회수: {post.hit}</p>
        </div>
        {/* 댓글 */}
        <div style={{ margin: "0 auto", width: "90%" }}>
          <h3>Comment</h3>
          {/* 댓글 인풋 박스 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <form
              onSubmit={handleCommentSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "600px",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                backgroundColor: "white",
              }}
            >
              <textarea
                value={newComment}
                onChange={handleCommentChange}
                placeholder="댓글을 입력하세요"
                style={{
                  width: "93%",
                  padding: "10px",
                  resize: "none",
                  border: "none",
                  borderRadius: "4px",
                  marginBottom: "10px",
                  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
              >
                댓글 작성
              </button>
            </form>
          </div>
          {/* 댓글 목록 */}
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                marginBottom: "1vh",
              }}
            >
              <div style={{ margin: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      margin: "0",
                    }}
                  >
                    {comment.authorName}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#888",
                      marginLeft: "10px",
                    }}
                  >
                    {comment.createAt}
                  </p>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <p
                    style={{
                      margin: "0",
                      lineHeight: "1.6",
                      fontSize: "0.9rem",
                    }}
                  >
                    {comment.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OpenSpaceDetail;
