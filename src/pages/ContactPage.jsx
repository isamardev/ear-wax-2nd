import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaLocationDot } from 'react-icons/fa6';

const ContactPage = () => {
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
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to our team for advice or to book an appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-apollo-orange/10 flex items-center justify-center text-apollo-orange text-xl flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <p className="text-gray-600">0161 513 9011</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sun 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-apollo-orange/10 flex items-center justify-center text-apollo-orange text-xl flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@earwaxremoval.com</p>
                    <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-apollo-orange/10 flex items-center justify-center text-apollo-orange text-xl flex-shrink-0">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Head Office</p>
                    <p className="text-gray-600">Manchester City Centre</p>
                    <p className="text-sm text-gray-500 mt-1">Clinics across Greater Manchester</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/50 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white py-4 rounded-xl font-bold shadow-lg shadow-apollo-orange/30 hover:scale-[1.02] transition-transform">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
