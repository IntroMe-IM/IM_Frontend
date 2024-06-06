import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./NameCard.module.css";
import "swiper/css";



const NameCard = () => {
  

  const ProjectBackColor = ["#262626","#485B69","#4b0082","#1e90ff"];


  return (
    <>
      <div style={{ paddingLeft: "10px" }}>
        <p style={{ paddingLeft: "10px" , marginTop:"4vh",fontSize:"20px",fontWeight:"bold"}}>최근 업데이트 명함</p>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.4}
          style={{
            padding: "1vh",
            marginTop:"-2vh"
          }}
        >
          {/*Array를 이용하여 반복 */}
          {Array.from({ length: 4 }, (_, index) => (
            <SwiperSlide key={index} className={classes.NameCardDiv} style={{ backgroundColor: ProjectBackColor[index]}}>
              <div style={{  height: "100%", width: "100%" }}>
                <div style={{  marginTop: "2.3vh", marginLeft: "2.5vh", fontWeight: "bold",color:"white" }}>INTROME {index + 1}</div>
                <div style={{  marginTop: "1.5vh", marginLeft: "2.5vh" }}>
                  {/*MainBanner와 마찬가지로 M,E,F에 관한 값을 받아와야함 */}
                  <div style={{ color:"white"}}>M: 010-0000-0000</div>
                  <div style={{ color:"white"}}>E: dlwjddnr@naver.com</div>
                  <div style={{ color:"white"}}>F: 02.0000.0000</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default NameCard;
