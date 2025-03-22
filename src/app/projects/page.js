import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      image: "/project1.jpg",
      demoLink: "https://project-demo.com",
      githubLink: "https://github.com/yourusername/project-name",
      highlights: [
        "Implemented secure user authentication system",
        "Created responsive UI with React and Tailwind CSS",
        "Integrated RESTful API with Node.js and Express",
        "Designed MongoDB schema for optimal data storage"
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application that helps teams organize their workflow with features like task assignment, due dates, and progress tracking.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "/project2.jpg",
      demoLink: "https://project-demo.com",
      githubLink: "https://github.com/yourusername/project-name",
      highlights: [
        "Utilized Next.js and TypeScript for type-safe development",
        "Implemented real-time updates with Firebase",
        "Created drag-and-drop interface for task management",
        "Added email notifications for task assignments"
      ]
    },
    {
      title: "Weather Forecast App",
      description: "A web application that provides real-time weather information and forecasts based on user location or search queries.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API", "Geolocation API"],
      image: "/project3.jpg",
      demoLink: "https://project-demo.com",
      githubLink: "https://github.com/yourusername/project-name",
      highlights: [
        "Integrated with OpenWeather API for accurate weather data",
        "Implemented geolocation for automatic user location detection",
        "Created interactive visualization of weather patterns",
        "Designed responsive interface for all device types"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            {/* Project Image (placeholder) */}
            <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">Project Image</span>
            </div>
            
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="px-6 pb-6 mt-auto">
              <div className="flex flex-wrap gap-4">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Projects Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          Additional Projects
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <ul className="space-y-4">
            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="font-bold text-primary">Machine Learning Image Classifier</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Built an image classification model using TensorFlow that can identify objects with 90% accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  Python
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  TensorFlow
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  Keras
                </span>
              </div>
            </li>
            
            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="font-bold text-primary">Personal Finance Tracker</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Created a web application to help users track expenses and visualize spending patterns.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  Chart.js
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  Firebase
                </span>
              </div>
            </li>
            
            <li>
              <h3 className="font-bold text-primary">Algorithm Visualization Tool</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Developed an interactive web app that visualizes common algorithms like sorting and pathfinding.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  React
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  SVG
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full">
                  D3.js
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Interested in collaborating?</h2>
        <p className="text-lg mb-6">I'm always open to discussing new projects and opportunities.</p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
} 