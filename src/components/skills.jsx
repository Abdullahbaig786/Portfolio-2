import React from "react";

const Skills = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "C#",
    "React",
    "Redux",
    "RESTful API's",
    "Node.js",
    "Express.js",
    "Postman",
    "Bootstrap",
    "Wordpress",
    "MongoDB",
    "Git",
    "Github",
    "Responsive Design",
    "UI/UX Design",
    "Canva",
    "Figma",
    "Adobe CC",
    "Illustrator",
    "Photoshop",
  ];

  return (
    <section id="skills" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <div className="text-center mb-20">
          <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            SKILLS
          </h1>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-4 m-2 shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
