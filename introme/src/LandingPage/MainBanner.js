import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./MainBanner.module.css";

const MainBanner = () => {
  //리액트 slick 라이브러리 사용
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 3000,
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
          height: "25%",
        }}
      >
        <Slider {...settings}>
          {/*Array를 이용하여 반복 */}
          {Array.from({ length: 3 }, (_, index) => (
            <div className={classes.BannerStyled}>
              {/*지금은 Banner라 시멘틱하게 적었지만 후에 img나 다른 props를 받아와야 할듯*/}
              <h1>Banner{index + 1}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default MainBanner;
