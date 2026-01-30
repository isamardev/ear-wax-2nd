import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaNotesMedical, FaCheckDouble, FaHandHoldingMedical } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OurProcessPage = () => {
  const steps = [
    {
      id: 1,
      title: 'Initial Consultation',
      description: 'We begin with a thorough discussion of your ear health history and current symptoms. Our audiologist will listen to your concerns to understand exactly what you are experiencing.',
      icon: <FaUserMd />,
      details: ['Medical history review', 'Symptom discussion', 'Safety assessment']
    },
    {
      id: 2,
      title: 'Video Otoscopy',
      description: 'Using a high-definition camera, we examine your ear canal and eardrum. You will be able to see the inside of your ear on a large screen, allowing us to show you exactly where the wax blockage is.',
      icon: <FaNotesMedical />,
      details: ['Live video feed', 'Detailed explanation', 'Before photos']
    },
    {
      id: 3,
      title: 'Microsuction Treatment',
      description: 'We use a medical-grade suction device to gently remove the wax. This dry procedure is safe, sterile, and typically painless. Unlike syringing, it does not introduce water into the ear.',
      icon: <FaHandHoldingMedical />,
      details: ['Gentle suction', 'Sterile equipment', 'No water needed']
    },
    {
      id: 4,
      title: 'Post-Treatment Check',
      description: 'After the wax is removed, we perform another video examination to ensure your ear canal is completely clear and your eardrum is healthy. We show you the "after" result so you can see the difference.',
      icon: <FaCheckDouble />,
      details: ['Final inspection', 'After photos', 'Aftercare advice']
    }
  ];

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
            Our Process
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Clear Hearing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We follow a strict clinical protocol to ensure your safety and comfort at every step. Here is exactly what happens during your appointment.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-apollo-orange/20 via-apollo-orange/50 to-apollo-orange/20 -translate-x-1/2" />
          
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Icon/Number Bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-apollo-orange to-apollo-darkOrange flex items-center justify-center text-white text-3xl shadow-xl shadow-apollo-orange/30 border-4 border-orange-50">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-gray-900 shadow-md border border-gray-100">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full lg:w-1/2">
                  <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {step.details.map((detail, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-orange-50 text-apollo-darkOrange text-sm font-medium border border-orange-100">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty Spacer for alternating layout */}
                <div className="hidden lg:block flex-1 w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-apollo-navy rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to book your appointment?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Our expert audiologists are ready to help you hear clearly again. The entire process typically takes just 15-20 minutes.
            </p>
            <Link to="/book">
              <button className="bg-white text-apollo-navy px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                Book Now - From £50
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcessPage;
