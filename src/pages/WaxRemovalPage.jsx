import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WaxRemovalPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-apollo-orange/10 text-apollo-orange font-bold text-sm mb-4 border border-apollo-orange/20">
            Wax Removal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Understanding <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Ear Wax Removal</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ear wax, when to remove it, and the safest methods available.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaQuestionCircle className="text-apollo-orange" />
                Why do we have ear wax?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ear wax (cerumen) is normal and healthy. It protects the ear canal by trapping dust and debris, and its acidic nature helps prevent infection. However, excessive wax can cause blockages that affect your hearing and comfort.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaExclamationTriangle className="text-amber-500" />
                Signs of Blocked Ears
              </h2>
              <ul className="space-y-3">
                {[
                  'Sudden or gradual hearing loss',
                  'Earache or feeling of fullness',
                  'Tinnitus (ringing in the ears)',
                  'Dizziness or vertigo',
                  'Itchiness in the ear canal'
                ].map((symptom, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-apollo-navy to-gray-800 p-8 rounded-3xl shadow-xl text-white">
              <h2 className="text-2xl font-bold mb-6">Our Removal Methods</h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-apollo-orange mb-2">Microsuction</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    The gold standard in wax removal. Uses a gentle medical suction device to lift wax from the ear canal.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> No water required</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Safe for perforated eardrums</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Immediate results</li>
                  </ul>
                </div>

                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Ear Irrigation</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    A modern, controlled version of "syringing". Uses a pulsed stream of warm water to flush out wax.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Effective for soft/sticky wax</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Gentle and soothing</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Carried out by experts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Not sure which method is right for you? Don't worry. Our qualified audiologists will examine your ears and recommend the safest and most effective treatment for your specific situation.
          </p>
          <Link to="/book">
            <button className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-apollo-orange/30 hover:scale-105 transition-transform">
              Book Your Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WaxRemovalPage;
