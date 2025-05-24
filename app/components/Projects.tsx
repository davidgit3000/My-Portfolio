"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  wrap
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "AI Travel Planner",
    description:
      "A full-stack travel planning application powered by AI. Users can get AI-generated personalized travel itineraries based on their preferences, including destination, duration, and interests. Features user authentication, itinerary management, and real-time AI suggestions.",
    image: "/images/tripmate.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI API",
      "Gemini API",
      "Neon DB",
      "n8n",
    ],
    githubUrl: "https://github.com/davidgit3000/AI-Travel-Planner-frontend",
    liveUrl: "https://ai-travel-planner-frontend-ten.vercel.app/",
  },
  {
    title: "Library Management System",
    description:
      "A modern library management system built with Next.js and Prisma. Features include book catalog management, user authentication, borrowing system, and an intuitive admin dashboard. The system helps librarians and users efficiently manage and track library resources.",
    image: "/images/lib_system.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon DB",
      "Material UI",
    ],
    githubUrl: "https://github.com/davidgit3000/library_system",
    liveUrl: "https://library-system-omega.vercel.app/",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipeConfidenceThreshold = 100;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) =>
      wrap(0, projects.length, prevIndex + newDirection)
    );
  };

  const handleDragEnd = (
    e: any,
    { offset, velocity }: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <section
      id="projects"
      className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div ref={ref} className="max-w-6xl mx-auto relative">
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Featured Projects
          </h2>

          <div className="relative flex justify-center items-center">
            <motion.button
              className="absolute left-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              className="absolute right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="w-6 h-6" />
            </motion.button>

            <div className="w-full max-w-3xl px-4 py-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.5}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0, scale: 1.05 }}
                  exit={{ opacity: 0, x: -200 }}
                  transition={{ type: "tween", duration: 0.15 }}
                  className="w-full py-4"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-2xl border-0 max-w-2xl mx-auto backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 my-4 overflow-visible">
                    {projects[currentIndex] && (
                      <>
                        <div className="relative h-56 md:h-72 rounded-t-[2rem] overflow-hidden">
                          <Image
                            src={projects[currentIndex].image}
                            alt={projects[currentIndex].title}
                            fill
                            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {projects[currentIndex].title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {projects[currentIndex].description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {projects[currentIndex].technologies.map(
                              (tech: string, techIndex: number) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                          <div className="flex gap-5 mb-2">
                            <a
                              href={projects[currentIndex].githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative inline-flex text-sm items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            >
                              <FaGithub className="w-5 h-5" />
                              <span>Source Code</span>
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                            {projects[currentIndex].liveUrl && (
                              <a
                                href={projects[currentIndex].liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex text-sm items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                              >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                <span>Live Demo</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
                              </a>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-600 dark:bg-blue-400 scale-125"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
