import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt,faFileCircleCheck, faCube, faShield,faBriefcase, faRectangleList, faChartSimple, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    // Jab component mount ho, tab body ka overflow-x hidden kar do
    document.body.style.overflowX = 'hidden';
    
    // Jab component unmount ho, to original overflow wapas set kar do
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);
  const images = [
     'https://cdn.pixabay.com/photo/2024/04/26/18/24/media-8722412_1280.jpg', 
       'https://cdn.pixabay.com/photo/2023/11/04/16/59/ai-generated-8365422_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/01/31/10/45/ai-generated-8543841_960_720.jpg',
   // Add more image URLs as needed
  
  ];
  useEffect(() => {
    // Set up the interval to change images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <div className='h-screen w-full relative overflow-hidden'>
   
    <img
        className={`image fade ${currentImageIndex === 0 ? 'active' : ''}`}
        src={images[0]}
        alt={`business 1`}
      />
      <img
        className={`image fade ${currentImageIndex === 1 ? 'active' : ''}`}
        src={images[1]}
        alt={`business 2`}
      />
      <img
        className={`image fade ${currentImageIndex === 2 ? 'active' : ''}`}
        src={images[2]}
        alt={`business 3`}
      />
      
      
      <div className='absolute top-56 text-white h-[400px] md:w-[750px] w-auto md:px-20 px-5 z-10'>
        <h1 className='leading-[1.5] font-sans md:text-[50px] text-[32px] font-bold w-full max-w-[300px] md:max-w-full break-words'>
          Supercharge Your Sales: Elevate Your Business with MT
        </h1>
        <h1 className='leading-[1.2] font-sans md:text-[26px] my-5 text-[20px] font-semibold w-full max-w-[300px] md:max-w-full break-words'>
          We are a team of talented digital marketing experts
        </h1>
        <button className='h-12 md:w-40 w-32 my-2 color4 text-white rounded  font-sans text-[17px]'>Get Started</button>
      </div>
    </div>
    {/* <div className=' bg-black text-black h-[800px] w-full'>
    
  {/* Grid div is now outside the md:px-24 div */}
  {/* <div className='absolute top-0 left-0 right-0 flex justify-center items-center text-red-700 h-[200px]'>
    <div className='grid grid-cols-3 mx-2 px-2 text-red-500'>
      kkkk
    </div>
  </div>

    <div className="md:px-24 md:py-32 px-2 ">
                    <h1 className='font-bold font-sans md:text-[42px] text-[32px] text-white whitespace-nowrap md:px-0 px-10'>How it works</h1>
                 
                    <h3 className='py-3 font-sans md:text-[18px] text-[16px] text-white max-w-[500px] md:px-0 px-4 md:text-starttext-center'>MT is a Platform Which Is Specially Designed to Help Marketers to Enhance Their Marketing Skills We Also Offer Affiliates to Work With us And Promote MT Products To Earn Money. The Best Part is that You Only have to Buy this Product Once and Can Sell It Multiple times and On Every Sale you Do You Will Get 100% Commision.</h3>
                    <button className='h-10 my-4 md:min-w-[160px] w-[140px] rounded-3xl border-2 border-orange-300 hover:bg-orange-300 bg-black text-white font-sans text-[16px] md:text-[17px] font-semibold md:mx-0 mx-16'>
            About us
    </button>
   
                  </div>
                
    </div>  */}
    <div className='color10 text-black h-auto w-full flex flex-col lg:flex-row'>
  {/* Left Section: md:px-24 */}
  <div className="lg:px-6 md:py-10 lg:py-32 py-9  px-2 flex-1 md:px-10">
    <h1 className='font-bold font-sans md:text-[42px] text-[32px] text-white whitespace-nowrap md:text-start text-center'>How it works</h1>
    
    <h3 className='py-3 font-sans md:text-[18px] text-[16px] text-white lg:max-w-[500px] md:px-0 px-4 md:text-start text-center'>
      MT is a Platform Which Is Specially Designed to Help Marketers to Enhance Their Marketing Skills. We Also Offer Affiliates to Work With us And Promote MT Products To Earn Money. The Best Part is that You Only have to Buy this Product Once and Can Sell It Multiple times and On Every Sale you Do You Will Get 100% Commission.
    </h3>
    <span className='flex justify-center lg:block md:block'>
    <button className='h-10 my-4 md:min-w-[160px] w-[140px] rounded-3xl border-2 border-orange-300 hover:bg-orange-300 bg-black text-white font-sans text-[16px] md:text-[17px] font-semibold md:mx-0 mx-16'>
      About us
    </button>
    </span>
  </div>

  {/* Right Section: Grid */}
  <div className='grid md:grid-cols-3 translate-x-[-10px] px-0   flex-1 lg:py-32 md:py-7 md:mx-10 py-24 md:space-y-0 space-y-14 '>
  <div className='md:col-span-1 col-span-3 h-auto w-auto md:mx-0 mx-8'>
    <span className='flex justify-center lg:block md:block'>
    <FontAwesomeIcon icon={faFileCircleCheck} className='text-[33px] text-orange-400 mx-[122px] md:mx-0' />
    </span>
    <span>
    <h3 className='font-bold font-sans text-[25px] text-white my-2 md:text-start lg:text-start text-center md:mx-0'>Register</h3>
    </span>
    <span>
 <h3 className='my-2 text-[18px] text-gray-400 lg:w-60 md:w-[350px] md:text-start text-center'>
 Step No 1. Sign up you Account with Marketing Tectic.com and Activate with any Educational Product.
 </h3>
    </span>
  </div>
  <div className='md:col-span-1 col-span-3 h-auto w-auto md:mx-40 lg:mx-20 mx-8 '>
    <span className='flex justify-center lg:block md:block'>
    <FontAwesomeIcon icon={faCube} className='text-[33px] text-orange-400 mx-[122px] md:mx-0' />
    </span>
    <span>
    <h3 className='font-bold font-sans text-[25px] text-white my-2 whitespace-nowrap md:text-start lg:text-start text-center  md:mx-0 '>Promote Us</h3>
    </span>
    <span>
 <h3 className='my-2 text-[18px] text-gray-400 lg:w-60 md:text-start text-center md:w-[350px]'>
 Promote Our Educational Products on social media and other platforms with already pre written ads.
 </h3>
    </span>
  </div>
  <div className='md:col-span-3 col-span-3 h-auto w-auto md:mx-0 mx-8 md:py-9 py-0'>
    <span className='flex justify-center lg:block md:block'>
    <FontAwesomeIcon icon={faShield} className='text-[33px] text-orange-400 mx-[122px] md:mx-0' />
    </span>
    <span>
    <h3 className='font-bold font-sans text-[25px] text-white my-2 whitespace-nowrap md:text-start lg:text-start text-center  md:mx-0'>Get Paid</h3>
    </span>
    <span>
 <h3 className='my-2 text-[18px] text-gray-400 lg:w-60 md:text-start text-center md:w-[350px] '>
 Get 100% commission on any purchased from your link and withdrawal direct into your banks account instantly
 </h3>
    </span>
  </div>
  </div>
</div>
<div className='color7 h-auto w-full grid grid-cols-2 py-10 md:px-24 px-5'>
  <div className='lg:col-span-1 md:col-span-2 col-span-2'>
    <div className=''>
      <div className=' h-[2px] w-11 bg-blue-600 '></div>
      <h1 className='font2 color5 font-bold  text-[20px] '>WHO WE ARE</h1>
      <h1 className='font2 text-black font-bold text-[30px] my-2'>Your Growth is Our Goal,
      Empowering Brands Through Digital Excellence</h1>
      <h4 className='font2 color6 text-[21px] my-2 font-semibold '>We are a software, IT services consultancy and development your company business.Whether the enterprise tools, applications, or software are available or not, NeroMax Solutions is ready to help. NeroMax delivers high quality, reliable, and cost-effective IT services to customers globally.</h4>
      <div className='flex justify-start'>
      <button className='h-12 my-4 md:min-w-[160px] w-[140px] rounded-lg border-2 border-blue-500  color8 text-black font-sans text-[16px] md:text-[17px] font-semibold '>Our Products</button>
      </div>
    </div>
  </div>
  <div className='lg:col-span-1 md:col-span-2 col-span-2 px-4 md:py-0 py-7 h-ful w-full'>
    <img className='object-cover h-full w-full' src='https://neromax.brandmax.pro/wp-content/uploads/2021/03/happiness-about-1.jpg.webp'alt='marketing image'/>
  </div>
</div>
<div className='color9 grid md:grid-cols-2 grid-cols-1 h-auto w-full py-3 space-y-10 px-4'>
  <div className='col-span-2 text-center h-auto w-full'>
    <h1 className='font2 text-white text-[38px] font-semibold py-6'>Products</h1>
    
    <div className='flex justify-center'>
      <div className='h-[2px] bg-orange-400 w-9'></div>
    </div>
    
    <h3 className='font2 text-white text-[18px] font-semibold py-6'>
      Unlock a world of possibilities with our cutting-edge digital products
    </h3>
  </div>

  {/* Product 1 */}
  <div className='md:col-span-1 col-span-2 h-auto  max-w-[600px] color10 mx-8 md:px-5 px-2 md:py-5 py-3'>
    <div className='flex items-center space-x-6'>
      <FontAwesomeIcon icon={faBriefcase} className='md:h-9 md:w-9 w-8  h-8 text-orange-400' />
      <h2 className='md:text-[22px] text-[18px]  font-semibold font2 text-white'>Video Courses</h2>
    </div>
    <h2 className='text-white mx-[60px] md:text-[14px] text-[12px] md:my-1 my-0 font2 md:w-auto w-auto'>
    Unlock new skills with our immersive video courses. Learn at your pace, from experts, for personal and professional growth.
    </h2>
  </div>


  {/* Product 2 */}
  <div className='md:col-span-1 col-span-2 h-auto   max-w-[600px] color10 mx-8 md:px-5 px-2 md:py-5 py-3'>
    <div className='flex items-center space-x-6'>
      <FontAwesomeIcon icon={faRectangleList} className='md:h-9 md:w-9 w-8 h-8 text-orange-400' />
      <h2 className='md:text-[22px] text-[18px]  font-semibold font2 text-white'>Seo Tools</h2>
    </div>
    <h2 className='text-white mx-[60px] md:text-[14px] text-[12px] md:my-1 my-0 font2 md:w-auto w-auto'>
    Boost your online visibility with powerful SEO tools. Enhance rankings, analyze keywords, and optimize your website for success effortlessly
    </h2>
  </div>
  <div className='md:col-span-1 col-span-2 h-auto   max-w-[600px] color10 mx-8 md:px-5 px-2 md:py-5 py-3'>
    <div className='flex items-center space-x-6'>
      <FontAwesomeIcon icon={faChartSimple} className='md:h-9 md:w-9 w-8 h-8 text-orange-400' />
      <h2 className='md:text-[22px] text-[18px]  font-semibold font2 text-white'>Ai Tools</h2>
    </div>
    <h2 className='text-white mx-[60px] md:text-[14px] text-[12px] md:my-1 my-0 font2 md:w-auto w-auto'>
    Experience the future with AI tools. Automate tasks, gain insights, and stay ahead in innovation. Elevate your work with intelligence.
    </h2>
  </div>
  <div className='md:col-span-1 col-span-2 h-auto   max-w-[600px] color10 mx-8 md:px-5 px-2 md:py-5 py-3'>
    <div className='flex items-center space-x-6'>
      <FontAwesomeIcon icon={faBinoculars} className='md:h-9 md:w-9 w-8 h-8 text-orange-400' />
      <h2 className='md:text-[22px] text-[18px]  font-semibold font2 text-white'>E-Books</h2>
    </div>
    <h2 className='text-white mx-[60px] md:text-[14px] text-[12px] md:my-1 my-0 font2 md:w-auto w-auto'>
    Dive into a world of knowledge with our diverse e-book collection. Explore topics, gain expertise, and enjoy learning with convenience
    </h2>
  </div>
</div>
<Contact/>

    </>
  );
};

export default Home;

