import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaClock, FaPhone } from 'react-icons/fa6';
import { HiCheckCircle, HiSparkles } from 'react-icons/hi2';

const stats = [
  { label: 'Manchester', value: 'City Centre', available: true },
  { label: 'Sale', value: 'Sale Moor', available: true },
  { label: 'Bury', value: 'Town Centre', available: true },
  { label: 'Bolton', value: 'Centre', available: false },
  { label: 'Oldham', value: 'High St', available: true },
  { label: 'Sheffield', value: 'Centre', available: true },
];

const WhyChooseApollo = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-apollo-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-xl border border-white/60 px-4 py-2 rounded-full mb-4 shadow-lg">
            <FaLocationDot className="text-apollo-orange" />
            <span className="text-sm font-bold text-gray-700">Our Locations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-apollo-orange bg-clip-text text-transparent">
              Clinics Across Greater Manchester
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional ear care is always nearby with our 6 convenient locations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side - Info & Location Cards */}
          <div className="space-y-6">
            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white/60 backdrop-blur-2xl p-6 rounded-2xl border border-white/80 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-apollo-orange to-apollo-darkOrange flex items-center justify-center text-white text-xl mb-3 shadow-lg">
                    <FaClock />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">7 Days Open</h3>
                  <p className="text-sm text-gray-600">Weekend appointments available</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white/60 backdrop-blur-2xl p-6 rounded-2xl border border-white/80 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-apollo-orange to-apollo-darkOrange flex items-center justify-center text-white text-xl mb-3 shadow-lg">
                    <FaPhone />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Same Day</h3>
                  <p className="text-sm text-gray-600">Call for immediate booking</p>
                </div>
              </motion.div>
            </div>

            {/* Location Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white/50 backdrop-blur-2xl p-4 rounded-2xl border border-white/70 text-center shadow-lg h-full flex flex-col justify-between">
                    <div>
                      <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent mb-1">
                        {stat.label}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-medium mb-2">
                        {stat.value}
                      </div>
                    </div>
                    {stat.available && (
                      <div className="flex items-center justify-center gap-1 text-[10px] text-green-600 font-semibold">
                        <HiCheckCircle className="text-sm" />
                        <span>Open Today</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-2xl blur-lg opacity-30" />
              <div className="relative bg-white/60 backdrop-blur-2xl p-6 rounded-2xl border border-white/80 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-apollo-orange to-apollo-darkOrange flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <HiSparkles />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Expert Audiologists Only</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      At ILME, you'll find only clinically qualified audiologists, not technicians. All our staff are HCPC registered professionals with years of experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-apollo-orange via-amber-400 to-yellow-400 rounded-[2.5rem] blur-2xl opacity-30" />
            <div className="relative bg-white/50 backdrop-blur-2xl p-3 rounded-[2.5rem] border border-white/70 shadow-2xl">
              <div className="relative rounded-[2rem] overflow-hidden h-[400px] sm:h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151941.5471442116!2d-2.392097008593441!3d53.4723272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804da6e5b!2sManchester!5e0!3m2!1sen!2suk!4v1705325000000!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Floating Location Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/90 backdrop-blur-2xl p-4 rounded-2xl border border-white shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-apollo-orange to-apollo-darkOrange flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0">
                      <FaLocationDot />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-base sm:text-lg truncate">
                        Manchester City Centre
                      </div>
                      <div className="text-xs sm:text-sm text-apollo-orange font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Open 7 Days • Same Day Available
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseApollo;
