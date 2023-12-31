import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { CgSpinner } from 'react-icons/cg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { bookAservice } from '../../constants';
import { Link } from 'react-router-dom';

function BookAService() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState();
  // const [model, setModel] = useState();
  const [pickup, setPickup] = useState();
  const [method, setMethod] = useState('');

  const [loader, setLoader] = useState(false);

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  function handleSubmit() {
    setLoader(true);
    try {
      axios.post('https://saboogroups.com/admin/api/book-a-service', {
        name: name,
        phone: phone,
        email: email,
        // model: model,
        pickup: pickup,
      });
      setMethod('POST');
      setLoader(false);
    } catch (error) {
      toast.error('Something went wrong!');
      setLoader(false);
    }
  }

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Nexa Car Service in Hyderabad | Nexa Service Center Near Me
        </title>
        <meta
          name='title'
          content='Maruti Nexa Car Service in Hyderabad | Nexa Service Center Near Me'
        />
        <meta
          name='description'
          content='Book Your Maruti Suzuki Nexa Car Service Online. Nexa Car Service Center Near Me.  Free Pickup & Drop Facility Available, Same Day Delivery, Genuine Spare Parts, Quality Service, Low Maintenance & Instant Assistance on Car Repair.'
        />
        <meta
          name='keywords'
          content='Nexa car service online booking, maruti car service online booking, baleno car service near me, baleno car service center, baleno car service in hyderabad, ignis car service near me, ignis car service center, Scross car service near me, Scross car service center, Scross car service in hyderabad, maruti Scross service near me, maruti Scross service hyderabad, maruti Scross service centers, Scross service hyderabad, nexa Scross service, nexa Scross service near me, nexa Scross service centers hyderabad,Xl6 car service near me, Xl6 car service center, Xl6 car service in hyderabad, maruti Xl6 service near me, maruti Xl6 service hyderabad, maruti Xl6 service centers, Xl6 service hyderabad, nexa Xl6 service, nexa Xl6 service near me, nexa Xl6 service centers hyderabad,ciaz car service near me, ciaz car service center, ciaz car service in hyderabad, maruti ciaz service near me, maruti ciaz service hyderabad, maruti ciaz service centers, ciaz service hyderabad, nexa ciaz service, nexa ciaz service near me, nexa ciaz service centers hyderabad,ignis car service in hyderabad, maruti ignis service near me, maruti ignis service hyderabad, maruti ignis service centers, ignis service hyderabad, nexa ignis service, nexa ignis service near me, nexa ignis service centers hyderabad, maruti baleno service near me, maruti baleno service hyderabad, maruti baleno service centers, baleno service hyderabad, nexa baleno service, nexa baleno service near me, nexa baleno service centers hyderabad'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboonexa.in/book-online-maruti-nexa-car-service/'
        />
        <meta
          property='og:title'
          content='Authorized Nexa Car Service Center Near Me | Maruti Car Service Center'
        />
        <meta
          property='og:description'
          content='Get best offers on your Maruti car service, Free pick up and dropping facility available at Saboo RKS Nexa authorized service centers for more details 9848898488'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Book-service.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/book-online-maruti-nexa-car-service/'
        />
        <meta
          property='twitter:title'
          content='Authorized Nexa Car Service Center Near Me | Maruti Car Service Center'
        />
        <meta
          property='twitter:description'
          content='Get best offers on your Nexa car service, Free pick up and dropping facility available at Saboo Nexa authorized service centers. Visit your nearest Saboo Maruti Suzuki Car Service Center for more details 9848898488.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Book-service.jpg'
        />
      </Helmet>
      <Slider />
      {/* <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-Nexa-Service-banner1.png"
        className="w-full"
        alt="Service Banner"
      /> */}
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Book Online Maruti Car Service
        </p>
      </div>

      <div className='container mx-auto py-16 px-5 lg:px-0'>
        <form
          action={
            pattern.test(phone) && phone.length === 10
              ? 'https://crm.zoho.in/crm/WebToLeadForm'
              : '#'
          }
          name='WebToLeads54158000001051288'
          method={method}
          acceptCharset='UTF-8'
        >
          <input
            type='text'
            style={{ display: 'none' }}
            name='xnQsjsdp'
            value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
          />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input
            type='text'
            style={{ display: 'none' }}
            name='xmIwtLD'
            value='3e4c511e1bfac462fb9ac158b261b0d3a1f7118a5052416c6735cee16458265f'
          />
          <input
            type='text'
            style={{ display: 'none' }}
            name='actionType'
            value='TGVhZHM='
          />
          <input
            type='text'
            style={{ display: 'none' }}
            name='returnURL'
            value='https://www.saboonexa.in/thank-you?email=Email'
          />
          <input
            type='text'
            style={{ display: 'none' }}
            id='ldeskuid'
            name='ldeskuid'
          />
          <input
            type='text'
            style={{ display: 'none' }}
            id='LDTuvid'
            name='LDTuvid'
          />
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name <span className='text-red-600'>*</span>
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                type='text'
                id='Last_Name'
                name='Last Name'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                type='text'
                ftype='email'
                id='Email'
                name='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Phone <span className='text-red-600'>*</span>
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                type='text'
                minLength='10'
                maxLength='10'
                required
                id='Mobile'
                name='Mobile'
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/[^1-9]/g, '') &&
                      e.target.value.replace(/ /g, '')
                  )
                }
              />
              {!pattern.test(phone) && phone.length === 10 ? (
                <small className='text-red-500'>phone number is invalid</small>
              ) : (
                ''
              )}
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <select
                id="LEADCF6"
                name="LEADCF6"
                onChange={(e) => setModel(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option>Select Model</option>
                <option>S-Cross</option>
                <option>Ciaz</option>
                <option>Baleno</option>
                <option>Ignis</option>
                <option>XL6</option>
              </select>
            </div> */}
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Select Your Service Center{' '}
                <span className='text-red-600'>*</span>
              </label>
              <select
                id='LEADCF22'
                name='LEADCF22'
                onChange={(e) => setPickup(e.target.value)}
                className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
              >
                <option>Select Outlet</option>

                <option value='Nexa Service - Lumbini'>Nexa Lumbini</option>
                <option value='Nexa Service - Jubilee'>Nexa Jubilee</option>
                <option value='Nexa Service - Kompallly'>Nexa Kompally</option>
              </select>
            </div>
          </div>
          <div className='flex items-start py-4'>
            <input
              id='disclaimer'
              name='disclaimer'
              type='checkbox'
              className='h-4 w-4 rounded'
              required
            />
            <div className='ml-2 text-sm'>
              <label htmlFor='disclaimer' className='font-medium text-gray-700'>
                <span className='text-black font-bold'>Disclaimer</span>: I
                agree that by clicking the ‘Submit’ button below, I am
                explicitly soliciting a call / message from Saboo Maruti (RKS
                Motor Pvt. Ltd) or its representatives on my ‘Mobile’
              </label>
            </div>
          </div>
          <button
            className='bg-black text-white rounded py-2.5 px-5'
            type='submit'
            disabled={
              pattern.test(phone) && phone.length === 10
                ? false
                : true && loader
                ? true
                : false
            }
            onClick={handleSubmit}
          >
            {loader ? (
              <div className='flex items-center justify-center'>
                <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                Loading
              </div>
            ) : (
              'Book A Service'
            )}
          </button>
        </form>
      </div>
    </>
  );
}

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect='fade'
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper slider-home'
      >
        {bookAservice.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} className='w-full' alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default BookAService;
