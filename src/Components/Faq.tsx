import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const faqs = [
    {
      question: "How do I start the home buying process?",
      answer: "Start by getting pre-approved for a mortgage to understand your budget. Then, work with our experienced agents to identify your needs and preferences. We'll help you search for properties, schedule viewings, make offers, and guide you through closing."
    },
    {
      question: "What documents do I need to sell my property?",
      answer: "You'll need property title documents, tax receipts, building approval plans, NOC from society/builder, previous sale deed, property tax receipts, and identity proof. Our team will provide you with a complete checklist and assist with documentation."
    },
    {
      question: "How long does it take to sell a property?",
      answer: "Typically, it takes 30-90 days depending on market conditions, property location, pricing, and demand. We use strategic marketing and our extensive network to help sell your property as quickly as possible at the best price."
    },
    {
      question: "What are the closing costs when buying a home?",
      answer: "Closing costs typically include registration fees (5-7% of property value), stamp duty, legal fees, property inspection costs, and loan processing fees. We'll provide you with a detailed breakdown of all costs involved."
    },
    {
      question: "Do you offer property management services?",
      answer: "Yes, we offer comprehensive property management including tenant screening, rent collection, maintenance coordination, legal compliance, and regular property inspections. We handle everything so you can enjoy hassle-free ownership."
    },
    {
      question: "How is property valuation done?",
      answer: "We use comparative market analysis (CMA), considering recent sales of similar properties, current market trends, location, property condition, and unique features. Our expert valuations help you price competitively."
    },
    {
      question: "Can I invest in properties through your company?",
      answer: "Absolutely! We offer investment consulting services, helping you identify high-growth areas, rental yield opportunities, and commercial properties. Our team provides market insights and ROI projections for informed decisions."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve major metropolitan areas and surrounding regions. Our extensive network covers residential, commercial, and industrial properties across multiple cities. Contact us to check if we serve your desired location."
    }
  ];

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      name: "John Anderson",
      role: "Home Buyer",
      rating: 5,
      text: "Outstanding service! They helped me find my dream home within my budget. The team was professional, responsive, and made the entire process seamless."
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      name: "Sarah Mitchell",
      role: "Property Seller",
      rating: 5,
      text: "Sold my property in just 45 days at a great price! Their marketing strategy and negotiation skills are exceptional. Highly recommend their services."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      name: "Michael Chen",
      role: "Investor",
      rating: 5,
      text: "Best investment advice I've received. They identified high-growth areas and helped me build a profitable real estate portfolio. True professionals!"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      name: "Emily Davis",
      role: "First-Time Buyer",
      rating: 5,
      text: "As a first-time buyer, I was nervous, but they guided me through every step. Patient, knowledgeable, and genuinely caring. Couldn't ask for better support!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=600&fit=crop')"
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Have Questions?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl">
            We're here to help you navigate your real estate journey with confidence
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-gray-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about buying, selling, and investing in real estate
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-8">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 text-orange-500 text-2xl">
                    {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="w-full bg-gradient-to-br from-orange-500 to-orange-600 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-orange-100 text-lg">
              Real stories from real people who trusted us with their property needs
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 max-w-3xl mx-auto">
                      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                        {/* Image */}
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover shadow-lg"
                        />
                        
                        {/* Name and Role */}
                        <div className="text-center sm:text-left">
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-orange-500 font-semibold mb-2">
                            {testimonial.role}
                          </p>
                          {/* Star Rating */}
                          <div className="flex gap-1 justify-center sm:justify-start">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-xl">★</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote Icon */}
                      <FaQuoteLeft className="text-orange-200 text-4xl mb-4" />

                      {/* Testimonial Text */}
                      <p className="text-gray-600 text-lg leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <IoIosArrowBack className="text-2xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <IoIosArrowForward className="text-2xl" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Footer */}
      <div className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Contact Us Now
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}