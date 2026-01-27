import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PricesPage = () => {
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
            Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Affordable <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No hidden fees. Just professional care at competitive rates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Consultation Only",
              price: "£30",
              desc: "Professional examination and advice if no wax is found.",
              features: ["Otoscopy Examination", "Hearing Screening", "Professional Advice", "Referral if needed"]
            },
            {
              title: "One Ear Removal",
              price: "£50",
              desc: "Microsuction or irrigation for one ear.",
              popular: true,
              features: ["Otoscopy Examination", "Wax Removal (1 Ear)", "Aftercare Advice", "Free Follow-up if needed"]
            },
            {
              title: "Both Ears Removal",
              price: "£70",
              desc: "Complete wax removal for both ears.",
              features: ["Otoscopy Examination", "Wax Removal (2 Ears)", "Aftercare Advice", "Free Follow-up if needed"]
            }
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white/60 backdrop-blur-xl p-8 rounded-3xl border ${plan.popular ? 'border-apollo-orange shadow-apollo-orange/20' : 'border-white/50'} shadow-xl flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
              <div className="text-4xl font-bold text-apollo-orange mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-8">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs flex-shrink-0">
                      <FaCheck />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/book" className="w-full">
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white hover:scale-105 shadow-lg shadow-apollo-orange/30' : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'}`}>
                  Book Now
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="bg-apollo-navy rounded-[3rem] p-8 sm:p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-apollo-orange/20 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
           
           <div className="relative z-10">
             <h2 className="text-3xl font-bold mb-4">Home Visits</h2>
             <p className="text-gray-400 mb-8 max-w-xl mx-auto">
               We also offer home visits for your convenience. Prices start from £80 for a standard visit.
             </p>
             <Link to="/home-visits">
               <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors">
                 View Home Visit Prices
               </button>
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
