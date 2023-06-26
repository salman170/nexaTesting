import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Mouse.css';

// import "./styles.css";

// import required modules
import { Autoplay, EffectFade, FreeMode, Pagination } from 'swiper';

export default function Mouse() {
  return (
    <div className='container mx-auto px-2 lg:px-0'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        // freeMode={true}
        autoplay={true}
        loop={true}
        modules={[EffectFade, Pagination,Autoplay,FreeMode]}
        className='mySwiper my-6  lg:h-[60vh]'
      >
        <SwiperSlide className='bg-center bg-cover  '>
          {/* <video src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/brand_banner/fronx-banner-video-mp4.mp4?modified=20230503043645" loop autoPlay  muted  ></video> */}
          <img
            src='https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/130591/fronx-exterior-left-front-three-quarter-2.jpeg?isig=0&q=75'
            alt=''
            srcset=''
          />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover  '>
          {/* <video src="//nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-philosophy/gimny_legacy.mp4?modified=20230111120355" loop autoPlay  muted ></video> */}
          <img
            src='https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/45299/jimny-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75'
            alt=''
            srcset=''
          />
        </SwiperSlide>
        <SwiperSlide className='bg-center   '>
          {/* <video src="//nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/end-shot-grand-vitara_1_2-mp4.mp4?modified=20220926080520" loop autoPlay  muted ></video> */}
          <img
            src='https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75'
            alt=''
            srcset=''
          />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover'>
          <img
            src='https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/120913/maruti-suzuki-xl6-left-front-three-quarter12.jpeg?isig=0&wm=0&q=75'
            alt=''
            srcset=''
          />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover'>
          <img
            src='https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/113183/maruti-suzuki-baleno-left-front-three-quarter6.jpeg?isig=0&wm=0&q=75'
            alt=''
            srcset=''
          />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover'>
          <img
            src='https://static.autox.com/uploads/2018/08/2018-Maruti-Suzuki-Ciaz-Front-Motion-Dynamic-2.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover'>
          <img
            src='https://e0.pxfuel.com/wallpapers/745/694/desktop-wallpaper-suzuki-ignis-and-gallery-com.jpg'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
