import React from "react";
import logo from "../assets/A-logo.png";
import profile from "../assets/face.jpg";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-100 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src={logo} alt="Your Company" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  onClick={() => scrollToSection("home")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  HOME
                </a>

                <a
                  href="#about"
                  onClick={() => scrollToSection("about")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  ABOUT
                </a>
                <a
                  href="#skills"
                  onClick={() => scrollToSection("skills")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  SKILLS
                </a>
                <a
                  href="#projects"
                  onClick={() => scrollToSection("projects")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  PROJECT
                </a>
                <a
                  href=""
                  onClick={() => scrollToSection("")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* image+name */}
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  {/* Replace the following URL with your profile picture */}
                  <img
                    src={profile}
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="ml-2 font-medium">ABDULLAH BAIG</span>
              </div>

              <div className="relative ml-3"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
