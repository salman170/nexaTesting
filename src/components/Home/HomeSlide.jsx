import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './range.css';

// import required modules
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

export default function Slider() {
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [play, setPlay] = useState(false);
  const nexaCarsData = [
    {
      id: 1,
      name: 'Grand Vitara',
      // logo: require('../assets/logos/nexa/grand-vitara.webp'),
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/oppulent_red_midnight_black.webp',
      price: '₹ 8,99 Lakh*',
      mileage: '24.97',
      power: '65.71 BHP',
      link: '/Ciaz',
    },
    {
      id: 2,
      name: 'XL6',
      // logo: require('../assets/logos/nexa/XL6.webp'),
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Nexa-Blue.webp',
      price: '₹ 11,29 Lakh*',
      mileage: '22.05',
      power: '47.3 BHP',
      link: '/Xl6',
    },
    // {
    //   id: 3,
    //   name: "S-Cross",
    //   logo: require("../assets/logos/nexa/scross.webp"),
    //   img: require("../assets/logos/nexa/vehicles/scross.webp"),
    //   price: "₹ 8,95 Lakh",
    //   mileage: "17.0",
    //   power: "103.2 BHP",
    //   link: "/Scross",
    // },
    {
      id: 4,
      name: 'Ciaz',
      // logo: require('../assets/logos/nexa/ciaz.webp'),
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Kinetic_Yellow_Bluish_Black_Roof.webp',
      price: '₹ 8,99 Lakh*',
      mileage: '24.97',
      power: '65.71 BHP',
      link: '/Ciaz',
    },
    {
      id: 5,
      name: 'Baleno',
      // logo: require('../assets/logos/nexa/baleno.webp'),
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-EARTHERN_BROWN.webp',
      price: '₹ 6,49 Lakh*',
      mileage: '23.3',
      power: '88.50 BHP',
      link: '/Baleno',
    },
    {
      id: 6,
      name: 'Ignis',
      // logo: require('../assets/logos/nexa/ignis.webp'),
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/grandeur_grey.webp',
      price: '₹ 5,35 Lakh*',
      mileage: '16.11',
      power: '72.42 BHP',
      link: '/Ignis',
    },
  ];

  let timeoutId = null; // Declare a variable to store the timeout ID

  const handleClick = (index) => {
    // Clear previous timer if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set the new timer
    swiperRef.current.swiper.slideTo(index);
    setPlay(true);

    timeoutId = setTimeout(() => {
      setPlay(false);
    }, 2000);
  };

  // useEffect(() => {
  //   // console.log("hiiio")
  //   setPlay(true);
  //   const timer = setTimeout(() => {
  //     setPlay(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [thumbsSwiper]);

  return (
    <div className='hidden lg:block bg-gradient-to-r '>
      <div className='xl:-mb-16  '>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          // spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          effect={'fade'}
          loop={true} // Enable loop
          slidesPerView={1}
          freeMode={false}
          modules={[FreeMode, EffectFade, Navigation, Thumbs]}
          className='h-[50vh] -mb-48'
          // className='mySwiper2'
          speed={1500}
          // autoplayDisableOnInteraction={false}
          // autoplay={{  disableOnInteraction: false }} // Autoplay with a delay of 3000ms (3 seconds)
          // grabCursor={false}
        >
          <SwiperSlide className='relative '>
            <img
              src={require('../../assets/cq5dam.web.1000.10000.png')}
              alt=''
              className=''
            />
            <div className='absolute top-24 text-white '>
              <span className='text-4xl lg:text-6xl'>Jimny </span>
              <br />
              <div>
                {/* <button className='border px-2 py-2 m-2'>Explore Now</button> */}
                <button className='border px-4 py-2 m-2'>Book Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img
              src={require('../../assets/cq5dam.web.1400.10000 (1).jpeg')}
              alt=''
            />
            <div className='absolute top-24 text-white '>
              <span className='text-4xl lg:text-6xl'>Fronx </span>
              <br />
              <div>
                {/* <button className='border px-2 py-2 m-2'>Explore Now</button> */}
                <button className='border px-4 py-2 m-2'>Book Now</button>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className='relative'>
          <img src={require('../../assets/cq5dam.web.1000.10000.png')} />
          <div className='absolute  text-white '>
            <span className='text-4xl lg:text-6xl'>Grand Vitara </span>
            <br />
            <div>
  
              <button className='border px-4 py-2 m-2'>Book Now</button>
            </div>
          </div>
        </SwiperSlide> */}
          <SwiperSlide className='relative'>
            <img
              src={require('../../assets/cq5dam.web.1400.10000 (2).jpeg')}
              alt=''
            />

            <div className='absolute top-24 text-white '>
              <span className='text-4xl lg:text-6xl'>XL6 </span>
              <br />
              <div>
                {/* <button className='border px-2 py-2 m-2'>Explore Now</button> */}
                <button className='border px-4 py-2 m-2'>Book Now</button>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className='relative'>
          <img src={require('../../assets/cq5dam.web.1400.10000 (3).jpeg')} />
          <div className='absolute  text-white '>
            <span className='text-4xl lg:text-6xl'>Ciaz </span>
            <br />
            <div>
              
              <button className='border px-4 py-2 m-2'>Book Now</button>
            </div>
          </div>
        </SwiperSlide> */}
          <SwiperSlide className='relative'>
            <img
              src={require('../../assets/cq5dam.web.1400.10000 (4).jpeg')}
              alt=''
            />
            <div className='absolute top-24 text-white '>
              <span className='text-4xl lg:text-6xl'>Baleno </span>
              <br />
              <div>
                {/* <button className='border px-2 py-2 m-2'>Explore Now</button> */}
                <button className='border px-4 py-2 m-2'>Book Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img
              src={require('../../assets/cq5dam.web.1400.10000 (5).jpeg')}
              alt=''
            />
            <div className='absolute top-24 text-white '>
              <span className='text-4xl lg:text-6xl'>Ignis</span>
              <br />
              <div>
                {/* <button className='border px-2 py-2 m-2'>Explore Now</button> */}
                <button className='border px-4 py-2 m-2'>Book Now</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        ref={swiperRef}
        // loop={true} // Enable loop
        speed={2000}
        spaceBetween={40}
        slidesPerView={3}
        freeMode={true}
        // navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        centeredSlides={true}
        // grabCursor={true}
        // className='carSlider flex items-center '
        className='h-auto  '
        // autoplay={{ delay: 3500, disableOnInteraction: true }} // Autoplay with a delay of 3000ms (3 seconds)
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 1,
        //   },
        //   1024: {
        //     slidesPerView: 1,
        //   },
        //   1280: {
        //     slidesPerView: 3,
        //   },
        // }}
      >
        {nexaCarsData.map((car, index) => (
          <SwiperSlide
            key={car.id}
            className={`py-6  `}
            onClick={() => handleClick(index)}
          >
            <div to={car.link} className='focus:outline-none'>
              {play ? (
                <video
                  src='https://maserati.scene7.com/is/content/maserati/maserati/international/model-page/animation/forward/Levante2-1-vp9-chrome.webm'
                  loop
                  autoPlay
                  muted
                ></video>
              ) : (
                <div>
                  {index % 2 === 0 ? (
                    <img
                      src={require('../../assets/Slider_01.png')}
                      className='slider_car'
                      alt=''
                    />
                  ) : (
                    <img
                      src={require('../../assets/Slider_02.png')}
                      className='slider_car'
                      alt='alto'
                    />
                  )}
                </div>
              )}
              {/* <img
                src={car.logo}
                style={{ width: '100px' }}
                className='pl-5 lg:mt-4 car_logo'
                alt=''
              />

              <div className='flex items-center justify-between car_content px-5 pb-5 lg:pb-5 lg:pt-2'>
               <img
                  src={car.logo}
                  style={{ width: '100px' }}
                  className='lg:hidden'
                  alt=''
                /> 
                <div className='block'>
                  <p>Starting at</p>
                  <p className='lg:text-xl font-semibold'>{car.price}</p>
                  <p className='text-xs'>*Ex-Showroom</p>
                </div>
                <div className='block'>
                  <p>Mileage</p>
                  <p className='lg:text-xl font-semibold'>
                    {car.mileage} <span className='text-xs'>km/l*</span>
                  </p>
                  <p className='text-xs'>Petrol</p>
                </div>
                <div className='block'>
                  <p>Power</p>
                  <p className='lg:text-xl font-semibold'>{car.power}</p>
                </div>
                <Link
                  to={car.link}
                  className='border border-black px-5 py-1 rounded hidden sm:block hover:bg-black hover:text-white duration-300'
                >
                  Explore
                </Link>
              </div>
              <Link
                to={car.link}
                className='border border-black px-5 ml-5 py-1 rounded sm:hidden'
              >
                Explore
              </Link> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
