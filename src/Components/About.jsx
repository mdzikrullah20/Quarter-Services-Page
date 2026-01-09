import React from 'react';
import { FaUsers, FaHome, FaStar, FaHandshake, FaChartLine, FaShieldAlt, FaPlay } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function About() {
  const stats = [
    { number: '500+', label: 'Properties Sold' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Awards Won' }
  ];

  const values = [
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Integrity First',
      description: 'We operate with complete transparency and honesty in every transaction, ensuring you always know where you stand.'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Client-Centered',
      description: 'Your goals are our priority. We listen carefully and tailor our approach to meet your unique needs and vision.'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Market Excellence',
      description: 'Deep local knowledge combined with cutting-edge market analysis to give you a competitive advantage.'
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: 'Premium Service',
      description: 'White-glove service from start to finish, making your real estate journey smooth and stress-free.'
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section with Overlay */}
      <div 
        className='relative w-full h-96 flex justify-center items-center bg-cover bg-center'
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&h=900&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-5xl lg:text-6xl font-bold mb-4">About Quarter</h1>
          <p className="text-white text-xl lg:text-2xl font-light">Building Dreams, Creating Legacies</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-white text-4xl lg:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-white text-lg font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Who We Are Section */}
      <div className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Quarter is more than just a real estate company—we're your partners in one of life's most important decisions. We've built our reputation on trust, expertise, and unwavering commitment to our clients' success.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over 15 years of experience navigating the property market, we've helped hundreds of families find their perfect homes and investors discover profitable opportunities. Our approach combines deep market knowledge with genuine care for every client we serve.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Quarter, we believe in building relationships that last long after the keys change hands. We're not just selling properties—we're helping people achieve their dreams and build their futures.
              </p>
              <div className="flex items-center gap-3 text-orange-500">
                <MdVerified className="text-3xl" />
                <span className="text-gray-700 font-semibold text-lg">Certified Real Estate Professionals</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
                alt="Quarter office"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-900 rounded-xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Quarter and ensure exceptional results for every client
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-orange-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
                alt="Team meeting"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Quarter, our mission is to revolutionize the real estate experience by providing personalized, professional service that puts our clients' dreams first. We're committed to leveraging our expertise, market insights, and innovative strategies to deliver exceptional outcomes.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every property tells a story, and we're here to help you write yours. Whether you're buying your first home, selling a treasured property, or building an investment portfolio, the Quarter team is with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Quarter */}
      <div className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Why Choose Quarter</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're not just another real estate company. Here's what sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-100">
              <FaHome className="text-5xl text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of local markets, neighborhoods, and property values that gives you a competitive edge.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <FaHandshake className="text-5xl text-blue-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Trusted Relationships</h3>
              <p className="text-gray-600 leading-relaxed">
                We build lasting partnerships based on trust, transparency, and a genuine commitment to your success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100">
              <FaStar className="text-5xl text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Track record of successful transactions and satisfied clients who trust us with their biggest investments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white text-xl mb-8 font-light">
            Let's discuss how Quarter can help you achieve your real estate goals
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-4 rounded-full transition-colors shadow-lg">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}