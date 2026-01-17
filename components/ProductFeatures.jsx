import React from 'react';

const ProductFeatures = () => {
  const features = [
    {
      icon: "🛡️",
      title: "রোগ প্রতিরোধ ক্ষমতা বাড়ায়",
      description: "প্রচুর অ্যান্টিঅক্সিডেন্টস থাকায়, সরের ঘি আমাদের শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়াতে সাহায্য করে"
    },
    {
      icon: "💪",
      title: "হাড়ের জন্য উপকারী",
      description: "ঘিয়ের ভিটামিন 'কে' ক্যালসিয়ামের সঙ্গে মিলে হাড়ের স্বাস্থ্য ও গঠন বজায় রাখে"
    },
    {
      icon: "❤️",
      title: "হৃদযন্ত্রের স্বাস্থ্য",
      description: "ঘিতে যেসব ভিটামিন রয়েছে - এ, ডি, ই এবং কে, যা আমাদের হৃৎপিন্ডের জন্য উপকারী"
    },
    {
      icon: "⚡",
      title: "ওজন কমায় ও এনার্জি বাড়ায়",
      description: "সরের ঘিয়ের মধ্যে থাকা মিডিয়াম চেন ফ্যাটি অ্যাসিড খুব দ্রুত এনার্জি বাড়াতে সহায়তা করে থাকে"
    },
    {
      icon: "🍽️",
      title: "হজম ক্ষমতা বাড়ায়",
      description: "সরের ঘিতে রয়েছে প্রচুর বাটাইরিক অ্যাসিড, যা আমাদের খাবার তাড়াতাড়ি হজম করতে সাহায্য করে"
    },
    {
      icon: "🌿",
      title: "১০০% প্রাকৃতিক",
      description: "সম্পূর্ণ ভেজাল মুক্ত সরের ঘি - দীর্ঘ দিন পর্যন্ত ঠিক থাকে, সহজে নষ্ট হয় না"
    },
    {
      icon: "😊",
      title: "পজিটিভ ফুড",
      description: "বহু প্রাচীন কাল থেকেই ঘি পজিটিভ ফুড হিসেবে পরিচিত। ঘি খেলে পজিটিভিটি বাড়ে"
    },
    {
      icon: "👶",
      title: "নতুন মায়েদের জন্য",
      description: "ডেলিভারির পর নতুন মায়েদের ঘি খাওয়ানো হয় - এটি তাদের স্বাস্থ্যের জন্য খুবই উপকারী"
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
