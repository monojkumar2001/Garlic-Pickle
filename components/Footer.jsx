import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
    <div>
      <img src="/assets/images/footerlogo.png" alt="logo" className="w-20 h-20 object-contain" />
    </div>
            <p className="text-gray-400 mb-4">
              Grown by nature & served by nature. Ensuring natural and organic products to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">YouTube</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition">Return Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Delivery Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 <a href="tel:01753501679" className="hover:text-green-400 transition">01753-501679</a></li>
              <li className="mt-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2">✅</span>
                    <span className="text-sm">Secure Payments</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✅</span>
                    <span className="text-sm">Green Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✅</span>
                    <span className="text-sm">100% Natural</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">Copyright © 2026 GoHoneyMart | Designed by Riad Mahmud</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
