'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Typing animation component
function TypingAnimation({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = texts[currentIndex];

    if (isDeleting) {
      // Deleting mode
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        timer = setTimeout(() => {}, 500); // Short pause after deletion
      } else {
        // Remove one character
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      }
    } else {
      // Typing mode
      if (displayText.length === currentText.length) {
        // Finished typing, pause before deletion
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        // Add one character
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, deletingSpeed, typingSpeed, pauseTime]);

  return (
    <span className="text-gradient bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
      {displayText}
      <span className="cursor-blink bg-gradient-to-r from-primary-600 to-blue-500"></span>
    </span>
  );
}

export default function Home() {
  const roles = [
    "Software Engineer",
    "Computer Scientist",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Builder"
  ];
  
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null)
  };
  
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-20 md:mt-0">
      {/* Hero Section with Profile Picture */}
      <section className="pt-24 md:pt-40 lg:pt-44 pb-16 md:pb-24 px-4 md:px-6 min-h-[90vh] md:min-h-[80vh] flex items-center">
        <div className="flex flex-col md:flex-row md:items-center gap-16 md:gap-20 lg:gap-24">
          <div className="w-full md:w-3/5 order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2]">
                Hi, I'm <span className="text-gradient bg-gradient-to-r from-primary-600 via-blue-500 to-primary-400 bg-clip-text text-transparent inline-block">Ayan</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-secondary-700 dark:text-gray-200 mt-6">
                I'm a <TypingAnimation texts={roles} />
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-secondary-600 dark:text-gray-300 max-w-xl leading-relaxed font-light">
              I'm passionate about creating innovative solutions through elegant code. With a strong foundation in computer science
              and a deep curiosity for emerging technologies, I build applications that solve real problems.
            </p>
            
            {/* Social Icons and Resume Button */}
            <div className="flex flex-wrap gap-5 pt-6 items-center">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative transition duration-300"
                aria-label="GitHub Profile"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-70 blur-sm transition duration-300 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center bg-white dark:bg-secondary-800 p-4 rounded-full shadow-sm group-hover:shadow-md border border-gray-200 dark:border-secondary-700 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative transition duration-300"
                aria-label="LinkedIn Profile"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0077B5] to-blue-500 rounded-full opacity-0 group-hover:opacity-70 blur-sm transition duration-300 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center bg-white dark:bg-secondary-800 p-4 rounded-full shadow-sm group-hover:shadow-md border border-gray-200 dark:border-secondary-700 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-700 dark:text-gray-200 group-hover:text-[#0077B5] transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </div>
              </a>
              
              <a 
                href="mailto:your.email@example.com" 
                className="group relative transition duration-300"
                aria-label="Email"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-70 blur-sm transition duration-300 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center bg-white dark:bg-secondary-800 p-4 rounded-full shadow-sm group-hover:shadow-md border border-gray-200 dark:border-secondary-700 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-700 dark:text-gray-200 group-hover:text-red-500 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
              
              <div className="pl-2">
                <a 
                  href="/your-resume.pdf" 
                  download
                  className="relative inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 transition-colors duration-300 text-white px-8 py-3.5 rounded-full shadow-md hover:shadow-lg z-10 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="pl-4 hidden md:inline-flex items-center gap-2 text-secondary-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            <div className="relative h-72 w-72 md:h-96 md:w-96">
              {/* Decorative elements */}
              <div className="absolute -z-10 rounded-full bg-gradient-to-br from-primary-400/30 to-blue-300/30 dark:from-primary-700/30 dark:to-blue-600/30 h-full w-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-8 -right-4 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-300/20 dark:from-pink-700/20 dark:to-purple-600/20 h-32 w-32 md:h-48 md:w-48 opacity-80 blur-2xl"></div>
              
              {/* Profile picture container */}
              <div className="relative">
                {/* Frame */}
                <div className="absolute inset-0 rounded-[2.5rem] border-8 md:border-[12px] border-white dark:border-secondary-900 shadow-2xl overflow-hidden backdrop-blur-sm">
                  {/* Actual picture */}
                  <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-secondary-800 dark:to-secondary-700 flex items-center justify-center">
                    <span className="text-lg font-light text-secondary-400 dark:text-secondary-300">Profile Photo</span>
                    <Image 
                      src="/images/pfp.jpg" 
                      alt="Ayan Goel" 
                      fill
                      sizes="(max-width: 768px) 288px, 384px"
                      priority
                      style={{ objectFit: 'cover' }}
                      className="saturate-[1.1]"
                    />
                  </div>
                </div>
                
                {/* Highlighted frame corners for depth */}
                <div className="absolute -top-2 -left-2 w-16 h-16 border-t-8 border-l-8 md:border-t-[12px] md:border-l-[12px] border-white dark:border-secondary-900 rounded-tl-3xl"></div>
                <div className="absolute -top-2 -right-2 w-16 h-16 border-t-8 border-r-8 md:border-t-[12px] md:border-r-[12px] border-white dark:border-secondary-900 rounded-tr-3xl"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-8 border-l-8 md:border-b-[12px] md:border-l-[12px] border-white dark:border-secondary-900 rounded-bl-3xl"></div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-8 border-r-8 md:border-b-[12px] md:border-r-[12px] border-white dark:border-secondary-900 rounded-br-3xl"></div>
                
                {/* Image container */}
                <div className="h-72 w-72 md:h-96 md:w-96 rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/40 dark:to-blue-900/40 shadow-xl animate-float">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block">
              <h2 className="relative text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                About Me
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transform origin-left"></div>
              </h2>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-secondary-800/50 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-secondary-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl md:text-2xl font-light text-secondary-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm a passionate software engineering student seeking internship opportunities. 
                With experience in full-stack development and a strong foundation in computer science,
                I enjoy creating elegant solutions to complex problems.
              </p>
              
              <p className="text-lg md:text-xl text-secondary-600 dark:text-gray-300 mb-8 leading-relaxed">
                My journey in software engineering began with a fascination for how technology can solve real-world problems.
                I've since developed expertise in various technologies and frameworks, allowing me to build
                applications that are not only functional but also user-friendly and scalable.
              </p>
              
              <p className="text-lg md:text-xl text-secondary-600 dark:text-gray-300 leading-relaxed">
                I'm currently looking for an internship opportunity where I can apply my skills,
                learn from experienced professionals, and contribute to meaningful projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} id="skills" className="py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block">
              <h2 className="relative text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent pb-5">
                Top Skills
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transform origin-left"></div>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Programming Languages */}
            <div className="group relative transition duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-600 dark:to-blue-400 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-secondary-800 dark:text-white">Programming Languages</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {/* JavaScript */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">JavaScript</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* TypeScript */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">TypeScript</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Python */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Python</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Java */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Java</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* C++ */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">C++</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="group relative transition duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 dark:from-purple-600 dark:to-purple-400 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
                <div className="h-1.5 bg-gradient-to-r from-purple-600 to-purple-400"></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-secondary-800 dark:text-white">Frontend</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {/* React */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">React</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Next.js */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10 dark:invert" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Next.js</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* HTML */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">HTML5</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* CSS */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">CSS3</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tailwind */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="group relative transition duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-300 dark:from-green-600 dark:to-green-400 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
                <div className="h-1.5 bg-gradient-to-r from-green-600 to-green-400"></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-secondary-800 dark:text-white">Backend</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {/* Node.js */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Node.js</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* PostgreSQL */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">PostgreSQL</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* MongoDB */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">MongoDB</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Flask */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-10 h-10 dark:invert" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Flask</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* FastAPI */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current text-secondary-800 dark:text-white">
                          <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" />
                        </svg>
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">FastAPI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cloud & DevOps */}
            <div className="group relative transition duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-300 dark:from-indigo-600 dark:to-indigo-400 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
                <div className="h-1.5 bg-gradient-to-r from-indigo-600 to-indigo-400"></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-secondary-800 dark:text-white">Cloud & DevOps</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {/* AWS */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">AWS</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Azure */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Azure</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Docker */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Docker</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Kubernetes */}
                    <div className="group/icon flex flex-col items-center justify-center gap-2">
                      <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-10 h-10" />
                        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium">Kubernetes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-32 px-4 md:px-6 rounded-[2.5rem] relative overflow-hidden my-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-blue-500 to-primary-500 dark:from-primary-700 dark:via-blue-600 dark:to-primary-600"></div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 dark:opacity-10 mix-blend-overlay"></div>
        
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white dark:from-secondary-900 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-secondary-900 to-transparent z-10"></div>
        
        <div className="relative max-w-4xl mx-auto text-center z-20">
          <svg className="w-20 h-20 mx-auto mb-10 text-white/90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight tracking-tight">Let's Work Together</h2>
          <p className="text-xl md:text-2xl text-blue-50 mb-14 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for software engineering internship positions.
            View my work or contact me to discuss how I can contribute to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/projects" 
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-white rounded-full opacity-80 group-hover:opacity-100 blur-sm transition duration-300 group-hover:duration-200"></div>
              <span className="relative inline-flex items-center gap-2 bg-white group-hover:bg-gray-50 transition-colors duration-300 text-primary-600 px-8 py-4 rounded-full shadow-md hover:shadow-lg z-10 font-medium">
                Browse Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/experience" 
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-white rounded-full opacity-80 group-hover:opacity-100 blur-sm transition duration-300 group-hover:duration-200 dark:from-blue-200 dark:to-white"></div>
              <span className="relative inline-flex items-center gap-2 bg-blue-700 border border-blue-600 group-hover:bg-blue-800 transition-colors duration-300 text-white px-8 py-4 rounded-full shadow-md hover:shadow-lg z-10 font-medium">
                View Experience
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
