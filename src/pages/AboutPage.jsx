import React from 'react';
import { motion } from 'framer-motion';
import { FaUserDoctor, FaEarListen, FaHandHoldingHeart, FaAward } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-apollo-orange/10 text-apollo-orange font-bold text-sm mb-4 border border-apollo-orange/20">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Leading the Way in <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Ear Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of dedicated audiologists committed to providing safe, effective, and accessible ear wax removal services across the region.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: <FaUserDoctor />, label: 'Expert Audiologists', value: '15+', desc: 'HCPC Registered Professionals' },
            { icon: <FaEarListen />, label: 'Ears Treated', value: '50k+', desc: 'Successfully cleared' },
            { icon: <FaHandHoldingHeart />, label: 'Happy Patients', value: '99%', desc: '5-Star Satisfaction Rate' },
            { icon: <FaAward />, label: 'Years Experience', value: '10+', desc: 'Clinical Excellence' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-apollo-orange to-apollo-darkOrange rounded-2xl flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-apollo-orange/30">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="font-bold text-gray-800 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to make professional ear care accessible to everyone, Ear Wax Removal has grown from a single clinic to a trusted network of specialists. We believe that clear hearing is fundamental to quality of life.
              </p>
              <p>
                Our team consists solely of qualified audiologists and hearing aid dispensers. Unlike some providers who use short-course technicians, we ensure every clinician has extensive training and experience in ear anatomy and pathology.
              </p>
              <p>
                We use the latest microsuction technology – the same equipment found in ENT departments – to ensure the safest and most effective treatment for our patients.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/book">
                <button className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-apollo-orange/30 hover:scale-105 transition-transform">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-apollo-orange/20 to-amber-200/20 rounded-[3rem] blur-3xl transform rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" 
              alt="Audiologist team" 
              className="relative rounded-[2rem] shadow-2xl border-4 border-white/50 w-full object-cover h-96"
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="bg-white/40 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 border border-white/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Patients Trust Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clinical Excellence", text: "We adhere to the highest clinical standards set by the British Society of Audiology." },
              { title: "Transparent Pricing", text: "No hidden fees. We believe in honest, upfront pricing for all our treatments." },
              { title: "Patient-First Approach", text: "Your comfort and safety are our top priorities. We take the time to listen and explain." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/80 p-8 rounded-2xl shadow-sm border border-white"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
