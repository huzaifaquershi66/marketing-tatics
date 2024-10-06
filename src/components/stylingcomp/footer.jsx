import React from 'react';

const Footer = () => {
  return (
    <footer className="color10 text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-3">
        {/* Marketing Tectic Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Marketing Tectic</h2>
          <p>Phone: +92 341 2937637</p>
          <p>Email: marketingtectic@gmail.com</p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Useful Links</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Become A Merchant</a></li>
            <li><a href="#" className="hover:text-gray-400">Work as Affiliate</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Products</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-400">SEO Tools</a></li>
            <li><a href="#" className="hover:text-gray-400">Video Courses</a></li>
            <li><a href="#" className="hover:text-gray-400">AI Tools</a></li>
            <li><a href="#" className="hover:text-gray-400">Video Meetings</a></li>
            <li><a href="#" className="hover:text-gray-400">Design Editor</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <form className="flex justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-2 w-64 text-black rounded-l"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-400">
        <p>&copy; 2024 Marketing Tectic. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
