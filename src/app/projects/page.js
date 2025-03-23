import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Monty.ai",
      description: "Application that allows users to develop their own trading strategies and backtest on past stock data and monte carlo simulations while receiving LLM insights to improve their strategies.",
      technologies: ["Python", "JavaScript", "React", "FastAPI", "Polygon API", "yFinance", "Gemini API"],
      image: "/images/projects/monty.png",
      githubLink: "https://github.com/ayan-goel/monty"
    },
    {
      title: "Trading Platform",
      description: "A trading platform UI integrated with a matching engine that facilitates order management and real-time price updates. Provides tools to interact with the trading engine by submitting orders, monitoring trades, visualizing the order book, and tracking market prices.",
      technologies: ["JavaScript", "React", "Node.js", "Express.js", "REST APIs", "Socket.io"],
      image: "/images/projects/tadingcomp.png",
      githubLink: "https://github.com/ayan-goel/Trading-Competition"
    },
    {
      title: "SpeakEasy",
      description: "A web application that allows users to practice their public speaking skills by recording and analyzing their speech and offering LLM-based feedback to improve their performance.",
      technologies: ["JavaScript", "Python", "Next.js", "Flask", "OpenCV", "TensorFlow", "MongoDB", "NVIDIA NIM"],
      image: "/images/projects/speakeasy.png",
      githubLink: "https://github.com/ayan-goel/SpeakEasy"
    }
  ];

  const additionalProjects = [
    {
      title: "MediSense AI",
      description: "Engineered a full-stack web application that helps patients easily find diagnoses for conditions based on symptoms. Tuned Google BERT LLM predicting prognoses with 91% accuracy across 150+ trials with 50,000+ medical reports. Trained Logistic Regression & Random Forest models assessing risk factors with 83% accuracy on 560,000+ rows.",
      technologies: ["Python", "Scikit-learn", "Google BERT LLM", "NumPy", "Pandas", "Streamlit"],
      githubLink: "https://github.com/ayan-goel/HackGT11"
    },
    {
      title: "Premier Leauge Betting Assistant",
      description: "Created dashboard to help Premier League bettors make more informed decisions. Applied Selenium to webscrape data from DraftKings, Bet365, and Pinnacle to compare real-time PL match odds and find arbitrage opportunities. Calculated the percentage chance of bets to hit with scraped data and used D3.js to visualize the data.",
      technologies: ["Python", "Selenium", "D3.js", "NumPy", "Pandas"],
      githubLink: "https://github.com/ayan-goel/soccer-betting-analysis"
    },
    {
      title: "Movies Store Application",
      description: "Website that allows users to view, explore, and buy movies while creating and reading user reviews.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      githubLink: "https://github.com/ayan-goel/VAASA"
    },
    {
      title: "Personal Portfolio",
      description: "This very website you are on right now.",
      technologies: ["React", "SVG", "D3.js"],
      githubLink: "https://github.com/ayan-goel/personal_portfolio"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient bg-gradient-to-r from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent relative inline-block">
          Projects
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-400 transform origin-left"></span>
        </h1>
        <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
          Explore my latest work and personal projects.
        </p>
      </div>

      {/* Main Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative transition duration-500 h-full animate-fade-in" style={{ animationDelay: `${(index+1) * 0.1}s` }}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 dark:from-primary-600 dark:to-blue-500 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
            <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:shadow-xl border border-gray-100 dark:border-secondary-700 h-full flex flex-col">
              {/* Project Image */}
              <div className="h-48 bg-gray-200/80 dark:bg-gray-700/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 dark:to-black/40 z-10"></div>
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
                    <span className="text-gray-600 dark:text-gray-300 z-20">Project Image</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3">{project.title}</h3>
                <p className="text-secondary-600 dark:text-gray-300 mb-5">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm rounded-full border border-primary-100 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-800/40 transition-colors duration-300"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-secondary-700 dark:bg-secondary-700 dark:text-white text-sm rounded-full shadow-sm hover:shadow-md border border-gray-200 dark:border-secondary-600 hover:bg-gray-200 dark:hover:bg-secondary-600 transition-all duration-300 font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Projects Section */}
      <section className="mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Additional Projects</h2>
          <div className="h-0.5 flex-grow ml-6 bg-gradient-to-r from-primary-500/60 to-blue-400/60"></div>
        </div>
        
        <div className="group relative transition duration-500">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-400 dark:from-primary-600 dark:to-blue-500 rounded-2xl opacity-50 group-hover:opacity-80 blur-sm transition duration-500"></div>
          <div className="relative bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:shadow-xl border border-gray-100 dark:border-secondary-700">
            <div className="p-6 md:p-8">
              <ul className="space-y-8">
                {additionalProjects.map((project, index) => (
                  <li key={index} className={index < additionalProjects.length - 1 ? "border-b border-gray-200 dark:border-gray-700 pb-6 group/item" : "group/item"}>
                    <h3 className="font-bold text-xl text-primary-600 dark:text-primary-400 mb-3 group-hover/item:text-primary-500 dark:group-hover/item:text-primary-300 transition-colors duration-300">{project.title}</h3>
                    <p className="text-secondary-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm rounded-full border border-primary-100 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-800/40 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-gray-100 text-secondary-700 dark:bg-secondary-700 dark:text-white text-sm rounded-full shadow-sm hover:shadow-md border border-gray-200 dark:border-secondary-600 hover:bg-gray-200 dark:hover:bg-secondary-600 transition-all duration-300 font-medium"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View Code
                      </a>
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