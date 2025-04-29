import React from "react";
import { FaArrowUp, FaFacebook, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Chandan Tiwari</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Frontend Developer creating beautiful digital
              experiences that bridge the gap between user needs and business
              goals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap !rounded-button"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates on my latest work and design insights.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md text-gray-900 text-sm border-none bg-white focus:outline-indigo-600 focus:outline-2"
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 px-4 rounded-r-md hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
                >
                  <FaPaperPlane/>
                </button>
              </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Chandan Tiwari. All Rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
              <button onClick={() => scrollToSection('home')} className="bg-indigo-600 h-10 w-10 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap scroll-to-top">
                <FaArrowUp/>
              </button>
            </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
