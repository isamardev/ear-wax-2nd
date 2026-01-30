import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarCheck } from 'react-icons/fa6';

const Booking = () => {
  return (
    <div className="pt-32 pb-16 px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-apollo-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FaCalendarCheck className="text-3xl text-apollo-orange" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Appointment</h1>
          <p className="text-gray-600">Fill out the form below to secure your slot.</p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" placeholder="Doe" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" placeholder="john@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" placeholder="07123 456789" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all" />
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
             <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-apollo-orange focus:ring-2 focus:ring-apollo-orange/20 outline-none transition-all">
               <option>Microsuction (Both Ears) - £70</option>
               <option>Microsuction (One Ear) - £50</option>
               <option>Consultation Only - £30</option>
             </select>
          </div>

          <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
            <div className="flex h-6 items-center">
              <input
                id="age-confirm"
                name="age-confirm"
                type="checkbox"
                required
                className="h-5 w-5 rounded border-gray-300 text-apollo-orange focus:ring-apollo-orange"
              />
            </div>
            <div className="text-sm">
              <label htmlFor="age-confirm" className="font-medium text-gray-900">
                Age Confirmation
              </label>
              <p className="text-gray-500">I confirm that the patient is 18 years of age or older. We do not treat children.</p>
            </div>
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Booking;
