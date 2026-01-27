import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LocationPage = ({ city, service }) => {
  // Dynamic content generation based on props
  const getIntroText = () => {
    if (service.includes('Microsuction')) {
      return `Looking for expert microsuction in ${city}? Our specialist clinic provides safe, comfortable, and effective ear wax removal using the latest medical technology.`;
    }
    if (service.includes('Irrigation')) {
      return `Professional ear irrigation services in ${city}. If you have soft wax that needs gentle removal, our ${city} clinic offers the safest water-based treatment.`;
    }
    return `The leading provider of ear wax removal in ${city}. We offer same-day appointments and professional care to restore your hearing immediately.`;
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 -z-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-apollo-orange/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-apollo-orange/10 text-apollo-orange font-bold text-sm mb-6 border border-apollo-orange/20">
            <FaMapMarkerAlt /> {city} Clinic
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            {service} <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">{city}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {getIntroText()}
          </p>
        </motion.div>

        {/* Local Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Local Experts</h3>
            <p className="text-gray-600">
              Our {city} team consists of HCPC registered audiologists who know the local area and provide friendly, professional care.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Access</h3>
            <p className="text-gray-600">
              Conveniently located in {city} with great transport links and parking availability nearby.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-4">5-Star Rated</h3>
            <p className="text-gray-600">
              Trusted by patients across {city} for our quick service and excellent results.
            </p>
          </div>
        </div>

        {/* Map Placeholder / Location Info */}
        <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-12 mb-20 border border-white/60 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit our {city} Clinic</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheck className="text-green-500" /> Open 6 days a week
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheck className="text-green-500" /> Wheelchair accessible
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheck className="text-green-500" /> COVID-safe environment
                </li>
              </ul>
              <Link to="/book">
                <button className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-apollo-orange/30 hover:scale-105 transition-transform">
                  Book Appointment in {city}
                </button>
              </Link>
            </div>
            <div className="bg-white/80 rounded-3xl h-64 flex items-center justify-center shadow-inner border border-white">
               {/* In a real app, a Google Map iframe would go here */}
               <div className="text-center text-gray-400">
                 <FaMapMarkerAlt className="text-4xl mx-auto mb-2 opacity-50" />
                 <p>Map of {city} location</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;