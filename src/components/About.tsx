import Image from 'next/image';

export default function About() {
  const experiences = [
    {
      title: "Agentic AI Engineering Fellow",
      company: "NXP Semiconductors (NXP × SDSU CTRL)",
      period: "Feb 2026 - Present",
      description:
        "Collaborating with NXP engineers in a 10-week program focused on edge AI, cloud AI, and design automation. Building an agentic AWS workflow that converts RTL into block diagrams and verifies the generated diagrams match the original chip design."
    },
    {
      title: "Software Engineer Intern",
      company: "VLI-EV",
      period: "Dec 2025 - Present",
      description:
        "Owned an end-to-end AWS ingestion pipeline (IoT, Firehose, S3, Athena) handling ~1.8M+ records/day. Reduced cloud costs by 78% through service configuration and data-architecture optimizations, and coordinated with hardware, leadership, and partners to standardize BMS telemetry."
    },
    {
      title: "Autonomous Research Assistant",
      company: "Real-Time Embedded & Controls Systems (RTEC) Lab",
      period: "Jan 2025 - Present",
      description:
        "Built C++ localization systems for autonomous vehicles, improving lap times by 15% over 100+ runs. Replaced LiDAR-based AMCL with Isaac ROS vSLAM to reduce sensor cost while maintaining localization, and integrated object detection to classify dynamic obstacles on the F1TENTH platform."
    },
    {
      title: "Instructional Student Assistant",
      company: "San Diego State University",
      period: "Aug 2025 - Present",
      description:
        "Graded 250+ Python and C/C++ submissions for algorithms and operating systems courses with actionable feedback. Built CLI testing scripts and automated grading workflows (30% less manual grading) and supported 150+ students via office hours on C/C++ debugging, OS concepts, and algorithms."
    },
    {
      title: "Vice President",
      company: "App Development Club @ SDSU",
      period: "Aug 2024 - Present",
      description:
        "Led workshops on Git, React, Vue, Next.js, and Spring, helping 20+ members build full-stack fundamentals. Presented on REST APIs, Spring Boot, and CLI, and led a 15+ person team building a non-profit farmers market website (auth, database, multi-role login, and payments)."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "San Diego State University",
      period: "2023 - 2027",
      description: "Majoring in Computer Science and minoring in Mathematics."
    }
  ];

  const achievements = [
    "Built C++ localization systems for autonomous vehicles, improving lap times by 15% over 100+ runs",
    "Led technical workshops for 20+ members on Git, React, Vue, Next.js, and Spring in full-stack development",
    "Reduced manual grading by 30% by creating automated grading system test cases for 100+ assignments",
    "Led 15+ members in building a non-profit farmers market website with authentication, database, and payments",
    "Developed a full-stack AI interview coach (PrepPal) using Next.js, FastAPI, and AWS S3/DynamoDB/Bedrock"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl">
          <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
            About
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
            A quick background
          </h2>
          <div className="mt-6 section-rule" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-gray-950 dark:text-gray-50 mb-4 tracking-tight">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-prose">
                I’m a computer science student with hands-on experience building projects and learning
                modern development practices. I care about clean, maintainable code and products that
                are genuinely useful.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-prose">
                When I'm not coding, you can find me at the gym, playing video games, or watching anime.
                I have three little parakeets that I love very much, and I'm always eager to learn, grow, and take on new challenges to
                not only help me become a better developer, but also to help me become a better person.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-prose">
                I like mixing technical skills with creativity to make things that are useful first, and fun second.
              </p>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-start mb-2">
              <div className="relative">
                <div className="w-56 h-56 relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-950">
                  <Image
                    src="/profile.jpg"
                    alt="Jaden Ong"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    quality={95}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-xl font-medium text-gray-950 dark:text-gray-50 mb-6 tracking-tight">
                Key Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-950"
                  >
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      <span className="text-gray-400 dark:text-gray-500 mr-2">—</span>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          

          {/* Right Column - Experience & Education */}
          <div className="space-y-8">
            {/* Experience */}
            <div>
              <h3 className="text-xl font-medium text-gray-950 dark:text-gray-50 mb-6 tracking-tight">
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l border-black/10 dark:border-white/10">
                    <div className="absolute -left-1 top-1.5 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="text-base font-medium text-gray-950 dark:text-gray-50 tracking-tight">
                        {exp.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-medium text-gray-950 dark:text-gray-50 mb-6 tracking-tight">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l border-black/10 dark:border-white/10">
                    <div className="absolute -left-1 top-1.5 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="text-base font-medium text-gray-950 dark:text-gray-50 tracking-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.school}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.period}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
