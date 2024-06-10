import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Common/NavBar";
import classes from "./MyPage.module.css";
import mypagebanner from "../Icon/mypagebanner.png";
import mypageIcon1 from "../Icon/mypageIcon1.png";
import mypageIcon2 from "../Icon/mypageIcon2.png";
import mypageIcon3 from "../Icon/mypageIcon3.png";
import mypageIcon4 from "../Icon/mypageIcon4.png";
import mypageIcon5 from "../Icon/mypageIcon5.png";
import mypageIcon6 from "../Icon/mypageIcon6.png";
// import myIcon from "../Icon/myIcon.png";

const MyPage = () => {
  const [memberInfo, setMemberInfo] = useState(null);

  const mypageIcons = [
    mypageIcon1,
    mypageIcon2,
    mypageIcon3,
    mypageIcon4,
    mypageIcon6,
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const memberData = JSON.parse(localStorage.getItem("member"));
    setMemberInfo(memberData);
  }, []);

  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 및 회원 정보 제거
    localStorage.removeItem("token");
    localStorage.removeItem("member");
    // LoginPage 페이지로 이동
    navigate("/LoginPage");
  };
  //휴대폰 하이푼 추가
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  };

  return (
    <>
      <div className={classes.MyPageLayout}>
        <div
          style={{
            borderBottom: "1px solid black",
            height: "17vh",
            width: "95%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#4755D7",
              width: "13vh",
              height: "13vh",
              marginLeft: "2.5vh",
              borderRadius: "17%",
            }}
          ></div>
          <div
            style={{
              height: "10vh",
              marginLeft: "2vh",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                margin: "0.5vh",
                fontSize: "1.3rem",
              }}
            >
              {/* {memberInfo && memberInfo.name} */}
              {memberInfo && memberInfo.name}
            </div>
            <div
              style={{
                margin: "0.5vh",
                fontSize: "1rem",
              }}
            >
              {memberInfo && memberInfo.email}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "85%",
            height: "20vh",
            margin: "0 auto",
            marginTop: "1.5vh",
            borderRadius: "10px",
            backgroundColor: "#262626",
          }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <div
              style={{
                marginTop: "2vh",
                marginLeft: "2.5vh",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              INTROME
            </div>
            <div
              style={{
                marginTop: "0.3vh",
                marginLeft: "2.5vh",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              {memberInfo && memberInfo.name}
            </div>
            <div style={{ marginTop: "1.5vh", marginLeft: "2.5vh" }}>
              <div style={{ color: "#FFFFFF" }}>
                Phone:&nbsp;{memberInfo && formatPhoneNumber(memberInfo.phoneNumber)}
              </div>
              <div style={{ color: "#FFFFFF" }}>
                Email:&nbsp;&nbsp;{memberInfo && memberInfo.email}
              </div>
              <div style={{ color: "#FFFFFF" }}>Fax:&nbsp;&nbsp;02.0000.0000</div>
            </div>
          </div>
        </div>

        <img
          src={mypagebanner}
          style={{ margin: "0 auto", width: "80%", marginTop: "1.5vh" }}
        />

        {mypageIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            style={{ margin: "1vh" }}
            alt={`Icon ${index + 1}`}
          />
        ))}
        <img
          src={mypageIcon5}
          onClick={handleLogout}
          style={{ margin: "1vh" }}
        />
        <NavBar />
      </div>
    </>
  );
};

export default MyPage;