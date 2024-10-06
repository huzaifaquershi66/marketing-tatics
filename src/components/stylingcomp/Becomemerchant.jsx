import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import HowItWorks from './Howto';
import { faReceipt,faFileCircleCheck, faCube, faShield,faBriefcase, faRectangleList, faChartSimple, faBinoculars } from '@fortawesome/free-solid-svg-icons';

const Becomemerchant = () => {
  return (
   <>
<div className='h-screen w-full relative overflow-x-hidden'>
      <img className=' w-full h-full object-cover relative' src='https://cdn.pixabay.com/photo/2024/05/05/18/04/technology-8741662_960_720.jpg' alt="business" />
      
      <div className='absolute top-56 text-white h-[400px] md:w-[750px] w-auto md:px-20 px-5 z-10'>
        <h1 className='leading-[1.5] font-sans md:text-[50px] whitespace-nowrap text-[32px] font-bold w-full max-w-[300px] md:max-w-full break-words'>
        Become A Merchant
        </h1>
        <h1
       className='leading-[1.2] font-sans md:text-[26px] my-5 text-[20px] font-semibold w-full max-w-[300px] md:max-w-full break-words'>
    Launch Your Products, Dominate the Market! Join Forces with Our Affiliates for Explosive Sales and Lasting Prosperity. Let's Create a Legacy of Profitable Partnerships!  </h1>
    <button className='h-10 my-4 w-[220px] rounded-3xl border-2 border-orange-300 hover:bg-orange-300 bg-black text-white font-sans text-[16px] md:text-[17px] font-semibold md:mx-0 mx-16'>
      Become a Merchant Now
    </button>
      </div>
    </div>
    <div className='color10 text-black h-auto w-full flex flex-col lg:flex-row'>
  {/* Left Section: md:px-24 */}
  <div className="lg:px-6 md:py-10 lg:py-32 py-9  px-2 flex-1 md:px-10">
    <h1 className='font-bold font-sans md:text-[42px] text-[32px] text-white whitespace-nowrap md:text-start text-center'>Easy Process</h1>
    
    <h3 className='py-3 font-sans md:text-[18px] text-[16px] text-white lg:max-w-[500px] md:px-0 px-4 md:text-start text-center'>
    Easy Process
    MT is a Platform Which Is Specially Designed to Help Marketers to Enhance Their Marketing Skills We Also Offer Affiliates to Work With us And Promote MT Products To Earn Money. The Best Part is that You Only have to Buy this Product Once and Can Sell It Multiple times and On Every Sale you Do You Will Get 100% Commision.
    </h3>
    <span className='flex justify-center lg:block md:block'>
    <button className='h-10 my-4 md:min-w-[160px] w-[140px] rounded-3xl border-2 border-orange-300 hover:bg-orange-300 bg-black text-white font-sans text-[16px] md:text-[17px] font-semibold md:mx-0 mx-16'>
Start Now
    </button>
    </span>
  </div>
    <div className='grid md:grid-cols-3 translate-x-[-10px] px-0   flex-1 lg:py-32 md:py-7 md:mx-10 py-24 md:space-y-0 space-y-14 '>
  <div className='md:col-span-1 col-span-3 h-auto w-auto md:mx-0 mx-8'>
    <span className='flex justify-center lg:block md:block'>
    <FontAwesomeIcon icon={faFileCircleCheck} className='text-[33px] text-orange-400 mx-[122px] md:mx-0' />
    </span>
    <span>
    <h3 className='font-bold font-sans text-[25px] text-white my-2 md:text-start lg:text-start text-center md:mx-0'>Signup</h3>
    </span>
    <span>
 <h3 className='my-2 text-[18px] text-gray-400 lg:w-60 md:w-[350px] md:text-start text-center'>
 Simply Signup With Us A Merchant, After Signing Up And Completing Your Business Details With Us You Can Move To The Next Step!
 </h3>
    </span>
  </div>
  <div className='md:col-span-1 col-span-3 h-auto w-auto md:mx-40 lg:mx-20 mx-8 '>
    <span className='flex justify-center lg:block md:block'>
    <FontAwesomeIcon icon={faCube} className='text-[33px] text-orange-400 mx-[122px] md:mx-0' />
    </span>
    <span>
    <h3 className='font-bold whitespace-nowrap font-sans text-[25px] text-white my-2  md:text-start lg:text-start text-center  md:mx-0 '>Discuss Your Product</h3>
    </span>
    <span>
 <h3 className='my-2 text-[18px] text-gray-400 lg:w-60 md:text-start text-center md:w-[350px]'>
 After Signing Up You Can Send Product For Review Our Team Will Review Your Product And Will Confirm Either We Can List Your Product Or Not
 </h3>
    </span>
  </div>
  <div className='md:col-span-3 col-span-3 h-auto w-auto md:mx-0 mx-8 md:py-9 py-0'>
    <span className='flex justify-center lg:block md:block'>
    <FontAwesomeIcon icon={faShield} className='text-[33px] text-orange-400 mx-[122px] md:mx-0' />
    </span>
    <span>
    <h3 className='font-bold font-sans text-[25px] text-white my-2 whitespace-nowrap md:text-start lg:text-start text-center  md:mx-0'>Win Sales By Our Affiliate</h3>
    </span>
    <span>
 <h3 className='my-2 text-[18px] text-gray-400 lg:w-60 md:text-start text-center md:w-[350px] '>
 Now Our Affiliates Will Choose Your Product And Can Sell Those ,You Can Earn!


 </h3>
    </span>
  </div>
  </div>
  </div>
   </>
  )
}

export default Becomemerchant