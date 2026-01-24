import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEarListen, FaPhone, FaBars, FaXmark } from 'react-icons/fa6';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Wax Removal', href: '#' },
    { name: 'Our Process', href: '#' },
    { name: 'Locations', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <div className={`transition-all duration-300 ${scrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-xl px-4 sm:px-6 py-3 flex justify-between items-center">
              <div className="flex items-center gap-3 sm:gap-8 min-w-0">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-apollo-orange to-apollo-darkOrange rounded-2xl flex items-center justify-center shadow-lg shadow-apollo-orange/30">
                    <FaEarListen className="text-white text-base sm:text-xl" />
                  </div>
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent truncate max-w-[120px] sm:max-w-none">Ear wax</span>
                </div>
                
                <nav className="hidden lg:flex gap-6 text-sm font-bold text-gray-700 uppercase tracking-tight">
                  {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="hover:text-apollo-orange transition-colors whitespace-nowrap">{link.name}</a>
                  ))}
                </nav>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 min-w-0">
                <button className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 text-apollo-orange font-bold text-sm whitespace-nowrap bg-white/30 backdrop-blur-md rounded-xl border border-white/50">
                  <FaPhone className="text-xs" /> 0161 513 9011
                </button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-3 sm:px-6 py-2 rounded-full font-bold text-[11px] sm:text-sm shadow-lg shadow-apollo-orange/40 whitespace-nowrap flex-shrink-0"
                >
                  Book Now
                </motion.button>
                <button 
                  className="lg:hidden p-1.5 sm:p-2 text-apollo-orange bg-white/30 backdrop-blur-md rounded-xl border border-white/50 transition-colors flex-shrink-0"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <FaBars className="text-lg sm:text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white/10 backdrop-blur-3xl border-l border-white/20 z-[70] shadow-2xl p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-2xl font-bold bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Ear wax</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
                  <FaXmark className="text-2xl text-gray-700" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-bold text-gray-800 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-3 hover:bg-white/50 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-4 pt-6 flex flex-col gap-4 border-t border-white/30">
                  <div className="flex items-center gap-3 text-apollo-orange font-bold bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-3">
                    <FaPhone /> 0161 513 9011
                  </div>
                  <button className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl shadow-apollo-orange/40">
                    Book Appointment Now
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
