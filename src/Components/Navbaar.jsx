import React, { useState } from 'react';
import Logo from '../assets/Images/logo.png';
import { CgSearch } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='h-20 w-full flex flex-row justify-between items-center sticky z-10 top-0 bg-white shadow-sm px-4 sm:px-6'>
      {/* Logo */}
      <div className='flex items-center justify-center h-10 w-40'>
        <img 
          src={Logo}
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex h-20 w-[500px]'>
        <ul className='flex flex-row items-center justify-around font-bold text-lg w-full cursor-pointer'>
          <li className='hover:text-orange-500 transition-colors'>Home</li>
          <li className='hover:text-orange-500 transition-colors'>About</li>
          <li className='hover:text-orange-500 transition-colors'>Property</li>
          <li className='hover:text-orange-500 transition-colors'>News</li>
          <li className='hover:text-orange-500 transition-colors'>Pages</li>
          <li className='hover:text-orange-500 transition-colors'>Contact</li>
        </ul>
      </div>

      {/* Icons and Mobile Menu Button */}
      <div className='flex flex-row items-center justify-center gap-4'>
        <button className='h-10 w-10 bg-white hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center text-xl rounded'>
          <CgSearch />
        </button>
        <button className='h-10 w-10 bg-white hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center text-xl rounded'>
          <RiAdminFill />
        </button>
        <button className='h-10 w-10 bg-white hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center text-xl rounded'>
          <FaShoppingCart />
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className='md:hidden h-10 w-10 bg-white hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center text-2xl rounded'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t z-20'>
          <ul className='flex flex-col items-center justify-center py-6 gap-4 font-bold text-lg cursor-pointer'>
            <li className='hover:text-orange-500 transition-colors py-2' onClick={() => setIsMenuOpen(false)}>Home</li>
            <li className='hover:text-orange-500 transition-colors py-2' onClick={() => setIsMenuOpen(false)}>About</li>
            <li className='hover:text-orange-500 transition-colors py-2' onClick={() => setIsMenuOpen(false)}>Property</li>
            <li className='hover:text-orange-500 transition-colors py-2' onClick={() => setIsMenuOpen(false)}>News</li>
            <li className='hover:text-orange-500 transition-colors py-2' onClick={() => setIsMenuOpen(false)}>Pages</li>
            <li className='hover:text-orange-500 transition-colors py-2' onClick={() => setIsMenuOpen(false)}>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;