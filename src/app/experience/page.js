export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Company Name",
      location: "City, State",
      period: "May 2023 - Aug 2023",
      description: [
        "Developed and maintained web applications using React.js and Node.js",
        "Collaborated with senior developers to optimize database queries resulting in 30% faster load times",
        "Implemented responsive design principles to improve mobile user experience",
        "Participated in daily stand-ups and weekly sprint planning sessions"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Git"]
    },
    {
      title: "Junior Developer",
      company: "Company Name",
      location: "City, State",
      period: "Jan 2023 - Apr 2023",
      description: [
        "Assisted in developing frontend features for e-commerce platform",
        "Fixed bugs and improved existing codebase",
        "Created unit tests for critical components",
        "Documented code and processes for team knowledge sharing"
      ],
      technologies: ["JavaScript", "HTML/CSS", "Jest", "Jira"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      location: "City, State",
      period: "2020 - 2024 (Expected)",
      description: [
        "GPA: 3.8/4.0",
        "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering",
        "Senior Project: [Brief description of your project]"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "High School Name",
      location: "City, State",
      period: "2016 - 2020",
      description: [
        "GPA: 3.9/4.0",
        "AP Computer Science, AP Calculus, AP Physics"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h1>
      
      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          Work Experience
        </h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <p className="text-lg">{exp.company}, {exp.location}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              
              <ul className="list-disc list-inside space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          Education
        </h2>
        
        <div className="space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-lg">{edu.institution}, {edu.location}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                  {edu.period}
                </p>
              </div>
              
              <ul className="list-disc list-inside space-y-2">
                {edu.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          Skills & Certifications
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'Python', 
                'SQL', 'MongoDB', 'Git', 'CI/CD', 'AWS', 'Docker'].map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Certifications</h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-700 dark:text-gray-300">
                AWS Certified Developer - Associate (2023)
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                Microsoft Certified: Azure Fundamentals (2022)
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                Google IT Automation with Python Professional Certificate (2021)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 