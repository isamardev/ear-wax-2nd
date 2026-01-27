import React from 'react';
import { motion } from 'framer-motion';
import { FaHouseMedical, FaCarSide, FaUserNurse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HomeVisitsPage = () => {
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
            We Come To You
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Home <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Visits</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional ear wax removal in the comfort of your own home. Ideal for those with mobility issues or busy schedules.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Convenience',
              desc: 'No travel required. We bring all necessary equipment to your doorstep.',
              icon: <FaHouseMedical />
            },
            {
              title: 'Coverage',
              desc: 'We cover Greater Manchester and surrounding areas. Check our map for details.',
              icon: <FaCarSide />
            },
            {
              title: 'Same High Standard',
              desc: 'You receive the exact same clinical care and safety as in our clinic.',
              icon: <FaUserNurse />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 hover:border-apollo-orange/30 transition-all group text-center"
            >
              <div className="w-16 h-16 mx-auto bg-apollo-orange/10 rounded-full flex items-center justify-center text-apollo-orange text-2xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 border border-white/60 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to book a home visit</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-8 h-8 rounded-full bg-apollo-orange text-white flex items-center justify-center font-bold shadow-sm">1</span>
                  Call us or fill out the enquiry form
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-8 h-8 rounded-full bg-apollo-orange text-white flex items-center justify-center font-bold shadow-sm">2</span>
                  We confirm your location and availability
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-8 h-8 rounded-full bg-apollo-orange text-white flex items-center justify-center font-bold shadow-sm">3</span>
                  Our audiologist arrives at the agreed time
                </li>
              </ul>
              <div className="flex gap-4">
                 <Link to="/book">
                  <button className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-apollo-orange/30">
                    Request Home Visit
                  </button>
                </Link>
                <a href="tel:01615139011">
                    <button className="bg-white text-apollo-navy px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors border border-gray-200">
                        Call 0161 513 9011
                    </button>
                </a>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50">
                <h3 className="font-bold text-lg mb-4 text-apollo-navy">Pricing</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span>Standard Home Visit</span>
                        <span className="font-bold text-apollo-orange">£80</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span>Care Home (per patient)</span>
                        <span className="font-bold text-apollo-orange">£50</span>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">* Additional mileage charges may apply for locations outside our standard radius.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVisitsPage;
