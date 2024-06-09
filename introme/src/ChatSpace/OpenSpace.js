import React, { useState, useEffect } from "react";
import NavBar from "../Common/NavBar";
import classes from "../Common/Layout.module.css";
import classesOpen from "./OpenSpace.module.css";
import { Link, useNavigate } from "react-router-dom";
import openSpace_B from "../Icon/openSpace_B.png";
import teamSpace from "../Icon/teamSpace.png";
import newproject from "../Icon/newProject.png";
import axios from "axios";

const OpenSpace = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPosts = async (page) => {
    setLoading(true);
    try {
      const response = await axios.post("https://introme.co.kr/v1/board/page", { page, size: 100 });
      const data = response.data;
      if (page === 0) {
        setPosts(data.content); // 페이지가 0일 때 기존 게시글을 초기화
      } else {
        setPosts((prevPosts) => [...prevPosts, ...data.content]); // 페이지가 0이 아닐 때 새로운 게시글 추가
      }
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollHeight - scrollTop === clientHeight && !loading && page < totalPages - 1) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, totalPages]);

  const handlePostClick = (id) => {
    navigate(`/OpenSpaceDetail/${id}`);
  };

  return (
    <>
      <div className={classes.LoginPageLayout}>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            width: "95%",
            marginTop: "3vh",
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
        <div style={{ marginTop: "1vh", overflowY: "auto", height: "75vh" }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                borderBottom: "1px solid black",
                width: "calc(95% - 30px)",
                margin: "0 auto",
                padding: "7px",
                cursor: "pointer"
              }}
              onClick={() => handlePostClick(post.id)}
            >
              <div style={{ fontWeight: "bold" }}>{post.title}</div>
              <div style={{ display: "flex" }}>
                <div>{post.author}&emsp; </div>
                <div>{post.createAt}&emsp;</div>
                <div>조회수: {post.hit}</div>
              </div>
            </div>
          ))}
          {loading && <div>Loading...</div>}
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
