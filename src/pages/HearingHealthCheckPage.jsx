import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartPulse, FaChartLine, FaUserDoctor } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HearingHealthCheckPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 -z-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-apollo-orange/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-apollo-orange/10 text-apollo-orange font-bold text-sm mb-4 border border-apollo-orange/20">
            Prevention & Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Hearing <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Health Check</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than just a wax check. A comprehensive assessment of your outer ear health and hearing screening.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Otoscopy',
              desc: 'Visual examination of your ear canal and eardrum using a high-definition video otoscope.',
              icon: <FaUserDoctor />
            },
            {
              title: 'Screening',
              desc: 'A quick hearing screen to identify any potential hearing loss across key frequencies.',
              icon: <FaChartLine />
            },
            {
              title: 'Advice',
              desc: 'Professional guidance on ear hygiene, protection, and next steps if issues are found.',
              icon: <FaHeartPulse />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 hover:border-apollo-orange/30 transition-all group"
            >
              <div className="w-14 h-14 bg-apollo-orange/10 rounded-2xl flex items-center justify-center text-apollo-orange text-2xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-apollo-navy rounded-[3rem] p-8 sm:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-apollo-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Book Your Check-up</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Regular ear checks are recommended every 6-12 months to maintain optimal hearing health.
            </p>
            <Link to="/book">
              <button className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-apollo-orange/30">
                Book Health Check
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearingHealthCheckPage;
