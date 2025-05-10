import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#03A791] shadow-md px-4 py-3 md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-white">DiscoverMycity</span>

        {/* Hamburger Icon */}
        <span
          className="text-3xl cursor-pointer md:hidden block"
          onClick={toggleMenu}
        >
          ☰
        </span>
      </div>

      {/* Menu */}
      <ul
        className={`md:flex md:items-center md:gap-6 md:static  font-[poppins] absolute bg-[#03A791] left-0 w-full md:w-auto md:py-0 py-4 md:pl-0 pl-4 transition-all duration-300 ease-in ${
          isOpen ? 'top-[60px]' : 'top-[-400px]'
        }`}
      >
        <li>
          <Link to="/" className="text-white hover:text-blue-600 duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-blue-600 duration-300">
            Explore
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:text-blue-600 duration-300">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-blue-600 duration-300">
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="bg-[#81E7AF] text-white px-4 py-2 rounded-md hover:bg-[#03A791] duration-300 mt-2 md:mt-0 inline-block"
          >
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
