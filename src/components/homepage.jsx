// Import necessary modules and components
import React from "react";
import profileImage from "../assets/Student-20.jpg";
// Functional component for the entire app
const App = () => {
  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
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
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div className="relative ml-3"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* Profile Picture */}
            <img
              className="rounded-full w-24 h-24 mb-4"
              src={profileImage}
              alt="Profile"
            />

            {/* Text */}
            <div className="text-center">
              <p className="ultra">My name is</p>
              <p className="text-4xl font-bold">Mirza Abdullah Baig</p>
            </div>
          </div>
          {/* skill card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="h-16 w-16 mx-auto mb-4"
                src="logo-url-1.png"
                alt="Skill 1 Logo"
              />
              <h3 className="text-xl font-bold mb-2">Skill 1</h3>
              <p className="text-gray-700">
                Description of Skill 1. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="h-16 w-16 mx-auto mb-4"
                src="logo-url-2.png"
                alt="Skill 2 Logo"
              />
              <h3 className="text-xl font-bold mb-2">Skill 2</h3>
              <p className="text-gray-700">
                Description of Skill 2. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="h-16 w-16 mx-auto mb-4"
                src="logo-url-3.png"
                alt="Skill 3 Logo"
              />
              <h3 className="text-xl font-bold mb-2">Skill 3</h3>
              <p className="text-gray-700">
                Description of Skill 3. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main></main>
    </div>
  );
};

export default App;
