import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./MainBanner.module.css";
import banner1 from "../Icon/1.png";
import banner2 from "../Icon/2.png";
import banner3 from "../Icon/3.png";



const MainBanner = () => {

  const Banner = [banner1, banner2,banner3];



  //리액트 slick 라이브러리 사용
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <Slider {...settings}>
          {/*Array를 이용하여 반복 */}
          {Array.from({ length: 3 }, (_, index) => (
            <div className={classes.BannerStyled}>
              <img src={Banner[index]} style={{width:"100%"}}/>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default MainBanner;
