import React from "react";

const Skills = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "Responsive Design",
    "UI/UX Design",
  ];

  return (
    <section id="skills" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>
        <div className="flex flex-wrap">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg p-4 m-2 shadow-md">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
