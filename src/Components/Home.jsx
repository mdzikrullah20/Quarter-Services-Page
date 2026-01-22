import React from 'react'
import { LuBedDouble } from "react-icons/lu";
import { PiBathtubLight } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { FaVectorSquare } from "react-icons/fa";
export default function Home() {
  return (
    <>
    <div 
      id='home' 
      className='relative w-full h-80 flex justify-center items-start flex-col bg-white bg-cover bg-center bg-no-repeat '
      style={{
        backgroundImage: "url('https://haviosoft.com/bizrent/assets/images/fun-fact.png')"
      }}
    >
    </div>
     <div id="about" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Heading */}
            <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Let's Make Your Real<br/> Estate Goals a Reality
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              With years of proven excellence in real estate sales, I help clients buy, 
              <br className="hidden sm:block" />
              sell, and invest with confidence. Every transaction is guided by market expertise, strategic planning, and a commitment to delivering outstanding results.
            </p>

            {/* Features List */}
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <img
                  src="/arrow-circle.svg"
                  alt="Arrow icon"
                  className="w-6 h-6 flex-shrink-0 mt-0.5"
                />
                <p className="text-gray-600 text-sm sm:text-base">
                  Trusted Real Estate Sales Expertise
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img
                  src="/arrow-circle.svg"
                  alt="Arrow icon"
                  className="w-6 h-6 flex-shrink-0 mt-0.5"
                />
                <p className="text-gray-600 text-sm sm:text-base">
                  Personalized Buying & Selling Strategies
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img
                  src="/arrow-circle.svg"
                  alt="Arrow icon"
                  className="w-6 h-6 flex-shrink-0 mt-0.5"
                />
                <p className="text-gray-600 text-sm sm:text-base">
                  Proven Record of High-Value Closings
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img
                  src="/arrow-circle.svg"
                  alt="Arrow icon"
                  className="w-6 h-6 flex-shrink-0 mt-0.5"
                />
                <p className="text-gray-600 text-sm sm:text-base">
                  Client-Focused Negotiation Excellence
                </p>
              </li>
            </ul>

            {/* Property Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 pb-6 border-b border-gray-200">
              <div className="flex flex-col items-center min-w-[80px]">
                <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg mb-1">
                  <span>3</span>
                  <LuBedDouble className="text-xl text-orange-500" />
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">Bedrooms</p>
              </div>

              <div className="flex flex-col items-center min-w-[80px] pl-6 sm:pl-8 border-l-2 border-gray-300">
                <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg mb-1">
                  <span>2</span>
                  <PiBathtubLight className="text-xl text-orange-500" />
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">Bathrooms</p>
              </div>

              <div className="flex flex-col items-center min-w-[80px] pl-6 sm:pl-8 border-l-2 border-gray-300">
                <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg mb-1">
                  <span>2</span>
                  <IoCarOutline className="text-xl text-orange-500" />
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">Car Parking</p>
              </div>

              <div className="flex flex-col items-center min-w-[80px] pl-6 sm:pl-8 border-l-2 border-gray-300">
                <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg mb-1">
                  <span>3450</span>
                  <FaVectorSquare className="text-sm text-orange-500" />
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">Square Ft</p>
              </div>
            </div>

            {/* Small Images Gallery */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" 
                  alt="Property view 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop" 
                  alt="Property view 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop" 
                  alt="Property view 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop"
                alt="Modern property"
                className="w-full h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
