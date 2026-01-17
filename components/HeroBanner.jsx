'use client';

import React, { useState } from 'react';

const HeroBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    cashOnDelivery: false
  });

  const handleAddToCart = () => {
    // Add to cart functionality
    const product = {
      id: 'garlic-pickle-400gm',
      name: 'Garlic Pickle (রসুনের আচার) 400gm',
      price: 380.00,
      quantity: 1
    };
    
    // Save to localStorage or send to cart API
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Show notification
    alert('Product added to cart!');
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }
    
    // Validate required fields
    if (!formData.name || !formData.address || !formData.mobile) {
      alert('Please fill in all required fields');
      return;
    }

    if (!formData.cashOnDelivery) {
      alert('Please accept Cash on Delivery payment method');
      return;
    }

    // Set submitting state
    setIsSubmitting(true);

    // Create WhatsApp message with order details
    const productName = 'Garlic Pickle (রসুনের আচার) 400gm';
    const price = '380.00৳';
    const whatsappNumber = '8801757859893'; // 01753-501679 with country code
    
    const message = `🛒 *New Order Request*

*Product:* ${productName}
*Price:* ${price}

👤 *Customer Details:*
━━━━━━━━━━━━━━━━━━━
*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Email:* ${formData.email || 'Not provided'}
*Address:* ${formData.address}

💳 *Payment Method:* Cash on Delivery

💰 *Order Summary:*
━━━━━━━━━━━━━━━━━━━
Subtotal: ${price}
Delivery: Free
*Total: ${price}*

Thank you! 🙏`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Redirecting to WhatsApp... Please send the message to confirm your order.');
    
    // Reset form and close modal
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      cashOnDelivery: false
    });
    setIsSubmitting(false);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form when closing
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      cashOnDelivery: false
    });
  };

  // Close modal on ESC key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
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
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <div className="inline-block bg-green-100 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                🍯 <span className="hidden sm:inline">Grown by nature & served by nature</span>
                <span className="sm:hidden">Natural & Organic</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Garlic Pickle
                <br />
                <span className="text-green-700">(রসুনের আচার) 400gm</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Premium quality garlic pickle with tamarind - A perfect blend of tangy, spicy, and sweet flavors
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl sm:text-4xl font-bold text-green-700">380.00৳</span>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button 
                  onClick={handleBuyNow}
                  className="w-full sm:w-auto border-2 border-green-700 text-green-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-50 transition text-sm sm:text-base"
                >
                  Buy Now
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="mr-1.5 sm:mr-2">✅</span>
                  <span>Cash on Delivery</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-1.5 sm:mr-2">✅</span>
                  <span className="whitespace-nowrap">Free Delivery (2000৳+)</span>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2 aspect-square max-w-md mx-auto md:max-w-none">
             <img src="/assets/images/product.png" alt="Hero Banner" className='w-full h-full object-cover rounded-lg sm:rounded-xl' />
            </div>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[95vh] sm:max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl flex-shrink-0">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold">Place Your Order</h2>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 transition text-2xl sm:text-3xl font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              <p className="text-green-100 mt-1 sm:mt-2 text-sm sm:text-base">Garlic Pickle (রসুনের আচার) 400gm - 380.00৳</p>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Enter your delivery address"
                />
              </div>

              {/* Email Field (Optional) */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Cash on Delivery Checkbox */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="cashOnDelivery"
                    checked={formData.cashOnDelivery}
                    onChange={handleInputChange}
                    required
                    className="mt-1 mr-3 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 block">
                      Cash on Delivery <span className="text-red-500">*</span>
                    </span>
                    <span className="text-sm text-gray-600">
                      Pay when you receive your order
                    </span>
                  </div>
                </label>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold text-gray-800">380.00৳</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Delivery:</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-300 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-gray-800">Total:</span>
                    <span className="font-bold text-xl text-green-700">380.00৳</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition shadow-lg transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Processing...' : 'Confirm Order'}
              </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner;
