
import { useState } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

const SliderHome = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(0);
  const cars = [
    {
      name: 'Nexa Lumbini',
      link: 'https://lh3.googleusercontent.com/p/AF1QipMLEnk0MYFn9tcAINhNpWSNcEHzQkPD_2YmFMo8=s680-w680-h510',
      heading:
        '5-9-22/1/B, Shapoorji Towers, Shapoorwadi, Adarsh Nagar, Hyderabad, Telangana 500004.',
    },
    {
      name: 'Jimny',
      link: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/colors/Saboo-Nexa-Ciaz-Colours-Midnight-Black.webp',
      heading: 'Functional Beauty Crafted for Purity of Function.',
    },
    {
      name: 'Grand Vitara',
      link: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/grandeur_grey.webp',
      heading: 'Create Inspire.',
    },
    {
      name: 'XL6',
      link: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-EARTHERN_BROWN.webp',
      heading: 'Created to Inspire Indulgence.',
    },
    {
      name: 'Ciaz',
      link: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Kinetic_Yellow_Bluish_Black_Roof.webp',
      heading: 'Created to Inspire Elegance.',
    },
    {
      name: 'Baleno',
      link: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/oppulent_red_midnight_black.webp',
      heading: 'Created to Inspire The Bold and Intelligent.',
    },
    {
      name: 'Ignis',
      link: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Nexa-Blue.webp',
      heading: 'Created to Inspire The Toughness in You.',
    },
  ];
  const handleClickRight = () => {
    setSelect((prevSelect) =>
      prevSelect === cars.length - 1 ? 0 : prevSelect + 1
    );
    setOpen(!open);
  };
  const handleClickLeft = () => {
    setSelect((prevSelect) =>
      prevSelect === 0 ? cars.length - 1 : prevSelect - 1
    );
    setOpen(!open);
  };

  return (
    <div className=' mb-6 container mx-auto  '>
      {/* <button className='text-white' onClick={()=>setOpen(!open)}>{open?"Right":"Left"}</button> */}
      {/* <span className='text-4xl md:text-5xl  overflow-hidden uppercase'>
        SABOO NEXA
      </span> */}
      <br />
      <span className='  text-right'>
        <h1 className='      pt-2  text-5xl md:text-6xl uppercase font-medium '>
          OUTLETS
        </h1>
      
      </span>
      <br />
      <div className='mb-6 text-right'>
        To ensure that you receive the ultimate Nexa experience, we have
        strategically positioned ourselves in three prominent hotspots
        throughout Hyderabad
      </div>
      <div className=' h-[50vh] overflow-hidden relative  container mx-auto bg-black '>
        {/* <div
          className={`rotate-10  bg-[#3f3e3e47]  duration-1000 h-screen -top-60 w-full absolute ${
            open ? 'left-1/2' : 'left-1/3'
          }`}
        ></div> */}
        <div className='flex flex-col-reverse md:flex-row  '>
          <div className='w-1/3 text-white h-[40vh] '>
            <div className=''>
              <div>
                <div className='text-4xl p-2 mt-10'>{cars[select].name}</div>
                <div className='text-2xl p-2'>{cars[select].heading}</div>
              </div>
              <div className='flex justify-evenly mb-2'>
                <button onClick={handleClickLeft} className='my-20 text-6xl '>
                  <AiOutlineLeftCircle />
                </button>
                <button onClick={handleClickRight} className='my-20 text-6xl '>
                  <AiOutlineRightCircle />
                </button>
              </div>
              {/* <div className='text-white '>
                Explore
              </div> */}
            </div>
          </div>
          <div
            className='w-2/3 my-auto flex object-cover '
            data-aos='fade-left'
            data-aos-delay='0'
            data-aos-duration='1000'
          >
            {/* <img src={cars[select].link} alt='' srcset='' className='w-full  ' />
          <img src={cars[select].link} alt='' srcset='' className='w-full  ' /> */}
            <img src={cars[select].link} alt='' srcSet='' className='p-10' />
            {/* <img
              src={cars[(select + 1) % cars.length].link}
              alt=''
              srcSet=''
              className=' w-1/2'
            /> */}

            {/* {carImage(cars[select].link)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
