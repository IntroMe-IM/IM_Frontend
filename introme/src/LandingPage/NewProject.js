import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./NewProject.module.css";
import p1 from "../Icon/p1.png";
import p2 from "../Icon/p2.png";
import p3 from "../Icon/p3.png";

const NewProject = () => {

  const ProjectImg = [p1, p2, p3];

  return (
    <>
      <div style={{paddingLeft:"10px"}}>
        <p style={{paddingLeft:"10px",marginTop:"4vh", fontSize:"20px",fontWeight:"bold"}}>새 프로젝트</p>
        <Swiper
          spaceBetween={20}
          slidesPerView={2.4}
          style={{
            padding: "10px",
            // border:"1px solid black",
            marginTop:"-2vh"
          }}
        >
          {/*Array를 이용하여 반복 */}
          {Array.from({length: 3},(_,index) => (
            //MainBanner와 마찬가지로 썸네일에 관한 값을 받아와야함 
            <SwiperSlide className={classes.NewProjectDiv} ><img src={ProjectImg[index]} style={{width:"100%"}}/></SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default NewProject;
