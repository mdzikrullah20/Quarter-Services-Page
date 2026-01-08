import React, { useRef } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft, MdChevronRight } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

export default function Latest() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      title: "10 Brilliant Ways To Decorate Your Home",
      date: "June 20, 2024",
      category: "REAL ESTATE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      title: "7 home trends that will shape your house in 2021",
      date: "June 24, 2023",
      category: "REAL ESTATE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      title: "Renovating a Living Room? Experts Share Their Secrets",
      date: "June 20, 2024",
      category: "REAL ESTATE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      title: "7 home trends that will shape your house in 2021",
      date: "June 20, 2024",
      category: "REAL ESTATE",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(data[(currentIndex + i) % data.length]);
    }
    return visible;
  };

  return (
    <div className="w-full bg-white py-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Latest News Feeds
        </h2>

        {/* The animated accent line */}
        <div className="h-[2px] mt-4 animate-grow-line origin-left"></div>
      </div>
      {/* Slider Section */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full p-2 shadow-lg"
          aria-label="Previous slide"
        >
          <MdOutlineKeyboardArrowLeft className="text-3xl sm:text-4xl" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full p-2 shadow-lg"
          aria-label="Next slide"
        >
          <MdChevronRight className="text-3xl sm:text-4xl" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          {/* Mobile View - Single Card */}
          <div className="block lg:hidden">
            <div className="flex justify-center">
              <NewsCard data={data[currentIndex]} />
            </div>
          </div>

          {/* Desktop View - Three Cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {getVisibleCards().map((item, index) => (
              <NewsCard key={index} data={item} />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-orange-500" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsCard({ data }) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2 hover:text-red-600 transition-colors cursor-pointer">
            <FaUserTie className="text-red-500" />
            <span className="font-semibold">Admin</span>
          </div>
          <span className="font-semibold hover:text-red-600 transition-colors cursor-pointer">
            {data.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold mb-4 hover:text-red-600 transition-colors cursor-pointer line-clamp-2">
          {data.title}
        </h3>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CiCalendarDate className="text-lg" />
            <span>{data.date}</span>
          </div>
          <button className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
