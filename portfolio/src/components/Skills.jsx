export default function Skills() {
    const skills = [
      { name: "HTML", level: "90%" },
      { name: "CSS", level: "85%" },
      { name: "JavaScript", level: "80%" },
      { name: "React", level: "75%" },
      { name: "Node.js", level: "70%" },
      { name: "UI/UX Design", level: "65%" }
    ]
  
    return (
      <section className="py-20 bg-white" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }