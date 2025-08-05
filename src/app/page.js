'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TypingAnimation from '../components/TypingAnimation';



export default function Home() {
  const roles = [
    "Software Engineer",
    "Computer Scientist",
    "Full-Stack Developer",
    "Problem Solver",
    "Builder",
	  "Machine Learning Engineer",
	  "Data Scientist",
	  "Researcher",
    "System Designer"
  ];
  
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null)
  };
  
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-20 md:mt-0">
      {/* Hero Section with Profile Picture */}
      <section className="pt-24 md:pt-40 lg:pt-44 pb-16 md:pb-24 px-4 md:px-6 min-h-[100vh] flex items-center">
        <div 
          className="flex flex-col md:flex-row md:items-center gap-16 md:gap-20 lg:gap-24"
          style={{ transform: 'translateY(-30px) translateX(30px)' }}
        >
          <div className="w-full md:w-3/5 order-2 md:order-1 space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.8] pb-5">
                Hi, I&#39;m <span className="text-gradient bg-gradient-to-r from-primary-600 via-blue-500 to-primary-400 bg-clip-text text-transparent inline-block pb-2">Ayan.</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-secondary-700 dark:text-gray-200 mt-6">
                I&#39;m a <TypingAnimation texts={roles} />
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-secondary-600 dark:text-gray-300 max-w-xl leading-relaxed font-light animate-fade-in animate-delay-200">
              I&#39;m passionate about creating innovative solutions through elegant code. With a strong foundation in computer science
              and a deep curiosity for emerging technologies, I build applications that solve real problems.
            </p>
            
            {/* Social Icons and Resume Button */}
            <div className="flex flex-wrap gap-5 pt-6 items-center animate-fade-in animate-delay-400">
              <a 
                href="https://github.com/ayan-goel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative transition duration-300"
                aria-label="GitHub Profile"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-70 blur-sm transition duration-300 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center bg-white dark:bg-secondary-800 p-4 rounded-full shadow-sm group-hover:shadow-md border border-gray-200 dark:border-secondary-700 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ayan-goel/" 
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
                href="mailto:agoel320@gatech.edu" 
                className="group relative transition duration-300"
                aria-label="Email"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-70 blur-sm transition duration-300 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center bg-white dark:bg-secondary-800 p-4 rounded-full shadow-sm group-hover:shadow-md border border-gray-200 dark:border-secondary-700 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
              

              
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
          
          <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center mb-8 md:mb-0 animate-fade-in animate-delay-300">
            <div className="relative h-80 w-80 md:h-[26rem] md:w-[26rem]">
              {/* Enhanced blue glow behind image */}
              <div className="absolute -z-10 -inset-1 rounded-full bg-gradient-to-br from-primary-500/70 to-blue-400/70 dark:from-primary-600/80 dark:to-blue-500/80 blur-3xl"></div>
              
              {/* Second glow layer for depth */}
              <div className="absolute -z-10 -inset-10 rounded-full bg-gradient-to-tr from-blue-500/40 to-primary-400/40 dark:from-blue-600/50 dark:to-primary-500/50 blur-2xl"></div>
              
              {/* Decorative elements */}
              <div className="absolute -z-5 -top-6 -left-6 w-32 h-32 bg-blue-500/15 dark:bg-blue-400/15 rounded-full rotate-12 blur-xl"></div>
              <div className="absolute -z-5 -bottom-6 -right-6 w-40 h-40 bg-primary-500/15 dark:bg-primary-400/15 rounded-full -rotate-12 blur-xl"></div>
              
              {/* Profile picture container - removed border and adjusted shadow */}
              <div className="relative h-full w-full">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Actual picture */}
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-lg font-light text-secondary-400 dark:text-secondary-300">Profile Photo</span>
                    <Image 
                      src="/images/pfp.jpg" 
                      alt="Ayan Goel" 
                      fill
                      sizes="(max-width: 768px) 288px, 384px"
                      priority
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Combined Section */}
      <section className="py-24 pb-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* About Me - Left Column */}
            <div className="w-full lg:w-1/2" ref={sectionRefs.about} id="about">
              <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="inline-block">
                  <h2 className="relative text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    About Me
                    <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transform origin-left"></div>
                  </h2>
                </div>
              </div>
              
              <div className="group relative transition duration-500">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 dark:from-primary-600 dark:to-blue-500 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
                <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
                  <div className="p-5 md:p-6">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-lg text-secondary-600 dark:text-gray-300 mb-6 leading-relaxed">
                        I&#39;m a junior computer science undergraduate at Georgia Tech with a strong foundation in fundamentals like data structures and algorithms 
                        and hands-on experience in full-stack development, AI integrations, and data-driven solutions. 
                        I&#39;ve contributed to a wide variety of projects and used tools in frontend, backend, and DevOps, making me versatile for any need.
                      </p>
                      
                      <p className="text-lg text-secondary-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Through internships at FanDuel and Microsoft and various other involvements at Georgia Tech, I&#39;ve architected scalable systems, 
                      optimized workflows, and driven impactful results, while working with diverse teams in professional settings.
                      I enjoy tackling complex problems with elegant, 
                      efficient solutions and am always seeking ways to continue growing and building technology
                       that solves real-world challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills - Right Column */}
            <div className="w-full lg:w-1/2" ref={sectionRefs.skills} id="skills">
              <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="inline-block">
                  <h2 className="relative text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Top Skills
                    <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transform origin-left"></div>
                  </h2>
                </div>
              </div>
              
              {/* Single unified skills box with compressed spacing */}
              <div className="group relative transition duration-500">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 dark:from-primary-600 dark:to-blue-500 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
                <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
                  <div className="p-5 md:p-6">
                    {/* Programming Languages */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-3 text-secondary-800 dark:text-white">Programming Languages</h3>
                      <div className="grid grid-cols-6 gap-3">
                        {/* JavaScript */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">JavaScript</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* TypeScript */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">TypeScript</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Python */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Python</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Java */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Java</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* C++ */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">C++</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* SQL -> Dart */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Dart</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Frontend */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-3 text-secondary-800 dark:text-white">Frontend</h3>
                      <div className="grid grid-cols-6 gap-3">
                        {/* React */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">React</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Next.js */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-8 h-8 dark:invert relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Next.js</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* HTML */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">HTML5</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* CSS */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">CSS3</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Tailwind */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#06B6D4] relative z-10">
                              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                            </svg>
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Tailwind</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Dart -> Flutter */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Flutter</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Backend */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-3 text-secondary-800 dark:text-white">Backend</h3>
                      <div className="grid grid-cols-6 gap-3">
                        {/* Node.js */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Node.js</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Express.js */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-8 h-8 dark:invert relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Express.js</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* PostgreSQL */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">PostgreSQL</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* MongoDB */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">MongoDB</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Flask */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-8 h-8 dark:invert relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Flask</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* FastAPI */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-secondary-800 dark:text-white relative z-10">
                              <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" />
                            </svg>
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">FastAPI</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cloud & DevOps */}
                    <div>
                      <h3 className="text-lg font-bold mb-3 text-secondary-800 dark:text-white">Cloud & DevOps</h3>
                      <div className="grid grid-cols-6 gap-3">
                        {/* AWS */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#FF9900] relative z-10">
                              <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.67-.367-1.27-.367-.272 0-.55.031-.838.103-.288.072-.567.16-.838.272a2.29 2.29 0 0 1-.343.168.488.488 0 0 1-.128.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.215-.39.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.782c.151 0 .255.025.311.08.064.048.112.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
                            </svg>
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">AWS</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Azure */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Azure</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* GCP */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud Platform" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">GCP</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Docker */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Docker</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Kubernetes */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Kubernetes</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Firebase */}
                        <div className="group/icon flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-8 h-8 relative z-10" />
                            <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                              <span className="text-xs font-medium">Firebase</span>
                            </div>
                          </div>
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
      <section className="py-16 px-4 md:px-6 relative overflow-hidden my-4">
        <div className="group relative transition duration-500">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 dark:from-primary-600 dark:to-blue-500 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
          <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
            <div className="p-8 md:p-10">
              <div className="relative max-w-4xl mx-auto text-center">
                <svg className="w-16 h-16 mx-auto mb-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight tracking-tight pb-2">Let&#39;s Work Together.</h2>
                <p className="text-lg md:text-xl text-secondary-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  I&#39;m currently seeking software engineering internship positions.
                  View my work and/or contact me to discuss how I can contribute to your team.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
