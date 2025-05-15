import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Monty",
      description: "Application that allows users to develop their own trading strategies and backtest on past stock data and monte carlo simulations while receiving LLM insights to improve their strategies.",
      technologies: ["Python", "JavaScript", "React", "FastAPI", "Polygon API", "yFinance", "Gemini API", "AWS EC2"],
      image: "/images/projects/monty2.png",
      githubLink: "https://github.com/ayan-goel/monty",
      demoLink: "https://devpost.com/software/monty-0h2xbj"
    },
    {
      title: "Resume Hub",
      description: "Resume search tool for AKPsi Business Fraternity that parses resumes with AI and allows users to find those with similar major, year, skills, and experience. Supports batch uploading of 100+ resumes at once.",
      technologies: ["Next.js", "Node.js", "Express.js","JavaScript", "PostgreSQL", "OpenAI API", "AWS S3", "AWS EC2"],
      image: "/images/projects/resume_database.png",
      githubLink: "https://github.com/ayan-goel/resume_app",
      demoLink: "https://gtakpsi-resume-app.vercel.app/"
    },
    {
      title: "Merge Fitness",
      description: "A companion mobile app for a personal trainer with 300+ clients. Allows trainers to assign workouts/nutrition plans to clients, track their progress, and schedule sessions. Supports AI meal scanning and live trainer tracking.",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Functions", "Calendly API", "Google Maps API", "Gemini API"],
      image: "/images/projects/merge2.jpeg",
      githubLink: "https://github.com/ayan-goel/merge_fitness",
      demoLink: "https://youtu.be/IlhnT_eyvPs"
    },
    {
      title: "Trading Platform",
      description: "A trading platform UI integrated with a matching engine that facilitates order management and real-time price updates. Provides tools to interact with the trading engine by submitting orders, monitoring trades, visualizing the order book, and tracking market prices.",
      technologies: ["JavaScript", "React", "Node.js", "Express.js", "REST APIs", "Socket.io"],
      image: "/images/projects/tadingcomp.png",
      githubLink: "https://github.com/ayan-goel/Trading-Competition"
    },
    {
      title: "Travel Star",
      description: "A web application that allows users to create AI-generated travel itineraries and manage these custom travel itineraries. Includes map integration, weather updates, hidden gems, restaurants, hotels, and more.",
      technologies: ["JavaScript", "Python", "Django", "Bootstrap", "MySQL", "Gemini API", "MapBox API"],
      image: "/images/projects/powertravel.png",
      githubLink: "https://github.com/ayan-goel/travelApp",
      demoLink: "https://travelstar.pythonanywhere.com"
    },
    {
      title: "SpeakEasy",
      description: "A web application that allows users to practice their public speaking skills by recording and analyzing their speech and offering LLM-based feedback to improve their performance.",
      technologies: ["JavaScript", "Python", "Next.js", "Flask", "OpenCV", "TensorFlow", "MongoDB", "NVIDIA NIM"],
      image: "/images/projects/speakeasy2.png",
      githubLink: "https://github.com/ayan-goel/SpeakEasy",
      demoLink: "https://devpost.com/software/speakeasy-p960yl"
    },
  ];

  const additionalProjects = [
    
    {
      title: "MediSense AI",
      description: "Engineered a full-stack web application that helps patients easily find diagnoses for conditions based on symptoms. Tuned Google BERT LLM predicting prognoses with 91% accuracy across 150+ trials with 50,000+ medical reports. Trained Logistic Regression & Random Forest models assessing risk factors with 83% accuracy on 560,000+ rows.",
      technologies: ["Python", "Scikit-learn", "Google BERT LLM", "NumPy", "Pandas", "Streamlit"],
      githubLink: "https://github.com/ayan-goel/HackGT11",
      demoLink: "https://devpost.com/software/medisenseai"
    },
    {
      title: "Premier League Betting Assistant",
      description: "Created dashboard to help Premier League bettors make more informed decisions. Applied Selenium to webscrape data from DraftKings, Bet365, and Pinnacle to compare real-time PL match odds and find arbitrage opportunities. Calculated the percentage chance of bets to hit with scraped data and used D3.js to visualize the data.",
      technologies: ["Python", "Selenium", "D3.js", "NumPy", "Pandas"],
      githubLink: "https://github.com/ayan-goel/soccer-betting-analysis"
    },
    {
      title: "Movies Store Application",
      description: "Website that allows users to view, explore, and buy movies while creating and reading user reviews. Project for CS 2340 Objects and Design class.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      githubLink: "https://github.com/ayan-goel/VAASA",
      demoLink: "https://ayangoel.pythonanywhere.com/"
    },
    {
      title: "Personal Portfolio",
      description: "This very website you are on right now.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/ayan-goel/personal_portfolio",
      demoLink: "https://ayangoel.net/"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 text-center animate-fade-in">
        <div className="inline-block relative">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-secondary-600 bg-clip-text text-transparent relative z-10 pb-2">
            Projects
          </h1>
          <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-400 z-0" style={{ bottom: '0.3rem' }}></div>
        </div>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto mt-6">
          Explore my latest work and personal projects.
        </p>
      </div>

      {/* Main Projects */}
      <div className="grid grid-cols-1 gap-8">
        {/* First row - 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="group relative transition duration-500 h-full animate-fade-in" style={{ animationDelay: `${(index+1) * 0.1}s` }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:shadow-xl border border-gray-100 h-full flex flex-col">
                {/* Project Image */}
                <div className="h-48 bg-gray-200/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"></div>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-600 z-20">Project Image</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{project.title}</h3>
                  <p className="text-secondary-600 mb-5">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200 shadow-sm hover:shadow hover:bg-primary-100 hover:border-primary-300 hover:-translate-y-0.5 transition-all duration-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-secondary-700 text-sm rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:bg-gray-200 transition-all duration-300 font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      View Code
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white text-sm rounded-full shadow-sm hover:shadow-md border border-primary-400 hover:bg-primary-600 transition-all duration-300 font-medium"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(3, 6).map((project, index) => (
            <div key={index+3} className="group relative transition duration-500 h-full animate-fade-in" style={{ animationDelay: `${(index+4) * 0.1}s` }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:shadow-xl border border-gray-100 h-full flex flex-col">
                {/* Project Image */}
                <div className="h-48 bg-gray-200/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"></div>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-600 z-20">Project Image</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{project.title}</h3>
                  <p className="text-secondary-600 mb-5">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200 shadow-sm hover:shadow hover:bg-primary-100 hover:border-primary-300 hover:-translate-y-0.5 transition-all duration-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-secondary-700 text-sm rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:bg-gray-200 transition-all duration-300 font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      View Code
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white text-sm rounded-full shadow-sm hover:shadow-md border border-primary-400 hover:bg-primary-600 transition-all duration-300 font-medium"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Projects Section */}
      <section className="mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-secondary-800 to-secondary-600 bg-clip-text text-transparent">Additional Projects</h2>
          <div className="h-0.5 flex-grow ml-6 bg-gradient-to-r from-primary-500/60 to-blue-400/60"></div>
        </div>
        
        <div className="group relative transition duration-500">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:shadow-xl border border-gray-100">
            <div className="p-6 md:p-8">
              <ul className="space-y-8">
                {additionalProjects.map((project, index) => (
                  <li key={index} className={index < additionalProjects.length - 1 ? "border-b border-gray-200 pb-6 group/item" : "group/item"}>
                    <h3 className="font-bold text-xl text-primary-600 mb-3 group-hover/item:text-primary-500 transition-colors duration-300">{project.title}</h3>
                    <p className="text-secondary-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200 shadow-sm hover:shadow hover:bg-primary-100 hover:border-primary-300 hover:-translate-y-0.5 transition-all duration-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 mt-3">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-secondary-700 text-sm rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:bg-gray-200 transition-all duration-300 font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                          View Code
                        </a>
                        {project.demoLink && (
                          <a 
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm rounded-full shadow-sm hover:shadow-md border border-primary-400 hover:bg-primary-600 transition-all duration-300 font-medium"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
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