import React from 'react';

const AboutUs = () => {
  return (
    <div className='h-full w-full relative overflow-x-hidden'>
    <img className=' w-full h-full object-cover relative' src='https://cdn.pixabay.com/photo/2024/08/08/11/48/graphic-8954280_1280.jpg' alt="business" />
    
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Welcome to marketing Matic!</h2>
        <p className="mb-4">
          At marketing Matic, we specialize in providing a wide range of marketing products tailored to meet your business needs. 
          Our mission is to empower businesses to grow and thrive by offering innovative marketing solutions that drive results.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          We strive to deliver high-quality marketing products that not only enhance your brand's visibility but also engage and convert your target audience.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Customer-Centric: We prioritize our customers' needs and work to exceed their expectations.</li>
          <li>Innovation: We embrace creativity and innovation in everything we do.</li>
          <li>Integrity: We believe in transparency and honesty in our business practices.</li>
          <li>Collaboration: We value teamwork and collaboration, both internally and with our clients.</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
        <p className="mb-4">
          Discover the difference with Marmarketing Matic. Explore our diverse range of marketing products designed to help your business succeed.
          <br />
          <a href="/product" className="text-blue-500 underline">Check out our products!</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
