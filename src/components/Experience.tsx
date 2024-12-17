import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Code, Rocket } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Engineer',
    company: 'JiffyLabs',
    period: '07/2024 - Present',
    description: [
      'Led development of scalable web interfaces for ERC4337 block explorer',
      'Improved crash-free sessions from 40% to 95%',
      'Built and published Smart Account SDK',
    ],
    icon: Building2,
  },
  {
    title: 'Freelance Web Developer',
    company: 'Upwork',
    period: '07/2021 - 05/2023',
    description: [
      'Collaborated with global clients on diverse web projects',
      'Built portfolio websites and interactive applications',
      'Specialized in React.js and modern web technologies',
    ],
    icon: Code,
  },
  {
    title: 'Co-Founder and CTO',
    company: 'ExpanUP',
    period: '07/2021 - 01/2023',
    description: [
      'Led AR technology implementation for F&B and E-commerce',
      'Built POS systems using MERN stack',
      'Incubated at Nirmaan, IITM',
    ],
    icon: Rocket,
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-16">Professional Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <exp.icon className="w-10 h-10 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-indigo-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}