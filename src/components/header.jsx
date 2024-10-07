import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMobileScreenButton, faAt,faXmark } from '@fortawesome/free-solid-svg-icons';
import mate from "../assets/logo.svg";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link ,useLocation,useNavigate} from 'react-router-dom';

const Header = () => {
  const [toggleform, settoggleform] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Scroll state
  const location = useLocation();
 
  const handletoggleform = ()=>{
    console.log("Toggling form", toggleform);
    settoggleform(!toggleform)
  } // toggleform ko define karna zaroori hai
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change this value to adjust when the background changes
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isActive = (path) => location.pathname === path;
  // Initialize useNavigate

    
    // Define the routes for each menu item
    const handleClick = (index) => {
      setSelectedIndex(index);
      
      // Define the routes for each menu item
      const routes = [
        '/',
        '/work',
        '/merchant',
        '/product',
        '/aboutus'
      ];
  
      // Navigate to the corresponding route
      navigate(routes[index]);
      settoggleform(false)
    };
    useEffect(() => {
      if (toggleform) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  
      // Cleanup when the component is unmounted or when toggleform changes
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [toggleform]);
  return (
    <>
      <div className={`h-20 w-full flex items-center px-4 lg:px-8 lg:space-x-2 space-x-4 z-50 border-b-2 fixed top-0 overflow-hidden transition-all duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
        <span>
          <FontAwesomeIcon icon={faBars} className='text-[24px] lg:hidden md:block cursor-pointer' onClick={handletoggleform} />
        </span>
        <div className="relative">
        <img src={mate} alt='mate' className='h-16 w-44 translate-y-[-2px]' />
         
        </div>
        <div className='space-x-8 px-8 flex-grow lg:flex items-center font-semibold hidden font-sans text-[16px] lg:text-[18px] whitespace-nowrap'>
          <Link to="/">
            <h3 className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/' ? 'text-red-700' : ''}`}>Home</h3>
          </Link>
          <Link to="/work">
            <h3 className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/work' ? 'text-red-700' : ''}`}>Work As Affiliate</h3>
          </Link>
          <Link to="/merchant">
            <h3 className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/merchant' ? 'text-red-700' : ''}`}>Become Merchant</h3>
          </Link>
    <Link to="/product">
          <h3 className={`hover:text-gray-400 cursor-pointer ${location.pathname === '/product' ? 'text-red-700' : ''}`}>Our Products</h3>
          </Link>
          <h3 className='hover:text-gray-400 cursor-pointer'>About Us</h3>
        </div>
    
        <div className='flex flex-grow justify-end'>
          <button className='h-10 md:min-w-[80px] w-[60px] rounded color3 text-white font-sans text-[16px] md:text-[17px] font-semibold'>
            Sign In
          </button>
        </div>

      </div>
   
      <div
    className={`fixed top-0 left-0 py-2 px-4 space-x-44 bg-white  z-[9999] overflow-x-hidden border-transparent backing   ${toggleform ? 'show mx-0' : ''}`}
    // style={{ width: toggleform ? '89%' : 'auto', overflowY: 'auto', height: '100vh' }}
    style={{ maxWidth: '89%', overflowY: 'hidden',minWidth:"20%" }}
  >
     <FontAwesomeIcon
      icon={faXmark}
      className="text-[31px] text-gray-600 cursor-pointer"
      onClick={handletoggleform}
    />
    
  </div> 
 
      <div
        className={`h-[740px] visible lg:invisible bg-white fixed  -mt-20 z-50 backing overflow-x-hidden  ${
          toggleform ? 'show mx-0' : ''
        }`}
        style={{ overflowY: 'auto', maxWidth: '89%' }}
      >
        <div className='my-40 mx-4 h-auto w-full saning font-sans text-gray-700'>
          <div className='flex flex-col space-y-4 cursor-pointer font-semibold '>
            {[
          
              'Home',
              'Work As Affiliate',
              'Become Merchant',
              'Our Products',
              'About Us',
              
            ].map((item, index) => (
              <div key={index} onClick={()=>handleClick(index)}>
                <h1 
                className={`${
                  selectedIndex === index ? 'text-red-700' : ''
                }`}>{item}</h1>
                <div className='h-[1px] w-[340px] bg-gray-400 mx-0 translate-x-[-4px] my-4'>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        
    
      </div>
    </>
  );
};

export default Header;