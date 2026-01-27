import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEarListen, FaUserDoctor, FaStar } from 'react-icons/fa6';
import { HiArrowRight, HiClock, HiShieldCheck, HiSparkles } from 'react-icons/hi2';

const actions = [
  { 
    title: 'Microsuction', 
    subtitle: 'Gold Standard',
    desc: 'Safe ear wax removal using microsuction technology',
    icon: <FaEarListen />, 
    badge: '£65',
    stat: '10K+ Done',
    color: 'from-orange-500 to-amber-500',
    bgPattern: 'from-orange-400/20 to-amber-300/20',
    link: '/wax-removal'
  },
  { 
    title: 'Same Day', 
    subtitle: 'Fast Service',
    desc: 'Book today and get seen today',
    icon: <HiClock />, 
    badge: 'Today',
    stat: '15 Minutes',
    color: 'from-amber-500 to-yellow-500',
    bgPattern: 'from-amber-400/20 to-yellow-300/20',
    link: '/same-day-appointments'
  },
  { 
    title: 'Expert Team', 
    subtitle: 'Qualified Staff',
    desc: 'HCPC registered audiologists, not technicians',
    icon: <FaUserDoctor />, 
    badge: 'HCPC',
    stat: 'Certified',
    color: 'from-yellow-500 to-orange-500',
    bgPattern: 'from-yellow-400/20 to-orange-300/20',
    link: '/about-us'
  },
  { 
    title: 'Top Rated', 
    subtitle: '4.9/5 Stars',
    desc: 'Trusted by thousands across Greater Manchester',
    icon: <FaStar />, 
    badge: '4.9★',
    stat: '10K Reviews',
    color: 'from-orange-500 to-amber-500',
    bgPattern: 'from-orange-400/20 to-amber-400/20',
    link: '/reviews'
  },
];

const QuickActions = () => {
  return (
    <section className="relative py-16 sm:py-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cards Grid - Unique Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <Link to={action.link} key={i} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.4 
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative h-full"
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Static Glow */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${action.color} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`} />
                
                {/* Main Card */}
                <div className={`relative h-full bg-gradient-to-br ${action.bgPattern} backdrop-blur-3xl rounded-[2rem] border border-white/60 shadow-2xl overflow-hidden`}>
                  {/* Decorative Elements */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative p-6 sm:p-7 flex flex-col h-full">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Icon */}
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white text-2xl shadow-xl group-hover:scale-110 transition-transform duration-200`}>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm pointer-events-none" />
                        <span className="relative z-10">{action.icon}</span>
                      </div>

                      {/* Badge */}
                      <div className="px-3 py-2 bg-white/70 backdrop-blur-xl border border-white rounded-xl text-xs font-black text-apollo-orange shadow-lg">
                        {action.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-apollo-orange transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm font-bold text-apollo-orange">
                          {action.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {action.desc}
                      </p>
                    </div>

                    {/* Footer Section */}
                    <div className="mt-6 pt-4 border-t border-white/50 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-800">
                        <HiSparkles className="text-apollo-orange" />
                        <span className="text-xs font-bold">{action.stat}</span>
                      </div>
                      
                      <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-xl border border-white flex items-center justify-center text-apollo-orange shadow-lg cursor-pointer group-hover:translate-x-1 transition-transform duration-200">
                        <HiArrowRight className="text-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Bottom Feature Banner - Unique Split Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-apollo-orange via-amber-400 to-yellow-400 rounded-[2rem] blur-2xl opacity-30" />
          
          {/* Main Banner */}
          <div className="relative grid md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Left Side - CTA */}
            <div className="relative bg-gradient-to-br from-apollo-orange to-apollo-darkOrange p-8 sm:p-10 flex flex-col justify-center overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-full mb-4"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-white">Limited Slots Available</span>
                </motion.div>

                <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
                  Book Your Appointment Now
                </h3>
                <p className="text-white/90 font-medium mb-6 max-w-md">
                  Same-day service available. Don't let ear wax affect your hearing any longer.
                </p>

                <Link to="/book">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-white text-apollo-orange px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center gap-3 hover:bg-gray-50 transition-colors"
                  >
                    Book Online Now
                    <HiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right Side - Quick Stats */}
            <div className="bg-white/60 backdrop-blur-3xl border-l border-white/60 p-8 sm:p-10">
              <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-6">Why Choose Us</h4>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <HiShieldCheck />, value: 'HCPC', label: 'Registered' },
                  { icon: <HiClock />, value: '15min', label: 'Quick Service' },
                  { icon: <FaStar />, value: '4.9★', label: 'Top Rated' },
                  { icon: <FaUserDoctor />, value: 'Expert', label: 'Care' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-4 text-center shadow-lg"
                  >
                    <div className="text-3xl mb-2 flex justify-center text-apollo-orange">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-black bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickActions;
