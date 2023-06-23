import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import EnquiryPopup from '../utils/EnquiryPopup';

// import { FiMapPin } from 'react-icons/fi';

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import deal from '../../assets/deal.png';

const phoneRegExp = /^(\+91-|\+91|0)?\d{10}$/;

const enquirySchema = Yup.object().shape({
  name: Yup.string().required('Name is required.*'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('Number is required.*'),
  model: Yup.string().required('Information is required*'),
});

const CarEnq = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
  };
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [submit, setSubmit] = useState(false);
  return (
    <section className=' '>
      <div className=' mx-auto  py-20 px-5 container  '>
        <div className='pb-6 text-3xl font-serif text-center uppercase'>
          Car Enquiry
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={enquirySchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // setLoading(true);
            axios
              .post(
                // 'https://procuren-backend-g6z9.onrender.com/contactform',
                values
              )
              .then((response) => {
                if (response.data.status === true) {
                  // setLoading(false);
                  // setSubmit(true);
                  alert(
                    'form submitted successfully. Our team will contact you soon'
                  );
                  resetForm({ values: initialValues });
                } else {
                  setError(error.message);
                  // setLoading(false);
                }
                setSubmitting(false);
              })
              .catch((error) => {
                // console.error(error);
                setError(error.message);
                // setLoading(false);
                // alert(`Invalid data ~ ${error.message}`);
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form
              // data-aos='fade-left'
              // data-aos-delay='0'
              // data-aos-duration='1000'
              className=' gap-2 grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5  '
            >
              <div className=' mb-4'>
                <div className='flex '>
                  <label htmlFor='name' className='text-md my-auto pr-6 '>
                    Name:
                  </label>
                  <Field
                    type='text'
                    id='name'
                    name='name'
                    // placeholder='Enter your name'
                    required
                    className='placeholder:text-md w-full   border-b border-gray-500  bg-white px-3 py-1 text-center leading-8  placeholder-gray-300  outline-none  '
                  />
                </div>
                <ErrorMessage
                  name='name'
                  component='div'
                  className=' ml-10 flex justify-center text-sm text-red-700'
                />
              </div>
              <div className=' mb-4'>
                <div className='flex'>
                  <label htmlFor='email' className='text-md my-auto pr-7 '>
                    Email:
                  </label>

                  <Field
                    type='email'
                    id='email'
                    name='email'
                    // placeholder='example@email.com'
                    required
                    className='placeholder:text-md w-full   border-b border-gray-500  bg-white px-3 py-1 text-center leading-8  placeholder-gray-300  outline-none  '
                  />
                </div>
                <ErrorMessage
                  name='email'
                  component='div'
                  className=' ml-8 flex justify-center text-sm text-red-700'
                />
              </div>
              <div className=' mb-4'>
                <div className='flex'>
                  <label htmlFor='phone' className='text-md my-auto  pr-4'>
                    Contact:
                  </label>
                  <Field
                    type='text'
                    id='phone'
                    name='phone'
                    // placeholder='+91 00000 00000 '
                    required
                    className='placeholder:text-md w-full   border-b border-gray-500  bg-white px-3 py-1 text-center leading-8  placeholder-gray-300  outline-none  '
                  />
                </div>
                <ErrorMessage
                  name='phone'
                  component='div'
                  className=' ml-10 flex justify-center text-sm text-red-700 '
                />
              </div>

              <div>
                <div className='flex'>
                  <label htmlFor='model' className='text-md my-auto  '>
                    Model:
                  </label>

                  <Field
                    required
                    as='select'
                    className=' border-b w-full border-gray-500 mx-4 py-2 outline-0  text-lg leading-relaxed   '
                    name='model'
                    id='model'
                  >
                    <option className='text-sm text-gray-500' value=''></option>
                    <option className='bg-gray-100 ' value='Fronx'>
                      Fronx
                    </option>
                    <option className='bg-gray-100 ' value='Jimny'>
                      Jimny
                    </option>
                    <option className='bg-gray-100  ' value='Grand Vitara'>
                      Grand Vitara
                    </option>
                    <option className='bg-gray-100 ' value='Ciaz'>
                      Ciaz
                    </option>
                    <option className='bg-gray-100 ' value='Baleno'>
                      Baleno
                    </option>
                    <option className='bg-gray-100 ' value='Ignis'>
                      Ignis
                    </option>
                    <option className='bg-gray-100 ' value='XL6'>
                      XL6
                    </option>
                  </Field>
                </div>
                <ErrorMessage
                  name='model'
                  component='div'
                  className=' ml-10  flex justify-center text-sm text-red-700'
                />
              </div>

              <div className=' xl:mx-auto mx-auto sm:mx-0 w-full '>
                {/* <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`  w-full flex justify-center border bg-black text-white  hover:border-black py-2 text-lg duration-500  font-sans focus:outline-none `}
                >
                  {loading ? 'Submitting' : 'Submit'}
                </button> */}
                <button
                 type='submit'
                 disabled={isSubmitting}
                  className='relative inline-flex items-center bg-black justify-center p-4 px-6 py-3 overflow-hidden w-full text-white transition duration-300 ease-out border-2 group'
                >
                  <span className='absolute inset-0 flex  items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      ></path>
                    </svg>
                  </span>
                  <span className='absolute  text-lg flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease'>
                    Submit
                  </span>
                  <span className='relative invisible'>Button Text</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
        {/* <BuyerOptions /> */}
      </div>
    </section>
  );
};

export default CarEnq;

// const BuyerOptions = () => {
//   const [open, setOpen] = useState(false);
//   const [phone, setPhone] = useState('');
//   return (
//     <>
//       <div className='container mx-auto pt-10'>
//         <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 lg:px-0  px-5'>
//           <button onClick={() => setOpen(true)}>
//             <div className='border-b md:border-r md:border-b-0 space-y-3 py-3 w-full max-w-[350px] mx-auto mb-4 '>
//               <img
//                 src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/Saboo-Nexa-Car-Test-Drive.webp'
//                 alt='1'
//                 className='mx-auto h-16'
//               />
//               <p className='uppercase font-bold text-center text-sm text-gray-700'>
//                 book a test drive
//               </p>
//             </div>
//           </button>
//           <Link to='/maruti-nexa-showroom-outlets-in-hyderabad'>
//             <div className='border-b lg:border-r md:border-b-0 rounded space-y-3 py-3 w-full max-w-[350px] mx-auto mb-4 '>
//               <img
//                 src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/Saboo-Nexa-Showroom-Locate.webp'
//                 alt='1'
//                 className='mx-auto h-16'
//               />
//               <p className='uppercase font-bold text-center text-sm text-gray-700'>
//                 locate a showroom
//               </p>
//             </div>
//           </Link>
//           <button onClick={() => setOpen(true)}>
//             <div className='border-b md:border-r md:border-b-0  rounded space-y-3 py-3 w-full max-w-[350px] mx-auto mb-4 '>
//               <img
//                 src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/Saboo-Nexa-Book-Showroom-Visit.webp'
//                 alt='1'
//                 className='mx-auto h-16'
//               />
//               <p className='uppercase font-bold text-center text-sm text-gray-700'>
//                 book a showroom visit
//               </p>
//             </div>
//           </button>
//           <Link to='/maruti-car-insurance'>
//             <div className=' rounded space-y-3 py-3 w-full max-w-[350px] mx-auto mb-4 '>
//               <img
//                 src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/Saboo-Nexa-Ebook.webp'
//                 alt='1'
//                 className='mx-auto h-16'
//               />
//               <p className='uppercase font-bold text-center text-sm text-gray-700'>
//                 insurance renewal
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//       <EnquiryPopup
//         open={open}
//         setOpen={setOpen}
//         phone={phone}
//         setPhone={setPhone}
//         title={'book a test drive / showroom visit'}
//       />
//     </>
//   );
// };
