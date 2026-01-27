import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCalendarCheck, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SameDayPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-4 border border-red-200">
              Urgent Care Available
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Need Help <span className="text-apollo-orange">Today?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We understand that blocked ears can be painful and distressing. That's why we reserve specific slots every day for emergency same-day appointments across our Manchester clinics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book">
                <button className="w-full sm:w-auto bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-apollo-orange/30 hover:scale-105 transition-transform flex items-center justify-center gap-2">
                  <FaCalendarCheck /> Book Same Day
                </button>
              </Link>
              <a href="tel:01615139011">
                <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <FaPhone className="text-apollo-orange" /> 0161 513 9011
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-apollo-orange/10 rounded-full blur-3xl -z-10" />
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Same Day?</h3>
            <div className="space-y-6">
              {[
                { title: 'Immediate Relief', desc: 'Walk out with clear hearing today.' },
                { title: 'No Referral Needed', desc: 'Direct access to expert audiologists.' },
                { title: 'Extended Hours', desc: 'Evening and weekend slots often available.' },
                { title: 'Fixed Price', desc: 'No extra charge for emergency bookings.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-apollo-orange flex-shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SameDayPage;
