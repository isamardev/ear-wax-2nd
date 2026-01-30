import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles, HiCheckBadge, HiPhone } from 'react-icons/hi2';
import { FaEarListen } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-28 sm:pt-32 pb-18 sm:pb-24 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Background blobs */}
      <div className="absolute -top-32 right-[-80px] sm:right-[-120px] w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-gradient-to-br from-apollo-orange/30 via-amber-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-[-80px] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-amber-400/25 via-orange-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Top badges */}
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-white/80 px-3.5 sm:px-4 py-2 rounded-full shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-gray-800">
                Same‑day ear wax removal
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-3.5 sm:px-4 py-2 rounded-full shadow-lg">
              <HiCheckBadge className="text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-bold">
                HCPC registered audiologists
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-white/80 px-3.5 sm:px-4 py-2 rounded-full shadow-md">
              <span className="text-xs sm:text-sm font-bold text-gray-800">
                18+ Patients Only
              </span>
            </div>
          </div>

          {/* Main heading + text */}
          <div className="text-center space-y-4 sm:space-y-5 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-black leading-tight sm:leading-[1.1] tracking-tight">
              <span className="block text-gray-900">
                Blocked ears from wax?
              </span>
              <span className="block bg-gradient-to-r from-apollo-orange via-amber-500 to-apollo-darkOrange bg-clip-text text-transparent">
                We safely clear them in one short visit.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium">
              Gentle microsuction ear wax removal with no olive oil, no syringing, and no mess.
              Clear, comfortable hearing restored in minutes.
            </p>
          </div>

          {/* Ear‑wax feature row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              {
                icon: <FaEarListen className="text-apollo-orange" />,
                title: 'No oil needed',
                text: 'Most patients can book straight in without softening drops.'
              },
              {
                icon: <HiSparkles className="text-apollo-orange" />,
                title: 'Both ears, one appointment',
                text: 'We can treat one or both ears during the same visit.'
              },
              {
                icon: <HiCheckBadge className="text-apollo-orange" />,
                title: 'Hospital‑grade technique',
                text: 'Microsuction used in ENT clinics for safe wax removal.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl px-3.5 py-3.5 sm:px-4 sm:py-4 shadow-md"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">{item.title}</p>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <Link to="/book" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className="group w-full sm:w-auto bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-apollo-orange/30 hover:shadow-2xl hover:shadow-apollo-orange/40 flex items-center justify-center gap-2"
              >
                Book ear wax removal
                <HiArrowRight className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <motion.a
              href="tel:01615139011"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/80 backdrop-blur-xl border-2 border-white text-gray-900 px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:bg-white transition-colors"
            >
              <HiPhone className="text-base sm:text-lg text-apollo-orange" />
              0161 513 9011
              <span className="hidden sm:inline text-xs font-semibold text-gray-500">
                (Call to speak to an audiologist)
              </span>
            </motion.a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-1">
            <div className="flex -space-x-2 sm:-space-x-3">
              {[11, 5, 12, 8, 15].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/80?img=${i}`}
                  alt="Patient"
                  loading="lazy"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-[3px] border-white shadow-lg"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <HiSparkles key={i} className="text-apollo-orange text-[10px] sm:text-xs" />
                ))}
                <span className="ml-1 font-bold text-gray-900 text-xs sm:text-sm">
                  4.9/5.0 rating
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-600 font-medium">
                Thousands of successful ear wax removal appointments across Greater Manchester.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
