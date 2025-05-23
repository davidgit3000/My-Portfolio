'use client';

import { useRef } from 'react';
import { CodeBracketIcon, CpuChipIcon, CommandLineIcon, WindowIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiJenkins, SiJira,
  SiJavascript, SiPython
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: SkillItem[];
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    icon: <WindowIcon className="w-6 h-6" />,
    items: [
      { name: 'React.js', icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4 text-black dark:text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> },
      { name: 'HTML/CSS', icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" /> }
    ]
  },
  {
    name: 'Backend Development',
    icon: <CpuChipIcon className="w-6 h-6" />,
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4 text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="w-4 h-4 text-black dark:text-white" /> },
      { name: 'RESTful APIs', icon: <TbApi className="w-4 h-4 text-blue-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> }
    ]
  },
  {
    name: 'Tools & Methods',
    icon: <CommandLineIcon className="w-6 h-6" />,
    items: [
      { name: 'Git', icon: <SiGit className="w-4 h-4 text-[#F05032]" /> },
      { name: 'Docker', icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
      // { name: 'CI/CD', icon: <SiJenkins className="w-4 h-4 text-[#D24939]" /> },
      // { name: 'Agile', icon: <SiJira className="w-4 h-4 text-[#0052CC]" /> },
      { name: 'Testing', icon: <CodeBracketIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" /> }
    ]
  },
  {
    name: 'Languages',
    icon: <CodeBracketIcon className="w-6 h-6" />,
    items: [
      { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
      { name: 'Python', icon: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: 'Java', icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
      { name: 'SQL', icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> }
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  return (
    <section ref={ref} id="skills" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item.name}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default flex items-center gap-1.5"
                  >
                    {item.icon}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
