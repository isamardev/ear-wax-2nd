import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaEarListen, FaDroplet, FaUserDoctor } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 'microsuction',
      title: 'Microsuction Wax Removal',
      description: 'The gold standard in ear wax removal. Safe, sterile, and effective.',
      icon: <FaEarListen />,
      features: ['No water used', 'Camera inspection included', 'Safe for perforated eardrums', 'Instant results'],
      price: '£50'
    },
    {
      id: 'hearing-test',
      title: 'Hearing Health Check',
      description: 'Comprehensive assessment of your hearing health.',
      icon: <FaUserDoctor />,
      features: ['Otoscopy examination', 'Pure tone audiometry', 'Full report provided', 'Expert advice'],
      price: 'Free'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-apollo-orange/10 text-apollo-orange font-bold text-sm mb-4 border border-apollo-orange/20">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Ear Care Treatments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a range of clinical services performed by qualified audiologists to ensure your hearing health is in the best hands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-apollo-orange to-apollo-darkOrange rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-apollo-orange/30 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 min-h-[48px]">{service.description}</p>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <FaCheck className="text-xs" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <div>
                  <span className="text-sm text-gray-500 block">Starting from</span>
                  <span className="text-2xl font-bold text-apollo-orange">{service.price}</span>
                </div>
                <Link to="/book">
                  <button className="px-6 py-2 bg-gray-900 text-white rounded-xl font-bold hover:bg-apollo-orange transition-colors shadow-lg">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="bg-white/40 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-apollo-orange/5 rounded-full blur-3xl -z-10" />
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
              <p className="text-gray-600">Your appointment journey with us</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-apollo-orange/30 to-transparent -z-10" />

              {[
                { title: 'Book Online', desc: 'Choose a time and location that suits you.' },
                { title: 'Consultation', desc: 'Detailed ear examination and history taking.' },
                { title: 'Treatment', desc: 'Gentle removal of wax using microsuction.' },
                { title: 'Aftercare', desc: 'Advice on maintaining healthy ears.' }
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full border-4 border-apollo-orange/20 flex items-center justify-center text-xl font-bold text-apollo-orange mb-6 shadow-lg z-10 relative">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
