import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope, FaEarListen } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10">
      {/* Enhanced Glassmorphic background */}
      <div className="absolute inset-0 bg-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-apollo-navy to-gray-900 opacity-90" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-apollo-orange/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[100px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-apollo-orange to-apollo-darkOrange rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-apollo-orange/30">
                <FaEarListen className="text-white text-2xl" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white">Ear wax</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Professional, safe, and effective ear wax removal services by qualified audiologists. Your hearing health is our priority.
            </p>
            <div className="flex gap-4 pt-2">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-apollo-orange flex items-center justify-center text-white transition-all hover:-translate-y-1">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl text-white mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-apollo-orange rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                {name: 'Home', path: '/'},
                {name: 'About Us', path: '/about-us'},
                {name: 'Contact Us', path: '/contact'},
                {name: 'Our Services', path: '/wax-removal'},
                {name: 'Patient Reviews', path: '/reviews'},
                {name: 'Book Appointment', path: '/book'}
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-apollo-orange transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-apollo-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xl text-white mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-apollo-orange rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                {name: 'Microsuction Removal', path: '/wax-removal'},
                {name: 'Ear Irrigation', path: '/ear-irrigation'},
                {name: 'Hearing Health Check', path: '/hearing-health-check'},
                {name: 'Children\'s Ear Care', path: '/childrens-ear-care'},
                {name: 'Home Visits', path: '/home-visits'}
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-apollo-orange transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-apollo-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xl text-white mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-apollo-orange rounded-full" />
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-apollo-orange flex-shrink-0 group-hover:bg-apollo-orange group-hover:text-white transition-colors">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Call Us</p>
                  <p className="text-white font-bold text-lg">0161 513 9011</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-apollo-orange flex-shrink-0 group-hover:bg-apollo-orange group-hover:text-white transition-colors">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email Us</p>
                  <p className="text-white font-medium">hello@earwaxremoval.com</p>
                </div>
              </div>

              <Link to="/book">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white py-3 rounded-xl font-bold shadow-lg shadow-apollo-orange/20"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ear Wax Removal. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-apollo-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-apollo-orange transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-apollo-orange transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
