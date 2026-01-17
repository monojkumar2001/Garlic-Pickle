import React from 'react';

const ProductDetails = () => {
  return (
    <section id="product-details" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            Product Details
          </h2>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                <strong>রসুন তেঁতুলের আচার:</strong> রসুন, তেঁতুলের মিক্সড টক-ঝাল-মিষ্টি আচার। 
                এতে আছে, ভিটামিন এ, ভিটামিন সি, পটাসিয়াম ও ফাইবার, যা শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়ায়, 
                দৃষ্টিশক্তি ভাল রাখে, ত্বকের স্বাস্থ্য এবং হাড়ের বৃদ্ধিতেও ভূমিকা রাখে। 
                এছাড়াও, এর পুষ্টিগুণ রক্তচাপ কমাতে এবং কোলেস্টেরল কমাতে সাহায্য করে। 
                পোলাও, বিরিয়ানি কিংবা খিচুড়ির সাথে আচার থাকলে খাবারের স্বাদ বেড়ে যায় কয়েক গুণ।
              </p>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Natural and organic ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Rich in Vitamin A, Vitamin C, Potassium, and Fiber</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Perfect blend of tangy, spicy, and sweet flavors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Enhances immunity and overall health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Ideal companion for pulao, biryani, and khichuri</span>
                </li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">Weight:</span>
                  <span className="ml-2 font-semibold text-gray-800">400gm</span>
                </div>
                <div>
                  <span className="text-gray-600">Category:</span>
                  <span className="ml-2 font-semibold text-gray-800">আঁচার (Pickle)</span>
                </div>
                <div>
                  <span className="text-gray-600">Price:</span>
                  <span className="ml-2 font-semibold text-green-700">380.00৳</span>
                </div>
                <div>
                  <span className="text-gray-600">Delivery:</span>
                  <span className="ml-2 font-semibold text-gray-800">2-3 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
