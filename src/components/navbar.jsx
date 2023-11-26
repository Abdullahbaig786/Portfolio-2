import React from "react";
import logo from "../assets/A-logo.png";

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
                  Home
                </a>

                <a
                  href="#about"
                  onClick={() => scrollToSection("about")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={() => scrollToSection("skills")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={() => scrollToSection("projects")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => scrollToSection("contact")}
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.640 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <div className="relative ml-3"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
