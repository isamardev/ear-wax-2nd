import React from 'react';
import { motion } from 'framer-motion';
import { FaChildReaching, FaShieldHeart, FaFaceSmile } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ChildrensEarCarePage = () => {
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
            Pediatric Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Children's <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Ear Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialist ear wax removal services for children aged 5+. Gentle, safe, and friendly care for little ears.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-apollo-orange/20 rounded-[3rem] rotate-3 opacity-50" />
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80" 
              alt="Child smiling" 
              className="relative rounded-[3rem] shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Why choose us for your child?</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Specialist Training',
                  desc: 'Our audiologists are specifically trained in pediatric ear care and engagement.',
                  icon: <FaShieldHeart />
                },
                {
                  title: 'Gentle Approach',
                  desc: 'We take extra time to explain the equipment and make the child feel comfortable.',
                  icon: <FaFaceSmile />
                },
                {
                  title: 'Safe Technology',
                  desc: 'We use reduced-suction microsuction or gentle irrigation suitable for smaller ear canals.',
                  icon: <FaChildReaching />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 hover:border-apollo-orange/20 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-apollo-orange/10 flex items-center justify-center text-apollo-orange text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-apollo-orange/5 p-6 rounded-2xl border border-apollo-orange/10">
              <p className="text-sm text-gray-800 font-medium">
                <strong>Please note:</strong> A parent or legal guardian must accompany all children under 16. We treat children aged 5 and above.
              </p>
            </div>

            <Link to="/book">
              <button className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-apollo-orange/30">
                Book Child Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrensEarCarePage;
