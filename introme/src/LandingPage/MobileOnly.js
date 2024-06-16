import React from "react";
import { Link } from "react-router-dom";
import INTROME from "../Icon/INTROME.png";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
//커밋 테스트
const contentStyle = {
  textAlign: "center",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1.2rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginTop: "20px",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
};

const imageStyle = {
  width: "200px", // 이미지 너비 설정
};

const MobileOnly = () => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <img src={INTROME} alt="INTROME" style={imageStyle} />
        <div style={{margin:"3vh"}}>모바일로 들어와주세요!</div>
        <Link to="/">
          <button style={buttonStyle}>모바일 화면으로 확인하기</button>
        </Link>
      </div>
    </div>
  );
};

export default MobileOnly;
