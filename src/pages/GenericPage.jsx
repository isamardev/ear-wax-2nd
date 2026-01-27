import React from 'react';
import { motion } from 'framer-motion';

const GenericPage = ({ title, content }) => {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 -z-20" />
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-apollo-orange/10 rounded-full blur-3xl -z-10" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">{title}</span>
        </h1>
        <div className="prose prose-lg text-gray-600 bg-white/60 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-xl border border-white/50">
           {content ? content : <p>Content for {title} goes here...</p>}
        </div>
      </motion.div>
    </div>
  );
};

export default GenericPage;
