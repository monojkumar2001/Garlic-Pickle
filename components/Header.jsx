import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="logo" className="w-16 sm:w-20 h-auto object-contain" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="#home" className="text-gray-700 hover:text-green-700 transition text-sm lg:text-base">Home</a>
            <a href="#products" className="text-gray-700 hover:text-green-700 transition text-sm lg:text-base">Products</a>
            <a href="#about" className="text-gray-700 hover:text-green-700 transition text-sm lg:text-base">About</a>
            <a href="#contact" className="text-gray-700 hover:text-green-700 transition text-sm lg:text-base">Contact</a>
          </nav>
          <div className="flex items-center">
            <a href="tel:01753501679" className="text-green-700 font-semibold hover:underline text-xs sm:text-sm whitespace-nowrap">
              <span className="hidden sm:inline">📞 </span>
              <span className="sm:hidden">📞</span>
              <span className="hidden sm:inline">01753-501679</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
