import React, { useState, useEffect } from "react";
import NavBar from "../Common/NavBar";
import classes from "../Common/Layout.module.css";
import classesOpen from "./OpenSpace.module.css";
import { Link } from "react-router-dom";
import openSpace_B from "../Icon/openSpace_B.png";
import teamSpace from "../Icon/teamSpace.png";
import newproject from "../Icon/newProject.png";

const OpenSpace = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPosts();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (page > 0) {
      loadPosts();
    }
  }, [page]);

  const loadPosts = () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    fetch("https://introme.co.kr/v1/board/page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page, size: 7 }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => {
          const newPosts = data.content.filter(
            (newPost) => !prevPosts.some((post) => post.id === newPost.id)
          );
          return [...prevPosts, ...newPosts];
        });
        setHasMore(!data.last);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load posts", error);
        setIsLoading(false);
      });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      setPage((prevPage) => prevPage + 1);
    }
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
        {/* 게시글 목록 */}
        <div style={{ border:"1px solid black"}}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                borderBottom: "1px solid black",
                width: "calc(95% - 30px)",
                margin: "0 auto",
                padding: "7px",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{post.title}</div>
              <div style={{ display: "flex" }}>
                <div>{post.author}&emsp; </div>
                <div>
                  {new Date(post.createAt).toLocaleTimeString("ko-KR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  &emsp;
                </div>
                <div>조회수: {post.hit}</div>
              </div>
            </div>
          ))}
        </div>
        {isLoading && <p style={{ textAlign: "center" }}>로딩 중...</p>}
        <Link to="/CreateChat">
          <img src={newproject} className={classesOpen.creatProject} alt="newProject" />
        </Link>
        {/* <NavBar /> */}
      </div>
    </>
  );
};

export default OpenSpace;
