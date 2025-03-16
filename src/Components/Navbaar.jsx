import React from 'react'
import Logo from '../assets/Images/logo.png'
import { CgSearch } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
function Navbaar() {
  return (
    <div className='h-40 sm:h-20 w-[400px] sm:w-full flex flex-col sm:flex-row justify-around items-center sticky z-10 top-0 bg-white '>
      <div className='ml-6  flex items-center justify-center h-10 w-40'>
      <img src={Logo}/>
      </div>
      <div className='h-20  w-screen sm:w-[500px]'>
        <ul className='flex flex-row style-none mt-6 items-center  justify-around font-bold text-sm sm:text-lg pr-10 sm:pr-0'>
            <li>Home</li>
            <li>About </li>
            <li>Property  </li>
            <li>News </li>
            <li>Pages </li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='h-20 w-60 flex flex-row items-center justify-center gap-4 mt-2 sm:mt-0'>
            <p className='h-8 sm:h-12 w-8 sm:w-12 drop-shadow-lg bg-white  hover:bg-orange-500  flex items-center justify-center text-[20px] font-bold '><CgSearch/></p>
           <p className='h-8 sm:h-12 w-8 sm:w-12 drop-shadow-lg bg-white hover:bg-orange-500 flex items-center justify-center text-[20px] font-bold'><RiAdminFill/></p>
           <p className='h-8 sm:h-12 w-8 sm:w-12 drop-shadow-lg bg-white hover:bg-orange-500 flex items-center justify-center text-[20px] font-bold'><FaShoppingCart/></p>
      </div>
    </div>
  )
}

export default Navbaar
