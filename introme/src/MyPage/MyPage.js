import React from "react";
import NavBar from "../Common/NavBar";
import classes from "./MyPage.module.css";
import mypagebanner from "../Icon/mypagebanner.png";
import mypageIcon1 from "../Icon/mypageIcon1.png";
import mypageIcon2 from "../Icon/mypageIcon2.png";
import mypageIcon3 from "../Icon/mypageIcon3.png";
import mypageIcon4 from "../Icon/mypageIcon4.png";
import mypageIcon5 from "../Icon/mypageIcon5.png";
import mypageIcon6 from "../Icon/mypageIcon6.png";
import myIcon from "../Icon/myIcon.png";

const MyPage = () => {
  const mypageIcons = [
    mypageIcon1,
    mypageIcon2,
    mypageIcon3,
    mypageIcon4,
    mypageIcon5,
    mypageIcon6,
  ];
  return (
    <>
      <div className={classes.MyPageLayout}>
        <div
          style={{
            borderBottom: "1px solid black",
            height: "17vh",
            width:"95%",
            margin:"0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor:"#4755D7",
              width: "13vh",
              height: "13vh",
              marginLeft: "4vh",
              borderRadius: "17%",
            }}
          >
            {/* <img src={myIcon} style={{width:"100%"}} /> */}
            </div>
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
             이정욱
            </div>
            <div
              style={{
                margin: "0.5vh",
                fontSize: "1.3rem",
              }}
            >
              a@a.com
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
            backgroundColor:"#262626"
          }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <div
              style={{
                marginTop: "2vh",
                marginLeft: "2.5vh",
                fontWeight: "bold",
                color:"#FFFFFF"
              }}
            >
              INTROME
            </div>
            <div
              style={{
                marginTop: "0.3vh",
                marginLeft: "2.5vh",
                fontWeight: "bold",
                color:"#FFFFFF"
              }}
            >
              이정욱
            </div>
            <div style={{ marginTop: "1.5vh", marginLeft: "2.5vh" }}>
              {/*MainBanner와 마찬가지로 M,E,F에 관한 값을 받아와야함 */}
              <div style={{color:"#FFFFFF"}}>M: 010-0000-0000</div>
              <div style={{color:"#FFFFFF"}}>E: dlwjddnr@naver.com</div>
              <div style={{color:"#FFFFFF"}}>F: 02.0000.0000</div>
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
            style={{ margin:"1vh"}}
            alt={`Icon ${index + 1}`}
          />
        ))}

        <NavBar />
      </div>
    </>
  );
};

export default MyPage;
