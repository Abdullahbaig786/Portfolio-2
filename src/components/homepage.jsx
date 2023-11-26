import React from "react";
import profileImage from "../assets/Student-20.jpg";

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
                    Skills
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

      <section>
        <section className="text-blueGray-700 bg-white mt-20">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {" "}
                Your tagline{" "}
              </h2>
              <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
                {" "}
                Hey, I am <br></br>Abdullah Baig{" "}
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
                {" "}
                Deploy your mvp in minutes, not days. WT offers you a a wide
                selection swapable sections for your landing page.{" "}
              </p>
              <div className="flex flex-col justify-center lg:flex-row">
                <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                  {" "}
                  Show me{" "}
                </button>
                <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
                  {" "}
                  It will take you to the candy shop.{" "}
                  <br className="hidden lg:block" />
                  <a
                    href="#"
                    className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black"
                    title="read more"
                  >
                    {" "}
                    Read more about it »{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded-lg "
                alt="hero"
                src="../assets/Student-20.jpg"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default App;
