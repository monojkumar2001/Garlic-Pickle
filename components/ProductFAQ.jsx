'use client';

import React, { useState } from 'react';

const ProductFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ঘি আসলে কী?",
      answer: "ইংরেজিতে ঘিকে বলা হয় ক্লারিফায়েড বাটার। এতে রয়েছে ৯৯.৯% চর্বি। বাকি ০১% জলীয় উপাদান, চর্বিতে দ্রবণীয় ভিটামিন ও দুধের পোড়া অংশ। সরের ঘি মূলত সম্পৃক্ত চর্বি তাই এটি বাইরের তাপমাত্রাতেই সংরক্ষণ করা যায়।"
    },
    {
      question: "ঘি কত দিন পর্যন্ত ভালো থাকে?",
      answer: "ঘি সহজে নষ্ট হয় না। দীর্ঘ দিন পর্যন্ত ঠিক থাকে ঘি। ঘি বাইরের তাপমাত্রাতেই সংরক্ষণ করা যায়।"
    },
    {
      question: "এই ঘি সম্পূর্ণ ভেজাল মুক্ত?",
      answer: "হ্যাঁ, Honey Mart আপনাদেরকে দিচ্ছে সম্পূর্ণ ভেজাল মুক্ত সরের ঘি। কোন প্রোডাক্টে অভিযোগ থাকলে আমাদের কে জানালে আমরা ফুল টাকা রিফান্ড করে দিব।"
    },
    {
      question: "ডেলিভারি কত দিনে হবে এবং চার্জ কত?",
      answer: "আমরা ২-৩ দিনে ডেলিভারি প্রদান করি। ডেলিভারি চার্জ: ঢাকা ৭০৳, ঢাকার বাইরে ১২০৳। ২০০০৳ এর বেশি অর্ডারে ডেলিভারি ফ্রি। সারা বাংলাদেশে ক্যাশ অন হোম ডেলিভারি দিচ্ছি।"
    },
    {
      question: "আমি সন্তুষ্ট না হলে পণ্য ফেরত দিতে পারবো?",
      answer: "হ্যাঁ, আমরা ক্যাশব্যাক গ্যারান্টি দিচ্ছি। ঘি হাতে পেয়ে খেয়ে তারপরই মূল্য পরিশোধ করবেন। কোন প্রোডাক্টে অভিযোগ থাকলে আমরা ফুল টাকা রিফান্ড করে দিব।"
    },
    {
      question: "ঘি কীভাবে সংরক্ষণ করা উচিত?",
      answer: "ঘি বাইরের তাপমাত্রাতেই সংরক্ষণ করা যায়। শীতল এবং শুষ্ক স্থানে রাখুন। ঘি সহজে নষ্ট হয় না এবং দীর্ঘ দিন পর্যন্ত ঠিক থাকে।"
    },
    {
      question: "ঘি খাওয়ার উপকারিতা কী?",
      answer: "ঘি রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে, হাড়ের স্বাস্থ্য ভালো রাখে, হজম ক্ষমতা বাড়ায়, ওজন কমায় ও এনার্জি বাড়ায়, এবং পজিটিভিটি বাড়ায়।"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
            প্রায়শই জিজ্ঞাসিত প্রশ্নসমূহ
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-800 text-sm sm:text-base pr-2">{faq.question}</span>
                  <span className={`text-2xl text-green-700 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
