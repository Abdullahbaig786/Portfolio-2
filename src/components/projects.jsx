import React from "react";
import project1Image from "../assets/hangman.png"; // Adjust the path based on your project structure
import project2Image from "../assets/Ironclass.png"; // Adjust the path based on your project structure

const projectsData = [
  {
    id: 1,
    title: "Hangman",
    description: "It is a small logical browser game",
    tools: ["HTML", "CSS", "JavaScript", "GitHub"],
    website: "https://abdullahbaig786.github.io/HangManProject/",
    image: project1Image,
  },
  {
    id: 2,
    title: "Ironclass",
    description:
      "It's an E-learning platform that empowers you to curate your personalized study playlists.",
    tools: ["HTML", "CSS", "JavaScript"],
    website: "https://ironclass.onrender.com/",
    image: project2Image,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            PROJECTS
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here you can find some of the personal and client projects that I
            have created
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg p-6 shadow-md cursor-pointer"
            >
              {/* Display project image with a specific size and object-fit */}
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-md"
                style={{ width: "300px", height: "200px", objectFit: "cover" }} // Set your desired size
              />

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-2 mb-4">
                <strong>Tools:</strong>
                {project.tools.map((tech, index) => (
                  <span key={index} className="text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
