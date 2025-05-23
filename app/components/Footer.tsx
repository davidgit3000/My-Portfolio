'use client';

import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} David Lam. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/davidgit3000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <SiGithub className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/david-lam-840572172/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <SiLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
