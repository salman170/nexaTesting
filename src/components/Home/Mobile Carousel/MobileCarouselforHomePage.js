import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './style.css';
// import Helmet from 'react-helmet';

// import required modules
import { Autoplay } from 'swiper';

const MobileCarouselforHomePage = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
     
        modules={[Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <figure className='relative cursor-pointer'>
            <Link to='/book-online-maruti-nexa-car-service/'>
              <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Nexa+Service+mobile+Hafeezpet.webp' alt="" srcset=""/>
            </Link>
            <figcaption class='absolute text-lg -mt-16 text-white px-4'>
              <div className='text-xl'>
                <p>SERVICE</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with revolutionary technology</p>
              </div> 
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='relative cursor-pointer'>
            <Link to='/maruti-car-insurance'>
              <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Insurance+Mobile+800x800.webp' />
            </Link>
            <figcaption class='absolute text-lg -mt-16 text-white px-4'>
              <div className='text-xl'>
                <p>INSURANCE</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with a firm grip</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='relative cursor-pointer'>
            <Link to='/maruti-car-finance'>
              <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Finance+Mobile+800x800.webp' alt="" srcset=""/>
            </Link>
            <figcaption class='absolute text-lg -mt-16 text-white px-4'>
              <div className='text-xl md-20'>
                <p>FINANCE</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with utmost comfort</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='relative cursor-pointer'>
            <Link to='/accessories'>
              <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Accessories+Mobile+800x800.webp' alt="" srcset=""/>
            </Link>
            <figcaption class='absolute text-lg -mt-16 text-white px-4'>
              <div className='text-xl'>
                <p>ACCESSORIES</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with a Powerful Persona</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
      {/* <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Link to='/book-online-maruti-nexa-car-service/'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Nexa+Service+mobile+Hafeezpet.webp'
              alt=''
            />
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to='/maruti-car-finance'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Finance+Mobile+800x800.webp'
              alt=''
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/accessories'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Accessories+Mobile+800x800.webp'
              alt=''
            />
          </Link>
        </SwiperSlide>
      </Swiper> */}
    </>
  );
};

export default MobileCarouselforHomePage;
