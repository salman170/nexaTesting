import React, {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import "./styles.css";
import './FronxSlider.css';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';

export default function FronxSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        autoplay={true}
        freeMode={true}
        // loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs,FreeMode, Autoplay]}
        className='mySwiper2'
      >
        <SwiperSlide className='relative text-white  '>
          <img src='https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-dashboard.webp?modified=20230109105242&la=en&hash=9E97B0399E61CEFF303C035A8976EE70' alt="" srcset=""/>
          <div className='text-left left-12 text-sm absolute bottom-8 '>
            <span className='text-xl'>Dual-Tone Plush Interiors</span>
            <br /> The lush and spacious dual tone interiors matched with
            horizontal linear embossed pattern makes you feel like you’re
            driving in the lap of comfort and grandeur.
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative text-white '>
          <img src='https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-360_screen.webp?modified=20230109105256&la=en&hash=4BCF65FF32BEE9C26457D2399FE208A6' alt="" srcset=""/>
          <div className='text-left left-12 text-sm absolute bottom-8 '>
            <span className='text-xl'>360 View Camera</span>
            <br />
            Get the best view whether you’re driving or parking with the 360
            View Camera that guides you and shows your car from all angles.
            Giving you convenience and assurance, so that there’s never a second
            thought.
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative text-white '>
          <img src='https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-head_up_display.webp?modified=20230111095052&la=en&hash=7C3ACC5B1C4A0D217AB803AA6DAD603F' alt="" srcset=""/>
          <div className='text-left left-12 text-sm absolute bottom-8 '>
            <span className='text-xl'>Head Up Display</span>
            <br />
            Focus on what matters and reduce driving fatigue and with the
            multiple functions and information like navigation, distance, fuel
            economy and more that are readily available right before your gaze.
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative text-white '>
          <img src='https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-wireless-changing.webp?modified=20230109105320&la=en&hash=7E84E40F4048FF57DC2A9B6121369491' alt="" srcset=""/>
          <div className='text-left left-12 text-sm absolute bottom-8 '>
            <span className='text-xl'>Wireless Charger</span>
            <br />
            Stay connected 24x7 wherever you go with seamless, wireless
            charging, so both you and your phone are always powered up.
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative text-white '>
          <img src='https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-9inch_touch_screen.webp?modified=20230109105336&la=en&hash=2B3F1DF720F95FE8466970F015CA0F73' alt="" srcset=""/>
          <div className='text-left left-12 text-sm absolute bottom-8 '>
            <span className='text-xl'>
              22.86 cm (9") SmartPlay Pro+ with Surround Sense Powered by
              ARKAMYS
            </span>
            <br />
            Experience superior sound quality powered by ARKAMYS with
            uninterrupted and intuitive connectivity courtesy Apple CarPlay &
            Android Auto.
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative text-white '>
          <img src='https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-paddle_shifters.webp?modified=20230109105349&la=en&hash=CB5AE4995C9E400A5EAAAD11FD43B4BA' alt="" srcset=""/>
          <div className='text-left left-12 text-sm absolute bottom-8 '>
            <span className='text-xl'>Paddle Shifters (in AT Only)</span>
            <br />
            The steering mounted paddle shifters provide for controlled yet
            exciting drives, be it smooth acceleration on open roads or quick
            downshifts to tackle city overtakes. Every gear change is at your
            fingertips.
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        // loop={true}
        autoplay={true}
        centeredSlides={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Autoplay, Thumbs]}
        className='mySwiper'
      >
        <SwiperSlide className='flex flex-col mt-1'>
          <img src='https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-dashboard.webp?modified=20230109105242&la=en&hash=9E97B0399E61CEFF303C035A8976EE70' alt="" srcset=""/>
          <div className='text-sm'>Dual-Tone Plush Interiors</div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col mt-1'>
          <img src='https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-360_screen.webp?modified=20230109105256&la=en&hash=4BCF65FF32BEE9C26457D2399FE208A6' alt="" srcset=""/>
          <div className='text-sm'>360 View Camera</div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col mt-1'>
          <img src='https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-head_up_display.webp?modified=20230111095052&la=en&hash=7C3ACC5B1C4A0D217AB803AA6DAD603F' alt="" srcset=""/>
          <div className='text-sm'>Head Up Display</div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col mt-1'>
          <img src='https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-wireless-changing.webp?modified=20230109105320&la=en&hash=7E84E40F4048FF57DC2A9B6121369491' alt="" srcset=""/>
          <div className='text-sm'>Wireless Charger </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col mt-1'>
          <img src='https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-9inch_touch_screen.webp?modified=20230109105336&la=en&hash=2B3F1DF720F95FE8466970F015CA0F73' alt="" srcset=""/>
          <div className='text-xs'>
            22.86 cm (9") SmartPlay Pro+ with Surround Sense Powered by ARKAMYS
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col mt-1'>
          <img src='https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-paddle_shifters.webp?modified=20230109105349&la=en&hash=CB5AE4995C9E400A5EAAAD11FD43B4BA' alt="" srcset=""/>
          <div className='text-sm'>Paddle Shifters (in AT Only)</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
