import React from 'react'
import DigitalLibrary from './productcomp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import HowItWorks from './Howto';
import {faCheckCircle}  from '@fortawesome/free-solid-svg-icons';
import image  from "../../assets/image.jpeg"


const Product = () => {
  return (
    <>
    <div className='h-screen w-full relative overflow-x-hidden'>
      <img className=' w-full h-full object-cover relative' src='https://cdn.pixabay.com/photo/2024/08/08/11/48/graphic-8954280_1280.jpg' alt="business" />
      
      <div className='absolute top-56 text-white h-[400px] md:w-[750px] w-auto md:px-20 px-5 z-10'>
        <h1 className='leading-[1.5] whitespace-nowrap font-sans md:text-[50px] text-[32px] font-bold w-full max-w-[300px] md:max-w-full break-words'>
        Our Products
        </h1>
        <h1
       className='leading-[1.2] font-sans md:text-[26px] my-5 text-[20px] font-semibold w-full max-w-[300px] md:max-w-full break-words'>
 Discover Premium Products Designed to Elevate Your Succes Quality, Innovation, and Profitability in Every Package Crafted to Meet the Needs of Modern Entrepreneurs.
     </h1>
      </div>
    </div>
    <DigitalLibrary/>
    <div className='w-full '>
     
      {/* Responsive Image with aspect-ratio for consistent scaling */}
    

      {/* Text Section */}
      <div className="flex items-center justify-center my-6 md:px-0 px-6">
    <div className="color10 p-6  rounded-lg shadow-md text-center max-w-[800px] w-full mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Use The Products In Any Way, Everything Is Completely Yours
        </h2>
        <p className="text-base md:text-lg mb-2 text-orange-400">
            You are free to use and Resell as much as you want.
        </p>
        <p className="text-base md:text-lg font-semibold text-orange-200">
            Learn, Apply & Earn
        </p>
    </div>
</div>
</div>

    <div className='flex justify-center '>
    <button className="color11 hover:bg-blue-600 text-black md:font-bold font-sans font-semibold py-2 my-2 px-4 rounded-3xl h-12  md:min-w-[260px]">
              Get Instant Access Now
            </button>
            </div>
    <div className=' h-full w-auto flex justify-center md:px-0 px-6 py-8  '>
   
        <img className='max-h-[550px]  w-auto object-cover' src='https://marketingtectic.com/web_assets/img/our-products/section-4.jpg'/>
    </div>
    <div className="color11 py-2 md:mx-10 mx-4">
      <h1 className="text-black md:text-[15px] text-[11px] font-bold text-center">
        Complete shortcut to build your digital empire
      </h1>
    </div>
    <div className="flex flex-col items-center justify-center p-6  text-center">
      <h2 className="md:text-4xl text-[22px] font-bold mb-2 font-serif">
        Done-for-you content produced by experts
      </h2>
      <p className="md:text-lg text-[12px] mb-1 text-gray-700">
        Stop wasting your time & money creating products and content from scratch.
      </p>
      <p className="md:text-lg text-[12px] text-gray-700">
        Stop worrying about initial investments and no product ideas.
      </p>
    </div>
    <div className='my-4 flex justify-center md:px-0 px-4'>
  <img className='h-auto max-w-full md:max-w-[800px] w-full object-cover' src={image} alt='Our Products' />
</div>
<div className='flex justify-center '>
    <button className="color11 hover:bg-blue-600 text-black md:font-bold font-sans font-semibold py-2 md:my-2 my-5 px-4 rounded-3xl h-12 min-w-[260px]">
              Get Instant Access Now
            </button>
            </div>
            <div className="color11 py-2 md:mx-10 mx-4 md:my-6 my-9">
      <h1 className="text-blackmd:text-[15px] text-[12px]  font-bold text-center">
      200+ Premium PLR Ebooks
      </h1>
    </div>
    <div className="flex flex-col items-center justify-center p-2 ">
      <h2 className="md:text-3xl text-[24px] font-bold text-center mb-6">
        Ebooks and Guidebooks
      </h2>
      <p className="md:text-lg text-[15px] text-center mb-2">
        Give your audience engaging, quality reading. Only real and useful information.
      </p>
      <p className="text-base text-center mb-2">
        Both, in-depth and straightforward explanations on
      </p>
      <p className="text-base text-center">
        topics your customers want to consume.
      </p>
    </div>
    <div className='my-6 flex justify-center md:px-0 px-5'>
  <img className='h-auto max-w-full md:max-w-[1000px] w-full object-cover' src='https://marketingtectic.com/web_assets/img/our-products/section-9.jpg' alt='Our Products' />
</div>
<div className='flex justify-center '>
    <button className=" border-2 border-black hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-3xl h-11 min-w-[240px]">
                Preview Free Samples
            </button>
            </div>
            <div className="color11 py-2 md:mx-10 mx-4 my-6">
      <h1 className="text-black md:text-[15px] text-[11px] font-bold text-center">
      200+ VALUABLE VIDEOS & AUDIOS
      </h1>
    </div>
    <div className="flex flex-col items-center justify-center p-2 ">
      <h2 className="md:text-3xl text-[24px] font-bold text-center mb-4">
      Video & Audio Courses
      </h2>
      <p className="md:text-lg text-[15px] text-center mb-2">
      Focused and practical courses delivered in a visually appealing format,
      </p>
      <p className="text-base text-center mb-2">
      perfect for

learners who prefer podcasts 
      </p>
      <p className="text-base text-center">
      and want to absorb knowledge while on the move
      </p>
    </div>
    <div className='my-2 flex justify-center md:px-0 px-5'>
  <img className='h-auto max-w-full md:max-w-[800px] w-full object-cover' src='https://marketingtectic.com/web_assets/img/our-products/section-10.jpg' alt='Our Products' />
</div>
<div className="relative flex flex-col items-center justify-center py-4 translate-y-[-40px] ">
      <div className="relative z-10 text-center space-y-2">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2 text-sm opacity-70" />
          <h2 className="md:text-2xl text-xl font-bold">With or Without Face</h2>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2 text-sm opacity-70" />
          <h2 className="md:text-xl text-[16px]">Screen Sharings and Slides</h2>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2 text-sm opacity-70" />
          <h2 className="md:text-xl text-[16px]">Clear Presentation</h2>
        
        </div>
        <div className='flex justify-center  '>
    <button className=" border-2 border-black hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-3xl h-11 min-w-[240px]">
                Preview Free Samples
            </button>
            </div>
      </div>
    </div>
    </>
  )
}

export default Product