import React, { useState } from 'react';
import firstslid from '../assets/Images/slid1.png';
import secondtslid from '../assets/Images/slid2.png';
import terdslid from '../assets/Images/slid3.png';
import fourslid from '../assets/Images/slid4.png';
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft as Left } from "react-icons/md";
import { MdChevronRight as Right } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';

export default function Leatest() {
 const  sliderRef=useRef(null)
  const data = [
    { 
      image: firstslid,
      title: '10 Brilliant Ways To Decorate Your Home ',
      date: 'June 20, 2024',
      more: 'READ MORE'
    },
    {
      image: secondtslid,
      title: '7 home trends that will shape your house in 2021',
      date: 'June 24, 2023',
      more: 'READ MORE'
    },
    {
      image: terdslid,
      title: 'Renovating a Living Room? Experts Share Their Secrets',
      date: 'June 20, 2024',
      more: 'READ MORE'
    },
    {
      image: fourslid,
      title: '7 home trends that will shape your house in 2021',
      date: 'June 20, 2024',
      more: 'READ MORE'
    }
  ];

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
   
  };

  return (
    <div>
      {/* Card top */}
      <div className='w-full h-40 flex justify-center items-center flex-col mt-8'>
        <p className='bg-red-100 rounded-3xl p-1 px-4 text-[16px] font-bold text-red-600 '>News & Blogs</p>
        <p className='text-[40px] font-bold gap-4'>Latest News Feeds</p>
      </div>

      {/* Slider Component */}
      <div className='relative w-screen  h-100  p-4 sm:p-40'>
     <button onClick={()=>sliderRef.current.slickPrev()}> <Left className="text-[50px] border-2 border-red-500 text-black absolute left-5 z-10 top-1/3 hover:bg-orange-600" /></button> 
     <button onClick={()=>sliderRef.current.slickNext()}> <Right className="text-[50px]  border-2 border-red-500  text-black absolute right-5 z-10 top-1/3 hover:bg-orange-600" /></button> 
        <Slider {...settings} ref={sliderRef} className=''>
          {data.map((d) => (
            <div className='h-[460px]  w-80 sm:w-screen md:flex justify-center items-center'>
              <div className='h-25 sm:h-52  w-40 sm:w-80 overflow-hidden  '>
                <img src={d.image} alt="slider" className="drop-shadow-lg bg-white cover-fit w-40 sm:w-80 overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-110" />
              </div>
              {/* container text  */}
             <div className='h-[220px] w-40 sm:w-80  drop-shadow-lg bg-white  '>
               {/* admin and icons  */}
               <div className='font-serif text-red-600 flex flex-row items-center justify-center p-4 w-80 '>
                <i className="fa-solid fa-user-tie"></i>
                <p className='ml-2 text-[14px]  font-sans font-bold text-gray-600 hover:text-red-600'>buy:Admin</p>
                <p className='font-bold text-[12px] text-gray-600 hover:text-red-600 pl-8 font-serif'>REAL ESTATE</p>
              </div>
              {/* title  */}
              <p className=' text-[18px] flex justify-center items-center p-4 w-80  hover:text-red-600 __Nunito_Sans_601d73 ltn__blog-title font-bold '>{d.title}</p>
              <div className='h-12 w-64 border-t-2 border-gray-200  p-4 pr-8 flex items-center flex-row m-4'>
                <p className='w-80 h-12 flex items-center gap-1 font-[9px] flex-row'><CiCalendarDate />{d.date}</p>
                <p className='w-full font-bold text-[12px] text-red-600  font-serif'>{d.more}</p>
              </div>
             </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
