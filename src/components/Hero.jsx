import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles, HiCheckBadge, HiPhone, HiClock } from 'react-icons/hi2';
import { FaEarListen } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Static Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-br from-apollo-orange/20 via-amber-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-yellow-400/20 via-orange-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Top Badge Row */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/80 px-3 sm:px-4 py-2 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-gray-800">Available Today</span>
              </div>
              
              <div className="flex items-center gap-2 bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-3 sm:px-4 py-2 rounded-full shadow-lg">
                <HiCheckBadge className="text-sm sm:text-base" />
                <span className="text-xs sm:text-sm font-bold">HCPC Registered</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-3 sm:mb-4">
                <span className="block text-gray-900">Professional</span>
                <span className="block bg-gradient-to-r from-apollo-orange via-amber-500 to-apollo-darkOrange bg-clip-text text-transparent">
                  Ear Wax Removal
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium max-w-xl mx-auto lg:mx-0">
                Safe microsuction by expert audiologists. <span className="text-apollo-orange font-bold">Clear hearing in 15 minutes.</span>
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {[
                { icon: <HiClock />, text: '15 Min Service' },
                { icon: <FaEarListen />, text: 'No Oil Needed' },
                { icon: <HiSparkles />, text: 'Same Day' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/50 backdrop-blur-xl border border-white/70 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-lg">
                  <span className="text-apollo-orange text-sm sm:text-base">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Stack on Mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 items-center lg:items-start">
              <Link to="/book" className="w-full sm:w-auto">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="group bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-apollo-orange/30 hover:shadow-2xl hover:shadow-apollo-orange/40 transition-shadow flex items-center justify-center gap-2"
                >
                    Book Now - £65
                    <HiArrowRight className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>

              <motion.a
                href="tel:01615139011"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/70 backdrop-blur-xl border-2 border-white text-gray-800 px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:bg-white transition-colors"
              >
                <HiPhone className="text-base sm:text-lg text-apollo-orange" />
                0161 513 9011
              </motion.a>
            </div>

            {/* Trust Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[11, 5, 12, 8, 15].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/80?img=${i}`} 
                    alt="Patient"
                    loading="lazy"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-3 border-white shadow-lg" 
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <HiSparkles key={i} className="text-apollo-orange text-[10px] sm:text-xs" />
                  ))}
                  <span className="ml-1 font-bold text-gray-900 text-xs sm:text-sm">4.9/5.0</span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600 font-medium">Rated by 10,000+ patients</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Compact Bento Grid - Hidden on Mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-3 h-[480px]">
              {/* Large Image Card */}
              <div className="col-span-2 row-span-2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative h-full bg-white/50 backdrop-blur-xl rounded-3xl border border-white/60 p-2 shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" 
                    className="w-full h-full object-cover rounded-2xl"
                    alt="Ear Care"
                    loading="eager"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl flex items-end p-4">
                    <div className="bg-white/90 backdrop-blur-xl px-4 py-2 rounded-xl border border-white shadow-lg">
                      <p className="text-xs font-bold text-gray-900">Expert Audiologists</p>
                      <p className="text-[10px] text-gray-600">HCPC Certified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-apollo-orange to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-2xl border border-white/70 p-4 shadow-xl flex flex-col justify-center items-center text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent mb-1">
                    £65
                  </div>
                  <p className="text-xs font-bold text-gray-800">Per Session</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">No hidden fees</p>
                </div>
              </div>

              {/* Time Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-2xl border border-white/70 p-4 shadow-xl flex flex-col justify-center items-center text-center">
                  <HiClock className="text-3xl text-apollo-orange mb-1" />
                  <p className="text-xl font-black text-gray-900">15 Min</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">Quick service</p>
                </div>
              </div>

              {/* Satisfaction Card (Replaces Locations) */}
              <div className="col-span-2 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-2xl border border-white/70 p-4 shadow-xl flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xl font-black text-gray-900 mb-0.5">Satisfaction Guaranteed</p>
                    <p className="text-xs text-gray-600 font-medium">Safe & Effective</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-apollo-orange to-apollo-darkOrange flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                    <HiCheckBadge />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
