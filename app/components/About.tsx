'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PuzzlePieceIcon, CommandLineIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';

/**
 * A section on the homepage that describes the developer's background and
 * skills.
 *
 * This component is used on the homepage and displays information about the
 * developer, including their background, skills, and experience.
 *
 * The component is divided into two sections. The first section displays a
 * brief introduction to the developer, including their background and
 * experience. The second section displays a list of the developer's skills,
 * including their proficiency level and a brief description of each skill.
 *
 * The component uses Tailwind CSS classes to style the layout and design of
 * the section.
 */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} id="about" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center md:text-left">Education</h3>
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">California State Polytechnic University, Pomona</h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 italic">Bachelor of Science in Computer Science, Minor in Data Science</p>
            </div>
            <div className="text-center md:text-right whitespace-nowrap">
              <p className="text-lg text-gray-600 dark:text-gray-300">Pomona, CA</p>
              <p className="text-lg text-gray-600 dark:text-gray-300">Aug. 2023 - Dec. 2025</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                I am a passionate software developer with a strong foundation in modern web technologies.
                My journey in software development started with a curiosity about how things work on the web,
                which has evolved into a deep love for creating elegant and efficient solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                I believe in writing clean, maintainable code and building applications that not only work
                flawlessly but also provide an exceptional user experience. My approach combines technical
                expertise with creative problem-solving to deliver solutions that exceed expectations.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              What I Bring to the Table
            </motion.h3>
            <motion.ul className="space-y-6">
              <motion.li variants={itemVariants} className="flex items-center gap-4">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <PuzzlePieceIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-lg text-gray-700 dark:text-gray-200">Strong problem-solving abilities and attention to detail</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-4">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <CommandLineIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-lg text-gray-700 dark:text-gray-200">Experience with modern web frameworks and best practices</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-4">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-lg text-gray-700 dark:text-gray-200">Passion for learning and staying up-to-date with technology</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-4">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <UserGroupIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-lg text-gray-700 dark:text-gray-200">Strong collaboration and communication skills</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
