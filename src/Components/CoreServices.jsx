import React from 'react';

export default function CoreServices() {
  const services = [
    {
      id: 1,
      title: 'Buy a home',
      description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      icon: 'https://haviosoft.com/bizrent/assets/images/blog/blog-1.png',
    },
    {
      id: 2,
      title: 'Rent a home',
      description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      icon: 'https://haviosoft.com/bizrent/assets/images/blog/blog-2.png',
    },
    {
      id: 3,
      title: 'Sell a home',
      description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      icon: 'https://plus.unsplash.com/premium_photo-1671358689953-ee06a6671fce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGhvdXNlfGVufDB8fDB8fHww',
    },
    {
      id: 4,
      title: 'Property Management',
      description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      icon: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 5,
      title: 'Home Valuation',
      description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      icon: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 6,
      title: 'Consultation',
      description: 'Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
      icon: 'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <div className='w-full bg-slate-50 py-12 sm:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-10 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900'>
            Our Core Services
          </h2>
          <div className="h-[2px] mt-4 animate-grow-line origin-left"></div>
        </div>

        {/* Cards Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col items-center text-center group'
            >
              <div className='h-20 w-20 sm:h-24 sm:w-24 mb-4 sm:mb-5 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0'>
                <img
                  src={service.icon}
                  alt={service.title}
                  className='h-full w-full object-cover'
                />
              </div>
              <h3 className='font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-orange-500'>
                {service.title}
              </h3>
              <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}