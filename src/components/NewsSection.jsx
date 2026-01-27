import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaQuoteLeft } from 'react-icons/fa6';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';

const NewsSection = () => {
  const news = [
    { 
      title: 'A quick phone call arranged same day appointment. Car parked in space provided...', 
      name: 'Fred R', 
      date: 'March 13, 2024', 
      img: 'https://i.pravatar.cc/150?img=11',
      rating: 5
    },
    { 
      title: 'Absolutely brilliant service. I was in and out within 15 minutes and the staff...', 
      name: 'Louise R', 
      date: 'March 26, 2024', 
      img: 'https://i.pravatar.cc/150?img=5',
      rating: 5
    },
    { 
      title: 'I had an appointment today. Smooth and pain free...', 
      name: 'Andy R', 
      date: 'January 9, 2024', 
      img: 'https://i.pravatar.cc/150?img=12',
      rating: 5
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-apollo-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-xl border border-white/60 px-4 py-2 rounded-full mb-4 shadow-lg">
              <HiSparkles className="text-apollo-orange" />
              <span className="text-sm font-bold text-gray-700">Patient Reviews</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-gray-900 to-apollo-orange bg-clip-text text-transparent">
                Trusted by Thousands
              </span>
            </h2>
            <p className="text-lg text-gray-600">See what our patients say about us</p>
          </motion.div>

          <Link to="/reviews">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/80 text-apollo-orange font-bold px-6 py-3 rounded-2xl hover:bg-white/80 transition-all shadow-lg"
            >
              Read All Reviews
              <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
              
              {/* Card */}
              <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-xl overflow-hidden h-full flex flex-col">
                {/* Quote Icon Background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <FaQuoteLeft className="w-full h-full text-apollo-orange" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-full blur opacity-50" />
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="relative w-14 h-14 rounded-full border-3 border-white shadow-lg" 
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-apollo-orange to-apollo-darkOrange rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                        <HiSparkles className="text-white text-xs" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.date}</div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-apollo-orange text-sm drop-shadow" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 leading-relaxed italic line-clamp-4">
                      "{item.title}"
                    </p>
                  </div>

                  {/* Verified Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-200/50">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-green-600">
                      <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      Verified Patient
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-3xl blur-xl opacity-30" />
          <div className="relative bg-white/50 backdrop-blur-3xl border border-white/60 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10,000+', label: 'Happy Patients' },
                { number: '4.9★', label: 'Average Rating' },
                { number: '15min', label: 'Quick Service' },
                { number: '100%', label: 'Satisfaction' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
