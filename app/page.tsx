import Header from "./components/Header";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <>
    <div className="bg-gray-300/20 dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <main className="min-h-screen flex items-center">
        <Hero />
      </main>

      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-24 h-8 bg-gradient-to-b from-gray-100/30 dark:from-gray-900 to-transparent"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></div>
        </div>
        <About />
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-24 h-8 bg-gradient-to-b from-gray-300/20 dark:from-gray-900 to-transparent"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></div>
        </div>
        <Skills />
      </div>

      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
    </>
  );
}
