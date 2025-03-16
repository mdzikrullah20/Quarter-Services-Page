import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Bgimage from '../assets/Images/14.jpg'
export default function Home() {
  return (
    <div className=' relative w-full h-80 flex justify-center items-start flex-col bg-white'>
      <img src={Bgimage} className='w-full h-full'/>   {/*background Image  */}
      <div>
        <h2 className='font-bold text-4xl mb-2 absolute top-20 left-20'>What We Do</h2>
      </div>
      <div className=' reletive flex-row flex  h-9 mt-2 gap-4 items-start m-2 font-serif text-gray-500' >
        <div className='text-orange-400 absolute top-40 left-20 '>
        <i class="fa-solid fa-house-chimney"></i>
        </div>
      <p className='hover:text-orange-400 absolute top-40 left-28 flex flex-grow items-center'>Home <MdKeyboardArrowRight/></p>
      <p className='text-black font-serif absolute top-40 left-44'>Service</p>
      </div>
    </div>
  )
}
