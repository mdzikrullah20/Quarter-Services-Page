import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function NavTop() {
  return (
    <div className='w-full  h-20 sm:h-10  bg-sky-950 flex flex-col sm:flex-row justify-between'>
      <div className='h-[20xp]  w-96 flex flex-row justify-center sm:justify-center items-center sm:items-center'>
         <p className='text-orange-500 pt-1 text-[15px]'><MdEmail/></p>
         <p className='text-white hover:text-orange-500 font-sans pl-2 text-[13px]'>info@webmail.com</p>
         <p className='text-orange-500 pl-8 text-[14px]'><FaLocationDot/></p>
         <p className='text-white hover:text-orange-500 font-sans pl-2 text-[13px] sm:flex-row'>15/A, Nest Tower, NYC</p>
      </div>
      <div className='h-[20xp] w-80'>
          <div className='text-white flex flex-row justify-around items-center h-full ml-20 mb-4 w-52 sm:w-60  text-[16px]  sm:text-[18px]' >
          <FaFacebookF/>
          <FaTwitter/>
          <FaInstagram/>
          <FaLinkedin/>
          <button className='bg-orange-500  p-2  ml-4 font-sans text-[12px]  hover:bg-orange-700 '>Add Listing</button>
          </div >
          </div>
    </div>
  )
}

export default NavTop
