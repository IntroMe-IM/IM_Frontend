import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./NameCard.module.css";
import "swiper/css";



const NameCard = () => {
  
  return (
    <>
      <div style={{ paddingLeft: "10px" }}>
        <h2 style={{ paddingLeft: "10px" }}>최근 업데이트 명함</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.4}
          style={{
            padding: "1vh",
          }}
        >
          {/*Array를 이용하여 반복 */}
          {Array.from({ length: 4 }, (_, index) => (
            <SwiperSlide key={index} className={classes.NameCardDiv}>
              <div style={{  height: "100%", width: "100%" }}>
                <div style={{  marginTop: "2.3vh", marginLeft: "2.5vh", fontWeight: "bold" }}>INTROME {index + 1}</div>
                <div style={{  marginTop: "1.5vh", marginLeft: "2.5vh" }}>
                  {/*MainBanner와 마찬가지로 M,E,F에 관한 값을 받아와야함 */}
                  <div style={{ }}>M: 010-0000-0000</div>
                  <div style={{ }}>E: dlwjddnr@naver.com</div>
                  <div style={{ }}>F: 02.0000.0000</div>
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
