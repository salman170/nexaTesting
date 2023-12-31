import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function Insurance() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [method, setMethod] = useState();

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
    axios
      .post('https://saboogroups.com/admin/api/insurance', {
        name: name,
        email: email,
        phone: phone,
      })
      .then((res) => {
        setMethod('POST');
        setLoader(false);
        toast.success('Enquiry sent successfully');
      })
      .catch((err) => {
        toast.error('Something went wrong!');
        setLoader(false);
        console.log(err);
      });
  }

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Car Insurance price, Offers & Renewal Details | Saboo Nexa
        </title>
        <meta
          name='title'
          content='Maruti Car Insurance price, Offers & Renewal Details | Saboo Nexa'
        />
        <meta
          name='description'
          content='Maruti Car Insurance Premium Details, Renewals & Offers. Get cashless settlement on Maruti Insurance. Visit nearest Saboo Nexa showroom today.'
        />
        <meta name='keywords' content='Maruti Car Insurance' />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboonexa.in/maruti-car-insurance/'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Nexa Car Insurance price, Offers & Renewal Details | Saboo Nexa'
        />
        <meta
          property='og:description'
          content='Maruti Car Insurance Premium Details, Renewals & Offers. Get cashless settlement on Maruti Insurance. Visit nearest Saboo Nexa showroom today.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Insurance.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/maruti-car-insurance/'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Nexa Car Insurance price, Offers & Renewal Details | Saboo Nexa'
        />
        <meta
          property='twitter:description'
          content='Maruti Car Insurance Premium Details, Renewals & Offers. Get cashless settlement on Maruti Insurance. Visit nearest Saboo Nexa showroom today.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Insurance.jpg'
        />
      </Helmet>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Insurance-Banner.webp'
        className='max-w-full w-full'
        alt='inusrance banner'
      />
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Insurance
        </p>
      </div>
      <div className='container mx-auto py-16 px-5'>
        <form
          action='https://crm.zoho.in/crm/WebToLeadForm'
          name='WebToLeads54158000001051349'
          method={method}
          acceptCharset='UTF-8'
          className='space-y-5'
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
            value='3e4c511e1bfac462fb9ac158b261b0d3df2ae6eb9f9847d50cb87f439855b4e4'
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

          <p className='uppercase font-bold text-md'> contact details :</p>
          <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name <span className='text-red-600'>*</span>
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                type='text'
                id='Last_Name'
                name='Last Name'
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
                maxLength='10'
                minLength='10'
                required
                id='Phone'
                name='Phone'
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
          </div>
          <p className='text-gray-700'>
            <span className='text-black font-bold'>Disclaimer</span>: I agree
            that by clicking the ‘Submit’ button below, I am explicitly
            soliciting a call / message from Saboo Maruti (RKS Motor Pvt. Ltd)
            or its representatives on my ‘Mobile’
          </p>
          <div className='flex items-start'>
            <input
              id='disclaimer'
              name='disclaimer'
              type='checkbox'
              required
              className='h-4 w-4 rounded'
            />
            <div className='ml-2 text-sm'>
              <label htmlFor='disclaimer' className='font-medium text-gray-700'>
                Please Agree with Following Disclaimer
              </label>
            </div>
          </div>
          <button
            className='bg-black text-white rounded py-2.5 px-5'
            type='submit'
            disabled={pattern.test(phone) && phone.length === 10 ? false : true}
            onClick={handleSubmit}
          >
            {loader ? (
              <div className='flex items-center justify-center'>
                <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                Loading
              </div>
            ) : (
              'Get Your Insurance Now'
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default Insurance;
