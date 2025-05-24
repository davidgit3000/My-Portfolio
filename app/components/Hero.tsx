"use client";

import Image from "next/image";
import { DocumentIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  return (
    <section className="w-full pt-40 md:pt-20 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 md:gap-12 items-center">
          <div className="text-center sm:text-left md:order-2 max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in leading-tight whitespace-nowrap">
              Hi, I&apos;m David
              <span className="text-blue-600 dark:text-blue-400 inline-block animate-wave">
                !
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 animate-fade-in-delay-1 leading-relaxed">
              I&apos;m a passionate Software Engineer crafting beautiful and
              functional web experiences. I specialize in building modern web
              applications with cutting-edge technologies.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 animate-fade-in-delay-2">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="inline-flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-blue-300"
              >
                Contact me
              </a>
              <a
                href="https://drive.google.com/file/d/17NmCE51RogGJBtHyScHkgkzEzUPkUPzt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                // download="David_Lam_resume.pdf"
                className="inline-flex items-center justify-center gap-2 bg-slate-300 dark:bg-slate-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-400 dark:hover:bg-slate-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-slate-300"
              >
                <DocumentIcon className="h-5 w-5" />
                <span className="text-center">View my resume</span>
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-md md:max-w-md mx-auto md:order-1 p-4 animate-fade-in">
            <div className="absolute inset-4 bg-blue-600/10 dark:bg-blue-400/10 rounded-full -z-10 translate-x-4 translate-y-4 animate-float"></div>
            <div className="w-full h-full rounded-full animate-shadow-pulse">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-800 shadow-lg hover:scale-105 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 ease-in-out animate-fade-in bg-white dark:bg-gray-900">
                <div className="absolute inset-0 rounded-full animate-shadow-pulse"></div>
                <Image
                  src="/images/avatar.png"
                  alt="David's profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
