import React, { useState , useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("bg-white", "shadow-md");
          navbar.classList.remove("bg-transparent");
        } else {
          navbar.classList.add("bg-transparent");
          navbar.classList.remove("bg-white", "shadow-md");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //smooth scroll
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({behavior:'smooth'});
    setIsMenuOpen(false);
  }
//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     section?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };
  return (
    <nav
      id="navbar"
      className="fixed w-full top-0 z-50 bg-white transition-all duration-500 ease-in-out "
    >
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0 flex items-center text-2xl font-bold tracking-tight ml-6 cursor-pointer" onClick={() => scrollToSection("home") }>
        <span className="text-indigo-600 dark:text-indigo-400">Chandan</span>
        <span className="ml-1">Tiwari</span>
        </div>
        <div className="hidden md:flex md:mr-5">
          <div className="flex items-center space-x-8 ml-10">
            <button
              onClick={() => scrollToSection("home") }
              className="text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects") }
              className="text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about") }
              className="text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills") }
              className="text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact") }
              className="text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              Contact
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md mr-3 text-[#202020] transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none cursor-pointer whitespace-nowrap"
          >
            {/* <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> */}
            {isMenuOpen?<AiOutlineClose color="red" size={22}/>:<MdMenu size={24}/>}
          </button>
        </div>
      </div>

      {/* Mobile section */}
      {/* here this && condition is used if the isMenuOpen condition is true it renders the expression on the right side i.e the div section */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-700 ease-linear">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col uppercase  transition-all duration-700 ease-linear">
            <button
              onClick={() => scrollToSection("home")}
              className="text-lg font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-lg font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-lg font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap "
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
