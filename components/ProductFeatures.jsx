import React from 'react';

const ProductFeatures = () => {
  const features = [
    {
      icon: "🛡️",
      title: "রোগ প্রতিরোধ ক্ষমতা বাড়ায়",
      description: "ভিটামিন এ এবং সি সমৃদ্ধ যা আপনার শরীরের প্রাকৃতিক রোগ প্রতিরোধ ব্যবস্থাকে শক্তিশালী করে"
    },
    {
      icon: "👁️",
      title: "দৃষ্টিশক্তি উন্নত করে",
      description: "ভাল দৃষ্টিশক্তি বজায় রাখতে এবং সামগ্রিক চোখের স্বাস্থ্য উন্নত করতে সাহায্য করে"
    },
    {
      icon: "💪",
      title: "হাড়ের স্বাস্থ্য",
      description: "হাড়ের বৃদ্ধি সমর্থন করে এবং হাড়ের শক্তি বজায় রাখে"
    },
    {
      icon: "❤️",
      title: "হৃদযন্ত্রের স্বাস্থ্য",
      description: "রক্তচাপ এবং কোলেস্টেরল কমাতে সাহায্য করে"
    },
    {
      icon: "🌿",
      title: "১০০% প্রাকৃতিক",
      description: "প্রাকৃতিক এবং জৈব উপাদান দিয়ে তৈরি, কোন কৃত্রিম সংরক্ষক নেই"
    },
    {
      icon: "🍽️",
      title: "বহুমুখী",
      description: "পোলাও, বিরিয়ানি, খিচুড়ি এবং আরও অনেক খাবারের সাথে পারফেক্ট"
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
          পণ্যের বৈশিষ্ট্য ও সুবিধা
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
