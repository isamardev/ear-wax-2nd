import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEarListen, FaDroplet, FaCircleCheck, FaLightbulb, FaUserDoctor, FaHouseMedical, FaStethoscope } from 'react-icons/fa6';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';

const tabContent = {
  'Wax Removal': {
    title: 'Expert Microsuction Service',
    description: 'Safe and effective ear wax removal using microsuction, the gold standard in ear care. Our clinically qualified audiologists ensure your comfort and safety. No pre-treatment with olive oil required.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    features: ['Microsuction', 'Same Day', 'No Oil Needed']
  },
  'Our Process': {
    title: 'Simple 3-Step Process',
    description: 'Book online or call us, arrive at your chosen clinic, and our expert audiologists will safely remove ear wax in just 15-20 minutes. Walk out with clearer hearing immediately.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    features: ['Book Online', 'Quick Visit', 'Immediate Relief', 'Follow-up Care']
  }
};

const services = [
  { name: 'Microsuction', icon: <FaEarListen />, desc: 'Gold standard', path: '/wax-removal' },
  { name: 'Same Day', icon: <FaCircleCheck />, desc: 'Fast service', path: '/same-day-appointments' },
  { name: 'Home Visits', icon: <FaHouseMedical />, desc: 'We come to you', path: '/home-visits' },
  { name: 'Hearing Test', icon: <FaStethoscope />, desc: 'Check health', path: '/hearing-health-check' },
  { name: 'No Oil Needed', icon: <FaLightbulb />, desc: 'No prep', path: '/wax-removal' },
  { name: 'Aftercare', icon: <FaCircleCheck />, desc: 'Free advice', path: '/wax-removal' },
  { name: 'Expert Team', icon: <FaUserDoctor />, desc: 'HCPC certified', path: '/about-us' },
  { name: 'See All', icon: <HiArrowRight />, desc: 'More info', path: '/wax-removal' },
];

const ClinicalExcellence = () => {
  const [activeTab, setActiveTab] = useState('Wax Removal');

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Elements - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-apollo-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />
      
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
            <span className="text-sm font-bold text-gray-700">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-apollo-orange bg-clip-text text-transparent">
              Professional Ear Care Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert audiologists providing comprehensive ear care solutions
          </p>
        </motion.div>

        {/* Glassmorphic Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {Object.keys(tabContent).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-8 py-3 rounded-2xl font-bold text-sm transition-all overflow-hidden ${
                activeTab === tab 
                ? 'text-white shadow-xl shadow-apollo-orange/30' 
                : 'text-gray-700 bg-white/40 backdrop-blur-xl border border-white/60 hover:bg-white/60'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-apollo-orange to-apollo-darkOrange"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center mb-16"
          >
            {/* Image Side */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-[3rem] blur-2xl opacity-30" />
              <div className="relative bg-white/50 backdrop-blur-2xl p-3 rounded-[3rem] border border-white/60 shadow-2xl">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-video">
                  <img 
                    src={tabContent[activeTab].image}
                    alt={activeTab}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-apollo-orange to-apollo-darkOrange flex items-center justify-center text-white text-xl shadow-lg">
                          <FaEarListen />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">HCPC Registered</div>
                          <div className="text-xs text-gray-600">Professional Audiologists</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-apollo-orange bg-clip-text text-transparent">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {tabContent[activeTab].description}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                {tabContent[activeTab].features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full text-sm font-semibold text-gray-800 shadow-lg"
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>

              <Link to="/book" className="my-8 inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-apollo-orange/40"
                >
                  Book This Service
                  <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, i) => (
            <Link to={service.path} key={i} className="flex-1 min-w-[140px] max-w-[180px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white/50 backdrop-blur-2xl p-4 border border-white/60 rounded-2xl text-center cursor-pointer shadow-lg hover:shadow-xl transition-all">
                  <div className="text-3xl mb-2 flex justify-center text-apollo-orange group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="text-xs font-bold text-gray-900 mb-1">{service.name}</div>
                  <div className="text-[10px] text-gray-600">{service.desc}</div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalExcellence;
