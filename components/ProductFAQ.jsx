'use client';

import React, { useState } from 'react';

const ProductFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "এই রসুনের আচারের প্রধান উপাদানগুলো কী কী?",
      answer: "এই রসুনের আচার তৈরিতে ব্যবহার করা হয় তাজা রসুন, তেঁতুল এবং প্রাকৃতিক মসলার মিশ্রণ। এতে কোন কৃত্রিম সংরক্ষক বা যোজক নেই।"
    },
    {
      question: "পণ্যটির মেয়াদ কত দিন?",
      answer: "শীতল এবং শুষ্ক স্থানে রাখলে পণ্যটির ভালো শেলফ লাইফ থাকে। নির্দিষ্ট বিবরণের জন্য প্যাকেজিংয়ের মেয়াদ শেষ তারিখ দেখুন।"
    },
    {
      question: "এই পণ্যটি নিরামিষাশীদের জন্য উপযুক্ত?",
      answer: "হ্যাঁ, এই রসুনের আচার সম্পূর্ণ নিরামিষ এবং প্রাকৃতিক উদ্ভিদ-ভিত্তিক উপাদান দিয়ে তৈরি।"
    },
    {
      question: "ডেলিভারি কত দিনে হবে?",
      answer: "আমরা ২-৩ দিনে ডেলিভারি প্রদান করি। ২০০০৳ এর বেশি অর্ডারে ডেলিভারি ফ্রি। ক্যাশ অন ডেলিভারি সুবিধা উপলব্ধ।"
    },
    {
      question: "আমি সন্তুষ্ট না হলে পণ্য ফেরত দিতে পারবো?",
      answer: "হ্যাঁ, আমরা ঝুঁকি-মুক্ত টাকা ফেরত গ্যারান্টি প্রদান করি। আপনি পণ্য থেকে সন্তুষ্ট না হলে hassle-free refund এর জন্য ফেরত দিতে পারবেন।"
    },
    {
      question: "আচারটি কীভাবে সংরক্ষণ করা উচিত?",
      answer: "আচারটি শীতল এবং শুষ্ক স্থানে সংরক্ষণ করুন। খোলার পর শক্ত করে সিল করে রাখুন। খোলার পর রেফ্রিজারেশনে রাখার পরামর্শ দেওয়া হয়।"
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
