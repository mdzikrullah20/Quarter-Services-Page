import React from "react";
import firstImage from "../assets/Images/11.jpg";
import SecoundImg from "../assets/Images/12.jpg";
import TherdImg from "../assets/Images/13.jpg";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtubLight } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { FaVectorSquare } from "react-icons/fa";
import RightImg from "../assets/Images/left.png";

export default function AboutUs() {
  return (
    <>
      <div id="about" className="h-full w-full sm:p-18 flex flex-col sm:flex-row">
        <div className=" max-h-auto flex justify-center flex-col w-screen pl-2 sm:pl-20">
          {/* left text and image container  */}
          <h1 className="font-bold mt-4 text-neutral-800 text-[36px] md:text-[36px] lg:text-[48px]">
            Let’s Make Your Real Estate Goals a Reality
          </h1>

          <p className="font-sans font-1 mt-4 text-gray-600">
           With years of proven excellence in real estate sales, I help clients buy, sell, and invest with confidence. <br/>Every transaction is guided by market expertise, strategic planning, and a commitment to delivering outstanding results
          </p>

          <div className="w-full p-4">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <img
                  src="/arrow-circle.svg"
                  alt="Arrow icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <p className="text-gray-600 text-sm lg:text-base">
                  Trusted Real Estate Sales Expertise
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img
                  src="/arrow-circle.svg"
                  alt="Arrow icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <p className="text-gray-600 text-sm lg:text-base">
                  Personalized Buying & Selling Strategies
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img
                  src="/arrow-circle.svg"
                  alt="Arrow icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <p className="text-gray-600 text-sm lg:text-base">
                  Proven Record of High-Value Closings
                </p>
              </li>

              <li className="flex items-start gap-3">
                <img
                  src="/arrow-circle.svg"
                  alt="Arrow icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <p className="text-gray-600 text-sm lg:text-base">
                  Client-Focused Negotiation Excellence
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-row">
            {/* badrooms container  */}
            <div className="w-20 h-10 flex-col  flex items-center">
              <div className="font-serif text-sm  text-gray-600">
                <div className="flex items-center gap-2">
                  <p>3</p>
                  <p className="mt-1">
                    <LuBedDouble />
                  </p>
                </div>
                <p>Bedrooms</p>
              </div>
            </div>
            <div className="w-20 h-10 border-l-2 border-gray-400 flex flex-col items-center">
              <div className="font-serif text-sm  text-gray-600 ">
                <div className="flex items-center gap-2">
                  <p>2</p>
                  <p className="mt-1">
                    <PiBathtubLight />
                  </p>
                </div>
                <p>Bathrooms</p>
              </div>
            </div>
            <div className="w-20 h-10 border-l-2 border-gray-400 flex flex-col items-center">
              <div className="font-serif text-sm  text-gray-600 ">
                <div className="flex items-center gap-2">
                  <p>2</p>
                  <p className="mt-1">
                    <IoCarOutline />
                  </p>
                </div>
                <p> Car parking</p>
              </div>
            </div>
            <div className="w-20 h-10 border-l-2 border-gray-400 flex flex-col items-center">
              <div className="font-serif text-sm  text-gray-600 ">
                <div className="flex items-center gap-2">
                  <p>3450</p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    <FaVectorSquare />
                  </p>
                </div>
                <p>square Ft </p>
              </div>
            </div>
          </div>
          {/* badrooms image container  */}
          <div className="w-full h-32 mt-2 flex flex-row">
            <div className="w-40 h-36 p-1">
              <img src={firstImage} className="w-40 h-28 " />
            </div>
            <div className="w-40 h-40 p-1">
              <img src={SecoundImg} className="w-40 h-28 " />
            </div>
            <div className="w-40 h-40 p-1">
              <img src={TherdImg} className="w-40 h-28 " />
            </div>
          </div>
        </div>

        <div
          className="
    w-full 
    sm:w-1/2 
    flex 
    justify-center 
    items-center 
    sm:mt-24 
    px-4
    lg:mb-[60px]
  "
        >
          <img
            src={RightImg}
            alt="Right image"
            className="
      w-full 
      max-w-[420px] 
      sm:max-w-[480px] 
      h-auto 
      object-contain
    "
          />
        </div>
      </div>
    </>
  );
}
