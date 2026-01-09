import React, { useState } from 'react';
import { LuBedDouble } from 'react-icons/lu';
import { PiBathtubLight } from 'react-icons/pi';
import { IoCarOutline, IoLocationOutline } from 'react-icons/io5';
import { FaVectorSquare } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

export default function Property() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const properties = [
    { id: 1, title: 'Modern Villa', location: 'Beverly Hills, CA', price: '$2,500,000', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop', beds: 4, baths: 3, parking: 2, sqft: 4200 },
    { id: 2, title: 'Luxury Apartment', location: 'Manhattan, NY', price: '$5,500/mo', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', beds: 2, baths: 2, parking: 1, sqft: 1800 },
    { id: 3, title: 'Family Home', location: 'Austin, TX', price: '$875,000', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop', beds: 5, baths: 3, parking: 3, sqft: 3800 },
    { id: 4, title: 'Beach House', location: 'Malibu, CA', price: '$4,200,000', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop', beds: 6, baths: 5, parking: 4, sqft: 5500 },
    { id: 5, title: 'Studio Apartment', location: 'San Francisco', price: '$2,800/mo', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop', beds: 1, baths: 1, parking: 1, sqft: 850 },
    { id: 6, title: 'Penthouse Suite', location: 'Miami, FL', price: '$3,900,000', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop', beds: 3, baths: 3, parking: 2, sqft: 3200 }
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <div className='relative w-full h-80 flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">Our Properties</h1>
          <p className="text-xl">Find Your Dream Home</p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img src={property.image} alt={property.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <button 
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                >
                  {favorites.includes(property.id) ? <MdFavorite className="text-xl text-red-500" /> : <MdFavoriteBorder className="text-xl text-gray-600" />}
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4"><IoLocationOutline className="mr-1" />{property.location}</div>
                
                <div className="flex items-center justify-between mb-4 pb-4 border-b text-sm">
                  <span className="flex items-center gap-1"><LuBedDouble className="text-orange-500" /> {property.beds}</span>
                  <span className="flex items-center gap-1"><PiBathtubLight className="text-orange-500" /> {property.baths}</span>
                  <span className="flex items-center gap-1"><IoCarOutline className="text-orange-500" /> {property.parking}</span>
                  <span className="flex items-center gap-1"><FaVectorSquare className="text-orange-500 text-xs" /> {property.sqft}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">{property.price}</span>
                  <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Need Help Finding a Property?</h2>
        <p className="text-white text-xl mb-8">Let our experts guide you</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-4 rounded-full transition-shadow shadow-lg">Contact Us</button>
      </div>
    </div>
  );
}