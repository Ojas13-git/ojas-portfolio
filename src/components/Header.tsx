import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Terminal className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl">Ojas Palorkar</span>
          </motion.div>
          
          <div className="flex items-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Ojas13-git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/ojas-palorkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:ojas.palorkar@gmail.com"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://x.com/_ojas_13"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}