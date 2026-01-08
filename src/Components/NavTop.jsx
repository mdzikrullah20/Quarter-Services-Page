import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function NavTop() {
  return (
    <div className='w-full h-auto sm:h-10 bg-sky-950 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 sm:py-0'>
      {/* Left Section - Contact Info */}
      <div className='flex flex-row items-center gap-4 sm:gap-6 cursor-pointer'>
        <div className='flex items-center gap-2'>
          <p className='text-orange-500 text-base'><MdEmail /></p>
          <p className='text-white hover:text-orange-500 transition-colors font-sans text-xs sm:text-sm'>
            info@quarter.com
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-orange-500 text-sm'><FaLocationDot /></p>
          <p className='text-white hover:text-orange-500 transition-colors font-sans text-xs sm:text-sm'>
            15/A, Nest Tower, NYC
          </p>
        </div>
      </div>

      {/* <div className='flex flex-row items-center gap-4 mt-2 sm:mt-0'>
        <div className='text-white flex flex-row items-center gap-4 text-base sm:text-lg cursor-poin    ter'>
          <FaFacebookF className='hover:text-orange-500 transition-colors' />
          <FaTwitter className='hover:text-orange-500 transition-colors' />
          <FaInstagram className='hover:text-orange-500 transition-colors' />
          <FaLinkedin className='hover:text-orange-500 transition-colors' />
        </div>
        <button className='bg-orange-500 hover:bg-orange-700 transition-colors px-4 py-2 font-sans text-xs sm:text-sm text-white rounded-lg whitespace-nowrap'>
          Add Listing
        </button>
      </div> */}
    </div>
  );
}

export default NavTop;