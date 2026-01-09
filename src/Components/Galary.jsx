import React, { useState } from 'react';
import { IoMdClose, IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { MdZoomIn, MdFullscreen } from 'react-icons/md';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      title: "Living Room",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      title: "Master Bedroom",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      title: "Modern Kitchen",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      title: "Front Exterior",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      title: "Spacious Bathroom",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop",
      title: "Dining Area",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      title: "Balcony View",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
      title: "Home Office",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      title: "Garden Area",
      category: "Exterior"
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Property Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Explore stunning views of this amazing property
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold text-lg">{image.title}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4">
                  <MdZoomIn className="text-white text-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500 mb-2">{images.length}</p>
            <p className="text-gray-600">Total Photos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500 mb-2">
              {images.filter(img => img.category === 'Interior').length}
            </p>
            <p className="text-gray-600">Interior Views</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500 mb-2">
              {images.filter(img => img.category === 'Exterior').length}
            </p>
            <p className="text-gray-600">Exterior Views</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-10"
          >
            <IoMdClose className="text-4xl" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-lg font-semibold z-10">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
          >
            <IoMdArrowBack className="text-3xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
          >
            <IoMdArrowForward className="text-3xl" />
          </button>

          {/* Main Image */}
          <div className="max-w-6xl max-h-[85vh] mx-4">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
            
            {/* Image Info */}
            <div className="text-center mt-4 text-white">
              <p className="text-2xl font-bold mb-2">{selectedImage.title}</p>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="flex gap-2 justify-center overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                    index === currentIndex 
                      ? 'ring-4 ring-orange-500 scale-110' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-20 h-14 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}