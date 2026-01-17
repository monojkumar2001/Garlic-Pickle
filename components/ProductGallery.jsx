'use client';

import React, { useState, useEffect } from 'react';

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    { id: 1, src: "/assets/images/product.png", alt: "Garlic Pickle Product 1" },
    { id: 2, src: "/assets/images/product.png", alt: "Garlic Pickle Product 2" },
    { id: 3, src: "/assets/images/product.png", alt: "Garlic Pickle Product 3" },
    { id: 4, src: "/assets/images/product.png", alt: "Garlic Pickle Product 4" },
  ];

  const handleViewClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="gallery" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
            Product Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition aspect-square">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                  <button 
                    onClick={() => handleViewClick(image)}
                    className="opacity-0 group-hover:opacity-100 transition text-white bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 font-semibold"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white hover:text-gray-300 transition text-3xl sm:text-4xl font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Zoomed Image */}
            <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGallery;
