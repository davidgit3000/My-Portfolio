"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 px-4 scroll-mt-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I&apos;m always open to discussing new projects, opportunities, or
              just having a friendly chat about technology.
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:dlam1@cpp.edu"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>dlam1@cpp.edu</span>
              </a>
              <a
                href="https://github.com/davidgit3000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <SiGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/david-lam-840572172/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <SiLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus('sending');
                
                try {
                  const response = await fetch('https://getform.io/f/bqomomzb', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                  });

                  if (!response.ok) throw new Error('Failed to send');
                  
                  setStatus('sent');
                  setFormData({ name: '', email: '', message: '' });
                  
                  // Reset to idle after 3 seconds
                  setTimeout(() => {
                    setStatus('idle');
                  }, 3000);
                } catch (error) {
                  console.error('Form submission error:', error);
                  setStatus('error');
                  
                  // Reset to idle after 3 seconds
                  setTimeout(() => {
                    setStatus('idle');
                  }, 3000);
                }
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-shadow"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-shadow resize-none"
                  placeholder="Your message..."
                />
              </div>
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all flex items-center justify-center gap-2 ${
                    status === "sending"
                      ? "bg-blue-400 cursor-not-allowed"
                      : status === "sent"
                      ? "bg-green-600 hover:bg-green-700"
                      : status === "error"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                >
                  {status === 'sending' ? (
                    <>
                      <ArrowPathIcon className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'sent' ? (
                    'Message Sent!'
                  ) : status === 'error' ? (
                    'Failed to Send'
                  ) : (
                    'Send Message'
                  )}
                </button>
                {status === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400 text-center"
                  >
                    Thank you for your message! I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 dark:text-red-400 text-center"
                  >
                    Sorry, something went wrong. Please try again later.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
