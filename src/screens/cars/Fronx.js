import React, { useState } from 'react';
import Header from '../../components/Header/Header';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Helmet from 'react-helmet';
// import { Autoplay, Navigation, Pagination } from 'swiper';
import OnRoadPrice from '../../components/utils/OnRoadPrice';
import { MdOutlineFileDownload } from 'react-icons/md';
// import Carousel from '../../components/Fronx/Extras/Carousel';
import MobileCarousel from '../../components/Fronx/Extras/MobileCarousel';
import FronxSlider from '../../components/Fronx/Extras/FronxSlider';

const width = window.innerWidth;

const Fronx = () => {
  // const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Fronx On-Road Price in Hyderabad | Saboo NEXA
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Fronx On-Road Price in Hyderabad | Saboo NEXA'
        />
        <meta
          name='description'
          content='Get the latest on-road price of Maruti Suzuki Fronx in Hyderabad and enjoy a smooth car ownership experience. For more information about Nexa Fronx visit your nearest Saboo Nexa dealership today.'
        />
        {/* <meta
          name='keywords'
          content='XL6 on road price, XL6 mileage, XL6 offers & disconuts,xl6 on road price, Maruti xl6 offers, xl6 mileage,Nexa xl6 petrol price, Maruti xl6 on road price, Maruti xl6 variants, xl6 images, xl6 mileage, Nexa xl6 price in hyderabad, Maruti xl6 price in hyderabad, xl6 price in hyderabad, xl6 onroad price in hyderabad, offers on xl6, xl6 offers 2022, new xl6 price, new xl6 price in hyderabad, new xl6 2022 price, new xl6 2022 onroad price, xl6 petrol price in hyderabad, xl6 2022 petrol price in hyderabad'
        /> */}
        {/* <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboonexa.in/the-xl6/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Fronx On-Road Price in Hyderabad | Saboo NEXA'
        />
        <meta
          property='og:description'
          content='Get the latest on-road price of Maruti Suzuki Fronx in Hyderabad and enjoy a smooth car ownership experience. For more information about Nexa Fronx visit your nearest Saboo Nexa dealership today. '
        /> */}
        {/* <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/the-xl6/'
        />
        <meta
          property='twitter:title'
          content='Nexa XL6 On Road Price in Hyderabad | Maruti XL6 Offers in Hyderabad'
        />
        <meta
          property='twitter:description'
          content='Nexa XL6 2022 price in Hyderabad. Maruti Suzuki XL6 on road price starts at ₹ 10.14* lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        /> */}
      </Helmet>
      <div className='pt-20'>
        {width > 425 ? <VariantPlayer /> : <MobileVariantPlayer />}
      </div>
      {/* <VariantPlayer /> */}
      <FronxInteriorAndOther />
     
      <OnRoadPrice title={'FRONX'} />
      <div className='container text-center mx-auto mt-16 mb-8'>
        <span className='text-2xl font-semibold'>DESIGN HIGHLIGHTS</span>
      </div>
      <div className='container mx-auto py-4 px-2  lg:px-0'>
        <video
          src={require('../../assets/ytb_video_desktop.mp4')}
          autoPlay
          loop
          controls
        ></video>
      </div>
      {/* {width > 425 ? <Carousel /> : <MobileCarousel />} */}
      <div className='container text-center mx-auto my-8'>
        <span className='text-2xl font-semibold'>PERFORMANCE</span>
        <br /> <span className='text-lg'>Born To Outperform, In Style</span>
      </div>
      <div className='hidden sm:block lg:container  mx-auto'>
        <div className='flex h-[60vh] bg-white gap-1 px-4 pt-1'>
          <div className="w-1/5 duration-500 rounded-lg border hover:w-2/3  bg-no-repeat bg-cover bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-10C_Engine.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <img
                src='https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/performance/boosterjet-logo-png.png?modified=20230423101830'
                alt=''
                className=' w-40'
                srcset=''
              />
              <span className='font-semibold text-lg'>
                1.0L TURBO BOOSTERJET ENGINE
              </span>
              <span className='font-thin tracking-wider'>
                Perfect fusion of power and innovation, it accelerates from 0 to
                60 in just 5.3 seconds.
              </span>
            </div>
          </div>
          <div className="w-1/5 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-12k_Engine.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='font-semibold text-lg'>
                ADVANCED 1.2L K-SERIES DUAL JET, DUAL VVT ENGINE
              </span>
              <span className='font-thin tracking-wider'>
                Forged for new age performance.
              </span>
            </div>
          </div>
          <div className="w-1/5 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-Smart_Hybird.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='font-semibold text-lg'>
                SMART HYBRID TECHNOLOGY
              </span>
              <span className='font-thin tracking-wider'>
                Where smartness and efficiency take shape.
              </span>
            </div>
          </div>
          <div className="w-1/5 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AGS.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='font-semibold text-lg'>
                6-SPEED AUTOMATIC TRANSMISSION WITH PADDLE SHIFTERS
              </span>
              <span className='font-thin tracking-wider'>
                Go through the gears in a new way.
              </span>
            </div>
          </div>
          <div className="w-1/5 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AMT.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='font-semibold text-lg'>AUTO GEAR SHIFT</span>
              <span className='font-thin tracking-wider'>
                Shaped for comfort and convenience.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=' sm:hidden'>
        <MobileCarousel />
      </div>
      <div className='container text-center mx-auto  mt-16 '>
        <span className='text-2xl font-semibold'>TECHNOLOGY</span>
        <br /> <span className='text-lg'>Feature Rich and Future Facing</span>
      </div>
      <div className='container mx-auto py-8 px-2 lg:px-0'>
        <FronxSlider />
      </div>
      <div className='container text-center mx-auto  my-16 '>
        <span className='text-2xl font-semibold'>SAFETY</span>
        <br />
        <span className='text-lg'>Reassurance of Safety on Every Drive</span>
      </div>
      <div className='container mx-auto flex justify-center items-center relative '>
        <img
          src={require('../../assets/SAFETY-979x485.webp')}
          alt=''
          srcset=''
          className='m-28'
        />
        <div className='absolute right-[64%] top-0  lg:flex group hidden  '>
          <div className='w-60 pr-3 text-xs text-right hidden group-hover:block backdrop-blur-md'>
            <span className='font-semibold text-sm'>SUZUKI-TECH BODY</span>
            <br />
            Suzuki’s Total Effective Control Technology (TECT) concept results
            in effective absorption and dispersion of crash energy. The
            effective use of high-tensile steel for major parts makes the body
            light, strong and safe
          </div>
          <div className='hover:scale-105 flex justify-center items-center  w-20 h-20 border border-black rounded-full'>
            <img
              src={require('../../assets/icon11.png')}
              alt=''
              srcset=''
              className=''
            />
          </div>
        </div>
        <div className='absolute left-[62%] top-16  lg:flex group hidden  '>
          <div className='hover:scale-105 flex justify-center items-center  w-20 h-20  border border-black rounded-full'>
            <img
              src={require('../../assets/icon21.png')}
              alt=''
              srcset=''
              className=''
            />
          </div>
          <div className='w-60 mx-3 text-xs  hidden group-hover:block backdrop-blur-md'>
            <span className='font-semibold text-sm'>
              SEAT BELT PRE-TENSIONERS WITH FORCE LIMITERS
            </span>
            <br />
            Pre-tensioners restrain the passengers and Force Limiters prevent
            seatbelt-inflicted injury.
          </div>
        </div>
        <div className='absolute right-[10.33%] xl:right-[10.8%] bottom-[60%]  lg:flex lg:flex-col md:items-end group hidden  '>
          <div className='w-60 py-3 text-xs text-right hidden group-hover:block backdrop-blur-md'>
            <span className='font-semibold text-sm'>
              FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT COMPLIANCE,
              SIDE IMPACT COMPLIANCE
            </span>
            <br />
            Successfully tested and in compliance with international safety
            norms.
          </div>
          <div className='hover:scale-105 flex justify-center  items-center  w-20 h-20  border border-black rounded-full'>
            <img
              src={require('../../assets/icon31.png')}
              alt=''
              srcset=''
              className=''
            />
          </div>
        </div>
        <div className='absolute right-[10.33%] xl:right-[10.8%]  top-[44%] lg:flex lg:flex-col md:items-end group hidden  '>
          <div className='hover:scale-105 flex justify-center  items-center  w-20 h-20  border border-black rounded-full'>
            <img
              src={require('../../assets/icon41.png')}
              alt=''
              srcset=''
              className=''
            />
          </div>
          <div className='w-60 py-3 text-xs text-right hidden group-hover:block backdrop-blur-md'>
            <span className='font-semibold text-sm'>
              PEDESTRIAN PROTECTION COMPLIANCE
            </span>
            <br />
            Ensuring safety, not only for the occupants, but pedestrians as
            well.
          </div>
        </div>
        <div className='absolute right-[47%] bottom-24  lg:flex group hidden  '>
          <div className='w-60 pr-3 text-xs text-right hidden group-hover:block backdrop-blur-md'>
            <span className='font-semibold text-sm'>6 AIR BAGS</span>
            <br />6 Air Bags to take the impact before it reaches you.
          </div>
          <div className='hover:scale-105 flex justify-center items-center  w-20 h-20 border border-black rounded-full '>
            <img
              src={require('../../assets/icon51.png')}
              alt=''
              srcset=''
              className=''
            />
          </div>
        </div>
        <div className='absolute left-[19%] xl:left-[20%] top-[60%]  lg:flex lg:flex-col md:items-start group hidden  '>
          <div className='hover:scale-105 flex justify-center  items-center  w-20 h-20  border border-black rounded-full'>
            <img
              src={require('../../assets/icon61.png')}
              alt=''
              srcset=''
              className=''
            />
          </div>
          <div className='w-60 py-3 text-xs text-left hidden group-hover:block backdrop-blur-md'>
            <span className='font-semibold text-sm uppercase'>
              ABS WITH EBD
            </span>
            <br />
            Anti-lock Braking System prevents the locking up of the wheels when
            the brakes are applied under heavy loads while EBD ensures an
            efficient and effective braking.
          </div>
        </div>
        <div className='absolute left-[10.33%] xl:left-[10.8%] bottom-[60%]    lg:flex-col md:items-start group hidden lg:flex '>
          <div className='w-60 py-3 text-xs text-left hidden group-hover:block backdrop-blur-md'>
            <span className='font-semibold text-sm uppercase'>
              ISOFIX CHILD SEAT ANCHORAGES
            </span>
            <br />
            Standardized international child seat fitting system, for that
            perfect drive with your little ones.
          </div>
          <div className='hover:scale-105 flex justify-center  items-center  w-20 h-20  border border-black rounded-full'>
            <img
              src={require('../../assets/icon71.png')}
              alt=''
              srcset=''
              className=''
            />
          </div>
        </div>
        <div className='h-16 xl:h-24 absolute border top-20 right-[68%] border-black hidden lg:block'></div>
        <div className='h-16 absolute border top-36 right-[34%] border-black hidden lg:block'></div>
        <div className='w-48 absolute border top-52 right-[34%]  border-black hidden lg:block'></div>
        <div className='w-24 xl:w-48 absolute border top-[15.5rem] right-[17%] hidden lg:block  border-black'></div>
        <div className='w-24 xl:w-32 absolute border  right-[17%] hidden lg:block  border-black'></div>
        <div className='h-48 absolute border bottom-44 right-[50%] border-black hidden lg:block'></div>
        <div className='w-24 xl:w-32 absolute border  left-[22%] hidden lg:block  border-black'></div>
        <div className='h-16 absolute border top-1/2 left-[22%] border-black hidden lg:block'></div>
        <div className='w-24 xl:w-48 absolute border top-[15.5rem] left-[16%] hidden lg:block  border-black'></div>
      </div>
    </>
  );
};

function FronxInteriorAndOther() {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <div className=' mx-auto py-4 space-y-4'>
      <p className='font-bold text-4xl text-center'>Maruti Suzuki FRONX</p>
      <p className=' text-center tracking-wider font-bold'>
        A design philosphy sustained by three unwavering pillars
      </p>
      <p className='bg-black h-1 w-60 mx-auto'></p>
      <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
        Say hello to FRONX, the Shape of New. From a striking, sporty design
        language to technology that ensures your safety, comfort, and
        convenience. Sharp details, intuitive tech, and premium finishes, FRONX
        is uniquely craftedto satisfy the modren sensibilities of NEXA
        customers.
      </p>
      <Variant />

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/flesh-color-bg.webp')] bg-cover bg-no-repeat ">
        <div className='max-w-4xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/FRONX+Brochure_Saboo+RKS.6b9c2f109c812f47efb9.pdf'
              className='m-3 p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3 rounded'
              target='_blank'
              rel='noreferrer'
            >
              <MdOutlineFileDownload size={10} />
              &nbsp;Download Brochure
            </a>
            <div className='col-span-2'>
              <>
                <div className='ml-auto mr-1 mt-24'>
                  {/* 1. NEXA BLUE */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-NEXA_Blue.webp'
                    alt='NEXA BLUE'
                    className={tabsColors === 1 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 2. ARCTIC WHITE */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-ARCTIC_WHITE.webp'
                    alt='ARCTIC WHITE'
                    className={tabsColors === 2 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 3. SPLEDING SILVER */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-SPLENDID_SILVER.webp'
                    alt='SPLENDING SILVER'
                    className={tabsColors === 3 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 4. GRANDEUR GREY */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-GRANDEUR_GREY.webp'
                    alt='GRANDEUR GREY'
                    className={tabsColors === 4 ? 'flex mx-auto' : 'hidden'}
                  />
                  {/* 5. EARTHERN BROWN */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-EARTHERN_BROWN.webp'
                    alt='EARTHERN BROWN'
                    className={tabsColors === 5 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 6. OPPULENT BROWN WITH BLACK */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-OPULENT_RED.webp'
                    alt='OPPULENT BROWN WITH BLACK'
                    className={tabsColors === 6 ? 'flex mx-auto' : 'hidden'}
                  />
                  {/* 7. EARTHERN BROWN WITH BLACK */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-EARTHERN_BROWN.webp'
                    alt='EARTHERN BROWN WITH BLACK'
                    className={tabsColors === 7 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 8. SPLENDING SILVER WITH BLACK */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-SPLENDID_SILVER.webp'
                    alt='SPLENDING SILVER WITH BLACK'
                    className={tabsColors === 8 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 9. OPPULENT_RED MIDNIGHT BLACK */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-OPULENT_RED.webp'
                    alt='OPPULENT_RED MIDNIGHT BLACK'
                    className={tabsColors === 9 ? 'flex mx-auto' : 'hidden'}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#163472] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#163472]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 1
                          ? 'w-6 h-6 bg-[#163472] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(2)}>
                    <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#f9f9f9] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 2
                          ? 'w-6 h-6 bg-[#f9f9f9] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(3)}>
                    <div className={tabsColors === 3 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 3
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] mr-2 border-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(4)}>
                    <div className={tabsColors === 4 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#282828] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#282828]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 4
                          ? 'w-6 h-6 border bg-[#282828] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(5)}>
                    <div className={tabsColors === 5 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#464848] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#464848]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 5
                          ? 'w-6 h-6 border bg-[#464848] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(6)}>
                    <div className={tabsColors === 6 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#AC0F0F] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#AC0F0F]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 6
                          ? 'w-6 h-6 border bg-[#AC0F0F] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(7)}>
                    <div className={tabsColors === 7 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#AC0F0F]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 7
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] mr-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(8)}>
                    <div className={tabsColors === 8 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#B6BABD] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#B6BABD]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 8
                          ? 'w-6 h-6 bg-[#B6BABD] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(9)}>
                    <div className={tabsColors === 9 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute  top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#B6BABD]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 9
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>
                </div>
                <>
                  <p
                    className={
                      tabsColors === 1
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Nexa Blue (Celestial)
                  </p>

                  <p
                    className={
                      tabsColors === 2
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Arctic White
                  </p>
                  <p
                    className={
                      tabsColors === 3
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Splending Silver
                  </p>
                  <p
                    className={
                      tabsColors === 4
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Grandeur Grey
                  </p>
                  <p
                    className={
                      tabsColors === 5
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Earthen Brown
                  </p>
                  <p
                    className={
                      tabsColors === 6
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Oppulent Red
                  </p>
                  <p
                    className={
                      tabsColors === 7
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Earten Brown + Black
                  </p>
                  <p
                    className={
                      tabsColors === 8
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Splendid Silver + Black
                  </p>
                  <p
                    className={
                      tabsColors === 9
                        ? 'text-center font-light text-sm my-2'
                        : 'hidden'
                    }
                  >
                    Oppulent Red + Black
                  </p>
                </>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Variant = () => {
  const [price, setPrice] = useState('7,46,500');
  return (
    <div className='bg-black py-8'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-3 md:space-y-0 space-y-3'>
          <div className='space-y-3 mx-auto md:mx-0'>
            <p className='uppercase text-gray-300'>select car Variant</p>
            <select
              name='model'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
            >
              <option value='7,46,500'>SIGMA 5MT</option>
              <option value='8,32,500'>DELTA 5MT</option>
              <option value='8,87,500'>DELTA AGS</option>
              <option value='8,72,500'>DELTA+ 5MT</option>
              <option value='9,27,500'>DELTA+ AGS</option>

              <option value='9,72,500'>DELTA+ 5MT (SMART HYBRID)</option>
              <option value='10,55,500'>ZETA 5MT (SMART HYBRID) </option>
              <option value='12,05,500'>ZETA 6AT (SMART HYBRID)</option>
              <option value='11,47,500'>ALPHA 5MT (SMART HYBRID)</option>
              <option value='12,97,500'>ALPHA 6AT (SMART HYBRID)</option>
              <option value='11,63,500'>ALPHA DT MT (SMART HYBRID)</option>
              <option value='13,13,500'>ALPHA DT AT (SMART HYBRID)</option>
            </select>
          </div>
          <div className='text-center text-gray-200'>
            <p className='text-2xl font-bold'>₹ {price}*</p>
            <p className='tracking-wide text-xl'>Ex-Showroom Price</p>
            <p className='uppercase text-gray-400 font-bold'>Hyderabad</p>
            <div className='text-red-200 text-xs font-light'>
              <sup>*</sup>Alpha+ & Zeta+ are applicable only for Direct
              Injection engine with Smart Hybrid
            </div>
          </div>
          <div className='mx-auto'>
            <p className='text-gray-100 mb-6 text-center'>
              You might have pre-approved loan offers
            </p>
            <Link
              to='/maruti-car-finance'
              className='py-2 px-4 bg-white rounded shadow uppercase tracking-wide'
            >
              Check for loan offers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const VariantPlayer = () => {
  return (
    <div className=''>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-banner.webp'
        alt=''
      />
      {/* <video class='w-screen' autoplay='autoplay' loop>
        <source
          class='w-30 h-30'
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/video/NEXA+FRONX++05SEC++110123+C2C+MUTE.mp4'
          type='video/mp4'
        />
      </video> */}
    </div>
  );
};

const MobileVariantPlayer = () => {
  return (
    <div className=''>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-mobile-banner-without-book-now.webp'
        alt=''
      />
      {/* <video class='w-screen' autoplay='autoplay' loop>
        <source
          class='w-30 h-30'
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/video/NEXA+FRONX++05SEC++110123+C2C+MUTE.mp4'
          type='video/mp4'
        />
      </video> */}
    </div>
  );
};

export default Fronx;
