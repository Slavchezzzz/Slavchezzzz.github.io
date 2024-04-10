import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Infinity.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function InfinitySlider() {
  return (
    <>
      <div className="Brands-info">
        <h1>Brands</h1>
      </div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./Brands/photo2.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Brands/photo6.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Brands/photo1.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Brands/photo5.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Brands/photo4.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Brands/photo3.png"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
