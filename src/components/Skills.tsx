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
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl">
          <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
            Skills
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
            Tools I reach for
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose">
            A snapshot of the technologies I’ve used across projects, coursework, and team work.
          </p>
          <div className="mt-6 section-rule" />
        </header>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-lg font-medium text-gray-950 dark:text-gray-50 mb-6 tracking-tight">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-950 p-5"
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3" aria-hidden="true">{skill.icon}</span>
                      <h4 className="text-sm font-medium text-gray-950 dark:text-gray-50">
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
          <h3 className="text-lg font-medium text-gray-950 dark:text-gray-50 mb-6 tracking-tight">
            Other Skills & Interests
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              "Communication", "Performance Optimization",  "Testing", "Problem Solving",  "Team Collaboration",
              "Code Review", "Documentation", "Continuous Adaptability & Learning"
            ].map((skill, index) => (
              <div
                key={index}
                className="px-3 py-2 rounded-full border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-950 p-8">
          <div>
            <h3 className="text-lg font-medium text-gray-950 dark:text-gray-50 mb-2 tracking-tight">
              Currently Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always expanding my skill set. Currently focused on:
            </p>
            
            <div className="flex flex-wrap gap-3">
              {[
                { name: "PostgreSQL", icon: "🐘" },
                { name: "RESTful APIs", icon: "🔌" },
                { name: "Node.js", icon: "🟢" },
                { name: "Express.js", icon: "🚂" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 border border-black/10 dark:border-white/10 px-3 py-2 rounded-full"
                >
                  <span className="text-base" aria-hidden="true">{tech.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
