'use client';

import { useState } from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | string;
  github: string;
  featured: boolean;
  live?: string;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "DevTrackr",
      description: "A FastAPI and PostgreSQL-based task management API with JWT authentication, task priorities, time tracking, soft-deletes, and Dockerized deployment with GitHub Actions CI/CD.",
      image: "/project1.jpg",
      technologies: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
      category: "backend",
      github: "https://github.com/jadengong/devtrackr",
      featured: true
    },
    {
      id: 2,
      title: "Codebox",
      description: "A full-stack code execution sandbox featuring a React frontend and Node.js/Express backend that runs multiple languages (Python, JavaScript, Java, C++) securely in Docker containers.",
      image: "/codebox.jpg",
      technologies: ["React", "Node.js", "Express", "Docker"],
      category: "fullstack",
      github: "https://github.com/jadengong/codebox",
      featured: true
    },
    {
      id: 3,
      title: "Monopoly Board",
      description: "A C++20 implementation of the classic Monopoly board game featuring a circular linked list, merge sort, and custom memory management.",
      image: "/monopoly.jpg",
      technologies: ["C++", "CMake"],
      category: "backend",
      github: "https://github.com/jadengong/monopoly-board",
      featured: true
    }    
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
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
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400 dark:text-gray-600">
                    📱
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
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
                    className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium"
                    >
                      Live Demo
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
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
          >
            View More on GitHub
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
