import React from 'react';
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaEarListen } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-16 sm:pt-20 pb-6 sm:pb-8">
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-apollo-navy to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-apollo-orange/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-apollo-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16 border-b border-white/10 pb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-apollo-orange to-apollo-darkOrange rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-apollo-orange/30">
                <FaEarListen className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Ear wax</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[280px]">
              Expert audiologists offering same-day ear wax removal using microsuction across Greater Manchester. Safe, quick, and effective.
            </p>
            <div className="pt-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-apollo-orange to-amber-400 bg-clip-text text-transparent flex items-center gap-3">
                <FaPhone className="text-lg animate-pulse text-apollo-orange" /> 0161 513 9011
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              {[
                { icon: <FaFacebookF />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaEnvelope />, href: '#' }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-apollo-orange hover:to-apollo-darkOrange hover:border-apollo-orange/50 hover:scale-110 transition-all duration-300 shadow-lg">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 col-span-1 sm:col-span-2 lg:col-span-3">
             <div className="space-y-6">
               <h4 className="font-bold text-lg text-white relative inline-block pb-2">
                 Services
                 <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-apollo-orange to-transparent rounded-full" />
               </h4>
               <ul className="space-y-4 text-sm text-gray-400">
                 {['Ear Wax Removal Manchester', 'Microsuction Sale', 'Microsuction Bury', 'Ear Irrigation Bolton', 'Same-Day Appointments'].map((link) => (
                   <li key={link}>
                     <a href="#" className="hover:text-apollo-orange transition-colors flex items-center gap-2 group">
                       <span className="w-1.5 h-1.5 bg-apollo-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-apollo-orange/50"></span>
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg text-white relative inline-block pb-2">
                Locations
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-apollo-orange to-transparent rounded-full" />
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                {['Manchester City', 'Sale Moor Village', 'Oldham High St', 'Bury Market', 'Bolton Centre'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-apollo-orange transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-apollo-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-apollo-orange/50"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-lg text-white relative inline-block pb-2">
                Company
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-apollo-orange to-transparent rounded-full" />
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'About Us', 'Finance Terms'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-apollo-orange transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-apollo-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-apollo-orange/50"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-4">
          <p className="text-xs text-gray-500 order-2 lg:order-1">© 2025 · Ear wax. Professional Ear Care Services.</p>
          <div className="flex flex-wrap justify-center gap-4 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl text-white font-bold text-xs shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-full animate-pulse shadow-lg shadow-apollo-orange/50"></span> 
              HCPC Registered
            </motion.div>
            <motion.div
              initial={{ opacity: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl text-white font-bold text-xs shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-apollo-orange to-amber-400 rounded-full animate-pulse shadow-lg shadow-apollo-orange/50"></span> 
              Expert Audiologists
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
