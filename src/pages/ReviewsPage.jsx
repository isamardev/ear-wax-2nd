import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ReviewsPage = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      date: '2 days ago',
      rating: 5,
      text: 'Absolutely fantastic service. I was struggling to hear for weeks and the microsuction was quick, painless, and effective. Highly recommend!',
      source: 'Google'
    },
    {
      name: 'Michael Brown',
      date: '1 week ago',
      rating: 5,
      text: 'Very professional. The audiologist explained everything clearly and put me at ease. The clinic was clean and welcoming.',
      source: 'Google'
    },
    {
      name: 'Emma Wilson',
      date: '2 weeks ago',
      rating: 5,
      text: 'Easy booking process and great communication. The treatment itself was over in minutes. Will definitely return if needed.',
      source: 'Google'
    },
    {
      name: 'David Thompson',
      date: '3 weeks ago',
      rating: 5,
      text: 'I was nervous about the procedure but there was no need to be. Gentle and efficient. My hearing is back to normal!',
      source: 'Google'
    },
    {
      name: 'Lisa Anderson',
      date: '1 month ago',
      rating: 5,
      text: 'Best ear wax removal service I have used. Much better than the old syringing method. Worth every penny.',
      source: 'Google'
    },
    {
      name: 'James Roberts',
      date: '1 month ago',
      rating: 5,
      text: 'Professional, friendly, and effective. Can finally hear the TV without subtitles again!',
      source: 'Google'
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
            Patient Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange bg-clip-text text-transparent">Patients Say</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-gray-800 mb-8">
            <span className="flex items-center gap-1 text-yellow-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span>
            <span>5.0 Average Rating</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">{review.name}</h4>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
                <FaGoogle className="text-gray-400 text-xl" />
              </div>
              
              <div className="flex text-yellow-400 text-sm mb-4">
                {[...Array(review.rating)].map((_, r) => (
                  <FaStar key={r} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic relative">
                <FaQuoteLeft className="text-apollo-orange/20 text-4xl absolute -top-4 -left-2 -z-10" />
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-apollo-navy/5 p-12 rounded-[3rem] border border-apollo-navy/10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to experience clear hearing?</h3>
          <p className="text-gray-600 mb-8">Join thousands of happy patients who have trusted us with their ear care.</p>
          <Link to="/book">
            <button className="bg-gradient-to-r from-apollo-orange to-apollo-darkOrange text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-apollo-orange/30 hover:scale-105 transition-transform">
              Book Your Appointment Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
