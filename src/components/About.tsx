import Image from 'next/image';

export default function About() {
  const experiences = [
    {
      title: "Research Assistant",
      company: "RTEC Lab @ SDSU",
      period: "Feb 2025 - Present",
      description: "Conducting research as part of the Real-Time Embedded and Controls Lab (RTEC) at SDSU. Worked on the F1TENTH autonomous racing platform to develop and test algorithms for intelligent following, static obstacle overtaking, and real-time path planning using ROS 2 and NVIDIA Isaac ROS Visual SLAM. Integrated sensor data (LiDAR, cameras) for perception and localization, and contributed to control system tuning."
    },
    {
      title: "Algorithms Instructional Student Assistant",
      company: "San Diego State University",
      period: "Aug 2025 - Present", 
      description: "Assisting students in the Algorithms (CS460) course by grading exams/assignments, creating autograders, and answering questions."
    },
    {
      title: "Vice President",
      company: "App Development Club @ SDSU",
      period: "Aug 2024 - Present",
      description: "Organized and led hands-on workshops and coding events covering React, Spring Boot, and Next.js, providing 20+ members with practical full-stack development experience. Supported the development and deployment of a web application for the La Jolla Open Aire Market non-profit."
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I’m a passionate computer science student with hands-on experience building projects and 
              learning modern development practices. I focus on writing clean, maintainable code and 
              enjoy creating products that deliver real value to users.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you can find me at the gym, playing video games, or watching anime.
                I have three little parakeets that I love very much, and I'm always eager to learn, grow, and take on new challenges to
                not only help me become a better developer, but also to help me become a better person.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I like to mix technical skills with creativity to make projects that are first useful and relevant, and second fun!
              </p>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <Image
                    src="/profile.jpg"
                    alt="Jaden Ong"
                    width={192}
                    height={192}
                    className="w-full h-full rounded-full object-cover"
                    quality={95}
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {edu.school}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.period}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
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
