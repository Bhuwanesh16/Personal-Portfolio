export default function Projects() {
    const projects = [
      {
        id: 1,
        title: "Project 1",
        description: "A brief description of project 1",
        image: "https://via.placeholder.com/400x200",
        link: "#"
      },
      {
        id: 2,
        title: "Project 2",
        description: "A brief description of project 2",
        image: "https://via.placeholder.com/400x200",
        link: "#"
      },
      {
        id: 3,
        title: "Project 3",
        description: "A brief description of project 3",
        image: "https://via.placeholder.com/400x200",
        link: "#"
      }
    ]
  
    return (
      <section className="py-20 bg-gray-100" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    className="text-blue-500 font-semibold hover:text-blue-700 transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }