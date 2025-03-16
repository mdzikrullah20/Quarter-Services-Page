import React from 'react'
import firstImage from '../assets/Images/11.jpg'
import SecoundImg from '../assets/Images/12.jpg'
import TherdImg from '../assets/Images/13.jpg'
import { LuBedDouble } from "react-icons/lu";
import { PiBathtubLight } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { FaVectorSquare } from "react-icons/fa";
import RightImg from '../assets/Images/left.png'

export default function AboutUs() {
  return (
    <>  
    <div className='h-full w-full sm:p-18 flex flex-col sm:flex-row '>

        <div className=' h-full  w-screen pl-2 sm:pl-20 pt-20'>
          {/* left text and image container  */}
        <p className=' text-red-500 font-bold h-6 w-24 flex items-center justify-center rounded-2xl bg-orange-100'>About Us</p>
        <h1 className='font-bold mt-4 from-neutral-800 text-4xl'>Today Sells Properties</h1>
        <p className='font-sans font-1 mt-4 text-gray-600'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>

            <div className='flex flex-row w-full h-30 '>
                <ul className=' p-2 mt-4'>
                    <li className='rotate-90 text-red-600 p-4'>l</li>
                    <li className='rotate-90 text-red-600 p-2'>l</li>
                    <li className='rotate-90 text-red-600 p-2'>l</li>
                    <li className='rotate-90 text-red-600 p-2'>l</li>
                </ul>
               <div className=' h-20 pt-2 mt-6'>
               <p className='p-2 text-gray-600'>Live Music Cocerts at Luviana</p>
                <p  className='p-2 text-gray-600'>Our SecretIsland Boat Tour is Just for You</p>
                <p  className='p-2 text-gray-600' >Live Music Cocerts at Luviana</p>
                <p  className='p-2 text-gray-600'>Live Music Cocerts at Luviana</p>
               </div>
            
            </div>
            
            <div className='flex flex-row'> 
              {/* badrooms container  */}
            <div className='w-20 h-10 flex-col  flex items-center'>
               <div className='font-serif text-sm  text-gray-600'>
               <div className='flex items-center gap-2'>
               <p>3</p>
               <p className='mt-1'><LuBedDouble /></p>
               </div>
                <p>Bedrooms</p>
               </div>
             </div>
             <div className='w-20 h-10 border-l-2 border-gray-400 flex flex-col items-center'>
             <div className='font-serif text-sm  text-gray-600 '>
              <div className='flex items-center gap-2'>
              <p>2</p>
              <p className='mt-1'><PiBathtubLight/></p>
              </div>
                <p>Bathrooms</p>
               </div>
             </div>
             <div className='w-20 h-10 border-l-2 border-gray-400 flex flex-col items-center'>
             <div className='font-serif text-sm  text-gray-600 '>
              <div className='flex items-center gap-2'>
              <p>2</p>
              <p className='mt-1'><IoCarOutline/></p>
              </div>
                <p> Car parking</p>
               </div>
             </div>
             <div className='w-20 h-10 border-l-2 border-gray-400 flex flex-col items-center'><div className='font-serif text-sm  text-gray-600 '>
               <div className='flex items-center gap-2'> 
               <p>3450</p>
               <p className='mt-1 text-[10px] text-gray-400'><FaVectorSquare/></p>
               </div>
               <p>square Ft </p>
               </div>
             </div>
            </div> 
            {/* badrooms image container  */}
            <div className='w-full h-32 mt-2 flex flex-row'>
              <div className='w-40 h-36 p-1'>
                <img src={firstImage} className='w-40 h-28 ' />
              </div>
              <div className='w-40 h-40 p-1'>
                <img src={SecoundImg} className='w-40 h-28 ' />
              </div>
              <div className='w-40 h-40 p-1'>
                <img src={TherdImg} className='w-40 h-28 ' />
              </div>
             </div>
        </div>

 
        <div className=' h-[400px] sm:h-[500px] w-[350px] sm:w-screen flex flex-row  pl-4 sm:pl-10 mt-24 :mt-14 ml-0 sm:ml-20'>
         {/* right image container  */}
           <img src={RightImg}/>
        </div>
        
    </div>
    </>
  )
}
