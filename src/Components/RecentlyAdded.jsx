import React from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtubLight } from 'react-icons/pi';
import { BiArea } from 'react-icons/bi';

export default function RecentlyAdded() {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      address: '100 West 93rd Street, Apt 17C',
      price: 1800,
      status: 'For Rent',
      statusColor: 'bg-blue-500',
      beds: 2,
      bathrooms: 2,
      sqft: 1700
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      address: '110 Livingston Street, Apt 17M',
      price: 2000,
      status: 'For Rent',
      statusColor: 'bg-blue-500',
      beds: 8,
      bathrooms: 6,
      sqft: 2400
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      address: '245 East 80th Street, Apt 2-B',
      price: 1300,
      status: 'For Sale',
      statusColor: 'bg-sky-500',
      beds: 2,
      bathrooms: 2,
      sqft: 1700
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
      address: '561 10th Avenue, Apt 30J',
      price: 1700,
      status: 'For Rent',
      statusColor: 'bg-bluess-500',
      beds: 2,
      bathrooms: 2,
      sqft: 1700
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
      address: '605 West 42nd Street, Apt 63W',
      price: 2200,
      status: 'For Sell',
      statusColor: 'bg-sky-500',
      beds: 8,
      bathrooms: 6,
      sqft: 2400
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop',
      address: '42-12 28th Street, Apt 4IK',
      price: 1500,
      status: 'For Rent',
      statusColor: 'bg-blue-500',
      beds: 2,
      bathrooms: 2,
      sqft: 1700
    }
  ];

  return (
    <div className='w-full bg-gray-50 py-16 px-4 sm:px-8'>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>   
        {/* Header */}
         <div className='mb-10 sm:mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900'>
          Recently Added
        </h2>
             <div className="h-[2px] mt-4 bg-gradient-to-r from-orange-500 to-transparent w-32"></div>
        </div>

        {/* Property Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ property }) {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-md transition-shadow duration-300 group cursor-pointer'>
      {/* Image Container */}
      <div className='relative h-64 overflow-hidden'>
        <img 
          src={property.image} 
          alt={property.address}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 ${property.statusColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
          {property.status}
        </div>
      </div>

      {/* Content */}
      <div className='p-5 border-l-4'>
        {/* Address */}
        <h3 className='text-lg font-semibold text-gray-800 mb-3 hover:text-orange-500 transition-colors cursor-pointer'>
          {property.address}s
        </h3>

        {/* Price */}
        <div className='flex items-baseline gap-2 mb-4'>
          <span className='text-2xl font-bold text-gray-900'>$ {property.price}</span>
          <span className='text-gray-500 text-sm'>/mo</span>
        </div>

        {/* Property Details */}
        <div className='flex items-center justify-between text-gray-600 text-sm pt-4 border-t border-gray-200'>
          <div className='flex items-center gap-1'>
            <IoBedOutline className='w-5 h-5 text-orange-500' />
            <span className='font-medium'>{property.beds} Bed</span>
          </div>
          <div className='flex items-center gap-1'>
            <PiBathtubLight className='w-5 h-5 text-orange-500' />
            <span className='font-medium'>{property.bathrooms} Bathroom</span>
          </div>
          <div className='flex items-center gap-1'>
            <BiArea className='w-5 h-5 text-orange-500' />
            <span className='font-medium'>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}