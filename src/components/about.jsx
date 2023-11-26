import React from "react";

const about = () => {
  return (
    <div id="about" className="bg-white">
      <link href="https://unpkg.com/pattern.css" rel="stylesheet" />

      <section className="py-10 ">
        <div className="max-w-6xl mx-auto px-5 py-24">
          <div className="text-center mb-20">
            <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
              ABOUT ME
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Here you will find more information about me, what I do, my
              abilities and my skills mostly in terms of programming and
              designing
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          {/* CARDS */}
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-blue-500 p-4 transform translate-x-6 -translate-y-6 transition-transform duration-300 hover:translate-x-0 hover:-translate-y-0">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3">
                      Front-End Developer
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Passionate Front-End Developer crafting engaging and
                      responsive user interfaces with React.js. Proficient in
                      translating design concepts into seamless, user-friendly
                      experiences. Committed to staying abreast of industry
                      trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-blue-500 p-4 transform translate-x-6 -translate-y-6 transition-transform duration-300 hover:translate-x-0 hover:-translate-y-0">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3">
                      Back-End Developer
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Dedicated Back-End Developer building robust and scalable
                      web applications with Node.js and Express.js. Expert in
                      MongoDB for optimal performance. Experienced in managing
                      the complete development lifecycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-blue-500 p-4 transform translate-x-6 -translate-y-6 transition-transform duration-300 hover:translate-x-0 hover:-translate-y-0">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3">
                      Graphic Designer
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Beyond the lines of code, I am an adept Graphic Designer,
                      weaving visual narratives that captivate and resonate. My
                      design journey involves creating compelling logos,
                      eye-catching branding materials, and engaging user
                      interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Repeat similar structure for other cards --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
