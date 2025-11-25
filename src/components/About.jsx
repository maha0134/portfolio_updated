const About = () => {
  const skills = [
    {
      category: "Mobile Development",
      items: [
        { name: "Flutter", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Dart", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Firebase", level: 85 },
        { name: "Firestore", level: 85 },
        { name: "Hive (Local DB)", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      category: "State Management",
      items: [
        { name: "Provider", level: 85 },
        { name: "Redux", level: 80 },
        { name: "Riverpod", level: 75 },
        { name: "BLoC", level: 70 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 75 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate mobile developer with expertise in creating beautiful, performant applications
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hi! I'm a mobile application developer with a passion for creating seamless user experiences. 
              I specialize in building cross-platform mobile applications using modern frameworks like 
              <span className="font-semibold text-blue-600"> Flutter</span> and 
              <span className="font-semibold text-cyan-600"> React Native</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in mobile development started with a curiosity about how apps work, and it has 
              evolved into a career focused on crafting intuitive, performant, and visually appealing 
              applications. I believe in writing clean, maintainable code and following best practices 
              to ensure scalability and reliability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community. I'm always excited to take on 
              new challenges and collaborate on innovative projects.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Skills & Technologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                  {skillGroup.category}
                </h4>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts or Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Focus</h4>
              <p className="text-gray-600 text-sm">User-centric design and performance optimization</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Approach</h4>
              <p className="text-gray-600 text-sm">Agile development with continuous learning</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-xl">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-bold text-gray-900 mb-2">Philosophy</h4>
              <p className="text-gray-600 text-sm">Clean code, best practices, and innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
