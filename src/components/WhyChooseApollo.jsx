import React from 'react';
import { motion } from 'framer-motion';
import { FaUserDoctor, FaClock, FaPhone, FaShieldHeart } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

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
            <HiSparkles className="text-apollo-orange" />
            <span className="text-sm font-bold text-gray-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-apollo-orange bg-clip-text text-transparent">
              Expert Ear Care Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional, safe, and effective treatments by qualified audiologists.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaUserDoctor />,
              title: "Expert Audiologists",
              desc: "All our staff are HCPC registered professionals, not just technicians."
            },
            {
              icon: <FaClock />,
              title: "7 Days Open",
              desc: "We offer weekend appointments to suit your busy schedule."
            },
            {
              icon: <FaPhone />,
              title: "Same Day Booking",
              desc: "Urgent appointments available. Call us for immediate availability."
            },
            {
              icon: <FaShieldHeart />,
              title: "Safe & Gentle",
              desc: "Using the latest microsuction technology for pain-free wax removal."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-xl hover:shadow-2xl hover:border-apollo-orange/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-apollo-orange to-apollo-darkOrange flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseApollo;
