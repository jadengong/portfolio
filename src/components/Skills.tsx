export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "JavaScript", level: 90, icon: "💛" }
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "🚂" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "PostgreSQL", level: 70, icon: "🐘" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "REST APIs", level: 85, icon: "🔌" }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Figma", level: 75, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "💻" }
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
            I've worked with a variety of technologies and tools. Here's a comprehensive 
            overview of my technical skills and proficiency levels.
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
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Responsive Design", "UI/UX Design", "Performance Optimization", 
              "SEO", "Testing", "Agile/Scrum", "Problem Solving", "Team Collaboration",
              "Code Review", "Documentation", "Continuous Integration", "Microservices"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
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
                { name: "Rust", icon: "🦀" },
                { name: "GraphQL", icon: "🔷" },
                { name: "Machine Learning", icon: "🤖" },
                { name: "Blockchain", icon: "⛓️" }
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
