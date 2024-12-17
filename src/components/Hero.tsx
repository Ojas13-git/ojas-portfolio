import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white via-indigo-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-indigo-600 shadow-xl">
              <img
                src="https://www.jiffylabs.xyz/ojas.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">Frontend Engineer</span>
            <br />
            <span className="text-gray-900">&amp; Tech Enthusiast</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From concept to component — I build it all. ⚙️🚀
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Code2,
                title: "Frontend Expertise",
                description: "Specialized in React, Next.js, and modern web technologies",
                delay: 0.3,
              },
              {
                icon: Briefcase,
                title: "Professional Experience",
                description: "Frontend Engineer at JiffyLabs & Freelance Developer",
                delay: 0.4,
              },
              {
                icon: GraduationCap,
                title: "Education",
                description: "B.Tech in Computer Science from LNMIIT",
                delay: 0.5,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg card-hover"
              >
                <item.icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-indigo-600 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}