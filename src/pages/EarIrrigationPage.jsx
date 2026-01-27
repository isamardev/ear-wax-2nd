import React from 'react';
import { motion } from 'framer-motion';
import { FaDroplet, FaCheck, FaUserDoctor } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const EarIrrigationPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-apollo-orange/10 text-apollo-orange font-bold text-sm mb-4 border border-apollo-orange/20">
            Gentle & Effective
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ear <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Irrigation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A modern, safe, and controlled method of wax removal using warm water. Ideal for deep-seated or soft wax blockages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-apollo-orange/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaDroplet className="text-apollo-orange" />
                What is Ear Irrigation?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ear irrigation is an electronic ear washing procedure. Unlike old-fashioned syringing, which could be forceful, modern irrigation uses a machine with variable pressure control to gently flush wax out of the ear canal using warm water.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'Gentle, pulsed water stream',
                'Controlled pressure for safety',
                'Temperature controlled water (37°C)',
                'Effective for clearing deep debris'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-apollo-orange/10 flex items-center justify-center text-apollo-orange flex-shrink-0">
                    <FaCheck className="text-xs" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-apollo-orange to-apollo-darkOrange p-8 rounded-[2.5rem] text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Is it right for me?</h3>
            <p className="mb-6 text-white/90">
              Irrigation is often recommended when microsuction isn't suitable, or for very soft, sticky wax that is attached to the eardrum.
            </p>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/20">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <FaUserDoctor /> Expert Care
              </h4>
              <p className="text-sm text-white/90">
                Our audiologists will examine your ear first to ensure your eardrum is intact and it is safe to proceed.
              </p>
            </div>

            <Link to="/book">
              <button className="w-full bg-white text-apollo-orange py-4 rounded-xl font-bold hover:bg-amber-50 transition-colors shadow-lg">
                Book Ear Irrigation - £60
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EarIrrigationPage;
