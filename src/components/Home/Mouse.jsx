import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Mouse.css"

// import "./styles.css";

// import required modules
import { EffectFade, Pagination, } from "swiper";

export default function Mouse() {

  return (
    <div className="container mx-auto px-2 lg:px-0">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
    
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade,Pagination ]}
        className="mySwiper my-6  lg:h-[60vh]"
      >
        <SwiperSlide className="bg-center bg-cover  h-[90%]">
        <video src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/brand_banner/fronx-banner-video-mp4.mp4?modified=20230503043645" loop autoPlay  muted  ></video>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover  h-[90%]">
        <video src="//nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-philosophy/gimny_legacy.mp4?modified=20230111120355" loop autoPlay  muted ></video>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover  ">
        <video src="//nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/end-shot-grand-vitara_1_2-mp4.mp4?modified=20220926080520" loop autoPlay  muted ></video>
        </SwiperSlide>
        {/* <SwiperSlide className="bg-center bg-cover">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
