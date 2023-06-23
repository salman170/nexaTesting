import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className='container mx-auto py-6 px-2 lg:px-0 overflow-hidden'>
      <div className='mb-6'>
        <span className='text-4xl md:text-5xl  overflow-hidden'>NEWS</span>
        <br />
        {/* <span className='text-5xl uppercase font-medium md:text-6xl'>
          SABOO NEXA WORLD
        </span> */}
        <span className='relative md:whitespace-nowrap '>
        <h1 className=' group-hover:animate-type-reverse text-brand-accent  inline-flex md:h-20 md:animate-type-second overflow-x-hidden   pb-2 pt-2  text-5xl md:text-6xl uppercase font-medium '>
        SABOO NEXA WORLD
        </h1>
        <span className='-mb-2  box-border md:inline-block h-10 w-1 hidden md:animate-cursor bg-black will-change-transform md:-mb-4 md:h-16'></span>
      </span>
      </div>
      <div>
        {/* <div className='h-[80vh] object-cover'> */}
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/4.webp'
          alt='Grand Launch of Suzuki Jimny at our Nexa Lumbini'
          className='w-full h-full object-cover'
        />
        {/* </div> */}
        <div className='my-6'>
          <div className='text-2xl border-b-2  border-gray-600  my-4 w-min whitespace-nowrap  rounded'>
            26 May 2023
          </div>
          <div className='flex lg:items-center gap-4 flex-col lg:flex-row justify-between '>
            <div className=' text-xl sm:text-3xl lg:text-4xl uppercase font-medium '>
              Grand Launch of Suzuki Jimny at our Nexa Lumbini
            </div>
            <div>
              <Link
                to='/gallery'
                class='relative inline-flex items-center justify-start lg:px-6 px-4 py-3 overflow-hidden  group'
              >
                <span class='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]'></span>
                <span class='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8'></span>
                <span class='relative whitespace-nowrap w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white'>
                  Read More
                </span>
                <span class='absolute inset-0 border border-gray-800'></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row mt-12 '>
        <div className=' lg:w-1/2'>
          <img
            src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230522015734_Jimny.jpg&w=700&q=90&c=1'
            alt=''
            srcset=''
          />
        </div>
        <div className='lg:w-1/2 flex flex-col justify-around gap-4 '>
          <div className=' uppercase '>
            <div className='text-lg lg:text-xl pb-2 text-gray-600'>09 MAY 2023</div>
            <div className='text-2xl lg:text-4xl font-medium pb-2'>
              MARUTI SUZUKI JIMNY LAUNCH ON JUNE 7
            </div>
            <div className='text-xl text-gray-600'>
              INDIA WILL BE THE FIRST MARKET WHERE THE 5-DOOR JIMNY WILL GO ON
              SALE, AND WILL ALSO BE EXPORTED FROM HERE.
            </div>
          </div>
          <div>
            <a
              href='https://www.autocarindia.com/car-news/maruti-suzuki-jimny-launch-on-june-7-428242'
              class='relative inline-flex items-center justify-start  lg:px-6 px-4 py-3 overflow-hidden  group'
              target='_blank'
              rel="noreferrer"
            >
              <span class='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]'></span>
              <span class='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8'></span>
              <span class='relative whitespace-nowrap w-full text-left text-gray-600transition-colors duration-200 ease-in-out group-hover:text-white'>
                Read More
              </span>
              <span class='absolute inset-0 border border-gray-600'></span>
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row mt-12 '>
        <div className=' lg:w-1/2'>
          <img
            src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230521121524_Jimny_5_door.jpg&w=700&q=90&c=1'
            alt=''
            srcset=''
          />
        </div>
        <div className='lg:w-1/2 flex flex-col justify-around gap-4 '>
          <div className=' uppercase '>
            <div className='text-lg lg:text-xl pb-2 text-gray-600'>21 May 2023</div>
            <div className='text-2xl lg:text-4xl font-medium pb-2'>
              Maruti Suzuki Jimny 5-door fuel efficiency figures revealed
            </div>
            <div className='text-xl text-gray-600'>
              Ahead of its launch in June, the Maruti Suzuki Jimny has amassed
              around 30,000 bookings.
            </div>
          </div>
          <div>
            <a
              href='https://www.autocarindia.com/car-news/maruti-suzuki-jimny-5-door-fuel-efficiency-figures-revealed-428235'
              class='relative rounded inline-flex items-center justify-start  lg:px-6 px-4 py-3 overflow-hidden  group'
              target='_blank'
              rel="noreferrer"
            >
              <span class='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]'></span>
              <span class='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8'></span>
              <span class='relative whitespace-nowrap w-full text-left text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-white'>
                Read More
              </span>
              <span class='absolute inset-0 border border-gray-600'></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
