import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io';
import { BiMessageRoundedDots } from 'react-icons/bi';

export default function Footer() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [formData, setFormData] = useState({
  
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'm interested in getting a quote.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Property Type: ${formData.propertyType}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/918084872966?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      message: ''
    });
    setIsQuoteFormOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href='https://wa.me/918084872966'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-20 sm:bottom-24 right-4 sm:right-8 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50'
        aria-label='Chat on WhatsApp'
      >
        <FaWhatsapp className='text-xl sm:text-2xl' />
      </a>

      {/* Get Best Quote Button */}
      <button
        onClick={() => setIsQuoteFormOpen(!isQuoteFormOpen)}
        className='fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-orange-500 hover:bg-orange-600 text-white px-3 py-3 sm:px-4 sm:py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50'
      >
        <BiMessageRoundedDots className='text-xl sm:text-2xl' />
      </button>

      {/* Quote Form Popup - Responsive */}
      {isQuoteFormOpen && (
        <div className='fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-8 sm:left-8 sm:w-full sm:max-w-md bg-white rounded-2xl shadow-2xl z-50 border-2 max-h-[calc(100vh-100px)] overflow-hidden flex flex-col'>
          {/* Form Header */}
          <div className='flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0'>
            <h3 className='text-lg sm:text-xl font-bold text-gray-800'>Get Best Quote</h3>
            <button
              onClick={() => setIsQuoteFormOpen(false)}
              className='text-gray-500 hover:text-gray-700 p-1'
            >
              <IoMdClose className='text-2xl' />
            </button>
          </div>

          {/* Form Body - Scrollable */}
          <div className='p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto flex-1'>
            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2'>
                Your Name *
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder='Enter your name'
                className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors'
              />
            </div>

            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2'>
                Email Address *
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder='Enter your email'
                className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors'
              />
            </div>

            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2'>
                Phone Number *
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder='Enter your phone'
                className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors'
              />
            </div>

            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2'>
                Property Type *
              </label>
              <select
                name='propertyType'
                value={formData.propertyType}
                onChange={handleInputChange}
                required
                className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors'
              >
                <option value=''>Select property type</option>
                <option value='Buy'>Buy a Home</option>
                <option value='Rent'>Rent a Home</option>
                <option value='Sell'>Sell a Home</option>
                <option value='Commercial'>Commercial Property</option>
              </select>
            </div>

            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                rows='3'
                placeholder='Tell us about your requirements'
                className='w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none'
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2'
            >
              Send Message
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isQuoteFormOpen && (
        <div
          onClick={() => setIsQuoteFormOpen(false)}
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
        ></div>
      )}

      <footer className='w-full bg-gray-900 text-gray-300'>
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* About Section */}
            <div>
              <h3 className='text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6'>About Us</h3>
              <p className='text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6'>
                We are a real estate company dedicated to helping you find your dream home. 
                With over 1 million+ properties, we make it easy to buy, sell, or rent.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <MdPhone className='text-orange-500 text-xl flex-shrink-0' />
                  <span className='text-sm'>+91 8084872966</span>
                </div>
                <div className='flex items-center gap-3'>
                  <MdEmail className='text-orange-500 text-xl flex-shrink-0' />
                  <span className='text-sm'>info@quarter.com</span>
                </div>
                <div className='flex items-start gap-3'>
                  <MdLocationOn className='text-orange-500 text-xl flex-shrink-0 mt-1' />
                  <span className='text-sm'>15/A, Nest Tower, NYC, USA</span>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div className=''>
              <h3 className='text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Quick Links</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    About Us
                  </a>
                </li>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    Properties
                  </a>
                </li>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    Services
                  </a>
                </li>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    News & Blog
                  </a>
                </li>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Services */}
            <div>
              <h3 className='text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Our Services</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    Buy a Home
                  </a>
                </li>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    Rent a Home
                  </a>
                </li>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    Sell a Home
                  </a>
                </li>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    Property Management
                  </a>
                </li>
                <li>
                  <a href='/' className='flex items-center gap-2 text-sm hover:text-orange-500 transition-colors group'>
                    <IoIosArrowForward className='text-orange-500 text-xs' />
                    Home Valuation
                  </a>
                </li>
              </ul>
            </div>
                  {/* Newsletter */}
            <div>
              <h3 className='text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Newsletter</h3>
              <p className='text-gray-400 text-sm mb-4'>
                Subscribe to our newsletter to get the latest updates and offers.
              </p>
              <div className='space-y-3'>
                <input
                  type='email'
                  placeholder='Your email address'  
                  className='w-full px-4 py-2.5 sm:py-3 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-white'
                />
                <button className='w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 sm:py-3 text-sm rounded-lg transition-colors'>
                  Subscribe Now
                </button>           
              </div>
              
              {/* Social Media */}
              <div className='mt-6'>
                <h4 className='text-white text-sm font-semibold mb-4'>Follow Us</h4>
                <div className='flex gap-3'>
                  <a href='/' className='bg-gray-800 hover:bg-orange-500 p-2.5 sm:p-3 rounded-lg transition-colors'>
                    <FaFacebookF className='text-base sm:text-lg' />
                  </a>
                  <a href='/' className='bg-gray-800 hover:bg-orange-500 p-2.5 sm:p-3 rounded-lg transition-colors'>
                    <FaTwitter className='text-base sm:text-lg' />
                  </a>
                  <a href='/' className='bg-gray-800 hover:bg-orange-500 p-2.5 sm:p-3 rounded-lg transition-colors'>
                    <FaInstagram className='text-base sm:text-lg' />
                  </a>
                  <a href='/' className='bg-gray-800 hover:bg-orange-500 p-2.5 sm:p-3 rounded-lg transition-colors'>
                    <FaLinkedin className='text-base sm:text-lg' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-8 py-6'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400'>
              <p className='text-xs sm:text-sm text-center md:text-left'>© 2024 Real Estate. All rights reserved.</p>
              <div className='flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm'>
                <a href='/' className='hover:text-orange-500 transition-colors'>Privacy Policy</a>
                <a href='/' className='hover:text-orange-500 transition-colors'>Terms of Service</a>
                <a href='/' className='hover:text-orange-500 transition-colors'>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}