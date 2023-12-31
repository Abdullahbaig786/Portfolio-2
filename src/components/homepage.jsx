import React, { useRef, useEffect } from "react";
import profileImage from "../assets/png 2.png";
import Navbar from "./navbar";
import Contact from "./contact";

const App = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [contactRef]);

  return (
    <div className="min-h-full">
      <section id="home">
        <section className="text-blueGray-700 bg-white mt-20">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
              <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
                {" "}
                Hey, I am <br></br>Abdullah Baig{" "}
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
                As a Full Stack Developer, I excel in building both the frontend
                and backend of websites and web applications, contributing to
                the success of the overall product.
              </p>
              <div className="flex flex-col justify-center lg:flex-row">
                {/* Use the ref to scroll to the contact section */}
                <button
                  onClick={() => {
                    if (contactRef.current) {
                      contactRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                >
                  {" "}
                  More Details{" "}
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded-lg "
                alt="hero"
                src={profileImage}
              />
            </div>
          </div>
        </section>
      </section>

      {/* Contact Component */}
      <section id="contact" ref={contactRef}>
        {/* Add your contact component content here */}
      </section>
    </div>
  );
};

export default App;
