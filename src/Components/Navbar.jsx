import React, { useState } from 'react';
import logo from '../assets/Images/Logo.webp';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="lg:w-full lg:h-32 bg-green-4 lg:px-14 lg:py-5">
      <div className="lg:h-full lg:w-full bg-green-3 lg:rounded-2xl">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-20 pt-3">
          <div className='lg:flex lg:flex-row lg:gap-7 text-white tracking-wide'>
            <a
              href="#"
              className={`lg:hover:text-gray-400 ${activeLink === 'home' ? 'opacity-50' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
            <a
              href="#about"
              className={`lg:hover:text-gray-400 ${activeLink === 'about' ? 'opacity-50' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
            <a
              href="#gallery"
              className={`lg:hover:text-gray-400 ${activeLink === 'gallery' ? 'opacity-50' : ''}`}
              onClick={() => handleLinkClick('gallery')}
            >
              Gallery
            </a>
            <a
              href="#blogs"
              className={`lg:hover:text-gray-400 ${activeLink === 'blogs' ? 'opacity-50' : ''}`}
              onClick={() => handleLinkClick('blogs')}
            >
              Blogs
            </a>
          </div>
          <img src={logo} alt="Logo" sizes={10} className='lg:h-16 lg:pr-32' />
          <button className="bg-[#fee48b] lg:w-32 lg:h-10 lg:rounded-3xl lg:hover:bg-green-3 lg:hover:border-2 border-black duration-300">
            <a
              href="#contact"
              className={`cursor-pointer ${activeLink === 'contact' ? 'opacity-50' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact us
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;