import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDollarSign, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DigitalLibrary = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen px-4 text-center text-white bg-black">
      <h1 className="md:text-5xl text-3xl  font-bold mb-4">
        Your own Digital Library without Limits
      </h1>
      <p className="text-xl mb-2">
        1000+ Money Making Gadgets
      </p>
      <p className="text-lg mb-2 text-orange-300">
        To sell or use in any way
      </p>
      <p className="text-lg mb-2 ">
        Imagine you have unlimited collection of done-for-you ebooks, video courses, templates, and more with Master Reselling Rights.
      </p>
      <p className="text-lg font-semibold mb-2 flex items-center justify-center">
        <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> 
        Premium Resources
      </p>
      <p className="text-lg font-semibold mb-2 flex items-center justify-center">
        <FontAwesomeIcon icon={faDollarSign} className="mr-2 text-green-500" /> 
        Keep 100% profit
      </p>
      <p className="text-lg font-semibold mb-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faSyncAlt} className="mr-2 text-green-500" /> 
        Lifetime Updates
      </p>
      <Link to="/offer">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
        Get Instant Access Now
      </button>
      </Link>
    </div>
  );
};

export default DigitalLibrary;
