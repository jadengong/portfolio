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
  slides?: string;
  demo?: string;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());

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
      github: "https://github.com/alexziao05/innovate-4-sdsu-hackathon-2025",
      slides: "https://docs.google.com/presentation/d/1KfXnKUpl9hLCzp95O8mRHshecNZSj9pj5EF9j08w97s/edit",
      demo: "/TheCrashAppDemo.mp4"
    },
    {
      id: 5,
      title: "PrepPal", 
      description: "A full-stack AI interview coach using Next.js, FastAPI, and AWS S3/DynamoDB/Bedrock. It provides personalized interview preparation, feedback, and resources to help users prepare for their next job interview.",
      image: "/preppal.jpg",
      technologies: ["Next.js", "TypeScript", "FastAPI", "AWS Bedrock", "AWS DynamoDB", "AWS S3", "AWS Polly"],
      category: "fullstack",
      github: "https://github.com/hrushh22/SDSU-AI-Interview-Coach",
      slides: "https://docs.google.com/presentation/d/1YSSzkfGAfyw3AtjDWxrTY7Blt7rI0QHBDWZw4XJttqw/edit?slide=id.p1#slide=id.p1",
      demo: "https://www.loom.com/share/bd5e358b90c442109c3aa8a7803fd06f"
    },
    {
      id: 6,
      title: "AlgoCoach",
      description: "Work in progress...",
      image: "/project6.jpg",
      technologies: ["Spring Boot"],
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
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
            Selected work
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose">
            A few projects that represent the kinds of problems I like working on - systems, developer
            tooling, and product-facing features.
          </p>
          <div className="mt-6 section-rule" />
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`quiet-focus px-3 py-1.5 rounded-full text-sm transition border ${
                activeFilter === filter.id
                  ? 'bg-gray-900 text-white border-gray-900 dark:bg-gray-50 dark:text-gray-950 dark:border-gray-50'
                  : 'bg-transparent text-gray-700 dark:text-gray-300 border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-200 ${isFiltering ? 'opacity-70' : 'opacity-100'}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors duration-200 group"
            >
              {/* Project Image */}
              <div className="relative h-44 overflow-hidden bg-black/[0.02] dark:bg-white/[0.03]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium tracking-tight text-gray-950 dark:text-gray-50 mb-2">
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
                      className="quiet-focus text-gray-950 dark:text-gray-50 underline underline-offset-4 decoration-black/30 dark:decoration-white/30 hover:decoration-black/60 dark:hover:decoration-white/60 mt-2 text-xs"
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
                      className="px-2.5 py-1 bg-transparent border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quiet-focus flex-1 min-w-[120px] border border-black/10 dark:border-white/10 text-gray-950 dark:text-gray-50 text-center py-2 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 text-sm font-medium"
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
                      className="quiet-focus flex-1 min-w-[120px] border border-black/10 dark:border-white/10 text-gray-950 dark:text-gray-50 text-center py-2 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 text-sm font-medium"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </span>
                    </a>
                  )}
                  {project.slides && (
                    <a
                      href={project.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quiet-focus flex-1 min-w-[120px] border border-black/10 dark:border-white/10 text-gray-950 dark:text-gray-50 text-center py-2 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 text-sm font-medium"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Slides
                      </span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quiet-focus flex-1 min-w-[120px] border border-black/10 dark:border-white/10 text-gray-950 dark:text-gray-50 text-center py-2 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 text-sm font-medium"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <a
            href="https://github.com/jadengong"
            target="_blank"
            rel="noopener noreferrer"
            className="quiet-focus inline-flex items-center gap-2 text-gray-950 dark:text-gray-50 underline underline-offset-4 decoration-black/30 dark:decoration-white/30 hover:decoration-black/60 dark:hover:decoration-white/60 transition"
          >
            View more on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
