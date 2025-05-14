'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Experience() {
  const experiences = [
    {
      title: "FanDuel",
      company: "Software Engineering Intern",
      location: "Atlanta, GA",
      period: "May 2025 - August 2025",
      logo: "/images/companies/fanduel.png",
      description: [
        "Improving the function and adding features to the FanDuel Sportsbook through full-stack TypeScript and JavaScript development"
      ],
      technologies: ["JavaScript", "TypeScript", "React", "React Native"]
    },
    {
      title: "Georgia Tech Student Foundation Investments Committee",
      company: "Quantitative Analyst",
      location: "Atlanta, GA",
      period: "January 2025 - Present",
      logo: "/images/companies/gtsf.jpeg",
      description: [
        "Completed selective mentorship program learning investing, valuation, financial modeling, and quantitative analysis",
        "Creating and optimizing trading strategies to enhance performance and build upon current portfolio of $2.5 million",
        "Contributing to the development of automated trading systems and controllers to execute trades across stocks and ETFs",
        "Collaborating with sector teams to backtest models and refine strategies based on historical market data and performance metrics"
      ],
      technologies: ["Python", "NumPy", "Pandas", "SciPy", "Scikit-learn", "Matplotlib", "XGBoost", "FinBERT", "Financial Modeling", "Statsmodels"]
    },
    {
      title: "Microsoft",
      company: "Product Management Intern",
      location: "Atlanta, GA",
      period: "February 2025 - May 2025",
      logo: "/images/companies/microsoft.webp",
      description: [
        "Built multi-agent Copilot system reducing non-critical incident resolution time by 50%, saving $360 per incident/$504K Annually",
        "Designed/coded asynchronous agent workflow pipeline using Autogen and Semantic Kernel for continuous data transfer",
        "Optimized agent interaction by testing of 35+ profiles (goal oriented, rule based, ML-based, etc.) to maxmize logical resolution",
        "Wrote 25+ product specs and agent interaction protocols enabling integration between agents and external support APIs",
      ],
      technologies: ["Azure Cognitive Services", "Microsoft Copilot", "System Design", "AI Agents", "Autogen", "Semantic Kernel"]
    },
    {
      title: "United States Soccer Federation",
      company: "Technology Consultant",
      location: "Atlanta, GA",
      period: "January 2025 - April 2025",
      logo: "/images/companies/ussf.png",
      description: [
        "Engineered comprehensive event dashboard for 20+ U.S. Soccer executives, optimizing national team match scheduling",
        "Devised data integration of 500K+ rows of ticket sales, venue market data, and match history, enabling data-driven planning",
        "Established searchable database of 150+ stadiums with filters for capacity, location, and amenities, accelerating venue selection",
        "Created attendance forecasting tool analyzing regional demographics and historical patterns to maximize ticket revenue potential"
      ],
      technologies: ["Tableau", "Excel", "SQL", "Python"]
    },
    {
      title: "The Medford Research Group",
      company: "Research Intern",
      location: "Atlanta, GA",
      period: "December 2024 - Present",
      logo: "/images/companies/vip.png",
      description: [
        "Automating SPARC-based Density Functional Theory workflows with Python scripts, reducing setup effort by 20%",
        "Simulating molecular structures using HPC-based DFT with Atomic Simulation Envs to process 1,000+ interactions",
        "Configured 45+ C files for various physical/chemical calculations such as adsorption, spin polarization, and charge density",
        "Reproducing DFT calculations from 15+ published research papers to evaluate ChatDFT accuracy, enhancing model training"
      ],
      technologies: ["SPARC", "High Performance Computing", "Python", "Atomic Simulation Environments"]
    },
    {
      title: "Alpha Kappa Psi - Epsilon Sigma",
      company: "Director of Software Engineering",
      location: "Atlanta, GA",
      period: "December 2024 - Present",
      logo: "/images/companies/akpsi.png",
      description: [
        "Constructed interactive interview preparation tool featuring AI generated practice questions and real-time feedback",
        "Collaborated on React, MongoDB, & AWS-based rush application centralizing info for 160+ candidates, reducing decision time",
        "Implemented resume database/search tool using Next.js, PostgreSQL, and AWS helping 110+ members develop connections",
        "Led 10-person development team using Agile methodology, implementing sprints and stand-ups that accelerated feature delivery",
      ],
      technologies: ["JavaScript", "React", "MongoDB", "AWS", "Firebase", "Node.js", "TensorFlow"]
    },
    {
      title: "Trading @ Georgia Tech",
      company: "Software Engineer",
      location: "Atlanta, GA",
      period: "October 2024 - February 2025",
      logo: "/images/companies/trading.png",
      description: [
        "Engineered responsive trading platform interface that supported national mock trading competitions with 400+ concurrent users ",
        "Utilized Node.js for Web Socket communication to enable real-time bid/ask updates, order book sync, and 2500+ live trades ",
        "Created 10+ REST API endpoints designed with Express.js for order submission/cancellation and querying/visualization",
        "Crafted 8 React visualizations, including stock movements and candlestick charts, to visualize changing market dynamics"
      ],
      technologies: ["JavaScript", "React", "Node.js", "Express.js", "Socket.io"]
    },
    {
      title: "LifeCycle Building Center",
      company: "Data Science Intern",
      location: "Atlanta, GA",
      period: "June 2023 - August 2023",
      logo: "/images/companies/lifecycle.png",
      description: [
        "Engineered data-driven inventory optimization system boosting annual profits by $175K & reducing waste by 31%",
        "Developed automated ETL pipeline processing 120+ heterogeneous datasets, increasing analytical efficiency by 65%",
        "Executed SQL-based transaction analysis across 2.3M+ records, uncovering 5 key market segments driving revenue",
        "Developed customized matplotlib visualizations to communicate complex trend analyses to non-technical stakeholders"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "SQL", "Google BigQuery", "Matplotlib"]
    },
    {
      title: "FIRST Tech Challenge Team 14116",
      company: "Programming Team Leader",
      location: "Marietta, GA",
      period: "August 2020 - May 2024",
      logo: "/images/companies/first.png",
      description: [
        "Developed 160+ Java and Python programs enabling robots to execute specialized tasks across 40+ tournaments",
        "Designed 25+ algorithms with object detection, gyroscope & sensor use, and encoder control for precise movement",
        "Utilized a PID controller and RoadRunner motion profiling libraries to achieve a 90% autonomous success rate",
        "Mentored fellow team programmers and set up Git for the team to ensure smooth collaboration and source control"
      ],
      technologies: ["Java", "Python", "PID", "OpenCV", "RoadRunner", "TensorFlow"]
    }
  ];

  const education = [
    {
      degree: "Georgia Institute of Technology",
      institution: "Bachelor of Science in Computer Science",
      location: "Atlanta, GA",
      period: "Expected Graduation: May 2027",
      logo: "/images/education/gt.png",
      description: [
        "GPA: 4.0/4.0",
        "Concentration: Artificial Intelligence and Information Internetworks",
        "Minor: Computing + Business through the Denning Technology and Management Program",
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Objects and Design, Discrete Math for CS",
        "Dean's List/Faculty Honors: Fall 2024"
      ]
    },
    {
      degree: "The Walker School",
      institution: "High School Diploma",
      location: "Marietta, GA",
      period: "",
      logo: "/images/education/walker.png",
      description: [
        "GPA: 4.8/4.0",
        "Relevant Coursework: AP Computer Science A, AP Computer Science Principles, AP Calculus BC, AP Physics C, AP Chemistry",
        "Involvements: FIRST Tech Challenge Robotics Captain, National Honor Society President, Soccer Team Captain"
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 text-center animate-fade-in">
        <div className="inline-block relative">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent relative z-10 pb-2">
          Experience
        </h1>
          <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-400 z-0" style={{ bottom: '0.3rem' }}></div>
        </div>
        <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 mb-8">Follow my professional journey and educational background.</p>
      </div>
      
      {/* Work Experience */}
      <section className="mb-20">
        <div className="flex items-center mb-10 animate-fade-in animate-delay-200">
          <h2 className="text-3xl font-bold text-secondary-800 dark:text-white">Work Experience</h2>
          <div className="h-0.5 flex-grow ml-6 bg-gradient-to-r from-primary-500/60 to-blue-400/60"></div>
        </div>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative transition duration-500 animate-fade-in"
              style={{ animationDelay: `${(index+3) * 0.1}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 dark:from-primary-600 dark:to-blue-500 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-secondary-900 rounded-full overflow-hidden shadow-md">
                        <Image 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          fill
                          sizes="(max-width: 768px) 80px, 96px"
                          style={{ objectFit: 'contain' }}
                          className="p-2"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">{exp.title}</h3>
                          <p className="text-lg font-medium text-secondary-700 dark:text-gray-200">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="text-primary-600 dark:text-primary-400 text-sm md:text-base font-bold">
                            {exp.period}
                          </p>
                          <p className="text-primary-600 dark:text-primary-400 text-sm md:text-base font-bold">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      
                      <ul className="list-disc list-inside space-y-2 mb-6 text-secondary-600 dark:text-gray-300">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="pl-1">
                            <span className="text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200 shadow-sm hover:shadow hover:bg-primary-100 hover:border-primary-300 hover:-translate-y-0.5 transition-all duration-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Education */}
      <section className="mb-20 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-800 dark:text-white">Education</h2>
          <div className="h-0.5 flex-grow ml-6 bg-gradient-to-r from-primary-500/60 to-blue-400/60"></div>
        </div>
        
        <div className="space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="group relative transition duration-500 animate-fade-in" style={{ animationDelay: `${(index+11) * 0.1}s` }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 dark:from-primary-600 dark:to-blue-500 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
              <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-secondary-900 rounded-full overflow-hidden shadow-md">
                        <Image 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          fill
                          sizes="(max-width: 768px) 80px, 96px"
                          style={{ objectFit: 'contain' }}
                          className="p-2"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">{edu.degree}</h3>
                          <p className="text-lg font-medium text-secondary-700 dark:text-gray-200">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="text-primary-600 dark:text-primary-400 text-sm md:text-base font-bold">
                            {edu.period}
                          </p>
                          <p className="text-primary-600 dark:text-primary-400 text-sm md:text-base font-bold">
                            {edu.location}
                          </p>
                        </div>
                      </div>
                      
                      <ul className="list-disc list-inside space-y-2 text-secondary-600 dark:text-gray-300">
                        {edu.description.map((item, idx) => (
                          <li key={idx} className="pl-1">
                            <span className="text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Skills */}
      <section className="mb-16 animate-fade-in" style={{ animationDelay: '1.3s' }}>
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-800 dark:text-white">Skills & Awards</h2>
          <div className="h-0.5 flex-grow ml-6 bg-gradient-to-r from-primary-500/60 to-blue-400/60"></div>
        </div>
        
        <div className="group relative transition duration-500">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 dark:from-primary-600 dark:to-blue-500 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
          <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] border border-gray-100 dark:border-secondary-700">
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-secondary-800 dark:text-white">All Technical Skills</h3>
                
                <div className="grid grid-cols-11 gap-3">
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
                  
                  {/* C */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">C</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* SQL */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current text-blue-600 relative z-10">
                        <path d="M12 2c-5.05 0-9.375 1.81-9.375 4.044v11.912C2.625 20.19 6.95 22 12 22s9.375-1.81 9.375-4.044V6.044C21.375 3.81 17.05 2 12 2zM3.375 6.044C3.375 4.962 6.857 3.375 12 3.375s8.625 1.587 8.625 2.669V7.65C18.5 8.798 15.396 9.5 12 9.5s-6.5-.702-8.625-1.85V6.044zm0 3.956c1.894 1.022 4.825 1.563 8.625 1.563s6.731-.54 8.625-1.563v3.25C18.5 14.298 15.396 15 12 15s-6.5-.702-8.625-1.85v-3.15zm0 5.5c1.894 1.022 4.825 1.563 8.625 1.563s6.731-.54 8.625-1.563v3.5C20.625 20.188 17.143 21.75 12 21.75S3.375 20.188 3.375 19.1v-3.6z"/>
                      </svg>
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">SQL</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rust */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" alt="Rust" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Rust</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dart */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Dart</span>
                      </div>
                    </div>
                  </div>
                  
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
                  
                  {/* React Native */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">React Native</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Angular */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Angular</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flutter */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Flutter</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bootstrap */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Bootstrap</span>
                      </div>
                    </div>
                  </div>
                  
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
                  
                  {/* TensorFlow */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">TensorFlow</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* PyTorch */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">PyTorch</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* NumPy */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">NumPy</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pandas */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Pandas</span>
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
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">FastAPI</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Django */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-8 h-8 relative z-10 dark:invert" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Django</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* MATLAB */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" alt="MATLAB" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">MATLAB</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* D3.js */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-plain.svg" alt="D3.js" className="w-8 h-8 relative z-10 dark:invert" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">D3.js</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* MySQL */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">MySQL</span>
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
                  
                  {/* Selenium */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Selenium</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Scikit-learn */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Scikit-learn</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* SciPy */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://scipy.org/images/logo.svg" alt="SciPy" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">SciPy</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AWS Lambda */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-9 h-9 bg-[#FF9900] flex items-center justify-center rounded relative z-10">
                        <span className="text-white font-bold text-xl">λ</span>
                      </div>
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">AWS Lambda</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AWS S3 */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-9 h-9 bg-[#E93A30] flex items-center justify-center rounded relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6 fill-current text-white">
                          <path d="M25 1L8 10v30l17 9 17-9V10L25 1zm14 37.5l-14 7.5-14-7.5V12.5L25 5l14 7.5v30z" />
                          <path d="M25 20a5 5 0 100 10 5 5 0 000-10z" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">AWS S3</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AWS EC2 */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-9 h-9 bg-[#FF9900] flex items-center justify-center rounded relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
                          <path d="M3.5 3C2.67 3 2 3.67 2 4.5V19.5C2 20.33 2.67 21 3.5 21H20.5C21.33 21 22 20.33 22 19.5V4.5C22 3.67 21.33 3 20.5 3H3.5ZM7 7H11V9H7V7ZM7 11H11V13H7V11ZM7 15H11V17H7V15ZM13 7H17V9H13V7ZM13 11H17V13H13V11ZM13 15H17V17H13V15Z" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">AWS EC2</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Azure */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Azure</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* GCP */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="GCP" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">GCP</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Git */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Git</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Linux */}
                  <div className="group/icon flex flex-col items-center justify-center">
                    <div className="relative w-14 h-14 flex items-center justify-center bg-white dark:bg-secondary-700 rounded-xl shadow-sm transition duration-300 group-hover/icon:shadow-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-blue-400/30 dark:from-primary-600/40 dark:to-blue-500/40 opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8 relative z-10" />
                      <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs font-medium">Linux</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-secondary-800 dark:text-white">Awards</h3>
                <ul className="list-disc list-inside space-y-3 text-secondary-600 dark:text-gray-300">
                  <li className="pl-1">
                    <span className="text-base font-medium">Faculty Honors/Dean&#39;s List: Fall 2024, Spring 2025</span>
                  </li>
                  <li className="pl-1">
                    <span className="text-base font-medium">Valedictorian Award</span>
                  </li>
                  <li className="pl-1">
                    <span className="text-base font-medium">National Merit Scholar</span>
                  </li>
                  <li className="pl-1">
                    <span className="text-base font-medium">Eagle Scout Award</span>
                  </li>
                  <li className="pl-1">
                    <span className="text-base font-medium">FIRST Tech Challenge Dean&#39;s List Finalist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="text-center mt-16 animate-fade-in animate-delay-800">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg font-medium group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
} 