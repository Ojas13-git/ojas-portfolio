import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React.js', level: 92 },
  { name: 'Next.js', level: 88 },
  { name: 'TypeScript', level: 90 },
  { name: 'Vite', level: 88 },
  { name: 'TailwindCSS', level: 92 },
  { name: 'Node.js', level: 82 },
  { name: 'Firebase', level: 85 },
  { name: 'Zustand', level: 85 },
  { name: 'MUI', level: 85 },
  { name: 'Radix UI', level: 82 },
  { name: 'MongoDB', level: 80 },
  { name: 'PostgreSQL', level: 78 },
  { name: 'Git', level: 85 },
  { name: 'REST APIs', level: 88 },
  { name: 'GraphQL', level: 75 },
  { name: 'Express.js', level: 80 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript ES6+', level: 92 },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white via-indigo-50/30 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="skill-badge bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-center">
                  <span className="text-gray-800 font-medium block mb-2">{skill.name}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                    />
                  </div>
                  <span className="text-sm text-gray-500 mt-2 block">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}