import React from "react";
import project1Image from "../assets/hangman.png";
import project2Image from "../assets/Ironclass.png";
import project3Image from "../assets/Flatexpert.png";
import project4Image from "../assets/Ernst360.png";
import project5Image from "../assets/ernstuaclub.png";
import project6Image from "../assets/Personalservice.png";
import project7Image from "../assets/OH.png";
import project8Image from "../assets/todo.png";

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
    tools: ["HTML", "CSS", "JavaScript", "MongoDB"],
    website: "https://ironclass.onrender.com/",
    image: project2Image,
  },
  {
    id: 8,
    title: "Todo Tracker ",
    description:
      "Todo Tracker is an online to-do application. You can write your tasks here and track them online. Additionally, you can edit, delete, and create unlimited new tasks.",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    website: "https://todo-trackerr.netlify.app/",
    image: project8Image,
  },
  {
    id: 3,
    title: "Flat Expert",
    description:
      "Flat Expert is a german based website , it helps to found your desired home ",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    website: "https://flat-expert.com/",
    image: project3Image,
  },
  {
    id: 4,
    title: "Ernst 360 Grad ",
    description:
      "Ernst 360 Grad is a company based in Germany, it provides landscaping services",
    tools: ["Wordpress", "Canva"],
    website: "https://ernst-360grad.de/",
    image: project4Image,
  },
  {
    id: 5,
    title: "Ernst UA Club ",
    description:
      "Ernst UA club is a German based association, they are passionate about promoting education, culture, and social engagement.",
    tools: ["Wordpress", "Canva"],
    website: "https://ernst-uaclub24.com/",
    image: project5Image,
  },
  {
    id: 6,
    title: "Ernst Personalservice ",
    description: "Ernst Personalservice is a German based association",
    tools: ["Wordpress", "Canva"],
    website: "https://ernst-personalservice.de/",
    image: project6Image,
  },
  {
    id: 7,
    title: "Open Horizons ",
    description:
      "Open Horizons is a German based association. The Open Horizons team actively supports working beneficiaries in the course of their integration efforts.",
    tools: ["Wordpress", "Canva"],
    website: "https://open-horizons-bln.de/",
    image: project7Image,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-white">
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
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-md w-full h-32 object-cover"
              />

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                <strong className="mr-2">Tools:</strong>
                {project.tools.map((tech, index) => (
                  <span
                    key={index}
                    className="text-gray-500 mb-2 mr-2 rounded-full bg-gray-200 px-2 py-1"
                  >
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
