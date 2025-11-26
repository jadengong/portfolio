export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "JavaScript", icon: "💛" }
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "REST APIs", icon: "🔌" }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "Docker", icon: "🐳" },
        { name: "GitHub Actions", icon: "☁️" },
        { name: "Pytest", icon: "🔥" },
        { name: "Jest", icon: "🎨" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies and tools. Here&apos;s a comprehensive 
            overview of my technical skills and experience.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Other Skills & Interests
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Communication", "Performance Optimization",  "Testing", "Problem Solving",  "Team Collaboration",
              "Code Review", "Documentation", "Continuous Adaptability & Learning"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(16.666%-0.833rem)]"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Currently Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always expanding my skill set. Currently focused on:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "PostgreSQL", icon: "🐘" },
                { name: "RESTful APIs", icon: "🔌" },
                { name: "Node.js", icon: "🟢" },
                { name: "Express.js", icon: "🚂" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
