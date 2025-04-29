import React from "react";
import Chandan from "../assets/chandan.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
function About() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg w-[90%] sm:h-[75%] md:h-full mx-auto h-full xl:h-[85%]">
            <img
              src={Chandan}
              alt="Chandan Tiwari"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold flex justify-center">About Me</h2>
            <p className="text-lg text-gray-600">
              I’m an aspiring Frontend Developer with a strong interest in
              creating clean, responsive, and user-friendly interfaces. With a
              medium level of knowledge in frontend technologies and a growing
              passion for UI/UX design, I’ve completed 4 to 5 hands-on projects
              that showcase my skills in building visually appealing and
              functional web experiences.
            </p>
            <p className="text-lg text-gray-600">
              Though I have no professional experience yet, I’m continuously
              learning and refining my craft to stay current with modern web
              development trends and best practices. I'm excited to contribute
              to creative and impactful digital solutions.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex space-x-4 items-center">
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <FaLinkedin size={24}/>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <FaFacebook size={24}/>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <FaGithub size={24}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
