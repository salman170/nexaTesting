import React from 'react';
// import Slider from '../../components/Home/Slider';
// import CarEnquiry from '../../components/Home/CarEnquiry';
import Cars from '../../components/Home/Cars';
// import Blogs from '../../components/Home/Blogs';
import ServiceFinanceInsu from '../../components/Home/ServiceFinanceInsu';
import NewsLetter from '../../components/Home/NewsLetter';
// import MobileSlider from '../../components/Home/MobileSlider';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
//confetti
// import Confetti from 'react-confetti';
import MobileCarousel from '../../components/Home/Mobile Carousel/MobileCarouselforHomePage';
import CarEnq from '../../components/Home/CarEnq';
import HomeSlide from '../../components/Home/HomeSlide';
import News from '../../components/Home/News';
import Mouse from '../../components/Home/Mouse';

// const width = window.innerWidth;

function Home() {
  return (
    <>
      <Header />
      <Helmet>
        <title>Best Nexa Dealers in Hyderabad | Nexa Hyderabad</title>
        <meta
          name='title'
          content='Best Nexa Dealers in Hyderabad | Nexa Hyderabad'
        />
        <meta
          name='description'
          content='Saboo Nexa one of the best authorized Nexa dealers in Hyderabad.  Visit your nearest Saboo Nexa Hyderabad showroom to get best offers. Call now 98488 98488'
        />
        <meta
          name='keywords'
          content='Nexa Showrooms in Hyderabad, Nexa Delaers in Hyderabad, Nexa Cars Hyderabad, Nexa Balneo, Nexa Scross, Nexa Ignis, Nexa Ciaz, Nexa Xl6,Maruti baleno,maruti ciaz, maruti ignis, maruti xl6,maruti scross'
        />
        <meta name='author' content='BroaddCast Business Solutions' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboonexa.in/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Authorized Car Dealer in Hyderabad & Secunderabad |RKS Motors'
        />
        <meta
          property='og:description'
          content='RKS Motor is one of the most trusted Nexa dealers in Hyderabad & Secunderabad. New Nexa car models Maruti Baleno, Maruti Baleno RS, Nexa Ignis, Nexa Scross, Maruti Ciaz & Nexa XL6.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboonexa.in/' />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Authorized Car Dealer in Hyderabad & Secunderabad |RKS Motors'
        />
        <meta
          property='twitter:description'
          content='RKS Motor is one of the most trusted Nexa dealers in Hyderabad & Secunderabad. New Nexa car models Maruti Baleno, Maruti Baleno RS, Nexa Ignis, Nexa Scross, Maruti Ciaz & Nexa XL6.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg'
        />
      </Helmet>

      <div className=''>
        <VideoSlider />
      </div>
      {/* <div className='md:hidden'>

   <MobileSlider />
</div> */}
      <CarEnq />
      {/* <CarEnquiry /> */}
      <HomeSlide />
      <Cars />
      <News />
      {/* <Blogs /> */}
      {/* {width > 425 ? <ServiceFinanceInsu /> : <MobileCarousel />} */}
      <div className='md:hidden'>
        <MobileCarousel />
      </div>
      <div className='hidden md:block'>
        <ServiceFinanceInsu />
      </div>
      <div className=''>
        <Mouse />
      </div>
      <NewsLetter />
    </>
  );
}

export const VideoSlider = () => {
  return (
    <div>
      <div className='top-0 left-0 w-full h-screen  '>
        <video
          className='w-full h-full object-cover '
          preload='metadata'
          loop
          autoPlay
          playsInline
          muted
        >
          <source
            // class='w-30 h-30'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/video/Saboo+Nexa+Banner_2.mp4'
            type='video/mp4'
          />
          {/* <source
            type='video/mp4'
            data-src='//nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/banner/jimny-1.mp4?modified=20230112000817'
            src='//nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/banner/jimny-1.mp4?modified=20230112000817'
          ></source> */}
        </video>
      </div>
    </div>
  );
};

export default Home;
