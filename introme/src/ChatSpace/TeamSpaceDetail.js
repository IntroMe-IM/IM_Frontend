// TeamSpaceDetail.js
import React from "react";
import { Link } from "react-router-dom";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import updateButton from "../Icon/updateButton.png";

const TeamSpaceDetail = () => {
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
                    팀 스페이스
                    <p style={{ fontSize: "0.8rem", }}>작성자: 대표자 이름</p>
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
                        프로젝트 제목
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
                        프로젝트 설명
                    </div>
                </div>
                <div style={{ display: "flex", margin: "0 auto" }}>
                    <p>작성일: 프로젝트 작성일&nbsp;&nbsp;</p>
                    <p>조회수: 프로젝트 조회수&nbsp;&nbsp;</p>
                </div>
                <div style={{ display: "grid", placeItems: "center" }}>
                    <Link to="/TeamSpace">
                        <img src={updateButton} style={{ margin: "1vh" }} alt="update" />
                    </Link>
                    <Link to="/TeamSpace">
                        <img src={cancleButton} alt="cancel" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TeamSpaceDetail;
