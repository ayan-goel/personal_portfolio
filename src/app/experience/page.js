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
        "Improving the functionality of the FanDuel Sportsbook through full-stack development"
      ],
      technologies: ["JavaScript", "TypeScript", "React", "React Native"]
    },
    {
      title: "Microsoft",
      company: "Product Management Intern",
      location: "Atlanta, GA",
      period: "February 2025 - May 2025",
      logo: "/images/companies/microsoft.webp",
      description: [
        "Building multi-agent Copilot system reducing non-critical incident resolution time, saving $360 per incident",
        "Designing asynchronous agent workflow pipeline with 99\% reliability, decreasing intervention requirement",
        "Leveraging Azure Cognitive Services to develop multi-modal agent capabilities, enabling faster incident resolution",
        "Optimizing ML-based agent interaction by A/B testing of various scenarios, improving automation accuracy",
      ],
      technologies: ["Azure Cognitive Services", "Microsoft Copilot", "System Design", "AI Agents"]
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
        "Automating SPARC-based Density Functional Theory workflows with Python scripts, reducing setup effort",
        "Simulating molecular structures using HPC-based DFT with Atomic Simulation Envs to process 1,000+ interactions",
        "Conducting 500+ DFT simulations with  ChatDFT LLM to assess reproducibility and assisted scientific computing",
        "Reproducing DFT calculations from 30+ published research papers to evaluate ChatDFT accuracy, enhancing model training"
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
        "Collaborated on custom rush application centralizing information for 160+ candidates, reducing decision time for selection process",
        "Implemented full-stack points tracking app allowing members to monitor event participation and progress through dashboard",
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
        "Developed and optimized 10+ REST API endpoints connecting frontend to backend services, enabling 2,500+ trade simulations ",
        "Created 8 dynamic React data visualizations including real-time stock movements and interactive candlestick charts",
        "Architected WebSocket integration for real-time price updates, trade notifications, order placements, and portfolio tracking"
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-secondary-800 to-secondary-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent relative inline-block">
          Experience
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-400 transform origin-left"></span>
        </h1>
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
                          <p className="text-secondary-600 dark:text-gray-400 text-sm md:text-base">
                            {exp.period}
                          </p>
                          <p className="text-secondary-600 dark:text-gray-400 text-sm md:text-base">
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
                            className="px-3 py-1 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm rounded-full border border-primary-100 dark:border-primary-800"
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
                          <p className="text-secondary-600 dark:text-gray-400 text-sm md:text-base">
                            {edu.period}
                          </p>
                          <p className="text-secondary-600 dark:text-gray-400 text-sm md:text-base">
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
                <h3 className="text-xl font-bold mb-4 text-secondary-800 dark:text-white">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'C/C++', 'SQL/MySQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Rust', 'MATLAB', 'Assembly', 'Node.js', 
                  'React.js', 'React Native', 'Angular', 'Next.js', 'D3.js', 'Express.js', 'Flask', 'FastAPI', 'Django', 
                  'Bootstrap', 'Selenium', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'MongoDB', 'Firebase', 'AWS', 'Socket.io', 'Docker', 'Kubernetes'].map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-secondary-700 text-secondary-800 dark:text-gray-200 text-sm rounded-full border border-gray-200 dark:border-secondary-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-secondary-800 dark:text-white">Awards</h3>
                <ul className="list-disc list-inside space-y-3 text-secondary-600 dark:text-gray-300">
                  <li className="pl-1">
                    <span className="text-base font-medium">Faculty Honors/Dean&#39;s List: Fall 2024</span>
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