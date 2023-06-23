import React from 'react';
import { RiStarFill, RiStarHalfFill, RiPhoneFill } from 'react-icons/ri';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { RiMapPin2Fill } from 'react-icons/ri';
// import { FaMapMarker } from 'react-icons/fa';
import { BsQuote } from 'react-icons/bs';

function NewsLetter() {
  return (
    <>
      {/* <div className='bg-black py-16 mt-24 lg:px-0 md:px-0 px-5'>
        <div className='container mx-auto space-y-6'>
          <p className='text-white text-center text-xl uppercase tracking-wider'>
            <span className='text-3xl'>S</span>ubscribe{' '}
            <span className='text-3xl'>T</span>o{' '}
            <span className='text-3xl'>O</span>ur{' '}
            <span className='text-3xl'>N</span>ewsletter
          </p>
          <div className='flex items-center justify-center'>
            <input
              className='h-10 rounded-l outline-none p-3 w-full max-w-[400px]'
              placeholder='Email Address'
            />
            <button className='p-[0.535rem] bg-red-600 rounded-r w-full max-w-[140px] text-gray-100'>
              Get Notified
            </button>
          </div>
        </div>
      </div> */}
      <Testimonials />
      <Outlets />
    </>
  );
}

const Testimonials = () => {
  return (
    <div className='container mx-auto py-8 px-2 lg:px-0 space-y-4 overflow-hidden'>
      <span className='text-4xl md:text-5xl  overflow-hidden uppercase'>
        SABOO NEXA
      </span>
      <br />
      <span className='relative md:whitespace-nowrap '>
        <h1 className=' group-hover:animate-type-reverse text-brand-accent  inline-flex md:h-20 md:animate-type overflow-x-hidden  whitespace-nowrap pb-2 pt-2  text-5xl md:text-6xl uppercase font-medium '>
          Testimonials
        </h1>
        <span className=' box-border md:inline-block h-10 w-1 hidden md:animate-cursor bg-black will-change-transform md:-mb-4 md:h-16 '></span>
      </span>
      <br />
      <span>
        At Saboo RKS, we have implemented an advanced process that guarantees
        all reviews are authored by genuine individuals, accurately reflecting
        their real-life experiences.
      </span>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
        <div className='shadow-xl shadow-gray-500 rounded-md   bg-[#000000f4] '>
          {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
          <div className='flex flex-col justify-center h-full py-8'>
            <div className='text-gray-500 text-4xl ml-10 animate-pulse'>
              <BsQuote />
            </div>
            <p className='uppercase text-center text-lg text-gray-100'>
              JOHN WADDROB
            </p>
            <div className='flex items-center justify-center text-red-600'>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>
            <p className='text-center px-5 text-gray-200 mt-6'>
              "Hi Krishna , It was really a great experience at SABOO RKS NEXA.
              I would also like to appreciate you for your follow up and
              delivering my Car on time. You are really an asset to the company.
              Keep up the Good Work!!!!!. "
            </p>
            <div className='text-gray-500 text-4xl  rotate-180 mr-10 animate-pulse'>
              <BsQuote />
            </div>
          </div>
        </div>
        <div className='shadow-xl shadow-gray-500 rounded-md   bg-[#000000f4] '>
          {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
          <div className='flex flex-col justify-center h-full py-8'>
            <div className='text-gray-500 text-4xl ml-10 animate-pulse'>
              <BsQuote />
            </div>
            <p className='uppercase text-center text-lg text-gray-100'>
              SRIRAG REDDY
            </p>
            <div className='flex items-center justify-center text-red-600'>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
            </div>
            <div className='text-center px-5 text-gray-100 mt-6'>
              "Hi Lateef, I really appriciate you on the dedication towards your
              work, and also suggesting me the best car variant. Once again
              thank you for all the hospitality and service. Regards, Srirag
              Reddy. "
            </div>
            <div className='text-gray-500 text-4xl animate-pulse  rotate-180 mr-10 lg:mt-4 '>
              <BsQuote />
            </div>
          </div>
        </div>
        <div className='shadow-xl shadow-gray-500 rounded-md   bg-[#000000f4] '>
          {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
          <div className='flex flex-col justify-center h-full py-8'>
            <div className='text-gray-500 text-4xl ml-10 animate-pulse'>
              <BsQuote />
            </div>
            <p className='uppercase text-center text-lg text-gray-100'>
              JHANSI PRIYA
            </p>
            <div className='flex items-center justify-center text-red-600 '>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>
            <p className='text-center px-5 text-gray-100 mt-6'>
              "It was a fabulous experience with you. Thanks a lot for the
              support provided by you, on time delivery, info about vehicle &
              Discounts. Good to have a executive like you. All the best for
              your future endeavour. Regards Jhansi Priya "
            </p>
            <div className='text-gray-500 text-4xl  rotate-180 mr-10 animate-pulse'>
              <BsQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Outlets = () => {
  return (
    <div className='container mx-auto py-16  px-2 sm:px-0 '>
      <div className=' text-right text-5xl md:text-6xl uppercase font-medium '>
        OUTLETS
      </div>

      <br />
      <div className='mb-6 text-right'>
        To ensure that you receive the ultimate Nexa experience, we have
        strategically positioned ourselves in three prominent hotspots
        throughout Hyderabad
      </div>
      {/* <p className='uppercase font-bold text-4xl text-center'>Outlets</p>
     
      <p className='bg-black h-1 w-60 mx-auto'></p>
      <p className='max-w-[940px] text-gray-600 text-center mx-auto text-lg'>
        To ensure that you receive the ultimate Nexa experience, we have
        strategically positioned ourselves in three prominent hotspots
        throughout Hyderabad
      </p>*/}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 h-max md:h-72 '>
        <div
          className='   space-y-2 p-5  rounded-md shadow-2xl'
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/p/AF1QipMLEnk0MYFn9tcAINhNpWSNcEHzQkPD_2YmFMo8=s680-w680-h510")',
          }}
        >
          <div className='bg-[#000000f4] text-white p-4 hover:scale-105 shadow-2xl shadow-black rounded group duration-500 cursor-pointer '>
            <div className='text-2xl uppercase '>Nexa Lumbini</div>
            <div className='group-hover:block lg:hidden duration-500'>
              <p>
                5-9-22/1/B, Shapoorji Towers, Shapoorwadi, Adarsh Nagar,
                Hyderabad, Telangana 500004.
              </p>
              <div className='flex flex-col space-y-2'>
                <a href='tel:9848898488' className='flex items-center'>
                  <RiPhoneFill className='mr-2' /> +91 98488 98488
                </a>
                <a
                  href='mailto:info@saboomaruti.in'
                  className='flex items-center italic'
                >
                  <FaEnvelope className='mr-2' /> info@saboomaruti.in
                </a>
                <a
                  href='https://www.google.com/maps/place/NEXA/@17.407435,78.472675,14z/data=!4m5!3m4!1s0x0:0x167869bcabc7428b!8m2!3d17.407435!4d78.4726753?hl=en'
                  className='flex items-center'
                >
                  <FaArrowRight className='mr-2' /> Direction
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='  flex justify-center items-center  relative  '
          // style={{
          //   backgroundImage:
          //     'url("https://hyperlocalcd2.azureedge.net/-/media/images/feature/nexa/site-specific-global-content/r/rks-motors/rks-motors-jubilee/content-with-image/homepage-aboutus_rks_nexa_jublihills.ashx?modified=20181122052457")',
          // }}
        >
          {/* <div className='bg-[#000000f4] text-white p-4 hover:scale-105 shadow-2xl shadow-black rounded group duration-500 cursor-pointer '>
            <div className='text-2xl uppercase '>Nexa Jubilee</div>
            <div className='group-hover:block lg:hidden duration-500'>
              <p>
                1-65/5, 6,15 & 16 KKR Square, Phase I Kavuri Hills Madhapur,
                Post, Jubilee Hills, Hyderabad, Telangana 500033.
              </p>
              <div className='flex flex-col space-y-2'>
                <a href='tel:9848898488' className='flex items-center'>
                  <RiPhoneFill className='mr-2' /> +91 98488 98488
                </a>
                <a
                  href='mailto:info@saboomaruti.in'
                  className='flex items-center italic'
                >
                  <FaEnvelope className='mr-2' /> info@saboomaruti.in
                </a>
                <a
                  href='https://www.google.com/maps/place/NEXA/@17.439431,78.398485,14z/data=!4m5!3m4!1s0x0:0x1cb759ff5f828d3!8m2!3d17.4394309!4d78.398485?hl=en'
                  className='flex items-center'
                >
                  <FaArrowRight className='mr-2' /> Direction
                </a>
              </div>
            </div>
          </div> */}
          <RiMapPin2Fill className='text-[300px]   ' />
          <div className='p-7  bg-white bg-opacity-90   text-black  absolute text-center '>
            <div className='text-2xl uppercase '>Nexa Jubilee</div>
            <div className=' duration-500 text-sm'>
              <div className=''>
                1-65/5, 6,15 & 16 KKR Square,
                <br /> Phase I Kavuri Hills Madhapur, Post,
                <br /> Jubilee Hills,
                <br /> Hyderabad, Telangana 500033.
              </div>
              <div className='flex flex-col items-center '>
                <a href='tel:9848898488' className='flex items-center'>
                  <RiPhoneFill className='mr-2' /> +91 98488 98488
                </a>
                <a
                  href='mailto:info@saboomaruti.in'
                  className='flex items-center italic'
                >
                  <FaEnvelope className='mr-2' /> info@saboomaruti.in
                </a>
                <a
                  href='https://www.google.com/maps/place/NEXA/@17.439431,78.398485,14z/data=!4m5!3m4!1s0x0:0x1cb759ff5f828d3!8m2!3d17.4394309!4d78.398485?hl=en'
                  className='flex items-center'
                >
                  <FaArrowRight className='mr-2' /> Direction
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='  flex justify-center items-center  relative  '>
          <FaMapMarker className='text-[300px] ' />
          <div className='p-5 bg-white  text-black  absolute text-center '>
            <div className='text-2xl uppercase '>Nexa Jubilee</div>
            <div className=' duration-500 text-sm'>
              <div className=''>
                1-65/5, 6,15 & 16 KKR Square,
                <br /> Phase I Kavuri Hills Madhapur, Post,
                <br /> Jubilee Hills,
                <br /> Hyderabad, Telangana 500033.
              </div>
              <div className='flex flex-col items-center '>
                <a href='tel:9848898488' className='flex items-center'>
                  <RiPhoneFill className='mr-2' /> +91 98488 98488
                </a>
                <a
                  href='mailto:info@saboomaruti.in'
                  className='flex items-center italic'
                >
                  <FaEnvelope className='mr-2' /> info@saboomaruti.in
                </a>
                <a
                  href='https://www.google.com/maps/place/NEXA/@17.439431,78.398485,14z/data=!4m5!3m4!1s0x0:0x1cb759ff5f828d3!8m2!3d17.4394309!4d78.398485?hl=en'
                  className='flex items-center'
                >
                  <FaArrowRight className='mr-2' /> Direction
                </a>
              </div>
            </div>

            
          </div>
        </div> */}
       <div
          className='    p-5  rounded-md shadow-2xl'
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/p/AF1QipOcu7GCpu2tIt7zlZ_gl_xyDqT4uN7E_F7ym0RA=s680-w680-h510")',
          }}
        >
          <div className='bg-[#000000f4]  text-white p-4 hover:scale-105 shadow-2xl shadow-black  text-center group duration-500 cursor-pointer '>
            <div className='text-2xl uppercase '>Nexa Hafeezpet</div>
            <div className='group-hover:block lg:hidden duration-500'>
              <p>
                Gachibowli - Miyapur Rd, Janapriya Nagar, Hafeezpet, Hyderabad,
                Telangana 500049
              </p>

              <div className='flex flex-col items-center space-y-2'>
                <a href='tel:9848898488' className='flex items-center'>
                  <RiPhoneFill className='mr-2' /> +91 98488 98488
                </a>
                <a
                  href='mailto:info@saboomaruti.in'
                  className='flex items-center italic'
                >
                  <FaEnvelope className='mr-2' /> info@saboomaruti.in
                </a>
                <a
                  href='https://goo.gl/maps/N7JdtNdtcUhvM6X48'
                  className='flex items-center'
                >
                  <FaArrowRight className='mr-2' /> Direction
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default NewsLetter;
