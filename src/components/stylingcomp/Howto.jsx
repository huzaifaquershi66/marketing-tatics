import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faBoxOpen, faDollarSign, faChalkboardTeacher, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center bg-gray-900 text-white py-12'>
      <h1 className='text-4xl font-bold mb-8'>How It Works</h1>

      {/* Flex Container for two divs in a row */}
      <div className='flex flex-wrap justify-center space-x-4 mb-6'>
        {/* Step 1 - Signup */}
        <div className='flex flex-col items-center bg-gray-800 p-6 rounded-lg max-w-xs mb-6'>
          <FontAwesomeIcon icon={faUserPlus} className='text-orange-400 text-4xl mb-4' />
          <h2 className='text-2xl font-semibold mb-2'>Signup</h2>
          <p className='text-center'>
            Sign Up Your Free Account With Marketing Tectic!
          </p>
        </div>

        {/* Step 2 - Choose A Product */}
        <div className='flex flex-col items-center bg-gray-800 p-6 rounded-lg max-w-xs mb-6'>
          <FontAwesomeIcon icon={faBoxOpen} className='text-orange-400 text-4xl mb-4' />
          <h2 className='text-2xl font-semibold mb-2'>Choose A Product</h2>
          <p className='text-center'>
            Choose a product or plan of your choice. You can choose any product or plans.
          </p>
        </div>
      </div>

      {/* Flex Container for another two divs in a row */}
      <div className='flex flex-wrap justify-center space-x-4 mb-6'>
        {/* Step 3 - Choose Subscription Model */}
        <div className='flex flex-col items-center bg-gray-800 p-6 rounded-lg max-w-xs mb-6'>
          <FontAwesomeIcon icon={faDollarSign} className='text-orange-400 text-4xl mb-4' />
          <h2 className='text-2xl font-semibold mb-2'>Choose Subscription Model</h2>
          <p className='text-center'>
            One Time or Easy Monthly Installments.
          </p>
        </div>

        {/* Step 4 - Get And Apply Free Affiliate Trainings */}
        <div className='flex flex-col items-center bg-gray-800 p-6 rounded-lg max-w-xs mb-6'>
          <FontAwesomeIcon icon={faChalkboardTeacher} className='text-orange-400 text-4xl mb-4' />
          <h2 className='text-2xl font-semibold mb-2'>Get And Apply Free Affiliate Trainings</h2>
          <p className='text-center'>
            After getting your first product, you can access our free trainings.
          </p>
        </div>
      </div>

      {/* Step 5 - Close A Sale & Earn (This will be a single div in a new row) */}
      <div className='flex flex-col items-center bg-gray-800 p-6 rounded-lg max-w-xs mb-6'>
        <FontAwesomeIcon icon={faCheckCircle} className='text-orange-400 text-4xl mb-4' />
        <h2 className='text-2xl font-semibold mb-2'>Close A Sale & Earn</h2>
        <p className='text-center'>
          After completing our trainings, you can simply implement our proven selling strategies and generate commissions accordingly!
        </p>
      </div>

      {/* Start Process Button */}
      <button className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg mt-6'>
        Start Process
      </button>
    </div>
  );
};

export default HowItWorks;
