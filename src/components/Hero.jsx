import React from "react";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20sleek%20computer%20setup%2C%20design%20tools%2C%20gradient%20background%20transitioning%20from%20light%20to%20dark%2C%20clean%20aesthetic%20with%20subtle%20design%20elements%2C%20perfect%20for%20a%20UI%20UX%20designer%20portfolio%20hero%20background%20with%20space%20for%20text%20on%20the%20left&width=1440&height=800&seq=7&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent "></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="block">Hi, I'm Chandan Tiwari</span>
                        <span className="text-indigo-600 dark:text-indigo-400">FrontEnd Developer</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                  Crafting beautiful digital experiences that blend aesthetics with functionality
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects"
                    className="px-8 py-3 bg-indigo-600 hover:border-[1px] hover:border-indigo-600 hover:bg-transparent text-white hover:text-indigo-600 font-medium rounded-lg transition-color duration-300 flex items-center justify-center cursor-pointer whitespace-nowrap scroll-smooth"
                  >View My Work <span className="ml-2 mt-1"><FaArrowRight size={20} /></span>
                  </a>

                  <a 
                    href="#contact" 
                    className="px-8 py-3 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-600 dark:text-indigo-400 dark:hover:text-white font-medium rounded-lg transition-color duration-300 flex items-center justify-center cursor-pointer whitespace-nowrap"
                  >Contact </a>
                  

                </div>
            </div>
      </div>
      <div className="absolute z-100 bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-indigo-600 cursor-pointer whitespace-nowrap">
            <span className="cursor-pointer"><FaChevronDown size={24}/></span>
          </a>
        </div>
    </section>
  );
}

export default Hero;
