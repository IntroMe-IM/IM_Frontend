import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./NewProject.module.css";

const NewProject = () => {
  return (
    <>
      <div style={{paddingLeft:"10px"}}>
        <h1 style={{paddingLeft:"10px"}}>새 프로젝트</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          style={{
            padding: "10px",
          }}
        >
          {/*Array를 이용하여 반복 */}
          {Array.from({length:4},(_,index) => (
            //MainBanner와 마찬가지로 썸네일에 관한 값을 받아와야함 
            <SwiperSlide className={classes.NewProjectDiv} >Slide {index+1}</SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default NewProject;
