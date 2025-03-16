import React from 'react'
import BuyHome from '../assets/Images/Home.png'
import RentHome from '../assets/Images/RentHome.png'
import SellHome from '../assets/Images/sellHome.png'  
export default function CoreServices() {
  return (
    <div className='h-auto w-full   text-[25px] bg-slate-100 pb-5 z-10 flex justify-center items-center flex-col'>
        {/* container  */}
        <div className='w-full h-40 flex justify-center items-center flex-col mt-8 '>
            <p className='bg-red-100 rounded-3xl p-1 px-4 text-[16px] font-bold text-red-600 '>Our Services</p>
            <p className='text-[40px] font-bold gap-4'>Our Core Services</p>
        </div>
        
            {/* card container  */}
                    <div className='h-auto w-[100%] flex flex-wrap  p-10 sm:p-20  gap-20 justify-center items-center  '>
            {/* cards buy home*/}
         <div className=' h-68 w-[300px] sm:w-[300px] drop-shadow-lg bg-white flex items-center justify-center flex-col p-12 gap-2  hover:shadow-lg'>
            <img src={BuyHome} className='h-14 w-14'/>
            <p className='font-bold text-[25px] transition-all ease-in duration-300 hover:text-orange-500'>Buy a home</p>
            <p className='font-serif text-[12px] text-gray-600'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
         </div>
                  {/* cards rent home*/}
         <div className='h-68 w-[300px] drop-shadow-lg bg-white flex items-center justify-center flex-col p-12 gap-2 hover:shadow-lg'>
            <img src={RentHome} className='h-14 w-14'/>
            <p className='font-bold text-[25px] transition-all ease-in duration-300 hover:text-orange-500'>Rent a home</p>
            <p className='font-serif text-[12px] '>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
         </div>
                  {/* cards Sell a home*/}
         <div className='h-68 w-[300px] drop-shadow-lg bg-white flex items-center justify-center flex-col p-12 gap-2 hover:shadow-lg'>
            <img src={SellHome} className='h-14 w-14'/>
            <p className='font-bold text-[25px] transition-all ease-in duration-300 hover:text-orange-500'>Sell a home</p>
            <p className='font-serif text-[12px] '>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
         </div>
                {/* cards Sell a home*/}
                <div className='h-68 w-[300px] drop-shadow-lg bg-white flex items-center justify-center flex-col p-12 gap-2 hover:shadow-lg'>
            <img src={SellHome} className='h-14 w-14'/>
            <p className='font-bold text-[25px] transition-all ease-in duration-300 hover:text-orange-500'>Sell a home</p>
            <p className='font-serif text-[12px] '>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
         </div>
                {/* cards Sell a home*/}
                <div className='h-68 w-[300px] drop-shadow-lg bg-white flex items-center justify-center flex-col p-12 gap-2 hover:shadow-lg'>
            <img src={SellHome} className='h-14 w-14'/>
            <p className='font-bold text-[25px] transition-all ease-in duration-300 hover:text-orange-500'>Sell a home</p>
            <p className='font-serif text-[12px] '>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
         </div>
                {/* cards Sell a home*/}
                <div className='h-68 w-[300px] drop-shadow-lg bg-white flex items-center justify-center flex-col p-12 gap-2 hover:shadow-lg'>
            <img src={SellHome} className='h-14 w-14 ' />
            <p className='font-bold text-[25px] transition-all ease-in duration-300 hover:text-orange-500'>Sell a home</p>
            <p className='font-serif text-[12px] '>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
         </div>
        </div>
    </div>
  )
}
