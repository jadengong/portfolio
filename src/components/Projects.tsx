'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | string;
  github: string;
  live?: string;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "DevTrackr",
      description: "A FastAPI and PostgreSQL-based task management API with JWT authentication, task priorities, time tracking, soft-deletes, and Dockerized deployment with GitHub Actions CI/CD.",
      image: "/devtrackr.jpg",
      technologies: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
      category: "backend",
      github: "https://github.com/jadengong/devtrackr"
    },
    {
      id: 2,
      title: "Codebox",
      description: "A full-stack code execution sandbox featuring a React frontend and Node.js/Express backend that runs multiple languages (Python, JavaScript, Java, C++) securely in Docker containers.",
      image: "/codebox.jpg",
      technologies: ["React", "Node.js", "Express", "Docker"],
      category: "fullstack",
      github: "https://github.com/jadengong/codebox"
    },
    {
      id: 3,
      title: "Monopoly Board",
      description: "A C++20 implementation of the classic Monopoly board game featuring a circular linked list, merge sort, and custom memory management.",
      image: "/monopoly-board.jpg",
      technologies: ["C++", "CMake"],
      category: "backend",
      github: "https://github.com/jadengong/monopoly-board"
    },
    {
      id: 4,
      title: "The Crash App",
      description: "A Next.js/TypeScript hit-and-run reporting app with image uploads, license plate tracking, and verification workflows. Includes a reward system to incentivize accurate reporting and community engagement.",
      image: "/crashapp.jpg",
      technologies: ["Next.js", "Tailwind CSS", "React.js", "Python"],
      category: "fullstack",
      github: "https://github.com/alexziao05/innovate-4-sdsu-hackathon-2025"
    },
    {
      id: 5,
      title: "PrepPal", 
      description: "A full-stack AI interview coach using Next.js, FastAPI, and AWS S3/DynamoDB/Bedrock. It provides personalized interview preparation, feedback, and resources to help users prepare for their next job interview.",
      image: "/preppal.jpg",
      technologies: ["AWS", "FastAPI",],
      category: "fullstack",
      github: "https://github.com/jadengong/project5"
    },
    {
      id: 6,
      title: "AlgoCoach",
      description: "Add your project description here. This is a placeholder for your next project.",
      image: "/project6.jpg",
      technologies: ["Technology 1", "Technology 2"],
      category: "backend",
      github: "https://github.com/jadengong/project6"
    }
  ];

  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      const filtered = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);
      setFilteredProjects(filtered);
      setIsFiltering(false);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  return (
    <section 
      id="projects" 
      className={`py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-out transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:shadow-md'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-3 hover:scale-105 group"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="mb-4">
                  <p className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${expandedDescriptions.has(project.id) ? '' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>
                  {project.description.length > 150 && (
                    <button
                      onClick={() => {
                        const newExpanded = new Set(expandedDescriptions);
                        if (newExpanded.has(project.id)) {
                          newExpanded.delete(project.id);
                        } else {
                          newExpanded.add(project.id);
                        }
                        setExpandedDescriptions(newExpanded);
                      }}
                      className="text-blue-600 dark:text-blue-400 hover:underline mt-1 text-xs font-medium transition-colors"
                    >
                      {expandedDescriptions.has(project.id) ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-lg group/link"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-lg group/link"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/jadengong"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 transform hover:scale-105 hover:shadow-lg group"
            style={{
              animationDelay: '600ms',
              animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
            }}
          >
            <span className="flex items-center gap-2">
              View More on GitHub
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
